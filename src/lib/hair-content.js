// The hair-loss content (stages, FAQs, severity, evidence grades) in the
// page's language. Chinese comes straight from TreatmentData.js; English
// comes from data/en/hair.js, matched up by id so a missing translation
// falls back to Chinese with a build warning rather than breaking the page.
import * as zh from '../data/TreatmentData.js';
import * as en from '../data/en/hair.js';

export function warnMissing(what) {
  console.warn(`[i18n] Missing English for ${what}; showing the Chinese instead. Add it to src/data/en/hair.js.`);
}

/** Pair a Chinese list with its English by `id`, keeping the Chinese order. */
function byId(list, english, name) {
  return list.map((item) => {
    const match = english.find((e) => e.id === item.id);
    if (!match) warnMissing(`${name} "${item.id}"`);
    return { ...item, ...match };
  });
}

/** FAQs have no ids, so they are matched by position. */
function faq(list, english, name) {
  if (english.length !== list.length) {
    warnMissing(`${name} (Chinese has ${list.length} questions, English ${english.length})`);
  }
  return list.map((item, i) => english[i] ?? item);
}

export function hairContent(lang) {
  if (lang !== 'en') return zh;
  return {
    EVIDENCE_INFO: { ...zh.EVIDENCE_INFO, ...en.EVIDENCE_INFO },
    NORWOOD_STAGES: byId(zh.NORWOOD_STAGES, en.NORWOOD_STAGES, 'Norwood stage'),
    FEMALE_STAGES: byId(zh.FEMALE_STAGES, en.FEMALE_STAGES, 'Ludwig stage'),
    TELOGEN_TYPES: byId(zh.TELOGEN_TYPES, en.TELOGEN_TYPES, 'telogen type'),
    AREATA_TYPES: byId(zh.AREATA_TYPES, en.AREATA_TYPES, 'areata type'),
    AREATA_SEVERITY: byId(zh.AREATA_SEVERITY, en.AREATA_SEVERITY, 'areata severity'),
    AREATA_SEVERITY_ESCALATION: faq(zh.AREATA_SEVERITY_ESCALATION, en.AREATA_SEVERITY_ESCALATION, 'areata escalation list'),
    MALE_FAQ: faq(zh.MALE_FAQ, en.MALE_FAQ, 'MALE_FAQ'),
    FEMALE_FAQ: faq(zh.FEMALE_FAQ, en.FEMALE_FAQ, 'FEMALE_FAQ'),
    TELOGEN_FAQ: faq(zh.TELOGEN_FAQ, en.TELOGEN_FAQ, 'TELOGEN_FAQ'),
    AREATA_FAQ: faq(zh.AREATA_FAQ, en.AREATA_FAQ, 'AREATA_FAQ'),
  };
}
