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

// 治療選項依臨床治療流程圖整理，再加上醫師補充的項目（舒立達）。
// 圖中以「臨床表現」分欄，這裡改成每個治療標出可改善哪些表現。
//
// 標註原則（醫師指定）：凡是對丘疹／膿皰有效的藥物，原則上也可改善持續性紅斑，
// 所以這些藥物一律同時標示兩者。舒立達只標「蠕型蟎蟲症」，照醫師的寫法。
// `moa` 是一句話的作用機轉，`lightbox` 有值就會在藥名下方出現「商品樣式」按鈕，點了開商品圖。
export const ROSACEA_SYMPTOMS = [
  { id: 'flush', label: '潮紅', en: 'Flushing' },
  { id: 'erythema', label: '持續性紅斑', en: 'Persistent erythema' },
  { id: 'papule', label: '丘疹／膿皰', en: 'Papules / Pustules' },
  { id: 'phyma', label: '增生肥厚', en: 'Phymatous change' },
  { id: 'demodex', label: '蠕型蟎蟲症', en: 'Demodex infestation' },
];

export const ROSACEA_TREATMENT_CATEGORIES = [
  {
    key: 'topical',
    title: '外用藥物',
    summary: 'Brimonidine、Metronidazole、Azelaic acid、Retinoids、Soolantra 舒立達',
    treatments: [
      {
        name: 'Brimonidine',
        note: '血管收縮劑',
        helps: ['flush', 'erythema'],
        moa: '活化血管上的 α2 受體使微血管收縮，暫時減輕泛紅。',
      },
      {
        name: 'Metronidazole',
        note: '外用抗發炎藥',
        helps: ['erythema', 'papule'],
        moa: '具抗發炎與抗氧化作用，減少丘疹與膿皰（確切機轉尚未完全明確）。',
      },
      {
        name: 'Azelaic acid',
        note: '杜鵑花酸',
        helps: ['erythema', 'papule'],
        moa: '抑制發炎訊號與抗菌胜肽（cathelicidin）的活化，兼具抗氧化作用。',
      },
      {
        name: 'Retinoids',
        note: 'A 酸類',
        helps: ['erythema', 'papule'],
        moa: '調節角質細胞分化與毛囊角化，並抑制發炎反應。',
      },
      {
        name: 'Soolantra 舒立達',
        note: 'Ivermectin 外用乳膏',
        helps: ['demodex'],
        moa: '殺滅毛囊中的蠕型蟎蟲，同時具有抗發炎作用。',
        // 點「商品樣式」開啟燈箱，圖片位 id 為 `${lightbox.id}-photo`
        thumbLabel: '外用乳膏',
        lightbox: {
          id: 'rosacea-soolantra',
          name: 'Soolantra 舒立達',
          typeLabel: '外用乳膏（Ivermectin）',
          // 商品照是 2.9:1 的橫條，圖框跟著它的長寬比，不用預設的固定高度
          photoStyle: 'width:100%;aspect-ratio:1868 / 645;margin-bottom:14px;',
        },
      },
    ],
  },
  {
    key: 'oral',
    title: '口服藥物',
    summary: 'Propranolol、Carvedilol、Doxycycline／Minocycline、Azithromycin／Clarithromycin、Isotretinoin',
    treatments: [
      {
        name: 'Propranolol',
        note: '乙型阻斷劑',
        helps: ['flush', 'erythema'],
        moa: '阻斷 β 受體，減少交感神經刺激引起的血管擴張與潮紅。',
      },
      {
        name: 'Carvedilol',
        note: 'α／β 阻斷劑',
        helps: ['flush', 'erythema'],
        moa: '兼具 α1 與 β 受體阻斷作用，調節血管張力以減少潮紅與紅斑。',
      },
      {
        name: 'Doxycycline／Minocycline',
        note: '四環素類抗生素',
        helps: ['erythema', 'papule', 'phyma'],
        moa: '低劑量時主要作用是抑制發炎（如降低基質金屬蛋白酶活性），而不是殺菌。',
      },
      {
        name: 'Azithromycin／Clarithromycin',
        note: '大環內酯類抗生素',
        helps: ['erythema', 'papule'],
        moa: '兼具抗菌與調節發炎反應的作用。',
      },
      {
        name: 'Isotretinoin',
        note: '口服 A 酸',
        helps: ['erythema', 'papule', 'phyma'],
        moa: '縮小皮脂腺並抑制皮脂分泌，同時抗發炎，也能改善組織增生。',
      },
    ],
  },
  {
    key: 'injection',
    title: '注射',
    summary: 'Botulinum toxin',
    treatments: [
      {
        name: 'Botulinum toxin',
        note: '肉毒桿菌毒素',
        helps: ['flush', 'erythema'],
        moa: '抑制神經末梢釋放乙醯膽鹼，減少神經調控的血管擴張與潮紅。',
      },
    ],
  },
  {
    key: 'procedure',
    title: '手術與雷射',
    summary: 'Surgery、Electrosurgery、CO₂ laser、Er:YAG laser',
    treatments: [
      {
        name: 'Surgery',
        note: '手術切除或重塑',
        helps: ['phyma'],
        moa: '切除或削薄增生的組織，重塑外型並改善鼻部功能。',
      },
      {
        name: 'Electrosurgery',
        note: '電燒（電刀）',
        helps: ['phyma'],
        moa: '以電流燒灼並削除增生組織，重塑外型。',
      },
      {
        name: 'CO₂ laser',
        note: '二氧化碳雷射',
        helps: ['phyma'],
        moa: '以雷射汽化增生的組織，可控制削除的深度。',
      },
      {
        name: 'Er:YAG laser',
        note: '鉺雅鉻雷射',
        helps: ['phyma'],
        moa: '以雷射汽化淺層組織，熱傷害較小，適合精細修整。',
      },
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
