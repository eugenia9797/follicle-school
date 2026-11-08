// English version of ../doctor.js.
//
// The clinic schedule is not repeated here: the time slots come from the
// Chinese file, so a change to the hours there shows up on both pages.
import { PUBLICATIONS as ZH_PUBLICATIONS, SCHEDULE as ZH_SCHEDULE, SCHEDULE_PERIODS as ZH_PERIODS } from '../doctor.js';

export const CREDENTIALS = [
  'Currently practicing at Dr. Lin’s Dermatologic Clinic and Zenn Clinic',
  'Attending Dermatologist, Linkou Chang Gung Memorial Hospital',
  'Attending Dermatologist, Taipei Chang Gung Memorial Hospital',
  'Attending Dermatologist, Taoyuan Chang Gung Memorial Hospital',
  'Attending Physician, Department of Aesthetic Medicine, Chang Gung Clinic',
  'Attending Physician, Aesthetic Medicine Center, Taoyuan Chang Gung Memorial Hospital',
  'Attending Dermatologist, Tucheng Chang Gung Memorial Hospital',
  'Attending Dermatologist, Yunlin Chang Gung Memorial Hospital',
  'Chief Resident, Department of Dermatology, Linkou Chang Gung Memorial Hospital',
  'Board-certified dermatologist, Taiwan',
  'MD, School of Medicine, Taipei Medical University',
];

export const SOCIETIES = [
  'Member, Taiwanese Dermatological Association',
  'Member, Asia-Pacific Society of Cosmetic Gynecology (Taiwan)',
  'Member, Taiwan Society of Medical Laser and Photonics',
];

export const HONOURS = ['Taiwan Psoriasis Research Award', 'Chang Gung Outstanding Paper Award'];

export const SPECIALTIES = [
  'Hair loss (pattern hair loss, alopecia areata, female hair loss)',
  'Acne and acne scars',
  'Rosacea care and skin texture',
  'Women’s skin concerns (melasma, intimate area care)',
  'Laser treatment for pigmentation',
  'Non-invasive radiofrequency and ultrasound lifting',
  'Full-face injectables (botulinum toxin, fillers)',
  'Excessive sweating and underarm odor',
];

// Journal citations are already in English.
export const PUBLICATIONS = ZH_PUBLICATIONS;

// ● and ◆ mark which clinic a session is at, the same symbols as the Chinese page.
export const CLINICS = {
  nhi: { label: '●', name: 'Dr. Lin’s Dermatologic Clinic' },
  aesthetic: { label: '◆', name: 'Zenn Clinic' },
};

const PERIOD_LABELS = { morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening' };
const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const SCHEDULE_PERIODS = ZH_PERIODS.map((p) => ({ ...p, label: PERIOD_LABELS[p.id] ?? p.label }));
export const SCHEDULE = ZH_SCHEDULE.map((d, i) => ({ ...d, day: DAY_LABELS[i] ?? d.day }));

export const TRANSLATIONS = [
  {
    // The book is the Traditional Chinese edition; its Chinese title is kept
    // so readers can find it in Taiwanese bookshops.
    title: 'Cosmetic Injection Techniques: A Text and Video Guide to Neurotoxins and Fillers, 2nd Edition',
    english: 'Traditional Chinese edition (醫美注射技巧指南：神經毒素與填充劑)',
    role: 'Translator',
    coverCredit: 'Ho-Chi Book Publishing',
  },
];

// Both articles are in Chinese; the titles are translated so readers know what they cover.
export const INTERVIEWS = [
  {
    title: 'So many acne medicines — how do you use them? Topical and oral treatments explained (in Chinese)',
    source: 'Taiwan Food and Drug Administration',
    href: 'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1625&tid=5666&r=90637442',
  },
  {
    title: 'Should you wash new clothes before wearing them? Experts agree: yes (in Chinese)',
    source: 'NOWnews',
    href: 'https://tw.news.yahoo.com/%E6%96%B0%E8%A1%A3%E6%9C%8D%E8%A6%81%E6%B4%97%E9%81%8E%E5%86%8D%E7%A9%BF%E5%97%8E-%E5%B0%88%E5%AE%B6%E9%BD%8A%E5%96%8A-%E5%AE%9A%E8%A6%81-220000545.html',
  },
];

export const CONFERENCES = [
  {
    scope: 'International',
    items: ['Oral presentation, The 7th World Psoriasis and Psoriatic Arthritis Conference'],
  },
  {
    scope: 'National',
    items: [
      'Oral presentation, 48th Annual Meeting of the Taiwanese Dermatological Association: Biologics for pediatric moderate-to-severe plaque psoriasis: a systematic review and network meta-analysis',
      'Oral presentation, 49th Annual Meeting of the Taiwanese Dermatological Association: Small-Molecule Inhibitors and Biologics for Palmoplantar Psoriasis and Palmoplantar Pustulosis: A Systematic Review and Network Meta-Analysis',
      'Oral presentation, 50th Annual Meeting of the Taiwanese Dermatological Association: Hand-foot skin reaction as a prognostic factor in patients receiving vascular endothelial growth factor receptor-tyrosine kinase inhibitors: a systematic review and meta-analysis',
      'Oral presentation, 2024 Spring Meeting of the Taiwanese Dermatological Association: The mimicry of granulomatous mycosis fungoides to chronic dermatitis',
      'Third place nationally, oral presentation competition of the Taiwan Evidence-Based Medicine Association',
    ],
  },
];
