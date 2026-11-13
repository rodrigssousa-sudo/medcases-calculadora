'use strict';

// Server-side identity discovery only.
// No billing, approval, dose or prescription authority.

function fold(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/^[¿¡\s]+|[?.!\s]+$/g, '')
    .replace(/\s+/g, ' ');
}

function identity(value) {
  return fold(value)
    // Preserve numeric concentrations.
    .replace(/\s*\([^()\d]*\)/g, '')
    .replace(/^(?:solucao|solucion) de /, '')
    .replace(/\bgrasos\b/g, 'graxos')
    .replace(/\s+prescritos?$/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function resolveIdentity({
  query,
  rows,
  tier,
  freeIds
}) {
  if (!['free', 'premium'].includes(tier)) {
    return {status: 'unauthorized'};
  }

  if (typeof query !== 'string' ||
      !query.trim() ||
      query.length > 180 ||
      !Array.isArray(rows)) {
    return {status: 'invalid_request'};
  }

  let topic = fold(query);

  const dose = /^(?:qual(?: e)? (?:a |o )?(?:dose|posologia)|cual(?: es)? (?:la |el )?(?:dosis|posologia)) (?:de la|de|do|da|del) (.+)$/.exec(topic);

  if (dose) topic = dose[1];

  const target = identity(topic);
  if (!target) return {status: 'no_match'};

  const matches = new Set();

  for (const row of rows) {
    if (typeof row?.id !== 'string') continue;

    // Keywords intentionally excluded: may represent classes.
    const labels = [
      row.id,
      row.name?.pt,
      row.name?.es
    ];

    if (labels.some(label =>
      typeof label === 'string' &&
      identity(label) === target
    )) {
      matches.add(row.id);
    }
  }

  // Ambiguity check comes BEFORE Free access filtering.
  // Thus the Free plan cannot miss Premium identities.
  if (matches.size > 1) {
    return {status: 'ambiguous'};
  }

  if (matches.size === 0) {
    return {status: 'no_match'};
  }

  const id = [...matches][0];

  if (tier === 'free' && !freeIds?.has(id)) {
    return {status: 'not_authorized'};
  }

  return {status: 'matched', id};
}

module.exports = {resolveIdentity};
