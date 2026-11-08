// English text for the hair-loss content in ../TreatmentData.js.
//
// TreatmentData.js is overwritten whole by tools/import-design-export.py, so
// the English lives here instead. Only words are kept in this file: evidence
// grades, star ratings, price tiers and quiz points stay in TreatmentData.js
// and are shared by both languages. When the Chinese gains a new treatment,
// stage, FAQ or question, add its English here too — anything missing falls
// back to Chinese and the build prints a warning naming it.

// Brand names sold only in Taiwan have no English name; they are kept as they
// appear on the packaging so patients can match them to the box.
const TW_GENERIC = '(Taiwan generic)';

export const EVIDENCE_INFO = {
  A: 'A | High-level evidence: effectiveness confirmed by a meta-analysis of randomized controlled trials (RCTs).',
  Bplus:
    'B+ | Moderately high evidence: supported by a meta-analysis of non-randomized comparative studies (cohort or case-control), but not yet by a meta-analysis of RCTs alone.',
  B: 'B | Moderate evidence: supported by at least one RCT, but no meta-analysis meeting grade A yet.',
  C: 'C | Early clinical evidence: supported by non-randomized studies, cohort or case-control studies, but no RCT yet.',
  D: 'D | Limited clinical evidence: mainly case series or uncontrolled clinical studies.',
  E: 'E | Preclinical evidence: laboratory, cell or animal studies only, with no evidence in people yet.',
  disclaimer:
    '* These grades describe the level of research evidence. They do not show how large the effect is, how safe a treatment is, whether regulators have approved it, or what is right for any individual patient.',
};

// Category text, by page and category id.
export const CATEGORY_TEXT = {
  male: {
    antiandrogen: {
      title: 'Anti-androgen treatments',
      summary: 'Block DHT from forming or acting, slowing the shrinking of hair follicles',
    },
    growth: {
      title: 'Growth-promoting treatments',
      summary: 'Minoxidil-based treatments that lengthen the growth phase and boost blood flow to follicles',
    },
    boost: {
      title: 'Extra support for growth',
      summary: 'Add-on treatments that improve the scalp environment and stimulate follicles',
    },
    surgery: {
      title: 'Surgery',
      summary: 'Moving healthy follicles from the back of the head to thinning areas',
    },
  },
  female: {
    antiandrogen: {
      title: 'Anti-androgen treatments',
      summary: 'For androgen-sensitive hair loss; some carry strict restrictions for women who could become pregnant',
      warningBanner:
        'Anti-androgen medicines tend to cause more noticeable side effects in women than in men and may affect the menstrual cycle and other body functions. All of them are used off-label for hair loss in women (that is, hair loss is not an approved indication); oral and topical finasteride in particular are not licensed for women. Use them only after careful assessment and discussion with your doctor.',
    },
    growth: {
      title: 'Growth-promoting treatments',
      summary: 'Minoxidil-based treatments, the first-line choice for female hair loss',
    },
    boost: {
      title: 'Extra support for growth',
      summary: 'Add-on treatments that improve the scalp environment and stimulate follicles',
    },
    surgery: {
      title: 'Surgery',
      summary: 'Female hair loss is usually diffuse, so whether surgery suits you needs individual assessment',
    },
  },
  telogen: {
    cause: {
      title: 'Find and treat the cause',
      summary: 'Telogen effluvium is usually reversible; finding and removing the trigger is the core of treatment',
    },
    growth: {
      title: 'Growth-promoting treatments',
      summary: 'Minoxidil-based treatments that shorten the resting phase and move hair back into growth sooner',
    },
    boost: {
      title: 'Extra support for growth',
      summary: 'Add-on treatments that improve the scalp environment and support the follicles',
    },
  },
  areata: {
    local: {
      title: 'Local treatments',
      summary: 'For small, limited patches; the first-line choice',
    },
    immuno: {
      title: 'Immunotherapy',
      summary: 'For larger areas, or when local treatment has not worked well',
    },
    systemic: {
      title: 'Whole-body (systemic) treatments',
      summary: 'For extensive hair loss (alopecia totalis or universalis) or many patches',
      warningBanner:
        'Systemic treatments have more noticeable side effects. Your doctor will weigh how severe and widespread the condition is and your overall health before using them, and will monitor you regularly.',
    },
  },
};

// Shared wording, reused across the three hair-loss pages.
const FINASTERIDE_BRANDS = [
  { name: 'Propecia', appearance: 'Light orange, hexagonal film-coated tablet' },
  { name: `法路寧 ${TW_GENERIC}`, appearance: 'Pale yellow, round film-coated tablet' },
  { name: 'Proscar', appearance: 'White, round tablet' },
  { name: `菲那斯 ${TW_GENERIC}`, appearance: 'Light orange, round tablet' },
  { name: `快得 ${TW_GENERIC}`, appearance: 'White to pale yellow, round tablet' },
];
const LONITEN = [{ name: 'Loniten', appearance: 'Small, white, round tablet' }];
const NUTRACEUTICAL = 'Nutritional supplement (洛克靈, sold in Taiwan)';
const LLLT_CAP = 'Hair-growth cap (low-level red / near-infrared light)';
const LLLT_LASER = 'Hair-growth laser (Er:YAG)';
const PRP = 'PRP (platelet-rich plasma) injections';
const EXOSOME = 'Exosome scalp treatment';
const AMT = 'AMT (autologous micro-tissue transplant)';
const FUE = 'Hair transplant surgery (FUE / FUT)';
const TOPICAL_MINOX = 'Topical minoxidil (2% / 5%)';
const PREG =
  'Do not use if you are pregnant, trying to conceive or breastfeeding. Use effective contraception while taking it, and do not handle broken or crushed tablets with bare hands.';

// Treatment text, by treatment id. Fields: name, sideEffects, notes,
// warningText, productType (the label on the "what it looks like" button),
// thumbTypeLabel and brands — the same fields the Chinese data has.
export const TREATMENT_TEXT = {
  // ---------------- male pattern hair loss ----------------
  'oral-finasteride': {
    name: 'Oral finasteride (1 mg)',
    sideEffects: [
      'Sexual side effects (lower libido, erectile dysfunction) in about 1–2% of men, usually reversible',
      'Mood changes in a small number of people',
      'Breast enlargement in men (rare)',
    ],
    notes: [
      'Must be taken continuously; the benefit gradually wears off after stopping',
      'Women who are pregnant or trying to conceive must not handle the tablets, especially broken or crushed ones',
    ],
    productType: 'Oral tablet',
    brands: FINASTERIDE_BRANDS,
  },
  'oral-dutasteride': {
    name: 'Oral dutasteride (0.5 mg)',
    sideEffects: [
      'Similar to finasteride, with slightly more sexual side effects',
      'Long half-life, so it takes longer to leave the body after stopping',
    ],
    notes: [
      'Blocks both type 1 and type 2 5-alpha reductase, so it acts more broadly',
      'Women who are pregnant or trying to conceive must not handle it',
    ],
    productType: 'Oral soft capsule',
    brands: [{ name: 'Avodart', appearance: 'Yellow to brown, oval soft capsule' }],
  },
  'topical-finasteride': {
    name: 'Topical finasteride',
    sideEffects: ['Local scalp irritation, dryness or itch (uncommon)', 'Fewer whole-body side effects than the tablet'],
    notes: [
      'An option for people who cannot tolerate side effects from the tablet',
      'Applied to the scalp every day; keep it away from the mouth',
    ],
    productType: 'Topical solution / spray',
    thumbTypeLabel: 'Topical form',
  },
  'topical-alfatradiol': {
    name: 'Topical alfatradiol (an estradiol derivative)',
    sideEffects: ['Local scalp irritation (uncommon)'],
    notes: [
      'Works by reducing 5-alpha reductase activity in the scalp',
      'Lower level of evidence; how often it is used varies by country',
    ],
    productType: 'Topical tincture',
  },
  'oral-minoxidil': {
    name: 'Oral minoxidil',
    sideEffects: [
      'Extra hair growth on the face and limbs',
      'Dizziness or low blood pressure on standing up',
      'Swelling of the lower legs',
      'Palpitations (uncommon)',
    ],
    notes: [
      'Prescribed only after your doctor checks your heart and blood pressure',
      'The dose is far lower than when it is used for high blood pressure',
    ],
    productType: 'Oral tablet',
    brands: LONITEN,
  },
  'topical-minoxidil': {
    name: TOPICAL_MINOX,
    sideEffects: [
      'More shedding at first (resting hairs falling out), usually settling within 2–8 weeks',
      'Dry, itchy or flaky scalp',
      'Contact dermatitis (uncommon)',
    ],
    notes: [
      'Needs to be used every day; the benefit gradually fades if you stop',
      'The 5% strength usually works better than 2%, but is more likely to irritate',
    ],
    productType: 'Topical solution / foam',
  },
  nutraceutical: {
    name: NUTRACEUTICAL,
    sideEffects: ['Stomach upset (uncommon)'],
    notes: [
      'An add-on, not a replacement for medical treatment',
      'Contains vitamins, trace minerals and plant extracts; the evidence is limited',
    ],
    productType: 'Oral capsule / tablet',
  },
  'lllt-cap': {
    name: LLLT_CAP,
    sideEffects: ['A warm feeling on the scalp (uncommon)', 'Limited long-term safety data'],
    notes: [
      'Uses low-level red or near-infrared light (LED / LLLT) to stimulate the follicles',
      'Worn at home; needs regular use (several times a week) to work',
    ],
    productType: 'Wearable home device',
  },
  'lllt-laser': {
    name: LLLT_LASER,
    sideEffects: ['Mild stinging or redness where treated', 'Brief scalp sensitivity afterwards'],
    notes: [
      'A gentle Er:YAG laser treatment of the scalp that boosts local blood flow and growth factors',
      'Done in the clinic by a doctor or trained staff, as a course of sessions',
    ],
    productType: 'In-clinic laser treatment',
  },
  prp: {
    name: PRP,
    sideEffects: ['Pain, swelling or bruising at the injection sites', 'Infection (rare)'],
    notes: [
      'Made by spinning down a sample of your own blood; usually a course of 3–4 sessions',
      'How long the effect lasts varies; top-up sessions are often needed',
    ],
    productType: 'In-clinic injections',
  },
  exosome: {
    name: EXOSOME,
    sideEffects: ['Mild irritation where it is injected or applied'],
    notes: [
      'A newer treatment; evidence from large, long-term studies is still building',
      'Often combined with microneedling or another way of delivering it into the skin',
    ],
    productType: 'In-clinic treatment',
  },
  amt: {
    name: AMT,
    sideEffects: ['Mild pain or swelling where the tissue is taken', 'Infection (rare)'],
    notes: [
      'Your own follicle tissue is processed and injected into thinning areas; this is not a conventional hair transplant',
      'Suited as an add-on treatment for early, diffuse thinning',
    ],
    productType: 'In-clinic procedure',
  },
  fue: {
    name: FUE,
    sideEffects: [
      'Swelling and scabbing after surgery',
      'Temporary shedding after surgery (“shock loss”)',
      'How many grafts survive depends on technique',
      'FUT also leaves a linear scar at the back of the head and temporary numbness',
    ],
    notes: [
      'FUE (follicular unit extraction): follicles are taken out one by one. Small wounds, quick recovery and no linear scar, but fewer grafts per session',
      'FUT (strip surgery): a strip of scalp is removed and divided into grafts. More grafts per session, but it leaves a linear scar that needs hair to cover it',
      'Your doctor will advise which technique suits you based on the area of hair loss and the donor area',
    ],
    productType: 'Day surgery',
  },

  // ---------------- female pattern hair loss ----------------
  spironolactone: {
    name: 'Spironolactone',
    warningText:
      'Off-label use for female hair loss (not an approved indication). It may cause irregular periods and other changes, so discuss it fully with your doctor first.',
    sideEffects: [
      'High blood potassium (regular blood tests needed)',
      'Irregular periods',
      'Dizziness or low blood pressure on standing up',
      'Breast tenderness',
    ],
    notes: ['One of the most commonly used anti-androgens for female hair loss', 'Needs careful assessment if you have kidney problems'],
    productType: 'Oral tablet',
  },
  cpa: {
    name: 'Cyproterone acetate',
    warningText:
      'Off-label use for female hair loss (not an approved indication). It has stronger effects on the female body and may change your cycle, so discuss it fully with your doctor first.',
    sideEffects: ['Changes to the menstrual cycle', 'Weight gain', 'Mood changes', 'Effects on the liver (regular monitoring needed)'],
    notes: ['Often taken in cycles together with a contraceptive pill', 'Needs careful assessment if you have had a blood clot'],
    productType: 'Oral tablet',
  },
  flutamide: {
    name: 'Flutamide',
    warningText:
      'Off-label use for female hair loss (not an approved indication) with a risk of liver damage. It needs close assessment and monitoring by your doctor.',
    sideEffects: ['Risk of liver damage (regular liver tests needed)', 'Dry skin'],
    notes: ['Because of the liver risk, doctors now use it cautiously and check liver function closely'],
    productType: 'Oral tablet',
  },
  'oral-finasteride-f': {
    name: 'Oral finasteride',
    warningText: `Off-label use in women (not an approved indication), and it must not be used in pregnancy: it can cause abnormal genital development in a male baby. Stop before trying to conceive and use effective contraception while taking it. ${PREG}`,
    sideEffects: [
      'Effects specific to women, such as changes to the menstrual cycle, are more noticeable than in men',
      'Limited evidence in women after menopause',
      'The benefit fades after stopping',
    ],
    notes: [
      'Not an approved indication. Mainly used for hair loss after menopause; women who could become pregnant need strict contraception and a careful discussion with their doctor first',
    ],
    productType: 'Oral tablet',
    brands: FINASTERIDE_BRANDS,
  },
  'topical-finasteride-f': {
    name: 'Topical finasteride',
    warningText:
      'Off-label use (not an approved indication). Although it is applied to the scalp, some is absorbed into the body and may affect your cycle. Avoid using or touching it if you are pregnant or trying to conceive, and use it only after assessment by your doctor.',
    sideEffects: ['Local scalp irritation (uncommon)', 'Some risk of whole-body effects from absorption'],
    notes: ['Less is absorbed than with the tablet, but it is still off-label; women of childbearing age should weigh it carefully'],
    productType: 'Topical solution / spray',
    thumbTypeLabel: 'Topical form',
  },
  'oral-minoxidil-f': {
    name: 'Oral minoxidil',
    sideEffects: [
      'Extra fine hair on the face, more noticeable than in men (a common concern)',
      'Dizziness or low blood pressure on standing up',
      'Swelling of the lower legs',
    ],
    notes: ['The dose is usually lower than for men; your doctor will check your heart and blood pressure first'],
    productType: 'Oral tablet',
    brands: LONITEN,
  },
  'topical-minoxidil-f': {
    name: TOPICAL_MINOX,
    sideEffects: [
      'More shedding at first, usually settling within 2–8 weeks',
      'Dry, itchy or flaky scalp',
      'At higher strengths, extra fine facial hair is more likely than in men',
    ],
    notes: ['Women are often advised to start with 2% or a gentle formula made for women'],
    productType: 'Topical solution / foam',
  },
  'nutraceutical-f': {
    name: NUTRACEUTICAL,
    sideEffects: ['Stomach upset (uncommon)'],
    notes: ['An add-on, not a replacement for medical treatment'],
    productType: 'Oral capsule / tablet',
  },
  'lllt-cap-f': {
    name: LLLT_CAP,
    sideEffects: ['A warm feeling on the scalp (uncommon)'],
    notes: [
      'Uses low-level red or near-infrared light (LED / LLLT) to stimulate the follicles; needs regular use (several times a week) to work',
      'Studies in women also support its safety',
    ],
    productType: 'Wearable home device',
  },
  'lllt-laser-f': {
    name: LLLT_LASER,
    sideEffects: ['Mild stinging or redness where treated', 'Brief scalp sensitivity afterwards'],
    notes: ['A gentle Er:YAG laser treatment of the scalp that boosts local blood flow and growth factors; done in the clinic'],
    productType: 'In-clinic laser treatment',
  },
  'prp-f': {
    name: PRP,
    sideEffects: ['Pain, swelling or bruising at the injection sites'],
    notes: ['Usually a course of 3–4 sessions; how long the effect lasts varies'],
    productType: 'In-clinic injections',
  },
  'exosome-f': {
    name: EXOSOME,
    sideEffects: ['Mild irritation where it is injected or applied'],
    notes: ['A newer treatment; evidence from large, long-term studies is still building'],
    productType: 'In-clinic treatment',
  },
  'amt-f': {
    name: AMT,
    sideEffects: ['Mild pain or swelling where the tissue is taken'],
    notes: ['Suited as an add-on for early, localized thinning; limited benefit for diffuse thinning'],
    productType: 'In-clinic procedure',
  },
  'fue-f': {
    name: FUE,
    sideEffects: ['Swelling and scabbing after surgery', 'Temporary shedding'],
    notes: [
      'Women’s hair usually thins evenly all over, so there is less contrast between donor and thinning areas. Not everyone is a good candidate; your doctor will assess this in detail',
    ],
    productType: 'Day surgery',
  },

  // ---------------- telogen effluvium ----------------
  'trigger-removal': {
    name: 'Removing the trigger and monitoring',
    sideEffects: ['No direct side effects', 'Even after the cause is dealt with, it can take months to see hair recover'],
    notes: [
      'With a clear trigger such as surgery, childbirth, a feverish illness or rapid weight loss, most people recover gradually over 3–6 months once it has passed',
      'If the trigger continues (such as long-term stress or a chronic illness), the hair loss may become chronic',
    ],
    productType: 'Lifestyle changes and follow-up',
  },
  'nutrition-workup': {
    name: 'Supplements after nutrition and hormone tests',
    sideEffects: ['Too much iron can cause stomach upset or constipation'],
    notes: [
      'Common tests: ferritin (iron stores), thyroid function, vitamin D and zinc',
      'If iron deficiency or a thyroid problem is found, hair loss usually improves once it is treated',
    ],
    productType: 'Oral supplements (based on test results)',
  },
  'topical-minoxidil-te': {
    name: TOPICAL_MINOX,
    sideEffects: [
      'More shedding at first, usually settling within 2–8 weeks',
      'Dry, itchy or flaky scalp',
      'Contact dermatitis (uncommon)',
    ],
    notes: [
      'Shortens the resting phase and moves hair into growth sooner; often used for chronic telogen effluvium',
      'Needs to be used every day; the benefit gradually fades if you stop',
    ],
    productType: 'Topical solution / foam',
  },
  'oral-minoxidil-te': {
    name: 'Oral minoxidil (low dose)',
    sideEffects: ['Extra hair growth on the face and body', 'Dizziness or low blood pressure on standing up', 'Swelling of the lower legs'],
    notes: ['An add-on for diffuse, chronic telogen effluvium, prescribed after your doctor checks your heart and blood pressure'],
    productType: 'Oral tablet',
  },
  'nutraceutical-te': {
    name: NUTRACEUTICAL,
    sideEffects: ['Stomach upset (uncommon)'],
    notes: ['An add-on; it does not replace finding the cause and the main treatment'],
    productType: 'Oral capsule / tablet',
  },
  'lllt-cap-te': {
    name: LLLT_CAP,
    sideEffects: ['A warm feeling on the scalp (uncommon)'],
    notes: ['Uses low-level red or near-infrared light to stimulate the follicles; evidence for chronic telogen effluvium is still limited'],
    productType: 'Wearable home device',
  },
  'lllt-laser-te': {
    name: LLLT_LASER,
    sideEffects: ['Mild stinging or redness where treated', 'Brief scalp sensitivity afterwards'],
    notes: [
      'A gentle Er:YAG laser treatment of the scalp that boosts local blood flow and growth factors',
      'Evidence for telogen effluvium is limited; it is an add-on and cannot replace dealing with the cause',
    ],
    productType: 'In-clinic laser treatment',
  },
  'prp-te': {
    name: PRP,
    sideEffects: ['Pain, swelling or bruising at the injection sites', 'Infection (rare)'],
    notes: [
      'Made by spinning down a sample of your own blood; usually a course of 3–4 sessions',
      'Evidence for telogen effluvium comes mostly from small studies; it is an add-on and the trigger still needs dealing with',
    ],
    productType: 'In-clinic injections',
  },

  // ---------------- alopecia areata ----------------
  ilk: {
    name: 'Steroid injections into the patch (ILK)',
    sideEffects: ['Pain at the injection site', 'Local thinning or dimpling of the skin (if the dose is too high or too frequent)', 'Small visible blood vessels (uncommon)'],
    notes: ['First-line treatment for patchy alopecia areata, repeated every 4–6 weeks', 'Less practical when the area is large or there are many patches'],
    productType: 'In-clinic injections',
  },
  'topical-steroid-aa': {
    name: 'Strong topical steroids',
    sideEffects: ['Skin thinning with long-term use', 'Folliculitis (uncommon)'],
    notes: ['More often used for children or people who cannot have injections; weaker than ILK'],
    productType: 'Topical ointment / foam',
  },
  'topical-minoxidil-aa': {
    name: 'Topical minoxidil (add-on)',
    sideEffects: ['Dry, itchy or flaky scalp (uncommon)'],
    notes: ['Limited effect on its own; mostly used alongside a main treatment such as ILK'],
    productType: 'Topical solution / foam',
  },
  dpcp: {
    name: 'Contact immunotherapy (DPCP / SADBE)',
    sideEffects: ['Contact dermatitis (part of how it works)', 'Local itching, redness and swelling', 'Swollen lymph nodes (uncommon)'],
    notes: [
      'Triggers a mild allergic reaction that redirects the local immune response; applied weekly in the clinic with the strength adjusted step by step',
      'A long course; results are judged after several months',
    ],
    productType: 'In-clinic treatment',
  },
  nbuvb: {
    name: 'Narrowband UVB phototherapy (NB-UVB)',
    sideEffects: ['Skin redness or sunburn', 'Long-term risks of skin aging and skin cancer need watching'],
    notes: ['Lower level of evidence and less commonly used; needs regular clinic sessions'],
    productType: 'In-clinic light therapy',
  },
  'jak-inhibitor': {
    name: 'Oral JAK inhibitors',
    warningText:
      'A recently approved systemic treatment for severe alopecia areata. You will be screened for infection, blood and heart risks beforehand and have regular blood tests; it is used only after careful assessment by your doctor.',
    sideEffects: [
      'More upper respiratory infections',
      'Headache, nausea',
      'Changes in cholesterol and blood counts (regular monitoring needed)',
      'Risk of infection and blood clots (screening needed first)',
    ],
    notes: [
      'For severe, extensive alopecia areata (such as alopecia totalis or universalis)',
      'Self-paid and relatively expensive; hair loss may return after stopping',
    ],
    productType: 'Oral tablet',
  },
  'systemic-steroid': {
    name: 'Systemic steroids (tablets or injections)',
    warningText:
      'Long-term or high-dose use carries clear whole-body risks. Mostly used short-term when hair loss is spreading quickly, with the dose and duration closely controlled by your doctor.',
    sideEffects: ['Weight gain, rounded “moon face”', 'Higher blood sugar and blood pressure', 'Bone loss (with long-term use)', 'Mood changes'],
    notes: ['Mostly a short-term measure when the condition is worsening quickly, not a long-term first choice'],
    productType: 'Tablets or injections',
  },
  'immunomodulator-aa': {
    name: 'Other immune-modulating medicines',
    sideEffects: ['Depends on the medicine; commonly effects on liver and kidney function, stomach upset', 'Regular blood tests needed'],
    notes: ['Such as methotrexate or ciclosporin, mostly when other treatments have not worked; needs a specialist’s assessment'],
    productType: 'Oral medicine',
  },
};

export const NORWOOD_STAGES = [
  { id: 'I', title: 'Stage I', desc: 'Normal hairline with no obvious hair loss; used as the baseline for comparison.' },
  { id: 'II', title: 'Stage II', desc: 'The hairline starts to recede slightly at both temples, forming symmetrical triangular notches.' },
  {
    id: 'III',
    title: 'Stage III',
    desc: 'The front hairline has clearly receded. This is the earliest stage at which pattern hair loss can be diagnosed; some men mainly thin at the crown instead (III vertex).',
  },
  { id: 'IV', title: 'Stage IV', desc: 'The receding front and thinning crown both grow larger, still separated by a band of hair.' },
  { id: 'V', title: 'Stage V', desc: 'The front and crown areas grow and move closer together; the band between them narrows.' },
  { id: 'VI', title: 'Stage VI', desc: 'The front and crown areas join up and the band between them disappears.' },
  { id: 'VII', title: 'Stage VII', desc: 'The most advanced stage: only a narrow horseshoe of hair remains around the back and sides.' },
];

export const FEMALE_STAGES = [
  {
    id: 'I',
    title: 'Ludwig I',
    desc: 'The center parting starts to widen slightly and overall density drops a little. Often hard to notice yourself.',
  },
  {
    id: 'II',
    title: 'Ludwig II',
    desc: 'The parting is clearly wider and more scalp shows, in a “Christmas tree” pattern: wider at the front, narrowing towards the back.',
  },
  {
    id: 'III',
    title: 'Ludwig III',
    desc: 'Thinning across the top is more marked and large areas of scalp show, but the front hairline is usually kept — unlike male pattern hair loss.',
  },
];

export const TELOGEN_TYPES = [
  {
    id: 'acute',
    title: 'Acute telogen effluvium',
    desc: 'Heavy shedding usually starts 2–4 months after a clear trigger (surgery, childbirth, a feverish illness, rapid weight loss, severe stress and so on). It is diffuse, all over the scalp, and usually lasts less than 6 months. Most people recover on their own once the trigger has passed.',
  },
  {
    id: 'chronic',
    title: 'Chronic telogen effluvium',
    desc: 'Shedding that keeps coming back or lasts more than 6 months, often in waves of better and worse. Causes can include long-term stress, chronic illness, thyroid problems, iron deficiency, or no clear reason. It is most common in middle-aged women and needs tests to look for an underlying cause.',
  },
];

export const AREATA_TYPES = [
  {
    id: 'patchy',
    title: 'Single or multiple patches',
    desc: 'One or more round or oval bald patches with clear edges appear on the scalp. This is the most common form. With multiple patches, the number and size vary, and some may merge into larger areas.',
  },
  {
    id: 'ophiasis',
    title: 'Ophiasis',
    desc: 'Hair is lost in a band along the back and sides of the hairline, snaking around the head. It tends to respond less well to treatment.',
  },
  { id: 'totalis', title: 'Alopecia totalis', desc: 'All the hair on the scalp is lost; a severe form of alopecia areata.' },
  {
    id: 'universalis',
    title: 'Alopecia universalis',
    desc: 'Hair is lost all over the body (scalp, eyebrows, eyelashes and body hair); the most severe form of alopecia areata.',
  },
];

// Severity grades by the share of scalp affected, following the Taiwanese
// Dermatological Association consensus. Percentages come from the Chinese data.
export const AREATA_SEVERITY = [
  { id: 'mild', level: 'Mild', salt: 'SALT score ≤ 20%', desc: 'Less than 20% of scalp hair lost' },
  { id: 'moderate', level: 'Moderate', salt: 'SALT score > 20% and ≤ 50%', desc: 'More than 20% but less than 50% of scalp hair lost' },
  { id: 'severe', level: 'Severe', salt: 'SALT score > 50%', desc: 'More than 50% of scalp hair lost' },
];

export const AREATA_SEVERITY_ESCALATION = [
  'Alopecia areata is affecting your emotional wellbeing or social life',
  'Eyebrows or eyelashes are falling out',
  'There has been no adequate response after at least 6 months of treatment',
  'Hair loss is spreading quickly over a wide area, with a positive hair pull test',
];

export const MALE_FAQ = [
  {
    q: 'Will pattern hair loss get better on its own?',
    a: 'Pattern hair loss is a slowly progressing, long-term condition and usually does not resolve by itself. Treatment tends to work better the earlier it starts, so it is worth seeing a doctor sooner rather than later.',
  },
  {
    q: 'How long do I need to take medication?',
    a: 'Because pattern hair loss is long-term and ongoing, medicines need to be used regularly over the long term to keep their effect, which fades after stopping. Talk to your doctor about a long-term plan.',
  },
  {
    q: 'Can I combine different treatments?',
    a: 'Doctors often combine tablets, topical treatments and add-on procedures (such as LLLT or PRP) to improve results. Which combination suits you is best decided with your doctor.',
  },
  {
    q: 'Will my own hair keep falling out after a transplant?',
    a: 'Transplanted follicles are not affected by DHT and usually do not fall out. But your original hair can keep thinning if it is not treated, so medication is usually recommended after surgery too.',
  },
  {
    q: 'Do hair-growth products have side effects?',
    a: 'Every treatment has its own possible side effects — see the comparison above. Before starting, go over your medical history and the possible risks with your doctor.',
  },
];

export const FEMALE_FAQ = [
  {
    q: 'Is hair loss in women always pattern hair loss?',
    a: 'Not necessarily. Diffuse hair loss in women has many causes, including telogen effluvium, thyroid problems, iron-deficiency anemia and polycystic ovary syndrome (PCOS). A doctor should assess you in detail and arrange blood tests if needed to rule out other causes.',
  },
  {
    q: 'Why can’t women freely use some anti-androgen medicines?',
    a: 'Finasteride and dutasteride are 5-alpha reductase inhibitors and can harm the development of a male baby during pregnancy. Women of childbearing age must make sure they are not pregnant and use effective contraception. See the red warnings in the table above.',
  },
  {
    q: 'Can hair loss still be treated after menopause?',
    a: 'Yes. Anti-androgen medicines raise fewer concerns after menopause, but your doctor should still review your overall health before choosing a treatment.',
  },
  {
    q: 'Will topical minoxidil make hair grow on my face?',
    a: 'A small number of users notice extra fine facial hair, usually depending on the strength and individual sensitivity. It mostly goes away after stopping. Your doctor can adjust the strength or form.',
  },
  {
    q: 'Is heavy shedding after childbirth pattern hair loss?',
    a: 'Heavy shedding after childbirth is usually telogen effluvium. It typically starts 2–4 months after the birth and gradually recovers within 6–12 months — a different pattern from the slow progression of pattern hair loss. A doctor can tell the two apart in clinic.',
  },
];

export const TELOGEN_FAQ = [
  {
    q: 'Will telogen effluvium get better on its own?',
    a: 'If there is a clear trigger (such as surgery, childbirth or a feverish illness) and it has passed, most acute cases gradually recover within 6–12 months. If the trigger continues or the cause is unclear, it may become chronic, so it is worth seeing a doctor.',
  },
  {
    q: 'What tests are needed for telogen effluvium?',
    a: 'Common blood tests include ferritin (iron stores), thyroid function and vitamin D. A hair pull test and trichoscopy (a magnified scalp exam) also help assess how severe the shedding is and what may be causing it.',
  },
  {
    q: 'How is telogen effluvium different from pattern hair loss?',
    a: 'Telogen effluvium is usually diffuse — the whole scalp thins evenly — and often follows a clear trigger or recent illness. Pattern hair loss progresses slowly, affects particular areas (crown, hairline), and shows more variation in hair thickness. If it is hard to tell, a doctor can examine you and use trichoscopy.',
  },
  {
    q: 'How much hair loss a day is normal?',
    a: 'Losing about 50–100 hairs a day is a normal part of the hair cycle. If shedding clearly increases, hair comes out in handfuls when washing or brushing, or your hair looks thinner overall, see a doctor to check whether something is wrong.',
  },
  {
    q: 'Can I take iron or vitamins on my own?',
    a: 'It is best to have a blood test first to confirm a deficiency, then supplement as your doctor advises. Taking iron long-term without testing can cause stomach upset or other health problems if you take too much.',
  },
];

export const AREATA_FAQ = [
  {
    q: 'Will alopecia areata go away on its own?',
    a: 'Some mild, small patches do regrow by themselves, but it often comes back, and larger or longer-lasting cases are less likely to recover on their own. Seeing a doctor early and starting treatment tends to give better results.',
  },
  {
    q: 'Is alopecia areata contagious or inherited?',
    a: 'It is not contagious. It is an autoimmune condition linked to genetic tendency and environmental triggers (such as stress or infection). Some patients have relatives with other autoimmune conditions.',
  },
  {
    q: 'How long before treatment shows results?',
    a: 'It depends on the treatment and how much area is affected. With injections into the patch, a response is usually judged after 1–3 months. For larger areas or systemic treatment, it may take 6 months or more to judge the overall effect, with long-term follow-up for relapse.',
  },
  {
    q: 'Will alopecia areata come back?',
    a: 'It often comes back. Even after hair has regrown, some people have hair loss again, so keep seeing your doctor to monitor your scalp after treatment.',
  },
  {
    q: 'My eyebrows and eyelashes are falling out too — is that alopecia areata?',
    a: 'Losing eyebrows, eyelashes or body hair at the same time is a common feature of alopecia areata, but a doctor still needs to examine you and rule out other causes to confirm the diagnosis.',
  },
];
