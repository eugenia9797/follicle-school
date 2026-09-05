import {
  getAreataCategories,
  getFemaleCategories,
  getMaleCategories,
  getTelogenCategories,
} from '../data/TreatmentData.js';

// Dot colours cycle per category, matching the original design.
const PALETTE = [
  '#8a5a3f', '#4f7a6b', '#b0793f', '#5a6b8a',
  '#9c5a7a', '#6b8a4f', '#8a4f6b', '#4f6b8a',
];

const EVIDENCE_COLORS = {
  A: { bg: '#f6ecd9', fg: '#8a6a2e' },
  Bplus: { bg: '#eef0e2', fg: '#5f7040' },
  B: { bg: '#f3e3dc', fg: '#8a5540' },
  C: { bg: '#eeece8', fg: '#6b6258' },
  D: { bg: '#eeece8', fg: '#6b6258' },
  E: { bg: '#eeece8', fg: '#6b6258' },
};

// Procedural treatments have no product to photograph.
const NO_PRODUCT_IDS = new Set(['prp', 'prp-f', 'exosome', 'exosome-f']);

export const Y_TICKS = [
  { pct: 0, label: '0' },
  { pct: 24, label: '$' },
  { pct: 48, label: '$$' },
  { pct: 72, label: '$$$' },
];

const MINOX_NOTE = '市面上有多種商品，無法一一陳列，實際外觀請與醫師或藥師確認。';
const OFF_LABEL_NOTICE = '非該藥物核准適應症（Off-label use），使用前請與醫師充分討論';

function evidenceLabel(grade) {
  return grade === 'Bplus' ? 'B+' : grade;
}

function buildTreatment(t) {
  const hideProduct = Boolean(t.hideProduct) || NO_PRODUCT_IDS.has(t.id);
  const notAvailableTW = Boolean(t.notAvailableTW);
  const colors = EVIDENCE_COLORS[t.evidence] ?? EVIDENCE_COLORS.C;
  const brands = t.brands && t.brands.length ? t.brands : null;

  return {
    ...t,
    evidenceLabel: evidenceLabel(t.evidence),
    evidenceBg: colors.bg,
    evidenceFg: colors.fg,
    hideProduct,
    notAvailableTW,
    thumbLabel: t.thumbTypeLabel || (t.minoxTopical ? '外用劑型' : t.product.type),
    // Null when there is no product column to open a lightbox from.
    lightbox:
      hideProduct || notAvailableTW
        ? null
        : {
            id: t.id,
            name: t.name,
            brands,
            note: t.minoxTopical ? MINOX_NOTE : null,
            typeLabel: t.minoxTopical ? '外用生髮水／生髮泡沫' : null,
            offLabelNotice: t.singleOffLabel ? OFF_LABEL_NOTICE : null,
          },
  };
}

/**
 * Lay the treatments of one category onto the cost x effect quadrant.
 *
 * Dots sit at their true (effect, cost) position; a label normally sits beside
 * its dot on the same line, and only nudges down when an earlier label is close
 * enough in both axes that the two would collide.
 */
function buildPoints(treatments) {
  const raw = treatments.map((t) => {
    const costLevel = t.costScore != null ? t.costScore : Math.min(t.priceTier.length - 1, 4);
    return {
      t,
      x: Math.max(8, Math.min(92, ((t.stars - 1) / 5) * 100)),
      y: Math.max(6, Math.min(94, (costLevel + 1) * 24)),
    };
  });

  const placed = [];
  return raw.map((point, i) => {
    const collisions = placed.filter(
      (p) => Math.abs(p.x - point.x) < 20 && Math.abs(p.y - point.y) < 6,
    ).length;
    placed.push({ x: point.x, y: point.y });
    return {
      id: point.t.id,
      name: point.t.name,
      x: point.x,
      y: point.y,
      labelDy: collisions * 22,
      color: PALETTE[i % PALETTE.length],
    };
  });
}

const CATEGORY_SOURCES = {
  male: getMaleCategories,
  female: getFemaleCategories,
  telogen: getTelogenCategories,
  areata: getAreataCategories,
};

/**
 * Build every treatment category for one condition page, ready to render.
 * `kind` is one of the keys of CATEGORY_SOURCES and also namespaces the
 * per-category keys, so two pages can never collide in the DOM.
 */
export function buildCategories(kind) {
  const raw = CATEGORY_SOURCES[kind]();
  return raw.map((cat) => ({
    ...cat,
    key: `${kind}-${cat.id}`,
    treatments: cat.treatments.map(buildTreatment),
    points: buildPoints(cat.treatments),
  }));
}

/** Every lightbox on a page, in render order. */
export function collectLightboxes(categories) {
  return categories.flatMap((cat) => cat.treatments.map((t) => t.lightbox).filter(Boolean));
}
