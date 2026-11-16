// English version of ../epidermal-cyst.js. **Bold** marks are rendered by lib/inline-bold.js.

export const CYST_INTRO =
  'An epidermal cyst (often called a sebaceous cyst, although it is actually filled with keratin, not oil) is a small sac that forms under the skin. The wall of the sac keeps making keratin, which builds up layer by layer inside it, so the lump slowly gets bigger.';

export const CYST_CAUSES = [
  {
    label: 'A blocked pore',
    desc: 'When the opening of a hair follicle is plugged by dead skin or oil, skin cells can get trapped beneath the surface and grow into a closed sac.',
  },
  {
    label: 'Skin cells pushed deeper',
    desc: 'After an injury, surgery, a needle prick or severe inflammation, surface skin cells can be carried into the deeper dermis and form a sac there.',
  },
  {
    label: 'The wall keeps making keratin',
    desc: 'The wall of the sac behaves like normal skin and keeps producing keratin. With nowhere to go, it piles up inside, so the cyst keeps growing.',
  },
  {
    label: 'Often no single cause',
    desc: 'Most cysts appear on their own. They are not caused by poor hygiene or by something you ate, and they are not contagious.',
  },
];

export const CYST_RISK = [
  {
    label: 'Adults after puberty',
    desc: 'Cysts usually appear between puberty and middle age, when hormones make oil glands and follicles more active. They are **slightly more common in men**.',
  },
  {
    label: 'Acne-prone, clog-prone skin',
    desc: 'People who have had **severe acne** or repeated follicle inflammation have follicle walls that have been damaged, which makes a sac more likely to form.',
  },
  {
    label: 'Areas with past injury or surgery',
    desc: 'Skin near an **injury, needle prick or surgical scar** can trap surface cells deep in the skin. Cysts on the palms and soles are often linked to injury.',
  },
  {
    label: 'Family history, or many at once',
    desc: 'If cysts start very young, are unusually numerous or run in the family, ask your doctor to take a closer look. Rarely, they are linked to an **inherited syndrome** such as Gardner syndrome.',
  },
];

export const CYST_FEATURES = [
  'What it looks like: a round bump under the skin, skin-coloured or slightly yellow-white, firm but springy, and able to move a little under the skin.',
  'Where it appears: face, behind the ears, neck, back, chest and scrotum; the scalp is common too, the palms and soles less so.',
  'A tiny central dot: there is often a small opening (a “blackhead”) in the middle. Pressing hard may squeeze out a white or yellow, cheesy, foul-smelling material.',
  'Usually painless: sizes range from a few millimetres to several centimetres, and growth is slow. A cyst can stay the same for years.',
  'When inflamed: it suddenly becomes red, swollen, hot and painful, harder and bigger, and may fill with pus or burst and drain. This happens when the sac wall breaks and its contents irritate the surrounding tissue, or when bacteria get in.',
];

export const CYST_SEE_DOCTOR = [
  'It grows or hardens quickly, or the surface breaks down or bleeds',
  'It is red, painful or draining pus, or it keeps getting inflamed',
  'It is on your face, a joint or a spot that rubs, and affects how you look or move',
  'You are not sure it is a cyst — fatty lumps, abscesses and other skin growths can look similar and need a doctor’s diagnosis',
];

export const CYST_TREATMENTS = [
  {
    label: 'No symptoms: keep an eye on it',
    desc: 'A small, painless cyst you are not bothered by can simply be watched. It will not go away by itself, though, and may grow or become inflamed later. If you want it gone, the best time is while it is small and not inflamed.',
  },
  {
    label: 'Do not squeeze or pop it yourself',
    desc: 'Squeezing can rupture the wall and spill the contents into surrounding tissue, causing severe inflammation, infection and scarring. And all that comes out is the keratin inside — the sac stays, and the cyst almost always comes back.',
  },
  {
    label: 'When inflamed: calm it down first',
    desc: 'Depending on the situation, your doctor may use antibiotics, an anti-inflammatory injection, or an incision to drain it. **An inflamed sac wall is fragile and stuck to the surrounding tissue, so it is hard to remove completely.** Surgery is usually planned after the swelling settles.',
  },
  {
    label: 'The cure: remove the whole sac surgically',
    desc: 'Under local anaesthetic, the sac and everything inside it are **taken out completely** — the only way to cure it. Depending on size and location, this can be a conventional excision (including the surface opening), a small-incision approach, or a laser punch followed by removal of the sac wall. The wound is then closed with stitches, and the tissue may be sent for pathology.',
  },
  {
    label: 'After surgery',
    desc: 'The wound needs care and a follow-up visit to remove stitches. A thin scar will remain; small-incision methods leave a smaller one. For the face or other visible areas, talk through the approach with your doctor beforehand. If any of the wall is left behind, the cyst can still return in the same spot.',
  },
];

export const CYST_FAQ = [
  {
    q: 'Will a cyst go away on its own?',
    a: 'Usually not. Sometimes an inflamed cyst bursts and drains and seems to shrink, but the sac is still there and often fills up again or becomes inflamed once more.',
  },
  {
    q: 'Can a cyst turn into cancer?',
    a: 'The vast majority are benign, and malignant change is very rare. If a cyst grows or hardens quickly, or its surface breaks down or bleeds, see a doctor promptly.',
  },
  {
    q: 'Do I have to have it removed?',
    a: 'Not necessarily. A small cyst with no symptoms that does not bother you can be watched. But if you want to get rid of it for good, avoid future inflammation, or it keeps growing, complete surgical removal is the most reliable option.',
  },
  {
    q: 'It is red and inflamed — can it be removed right away?',
    a: 'Usually the inflammation is treated first and the cyst is removed once the swelling goes down. When inflamed, the wall is fragile and stuck to nearby tissue, which makes it hard to remove completely and more likely to come back. If it is very painful, your doctor can drain it first to relieve the symptoms.',
  },
  {
    q: 'I squeezed it out and it went flat. Is it cured?',
    a: 'Not yet. What came out is the keratin inside; the sac wall is still under your skin and keeps making keratin, so within weeks to months the cyst fills up again. See the animation above.',
  },
  {
    q: 'Will it come back after surgery?',
    a: 'If the entire sac wall is removed, the cyst usually does not return in the same place. If a bit of wall is left behind, it can recur. Also, people who are prone to cysts may grow new ones elsewhere.',
  },
];

export const CYST_ANIM = {
  tabsLabel: 'Choose a treatment',
  controls: { prev: 'Previous', next: 'Next', play: 'Play', pause: 'Pause', step: 'Step' },
  layers: { epidermis: 'Epidermis', dermis: 'Dermis', fat: 'Fat layer' },
  labels: {
    wall: 'Sac wall',
    keratin: 'Keratin',
    wallStays: 'The wall is still there!',
    refill: 'Keratin builds up again',
    outWhole: 'Whole sac, wall included',
    empty: 'The sac is gone',
  },
  scenarios: [
    {
      id: 'squeeze',
      tab: 'Only squeeze it out',
      verdict: 'The wall remains, so the cyst comes back',
      steps: [
        {
          short: 'Anatomy',
          title: 'A small sac under the skin',
          desc: 'A cyst is a sac in the skin. Its wall keeps making keratin, which packs the sac with white debris, and a tiny central opening connects it to the surface.',
        },
        {
          short: 'Make a hole',
          title: 'Pierce or cut a hole in the surface',
          desc: 'A small hole is made over the cyst to get the contents out.',
        },
        {
          short: 'Squeeze',
          title: 'The keratin is squeezed out and the lump shrinks',
          desc: 'After firm squeezing, the white keratin comes out and the lump seems to vanish. But the sac wall has not been removed — it just sits flattened under the skin.',
        },
        {
          short: 'Healing',
          title: 'The surface is flat, but the empty sac is still there',
          desc: 'Once the wound heals, the skin looks smooth again. But the wall is still in the skin, and its cells are still alive.',
        },
        {
          short: 'Recurrence',
          title: 'Keratin builds up again and the cyst returns',
          desc: 'The wall cells keep making keratin, and within weeks to months the sac fills up and the lump rises again. Repeated squeezing and inflammation also make the wall stick to the surrounding tissue, making later surgery harder.',
        },
      ],
    },
    {
      id: 'excise',
      tab: 'Surgical removal',
      verdict: 'Remove the wall with it, and it is cured',
      steps: [
        {
          short: 'The same cyst',
          title: 'Assess where the sac is and how big it is',
          desc: 'Your doctor checks the size, location and whether it is inflamed, and decides how to remove it. An inflamed cyst is usually calmed down first and removed afterwards.',
        },
        {
          short: 'Incision',
          title: 'Local anaesthetic, then an incision',
          desc: 'An opening is made over the cyst — a conventional incision, a small incision or a laser punch, depending on its size and location.',
        },
        {
          short: 'Remove it whole',
          title: 'The sac is taken out, wall and all',
          desc: 'The sac and its contents are freed and removed together. This is the key step: the wall is what keeps making keratin, so all of it has to come out.',
        },
        {
          short: 'Closure',
          title: 'Clean up and stitch the wound',
          desc: 'The small opening and channel up to the surface are removed too. The doctor checks that no wall is left under the skin, then closes the space and stitches the wound.',
        },
        {
          short: 'Healed',
          title: 'No wall, so nothing grows back',
          desc: 'With the wall gone, nothing is left to make keratin. The cyst usually does not return in the same place, leaving only a thin scar.',
        },
      ],
    },
  ],
};

export const CYST_SOURCES = [
  'Weir CB, St Hilaire NJ. Epidermal Inclusion Cyst. StatPearls. Treasure Island (FL): StatPearls Publishing',
  'Zito PM, Scharf R. Epidermoid Cyst. StatPearls. Treasure Island (FL): StatPearls Publishing',
];
