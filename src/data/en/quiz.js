// English text for the hair loss self-check (../TreatmentData.js holds the
// Chinese, the scoring points and where each result links to).
//
// Kept apart from hair.js because the quiz script ships to the browser and
// should not carry the whole treatment table with it.

// Result text by category; where each result links to comes from the Chinese data.
export const SELF_CHECK_RESULT_INFO = {
  male_aga: {
    title: 'Your answers fit the pattern of male pattern hair loss',
    desc: 'The pattern, the areas affected and your family history are typical of male pattern hair loss (androgenetic alopecia, AGA). It progresses slowly and is linked to genetics and how the body handles male hormones. Treatment tends to work better when started early.',
    goLabel: 'Read the full guide to male pattern hair loss',
  },
  female_aga: {
    title: 'Your answers fit the pattern of female pattern hair loss',
    desc: 'The diffuse thinning you describe is typical of female pattern hair loss (FPHL). Other causes still need ruling out, such as thyroid problems, iron-deficiency anemia and polycystic ovary syndrome.',
    goLabel: 'Read the full guide to female pattern hair loss',
  },
  acute_telogen: {
    title: 'Your answers fit the pattern of acute telogen effluvium',
    desc: 'Heavy shedding over a short time, after a clear trigger (such as surgery, childbirth, an injury, a change in diet, stress or a change of environment), fits acute telogen effluvium. Most people recover gradually within a few months once the trigger has passed.',
    goLabel: 'Read the full guide to telogen effluvium',
  },
  chronic_telogen: {
    title: 'Your answers fit the pattern of chronic telogen effluvium',
    desc: 'Diffuse shedding that has gone on for a long time, or keeps coming back in waves, fits chronic telogen effluvium. Possible causes include long-term stress, thyroid problems and iron deficiency, so further tests are recommended to find the underlying cause.',
    goLabel: 'Read the full guide to telogen effluvium',
  },
  areata: {
    title: 'Your answers fit the pattern of alopecia areata',
    desc: 'Clearly defined patches of hair loss, sometimes with loss of eyebrows, eyelashes or body hair, fit alopecia areata. It is an autoimmune condition, and seeing a doctor early tends to give better results.',
    goLabel: 'Read the full guide to alopecia areata',
  },
  other: {
    title: 'Your pattern is less typical — a doctor can help work it out',
    desc: 'What you describe does not clearly match one common type of hair loss. Hair loss has many causes, so a doctor should take a full history, examine you and arrange any tests needed to find the cause.',
  },
};

// Question text and option labels, by question id. Options are listed in the
// same order as the Chinese, which is what the scoring reads.
export const SELF_CHECK_TEXT = {
  q1_gender: { text: 'What is your sex?', options: ['Male', 'Female'] },
  q2_pcos: {
    text: 'Do you have irregular periods, more body hair (for example on your arms and legs) than you would expect, or a tendency to get acne?',
    options: ['Yes', 'No'],
  },
  q3_age: { text: 'How old are you?', options: ['Under 20', '20–35', '35–50', 'Over 50'] },
  q4_type: {
    text: 'Which best describes your hair loss?',
    options: ['In one area (a specific patch)', 'All over (the whole scalp thinning evenly)'],
  },
  q5_patch: { text: 'Do you have one or more bald patches on your scalp with clear edges?', options: ['Yes', 'No'] },
  q6_distribution: {
    text: 'Where is the hair loss mainly?',
    options: ['The crown', 'A widening parting (along the center of the scalp)', 'A receding front hairline', 'Somewhere else', 'Not in any one place'],
  },
  q7_brow: { text: 'Are you also losing eyebrows, eyelashes, or hair on your arms or legs?', options: ['Yes', 'No'] },
  q8_duration: {
    text: 'Roughly how long has the hair loss been going on?',
    options: ['Less than 30 days', '1–3 months', '3 months to 2 years', 'More than 2 years'],
  },
  q9_trigger: {
    text: 'In the six months before you noticed the hair loss, did you have any of these: significant weight loss, surgery, an injury, a change in diet, work stress or a change of environment, or childbirth?',
    options: ['Yes', 'No'],
  },
  q10_family: {
    text: 'Do any close relatives (parents, siblings, grandparents, aunts or uncles) have hair loss?',
    options: ['Yes', 'No / not sure'],
  },
};
