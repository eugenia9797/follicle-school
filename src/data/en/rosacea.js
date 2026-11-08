// English version of ../rosacea.js. Ids, symptom tags and lightbox ids match
// the Chinese so both pages share the same images and colors.

export const ROSACEA_TRIGGERS = [
  { id: 'gene', label: 'Genes', desc: 'Family history and inborn differences in the skin barrier and how blood vessels react.' },
  {
    id: 'stimulus',
    label: 'Heat, spice, emotion',
    desc: 'Heat, sun, spicy food, alcohol, temperature changes and emotional stress can all set off flushing.',
  },
  { id: 'immune', label: 'Immune system', desc: 'An overactive innate immune response, with more antimicrobial peptides and inflammatory signals.' },
  {
    id: 'vessel',
    label: 'Overactive nerves and vessels',
    desc: 'Blood vessels and nerve endings overreact to triggers, causing repeated redness, burning and stinging.',
  },
];

export const ROSACEA_TYPES = [
  {
    id: 'ETR',
    title: 'Redness & visible vessels',
    latin: 'Erythematotelangiectatic',
    desc: 'Erythematotelangiectatic rosacea. Lasting redness across the center of the face (cheeks, nose, forehead, chin), with flushing set off by heat, emotion or food, often visible small blood vessels, and stinging, burning or tightness. The skin barrier is usually fragile, so skincare products easily irritate.',
  },
  {
    id: 'PPR',
    title: 'Bumps & pus spots',
    latin: 'Papulopustular',
    desc: 'Papulopustular rosacea. Inflamed red bumps and pus spots on a background of redness, mostly in the center of the face. The key difference from acne is that there are no blackheads or whiteheads, and redness and burning often come with it. It is also treated differently from acne.',
  },
  {
    id: 'PHY',
    title: 'Thickened skin (rhinophyma)',
    latin: 'Phymatous',
    desc: 'Phymatous rosacea. Oil glands and connective tissue overgrow, making the skin thick, with large pores and a bumpy surface. It is most common on the nose (rhinophyma) but can affect the chin, forehead or ears. It is more common in men and tends to appear later in the condition.',
  },
  {
    id: 'OCU',
    title: 'Eye rosacea',
    latin: 'Ocular',
    desc: 'Ocular rosacea. Dry, gritty, burning or light-sensitive eyes, inflamed eyelid margins, bloodshot eyes and repeated styes. Eye symptoms may come before skin symptoms or be out of proportion to them, and are best managed together with an eye doctor.',
  },
];

export const ROSACEA_SELFCARE = [
  'Find your triggers and avoid them: watch for spicy food, sun, heat and alcohol, as well as hot drinks, stress and temperature changes. Keep a note to work out your own pattern, then steer clear where you can.',
  'Don’t over-cleanse or scrub: wash gently with lukewarm water and a mild cleanser. Avoid rubbing, scrubs and heavy exfoliation.',
  'Protect against UV: sunlight is one of the most common triggers. Use sunscreen every day — mineral sunscreens tend to suit sensitive skin — and add a hat or umbrella.',
  'Keep skincare gentle and free of alcohol and fragrance: choose simple, mild moisturizers without alcohol or fragrance to repair the skin barrier and reduce repeated stinging and redness.',
];

export const ROSACEA_SYMPTOMS = [
  { id: 'flush', label: 'Flushing', en: 'Flushing' },
  { id: 'erythema', label: 'Persistent redness', en: 'Persistent erythema' },
  { id: 'papule', label: 'Bumps / pus spots', en: 'Papules / Pustules' },
  { id: 'phyma', label: 'Thickened skin', en: 'Phymatous change' },
  { id: 'demodex', label: 'Demodex mites', en: 'Demodex infestation' },
];

export const ROSACEA_TREATMENT_CATEGORIES = [
  {
    key: 'topical',
    title: 'Topical treatments',
    summary: 'Brimonidine, metronidazole, azelaic acid, retinoids, Soolantra',
    treatments: [
      {
        name: 'Brimonidine',
        note: 'Narrows blood vessels',
        helps: ['flush', 'erythema'],
        moa: 'Acts on α2 receptors in blood vessel walls to narrow small vessels, temporarily reducing redness.',
      },
      {
        name: 'Metronidazole',
        note: 'Topical anti-inflammatory',
        helps: ['erythema', 'papule'],
        moa: 'Anti-inflammatory and antioxidant, reducing bumps and pus spots (exactly how it works is not fully understood).',
      },
      {
        name: 'Azelaic acid',
        note: 'Anti-inflammatory acid',
        helps: ['erythema', 'papule'],
        moa: 'Dampens inflammatory signals and the activation of antimicrobial peptides (cathelicidin), and is also an antioxidant.',
      },
      {
        name: 'Retinoids',
        note: 'Vitamin A derivatives',
        helps: ['erythema', 'papule'],
        moa: 'Regulate how skin cells mature and how follicles shed, and calm inflammation.',
      },
      {
        name: 'Soolantra',
        note: 'Ivermectin cream',
        helps: ['demodex'],
        moa: 'Kills Demodex mites living in the hair follicles and also calms inflammation.',
        thumbLabel: 'Topical cream',
        lightbox: {
          id: 'rosacea-soolantra',
          name: 'Soolantra',
          typeLabel: 'Topical cream (ivermectin)',
          photoStyle: 'width:100%;aspect-ratio:1868 / 645;margin-bottom:14px;',
        },
      },
    ],
  },
  {
    key: 'oral',
    title: 'Oral medicines',
    summary: 'Propranolol, carvedilol, doxycycline / minocycline, azithromycin / clarithromycin, isotretinoin',
    treatments: [
      {
        name: 'Propranolol',
        note: 'Beta blocker',
        helps: ['flush', 'erythema'],
        moa: 'Blocks beta receptors, reducing flushing and vessel widening driven by the nervous system.',
      },
      {
        name: 'Carvedilol',
        note: 'Alpha and beta blocker',
        helps: ['flush', 'erythema'],
        moa: 'Blocks both α1 and beta receptors, adjusting blood vessel tone to reduce flushing and redness.',
      },
      {
        name: 'Doxycycline / Minocycline',
        note: 'Tetracycline antibiotics',
        helps: ['erythema', 'papule', 'phyma'],
        moa: 'At low doses they mainly calm inflammation (for example by reducing matrix metalloproteinase activity) rather than killing bacteria.',
      },
      {
        name: 'Azithromycin / Clarithromycin',
        note: 'Macrolide antibiotics',
        helps: ['erythema', 'papule'],
        moa: 'Both fight bacteria and help regulate inflammation.',
      },
      {
        name: 'Isotretinoin',
        note: 'Oral retinoid',
        helps: ['erythema', 'papule', 'phyma'],
        moa: 'Shrinks oil glands and reduces oil production, calms inflammation, and can also improve tissue overgrowth.',
      },
    ],
  },
  {
    key: 'injection',
    title: 'Injections',
    summary: 'Botulinum toxin',
    treatments: [
      {
        name: 'Botulinum toxin',
        note: 'Nerve-blocking injection',
        helps: ['flush', 'erythema'],
        moa: 'Stops nerve endings releasing acetylcholine, reducing nerve-driven vessel widening and flushing.',
      },
    ],
  },
  {
    key: 'procedure',
    title: 'Surgery and lasers',
    summary: 'Surgery, electrosurgery, CO₂ laser, Er:YAG laser',
    treatments: [
      {
        name: 'Surgery',
        note: 'Excision or reshaping',
        helps: ['phyma'],
        moa: 'Removes or shaves down the overgrown tissue to restore shape and improve how the nose works.',
      },
      {
        name: 'Electrosurgery',
        note: 'Electrocautery',
        helps: ['phyma'],
        moa: 'Uses electric current to burn away and shave down overgrown tissue, reshaping it.',
      },
      {
        name: 'CO₂ laser',
        note: 'Carbon dioxide laser',
        helps: ['phyma'],
        moa: 'Vaporizes overgrown tissue with a laser, with control over how deep it goes.',
      },
      {
        name: 'Er:YAG laser',
        note: 'Erbium laser',
        helps: ['phyma'],
        moa: 'Vaporizes surface tissue with less heat damage, suited to fine reshaping.',
      },
    ],
  },
];

export const ROSACEA_FAQ = [
  {
    q: 'How can I tell rosacea from acne?',
    a: 'The key difference is comedones. Acne has blackheads and whiteheads; rosacea does not. Instead it has bumps and pus spots on a background of redness, often with burning or stinging. The two are treated differently, and the wrong approach can make redness worse.',
  },
  {
    q: 'Will rosacea go away?',
    a: 'Rosacea is a long-term condition that tends to flare up again, so the aim of treatment is to keep it stable over time. By avoiding triggers, repairing the skin barrier and getting the right treatment, most people see a clear improvement in how their skin looks and feels.',
  },
  {
    q: 'Why does my doctor say not to use steroid creams on my own?',
    a: 'Steroids can make redness look better in the short term, but long-term use thins the skin, makes blood vessels more visible and causes worse rebound redness when you stop — it can even cause steroid-induced rosacea. Please use medicines only after your doctor has assessed you.',
  },
  {
    q: 'Is rosacea always linked to Demodex mites?',
    a: 'Not always. Demodex mites live on most people’s skin, but studies find higher numbers in people with rosacea, where they may add to inflammation. Whether you need treatment aimed at the mites is something your doctor will judge from how your skin looks.',
  },
];
