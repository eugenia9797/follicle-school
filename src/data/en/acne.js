// English version of ../acne.js. Symptom ids match the Chinese so both pages
// share the same tag colors. **Bold** marks are rendered by lib/inline-bold.js.

export const ACNE_STAGES = [
  {
    title: 'Oil glands go into overdrive',
    desc: 'Hormones such as androgens make the oil glands produce more sebum, so oil builds up in the follicle. This is where a spot begins.',
  },
  {
    title: 'Dead skin cells and oil form comedones that block the pore',
    desc: 'Skin cells pile up at the opening of the follicle, mix with the excess oil and plug the pore, forming comedones (blackheads and whiteheads).',
  },
  {
    title: 'Acne bacteria multiply and inflammation builds',
    desc: 'A blocked follicle is oily and low in oxygen — ideal for acne bacteria (Cutibacterium acnes, formerly Propionibacterium acnes) to multiply. This sets off an immune reaction, giving red, swollen bumps and pus spots.',
  },
  {
    title: 'The follicle bursts, forming deep cysts',
    desc: 'As inflammation worsens, the follicle wall breaks and its contents spill into the surrounding skin. This causes deeper inflammation, with red, painful nodules and cysts that are more likely to scar.',
  },
];

export const ACNE_RISK_FACTORS = [
  {
    label: 'Genes',
    desc: 'If your parents or siblings had acne, you are usually more likely to get it too, and how severe it is can also run in families.',
  },
  {
    label: 'Chronic inflammation',
    desc: '**Excess weight, stress and late nights** lower the body’s antioxidant defenses and increase free radicals, causing low-level inflammation that makes spots more likely to become red, swollen and keep coming back.',
  },
  {
    label: 'Hormone changes',
    desc: 'From **puberty** on, androgen levels rise in both boys and girls, driving the oil glands to make more oil. That is why acne is especially common — and can be especially severe — at this age.',
  },
  {
    label: 'Gut–skin imbalance',
    desc: 'Recent research shows a close link between the gut and the skin, known as the **gut–skin axis**. An imbalance in gut bacteria may affect inflammation throughout the body and is linked to acne.',
  },
  {
    label: 'Medicines',
    desc: 'Some medicines can trigger or worsen acne, such as **testosterone, lithium, tuberculosis drugs, targeted cancer drugs**, and **long-term oral or topical steroids**. If your acne clearly gets worse after starting a medicine, don’t stop it on your own — talk to your doctor first.',
  },
  {
    label: 'Medical conditions',
    desc: 'Some conditions **raise androgen levels** and bring on more acne, such as **polycystic ovary syndrome**, Cushing’s syndrome, congenital adrenal hyperplasia and androgen-producing tumors. If acne suddenly gets worse along with **irregular periods or extra hair growth**, see a doctor.',
  },
];

export const ACNE_STRATEGY = [
  {
    name: 'Almost clear',
    first: ['Topical retinoid alone'],
    second: ['BPO alone', 'Azelaic acid alone'],
  },
  {
    name: 'Mild',
    first: ['Topical retinoid alone', 'BPO alone', 'Topical retinoid + BPO (separately or as a fixed-dose combination)'],
    second: ['Topical antibiotic + BPO', 'Topical antibiotic + BPO + topical retinoid'],
    note: 'Avoid using a topical antibiotic on its own for a long time.',
  },
  {
    name: 'Moderate',
    first: ['Topical retinoid + BPO (separately or as a fixed-dose combination)'],
    second: [
      'Oral antibiotic / combined contraceptive pill / spironolactone, plus a topical retinoid, BPO, azelaic acid or fixed-dose combination',
      'Oral isotretinoin',
    ],
  },
  {
    name: 'Severe',
    first: [
      'Oral antibiotic / combined contraceptive pill / spironolactone, plus a topical retinoid, BPO, azelaic acid or fixed-dose combination',
    ],
    second: ['Oral isotretinoin'],
  },
];

export const ACNE_STRATEGY_NOTES = [
  'These recommendations are for typical acne. Widespread nodulocystic acne and acne conglobata have different causes, look different and are more severe; they are outside this table and need separate assessment by a doctor.',
  'Within each line, the order does not reflect preference — no option is better than another. You and your doctor will choose based on your situation.',
  'If acne has already caused significant scarring, is affecting your daily life or wellbeing, keeps coming back after stopping treatment, comes with very oily skin, or you want more active treatment, isotretinoin may be considered first after a full discussion of costs and risks with your doctor.',
  'For widespread bumps or nodules, when inflammation and pain need to settle quickly, or when there is a risk of scarring, steroid injections into the spots can be added alongside topical or oral treatment.',
];

export const ACNE_SYMPTOMS = [
  { id: 'comedone', label: 'Comedones', en: 'Comedones' },
  { id: 'papule', label: 'Bumps / pus spots', en: 'Papules / Pustules' },
  { id: 'nodule', label: 'Nodules / cysts', en: 'Nodules / Cysts' },
  { id: 'pigment', label: 'Dark marks', en: 'Post-inflammatory pigmentation' },
  { id: 'hormonal', label: 'Hormone-related', en: 'Hormonal' },
];

const ORAL_ABX_MOA =
  'Reduce the number of acne bacteria, block a bacterial enzyme (lipase), and reduce the white blood cells and inflammatory substances that drive inflammation.';
const ABX_COURSE = 'Courses are generally kept under 3–4 months, and these should not be used on their own';

export const ACNE_TREATMENT_CATEGORIES = [
  {
    key: 'topical',
    title: 'Topical treatments',
    summary: 'Topical retinoids, BPO, topical antibiotics, salicylic acid, azelaic acid',
    hint: 'It is best to combine two or more topical treatments that work in different ways. This works better and lowers the risk of antibiotic resistance.',
    treatments: [
      {
        name: 'Topical retinoids',
        note: 'Adapalene, tretinoin, etc. · First line\nAklief\nEpiduo\nDifferin, etc.',
        helps: ['comedone', 'papule', 'pigment'],
        moa: 'Clear comedones, calm inflammation and fade dark marks. Once acne is under control, they can be continued to help stop it coming back.',
        cautions: [
          'Dryness, peeling, burning or redness are common at first and usually ease within 1–2 weeks',
          'During pregnancy, topical treatments other than retinoids are preferred',
        ],
        advice: ['Build up gradually, and keep up with moisturizer and sunscreen', 'A thin, even layer on the affected areas is enough; a moisturizer helps reduce irritation'],
      },
      {
        name: 'Benzoyl peroxide (BPO)',
        note: 'First line',
        helps: ['comedone', 'papule'],
        moa: 'Kills acne bacteria, gently loosens comedones, and releases oxygen radicals and benzoic acid that calm inflammation. Acne bacteria have not been found to become resistant to it.',
        cautions: ['Higher strengths are more irritating', 'A strong oxidizer that **can bleach hair and fabrics** — keep it away from them'],
        advice: ['Don’t use more than you need', 'Start with a lower strength and test it on a small area first before using it more widely'],
      },
      {
        name: 'Topical antibiotics',
        note: 'Clindamycin, fusidic acid',
        helps: ['papule'],
        moa: 'Stop acne bacteria growing and calm inflammation. Best combined with another topical treatment to reduce resistance.',
        cautions: ['Using them alone for a long time can increase the risk of resistance'],
        advice: ['Mainly for red, inflamed spots'],
      },
      {
        name: 'Salicylic acid',
        note: 'Salicylic acid 0.5–2% · Supportive',
        helps: ['comedone'],
        moa: 'A topical comedone-loosening ingredient, regulated in Taiwan as a special-purpose cosmetic.',
        cautions: [],
        advice: ['Less effective than first-line treatments; best used alongside BPO or a topical retinoid'],
      },
      {
        name: 'Azelaic acid',
        note: 'Supportive',
        helps: ['comedone', 'papule', 'pigment'],
        moa: 'Loosens comedones, fights bacteria and calms inflammation. Gentler than retinoids, and also fades dark marks left by spots.',
        cautions: ['Some people feel stinging, itching or burning'],
        advice: ['Start with a small amount', 'Can be paired with BPO or a topical retinoid to support treatment and fade dark marks'],
      },
    ],
  },
  {
    key: 'oral',
    title: 'Oral medicines',
    summary: 'Oral antibiotics, isotretinoin, combined contraceptive pill, spironolactone',
    warning:
      'Isotretinoin can cause serious birth defects. Strict contraception and regular pregnancy tests are required from one month before treatment until one month after stopping. Oral antibiotic courses are generally kept under 3–4 months and should not be used on their own.',
    treatments: [
      {
        name: 'Doxycycline\nTetracycline\nMinocycline',
        note: 'Tetracycline antibiotics\nMinocycline is second line',
        helps: ['papule'],
        moa: ORAL_ABX_MOA,
        cautions: [
          'Doxycycline: may cause stomach upset or an irritated esophagus, and makes skin more sensitive to sunlight',
          'Tetracycline: may cause stomach upset and sun sensitivity; can stain developing teeth, so it must not be used while breastfeeding or in children under 8; best avoided if you have liver or kidney problems',
          'Minocycline: may cause dizziness and blue-gray skin discoloration, and has more serious rare side effects such as hepatitis and drug-induced lupus, so it is second line',
        ],
        advice: [
          'Take doxycycline and minocycline with food to reduce stomach upset; tetracycline is absorbed less well with food (especially dairy), so take it on an empty stomach',
          'Use sun protection while taking them',
          ABX_COURSE,
        ],
      },
      {
        name: 'Erythromycin',
        note: 'Macrolide antibiotic · Second line',
        helps: ['papule'],
        moa: ORAL_ABX_MOA,
        cautions: [
          'May cause stomach upset',
          'Resistance to erythromycin is common in Taiwan, so it is second line',
          'Interacts easily with other medicines such as carbamazepine, theophylline and ciclosporin',
        ],
        advice: ['Always tell your doctor about any other medicines you take', ABX_COURSE],
      },
      {
        name: 'Isotretinoin',
        note: 'Oral retinoid',
        helps: ['comedone', 'papule', 'nodule'],
        moa: 'Shrinks oil glands and reduces oil, lowers acne bacteria, stops follicles clogging, and calms inflammation.',
        cautions: [
          '**Causes serious birth defects**: women must confirm they are not pregnant before starting, and use strict contraception with regular pregnancy tests from one month before treatment until one month after stopping',
          'Dry, cracked skin and lips; dry eyes',
          'May cause **abnormal liver tests and blood fats**',
          'A few people have a brief flare early on, which improves as treatment continues',
          '**Do not take with tetracycline antibiotics**',
        ],
        advice: [
          'You will need regular follow-up; your doctor will check liver function and blood fats as needed',
          'A course usually lasts at least 4–6 months — don’t stop early on your own, even if your skin clears sooner',
          'Take it with food; moisturizer and lip balm help with dryness',
          'Using a topical retinoid for a few months after stopping helps prevent relapse',
        ],
      },
      {
        name: 'Combined contraceptive pill',
        note: 'Estrogen + progestin · For some women',
        helps: ['comedone', 'papule', 'hormonal'],
        moa: 'Reduces androgen production and effects, lowering oil production. Works for both non-inflamed and inflamed acne.',
        cautions: [
          'Mild side effects may include nausea, vomiting, breast tenderness, headache, irregular bleeding and fluid retention',
          'May also affect the heart, blood vessels and metabolism; your doctor will check for reasons not to use it (such as pregnancy, a history of blood clots, migraine, or being over 35 and smoking)',
        ],
        advice: ['Your blood pressure will be checked before starting and at follow-up visits', 'A course of about 6–12 months is usual, and it can be combined with topical or other oral treatments'],
      },
      {
        name: 'Spironolactone',
        note: 'Anti-androgen',
        helps: ['hormonal'],
        moa: 'Reduces testosterone production, blocks androgens from binding to skin receptors, and inhibits 5-alpha reductase.',
        cautions: [
          'May cause irregular periods, passing more urine, breast tenderness, tiredness, headache, dizziness and **high blood potassium**',
          'Generally not recommended in pregnancy',
        ],
        advice: [
          'Usually used together with a topical treatment',
          'If you have risk factors for **high potassium** (such as older age, certain blood pressure medicines, kidney disease or diabetes), your doctor may check your potassium and suggest avoiding high-potassium foods',
        ],
      },
    ],
  },
  {
    key: 'injection',
    title: 'Injections into spots',
    summary: 'Steroid injections into spots',
    treatments: [
      {
        name: 'Steroid injections into spots',
        note: 'Low-strength triamcinolone · Supportive',
        helps: ['papule', 'nodule'],
        moa: 'Injected directly into inflamed bumps or nodules to quickly reduce inflammation and pain.',
        cautions: ['May cause local skin thinning; if absorbed into the body, steroids can also suppress the adrenal glands'],
        advice: ['A low strength and dose are used to lower the risk of side effects', 'Usually used alongside topical or oral treatment'],
      },
    ],
  },
  {
    key: 'laser',
    title: 'Laser treatments',
    summary: 'Blue laser (CAPRI), 1726 nm laser (Accure, AviClear)',
    hint: 'Lasers are not covered by the Taiwanese Dermatological Association consensus; the information below comes from device information and patient education articles. Long-term data on these devices is still building, so whether they suit you, and how many sessions you need, is for your doctor to judge based on your acne and circumstances.',
    treatments: [
      {
        name: 'Blue laser',
        note: 'CAPRI',
        helps: ['papule'],
        moa: 'Heat from a **1450 nm laser** shrinks oil glands and reduces oil, while **450 nm blue light** helps suppress acne bacteria, reducing inflammation.',
        cautions: [
          'You may feel heat during treatment; skin may be briefly red afterwards, and a few people get a temporary breakout',
          'One session is not enough; a series of treatments is usually needed',
        ],
        advice: [
          'Your doctor will decide the number and spacing of sessions, often alongside topical or oral treatment',
          'Before treatment, tell your doctor what medicines you use (especially oral isotretinoin), whether you are pregnant, and about any recent sunburn',
          'Afterwards, moisturize and use sunscreen; follow your doctor’s advice on pausing any irritating topical products',
        ],
      },
      {
        name: '1726 nm laser',
        note: 'Accure\nAviClear',
        helps: ['papule', 'nodule'],
        moa: 'The **1726 nm wavelength** is absorbed by sebum, heating and shrinking the oil glands to reduce oil, which improves the follicle environment and inflammation.',
        cautions: [
          'You may feel heat or stinging during treatment; afterwards there may be redness or swelling, and a few people get scabbing, blisters or a temporary breakout, which are usually short-lived',
          'Results appear gradually rather than straight after treatment',
        ],
        advice: [
          'A standard course is usually three sessions about a month apart, adjusted by your doctor',
          'Little of the energy is absorbed by melanin, so people with darker skin can often have it too, but your doctor still needs to assess you',
          'Can be an option for people who would rather not take long-term medicine (for example when planning pregnancy, or worried about side effects of tablets)',
          'Tell your doctor about your medicines and whether you are pregnant before treatment; use sunscreen and moisturizer afterwards',
        ],
      },
    ],
  },
];

export const ACNE_PRINCIPLES = [
  {
    label: 'Treat the right target',
    desc: 'Depending on the type of acne: reduce oil, reduce comedones, reduce inflammation, and prevent scarring.',
  },
  {
    label: 'Don’t wait',
    desc: 'A spot takes about three months to go from comedone to gone (or to a scar), so starting proper treatment early helps most.',
  },
  {
    label: 'More is not better',
    desc: 'Piling on products or using high strengths can cause redness, peeling or even damage. Topical treatments usually take 4–8 weeks to work, so don’t keep switching because you see no change in the first few weeks.',
  },
  {
    label: 'Topicals first; antibiotics never alone',
    desc: 'BPO and topical retinoids are the first choice. Oral antibiotic courses are generally kept under 3–4 months and are not used on their own, to avoid resistance.',
  },
  {
    label: 'Don’t stop as soon as it clears',
    desc: 'Once acne is under control, a topical retinoid can be continued as maintenance to keep comedones and breakouts from coming back.',
  },
  {
    label: 'Daily habits matter too',
    desc: 'Cleanse gently and don’t over-wash, use sunscreen, keep regular hours and get enough sleep, and don’t squeeze spots — this reduces inflammation and scarring.',
  },
  {
    label: 'Decide together with your doctor',
    desc: 'Your treatment plan should fit the extent, location and severity of your acne, as well as cost, your preferences and possible risks.',
  },
];

export const ACNE_FAQ = [
  {
    q: 'Is acne only a teenage problem?',
    a: 'No. It is most common in adolescence — about 85% of teenagers get it — but adults can have it too. Taiwanese research shows it peaks between ages 12 and 25 and is more common in women than men. It can also appear on the back and chest, not just the face.',
  },
  {
    q: 'Why won’t my doctor keep prescribing antibiotics?',
    a: 'Long-term antibiotics can make bacteria resistant and upset the balance of microbes on the skin. So the consensus recommends benzoyl peroxide (BPO) or a topical retinoid first. Oral antibiotics are added only when topical treatment isn’t enough or acne covers large areas of the body, generally for less than 3–4 months and never on their own.',
  },
  {
    q: 'My skin went red and peeled when I started a retinoid — is that normal?',
    a: 'Yes, burning, dryness, redness and peeling are common at first and usually ease within 1–2 weeks. Apply a thin, even layer only to the affected areas and use a moisturizer to reduce irritation. If it is uncomfortable, ask your doctor about using it less often rather than using more.',
  },
  {
    q: 'Is oral isotretinoin safe?',
    a: 'It works very well for severe acne but needs a doctor’s assessment and follow-up. It can cause serious birth defects, so strict contraception and regular pregnancy tests are required from one month before treatment until one month after stopping. Dry skin and lips are common, your doctor will usually check liver function and blood fats before and during treatment, and it is not recommended for children under 12.',
  },
  {
    q: 'Can I treat acne if I’m pregnant or trying to get pregnant?',
    a: 'Yes, but with extra care. During pregnancy, topical treatments other than retinoids are preferred; isotretinoin can cause serious birth defects, and spironolactone is generally not recommended either. Always tell your doctor if you are pregnant or planning a pregnancy.',
  },
  {
    q: 'How long does acne treatment take?',
    a: 'Acne treatment usually takes several months, followed by maintenance once it is under control. A spot takes about three months to come and go (or leave a scar), so treating early helps control inflammation and lowers the chance of scarring.',
  },
];
