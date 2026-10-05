// 玫瑰斑（酒糟）衛教內容。
// 放在獨立檔案而非 TreatmentData.js，因為後者會被 Claude Design 重新匯出時整份覆蓋。
// 內容依皮膚科通用衛教整理，臨床用詞比照臺灣皮膚科醫學會《玫瑰斑（酒糟）治療共識》(2023)。

export const ROSACEA_TRIGGERS = [
  { id: 'gene', label: '基因體質', desc: '家族史與先天的皮膚屏障、血管反應性差異。' },
  { id: 'stimulus', label: '熱、辣、情緒', desc: '高溫、日曬、辛辣食物、酒精、溫差與情緒壓力都可能誘發潮紅。' },
  { id: 'immune', label: '免疫系統', desc: '先天免疫過度反應，抗菌胜肽與發炎訊號增加。' },
  { id: 'vessel', label: '神經血管過度活化', desc: '血管與神經末梢對刺激過度敏感，造成反覆泛紅與灼熱刺痛。' },
];

// 四個典型分型。2023 年共識強調以「表現型（phenotype）」診斷，
// 臨床上仍常以這四型描述病人的主要表現，且可同時並存。
export const ROSACEA_TYPES = [
  {
    id: 'ETR',
    title: '紅斑血管擴張型',
    latin: 'Erythematotelangiectatic',
    desc: '臉部中央（兩頰、鼻部、額頭、下巴）持續泛紅，容易因高溫、情緒或飲食誘發陣發性潮紅，常伴隨明顯的微血管擴張，以及刺痛、灼熱、緊繃等感覺。皮膚屏障通常較脆弱，對保養品容易刺激。',
  },
  {
    id: 'PPR',
    title: '丘疹膿皰型',
    latin: 'Papulopustular',
    desc: '在泛紅的基底上出現發炎性丘疹與膿皰，好發於臉部中央。與青春痘最重要的區別是「不會有粉刺」，且常合併泛紅與灼熱感，治療方向也和痘痘不同。',
  },
  {
    id: 'PHY',
    title: '增生肥厚型（鼻瘤）',
    latin: 'Phymatous',
    desc: '皮脂腺與結締組織增生，使皮膚變厚、毛孔粗大、表面凹凸不平，最常見於鼻部而形成鼻瘤（rhinophyma），也可能出現在下巴、額頭或耳朵。男性較常見，屬於較晚期的表現。',
  },
  {
    id: 'OCU',
    title: '眼部型',
    latin: 'Ocular',
    desc: '眼睛乾澀、異物感、灼熱、畏光，眼瞼緣發炎、結膜充血，也可能反覆長針眼。眼部症狀可能早於皮膚症狀出現，或與皮膚症狀嚴重度不成比例，需要與眼科共同照護。',
  },
];

export const ROSACEA_SELFCARE = [
  '溫和清潔：以溫水與低刺激性清潔產品輕柔清洗，避免磨砂、酒精與過度去角質。',
  '修復屏障：選擇單純、無香料的保濕產品，減少刺痛與泛紅反覆。',
  '每日防曬：紫外線是最常見的誘發因子之一，建議選擇物理性防曬並搭配帽子、陽傘。',
  '記錄誘因：留意高溫、辛辣、酒精、熱飲、情緒壓力與溫差，找出屬於自己的誘發模式。',
];

// 治療選項依臨床治療流程圖整理：圖中以「臨床表現」分欄（潮紅、持續性紅斑、
// 丘疹／膿皰、增生肥厚），這裡改成每個治療標出可改善哪些表現。
//
// 圖中沒有把左欄的四種治療（brimonidine、propranolol、carvedilol、botulinum
// toxin）再細分給潮紅或持續性紅斑，所以兩者都標；丘疹／膿皰那一欄則只標丘疹／膿皰。
// 要細分時，只需要改各項的 helps 即可。
export const ROSACEA_SYMPTOMS = [
  { id: 'flush', label: '潮紅', en: 'Flushing' },
  { id: 'erythema', label: '持續性紅斑', en: 'Persistent erythema' },
  { id: 'papule', label: '丘疹／膿皰', en: 'Papules / Pustules' },
  { id: 'phyma', label: '增生肥厚', en: 'Phymatous change' },
];

export const ROSACEA_TREATMENT_CATEGORIES = [
  {
    key: 'topical',
    title: '外用藥物',
    summary: 'Brimonidine、Metronidazole、Azelaic acid、Retinoids',
    treatments: [
      { name: 'Brimonidine', note: '血管收縮劑', helps: ['flush', 'erythema'] },
      { name: 'Metronidazole', note: '外用抗發炎藥', helps: ['papule'], line: '一線' },
      { name: 'Azelaic acid', note: '杜鵑花酸', helps: ['papule'], line: '一線' },
      { name: 'Retinoids', note: 'A 酸類', helps: ['papule'], line: '二線' },
    ],
  },
  {
    key: 'oral',
    title: '口服藥物',
    summary: 'Propranolol、Carvedilol、四環素類、Isotretinoin、大環內酯類',
    treatments: [
      { name: 'Propranolol', note: '乙型阻斷劑', helps: ['flush', 'erythema'] },
      { name: 'Carvedilol', note: 'α／β 阻斷劑', helps: ['flush', 'erythema'] },
      { name: 'Doxycycline', note: '四環素類抗生素', helps: ['papule', 'phyma'], line: '一線' },
      { name: 'Isotretinoin', note: '口服 A 酸', helps: ['papule', 'phyma'], line: '一線' },
      { name: 'Minocycline', note: '四環素類抗生素', helps: ['papule'], line: '二線' },
      { name: 'Azithromycin', note: '大環內酯類抗生素', helps: ['papule'], line: '二線' },
      { name: 'Clarithromycin', note: '大環內酯類抗生素', helps: ['papule'], line: '二線' },
    ],
  },
  {
    key: 'injection',
    title: '注射',
    summary: 'Botulinum toxin',
    treatments: [
      { name: 'Botulinum toxin', note: '肉毒桿菌毒素', helps: ['flush', 'erythema'] },
    ],
  },
  {
    key: 'procedure',
    title: '手術與雷射',
    summary: 'Surgery、Electrosurgery、CO₂ laser、Er:YAG laser',
    treatments: [
      { name: 'Surgery', note: '手術切除或重塑', helps: ['phyma'] },
      { name: 'Electrosurgery', note: '電燒（電刀）', helps: ['phyma'] },
      { name: 'CO₂ laser', note: '二氧化碳雷射', helps: ['phyma'] },
      { name: 'Er:YAG laser', note: '鉺雅鉻雷射', helps: ['phyma'] },
    ],
  },
];

export const ROSACEA_FAQ = [
  {
    q: '玫瑰斑和青春痘怎麼分？',
    a: '最關鍵的差別是「粉刺」。青春痘會有黑頭、白頭粉刺；玫瑰斑不會，而是以泛紅為底，加上丘疹、膿皰，常伴隨灼熱刺痛。兩者治療方向不同，用錯方式可能讓泛紅更嚴重。',
  },
  {
    q: '玫瑰斑會好嗎？',
    a: '玫瑰斑屬於慢性、容易反覆的疾病，目前以「長期穩定控制」為治療目標。透過避開誘發因子、修復皮膚屏障與適當治療，多數人可以明顯改善外觀與不適感。',
  },
  {
    q: '為什麼醫師說不要自己擦類固醇？',
    a: '類固醇短期可能讓泛紅看起來變淡，但長期使用反而會讓皮膚變薄、血管更明顯，停用後出現更嚴重的反彈泛紅，甚至造成類固醇引起的玫瑰斑。請務必經醫師評估後用藥。',
  },
  {
    q: '玫瑰斑一定和蠕型蟎蟲有關嗎？',
    a: '不一定。蠕型蟎蟲是人體皮膚常見的共生蟎蟲，但研究發現玫瑰斑患者的蟎蟲密度常較高，可能參與發炎反應。是否需要針對蟎蟲治療，要由醫師依臨床表現判斷。',
  },
];
