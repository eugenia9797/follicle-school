// 全站共用的介面文字（導覽列、頁尾、按鈕、表頭、圖說等），中英並列。
// 頁面本身的內文寫在各自的頁面檔裡：中文在 src/pages/，英文在 src/pages/en/。
import {
  COST_DISCLAIMER,
  DOCTOR_NAME,
  DOCTOR_TITLE,
  HAIR_SECTION_NAME,
  HAIR_SECTION_NAME_EN,
  HAIR_SITE_NAME,
  MEDICAL_DISCLAIMER,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_NAME_EN,
  SITE_TAGLINE,
  SITE_TITLE_HOME,
} from '../consts.js';

export const UI = {
  zh: {
    site: {
      name: SITE_NAME,
      tagline: SITE_TAGLINE,
      titleHome: SITE_TITLE_HOME,
      description: SITE_DESCRIPTION,
      hairName: HAIR_SECTION_NAME,
      hairLatin: HAIR_SECTION_NAME_EN,
      hairSiteName: HAIR_SITE_NAME,
      doctorName: DOCTOR_NAME,
      doctorTitle: DOCTOR_TITLE,
      slogan: '讓我陪您重欣出發，找回喜歡自己的樣子。',
      // <title> 裡頁名和站名之間的分隔
      titleSep: '｜',
    },
    costDisclaimer: COST_DISCLAIMER,
    medicalDisclaimer: MEDICAL_DISCLAIMER,
    // 切換到「另一種」語言的連結
    langSwitch: { label: 'EN', title: 'Read this page in English', lang: 'en' },

    nav: {
      main: '主選單',
      hair: '毛囊研究所選單',
      openMenu: '開啟選單',
      closeMenu: '關閉選單',
      mobile: '行動版選單',
      mobileHair: '毛囊研究所行動版選單',
      goTo: (label) => `前往「${label}」頁面 →`,
      book: '預約掛號',
      bookArrow: '預約掛號 →',
      backToMain: '← 回 E.sheen 主站',
      about: '醫師介紹',
      aboutProfile: '專長與學經歷',
      aboutClinic: '門診資訊',
      aboutInterviews: '媒體採訪',
      aboutConferences: '研討會發表',
      aboutTranslation: '專書翻譯',
      aboutPublications: '期刊論文',
      conditions: '皮膚疾病',
      rosacea: '玫瑰斑（酒糟）',
      acne: '青春痘與痘疤',
      hairLead: '毛囊研究所｜落髮專區',
      aga: '雄性禿',
      telogen: '休止期落髮',
      areata: '圓禿',
      quiz: '自我落髮檢測',
      breastCancer: '乳癌賀爾蒙治療掉髮',
      aesthetics: '醫學美容',
      intimate: '私密處保養',
      contact: '聯絡我',
      bookOnline: '線上預約掛號',
      line: 'LINE 官方帳號',
    },

    footer: {
      contactHeading: '聯絡預約',
      siteHeading: '網站導覽',
      hairHome: `${HAIR_SECTION_NAME}首頁`,
      disclaimerLabel: '⚕ 醫療免責聲明：',
    },

    toTop: '回到頁面頂端',
    crumbSep: '／',
    heroNav: '本頁章節',

    article: {
      column: '專欄文章',
      updated: '最後更新：',
      back: (label) => `← 回到${label}`,
    },

    notes: {
      sources: '資料來源',
      images: '影像說明',
      aiNote: '部分實體照片為 AI 合成之示意圖，非真實患者影像，無侵犯患者隱私之虞。',
    },

    faq: '常見問題 FAQ',

    stages: {
      placeholder: '分期示意圖（圖片準備中）',
      alt: (scale, title) => `${scale}${title}示意圖`,
      photoAlt: (title) => `${title}臨床表現`,
      photoPlaceholder: '臨床表現照片（圖片準備中）',
      vertexAlt: (scale, title) => `${scale}${title} vertex 型示意圖`,
      vertexPlaceholder: 'vertex 型示意圖（圖片準備中）',
    },

    compare: {
      heading: '治療方式比較',
      legendToggle: 'ⓘ 證據等級與效果星等說明',
      expandHint: '點選分類展開詳細治療項目與比較表格',
      treatment: '治療方式',
      sideEffects: '副作用',
      notes: '注意事項',
      quadCaption: '縱軸：費用級距（$～$$$$$，越上越貴）／橫軸：治療效果（越右越佳）・點選圖中項目查看詳細內容',
      lowEffect: '效果較低',
      highEffect: '效果較高 →',
      listLabel: '治療項目清單',
      priceTier: (tier) => `預估自費級距：${tier}`,
      evidence: '證據等級',
      evidenceGrade: (label) => `${label} 級`,
      effect: '效果',
      starsLabel: (stars) => `效果 ${stars} 星，滿分 5 星`,
      product: '商品樣式',
      notInTaiwan: '台灣未上市',
      starsNote: '效果星等（★1–5）為臨床常見療效強度之概略呈現，實際效果因人而異。',
    },

    symptomTable: {
      keyLabel: '症狀標籤說明',
      expandHint: '點選分類展開治療項目',
      treatment: '治療方式',
      helps: '可改善的症狀',
      moa: '作用機轉',
      tips: '使用注意事項與建議',
      caution: '注意',
      advice: '建議',
      product: '商品樣式',
    },

    lightbox: {
      label: '商品樣式',
      close: '關閉',
      brandsHint: '市售常見廠牌（點選展開外觀說明）',
      brandAlt: (name) => `${name}外觀`,
      brandPlaceholder: '外觀照片（圖片準備中）',
      productAlt: (name) => `${name}商品外觀`,
      productPlaceholder: '商品外觀照片（圖片準備中）',
      form: '劑型：',
      offLabel: '非該藥物核准適應症（Off-label use），使用前請與醫師充分討論',
    },

    // lib/treatments.js 組治療卡片時用到的字
    treatments: {
      topicalForm: '外用劑型',
      minoxNote: '市面上有多種商品，無法一一陳列，實際外觀請與醫師或藥師確認。',
      minoxType: '外用生髮水／生髮泡沫',
      offLabel: '非該藥物核准適應症（Off-label use），使用前請與醫師充分討論',
    },

    severity: {
      heading: '嚴重度分級',
      hint: '臨床上以頭皮禿髮面積佔比評估嚴重度，常用 SALT score（Severity of Alopecia Tool）量化。',
      escalation: '若出現以下任一情況，嚴重程度提高一級',
    },

    quiz: {
      step: '第 {n} 題',
    },
  },

  en: {
    site: {
      name: SITE_NAME_EN,
      tagline: 'Dr. I-Hsin Huang · Board-Certified Dermatologist',
      titleHome: 'E.sheen Dermatology | Dr. I-Hsin Huang, Board-Certified Dermatologist',
      description:
        'Patient education and clinic information from board-certified dermatologist Dr. I-Hsin Huang: the causes and treatment options for hair loss (pattern hair loss, telogen effluvium, alopecia areata), rosacea and acne, plus aesthetic dermatology and appointment booking.',
      hairName: 'Follicle School',
      hairLatin: 'Hair loss education',
      hairSiteName: 'Follicle School | Dr. I-Hsin Huang, Dermatologist',
      doctorName: 'Dr. I-Hsin Huang',
      doctorTitle: 'Board-Certified Dermatologist',
      slogan: 'Let me help you make a fresh start and feel like yourself again.',
      titleSep: ' | ',
    },
    costDisclaimer:
      'Results and costs vary between clinics, with the doctor’s technique and from person to person. The chart below is for general education only and is not a promise of any result or price. Your actual treatment plan and costs will be based on an in-person assessment by your doctor.',
    medicalDisclaimer:
      'The information on this website is for general education only. It is not personal medical advice and cannot replace an in-person diagnosis, assessment and prescription from a doctor. Skin and hair problems have many possible causes, so please see a dermatologist and decide on treatment together.',
    langSwitch: { label: '中文', title: '閱讀中文版', lang: 'zh-Hant-TW' },

    nav: {
      main: 'Main menu',
      hair: 'Follicle School menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      mobile: 'Mobile menu',
      mobileHair: 'Follicle School mobile menu',
      goTo: (label) => `Go to ${label} →`,
      book: 'Book',
      bookArrow: 'Book an appointment →',
      backToMain: '← Back to E.sheen',
      about: 'About',
      aboutProfile: 'Expertise & training',
      aboutClinic: 'Clinic hours',
      aboutInterviews: 'In the media',
      aboutConferences: 'Conference talks',
      aboutTranslation: 'Book translation',
      aboutPublications: 'Publications',
      conditions: 'Skin conditions',
      rosacea: 'Rosacea',
      acne: 'Acne & acne scars',
      hairLead: 'Follicle School | Hair loss',
      aga: 'Pattern hair loss',
      telogen: 'Telogen effluvium',
      areata: 'Alopecia areata',
      quiz: 'Hair loss self-check',
      breastCancer: 'Hair loss on breast cancer hormone therapy',
      aesthetics: 'Aesthetics',
      intimate: 'Intimate area care',
      contact: 'Contact',
      bookOnline: 'Book online',
      line: 'LINE official account',
    },

    footer: {
      contactHeading: 'Contact & booking',
      siteHeading: 'Explore',
      hairHome: 'Follicle School home',
      disclaimerLabel: '⚕ Medical disclaimer: ',
    },

    toTop: 'Back to top',
    crumbSep: '/',
    heroNav: 'On this page',

    article: {
      column: 'Articles',
      updated: 'Last updated: ',
      back: (label) => `← Back to ${label}`,
    },

    notes: {
      sources: 'Sources',
      images: 'About the images',
      aiNote: 'Some photographs are AI-generated illustrations, not images of real patients, so no patient’s privacy is involved.',
    },

    faq: 'Frequently asked questions',

    stages: {
      placeholder: 'Stage illustration (coming soon)',
      alt: (scale, title) => `${scale}${title} illustration`,
      photoAlt: (title) => `${title}: clinical photo`,
      photoPlaceholder: 'Clinical photo (coming soon)',
      vertexAlt: (scale, title) => `${scale}${title}, vertex type illustration`,
      vertexPlaceholder: 'Vertex type illustration (coming soon)',
    },

    compare: {
      heading: 'Comparing treatments',
      legendToggle: 'ⓘ About evidence grades and effect ratings',
      expandHint: 'Tap a category to see its treatments and comparison chart',
      treatment: 'Treatment',
      sideEffects: 'Side effects',
      notes: 'Good to know',
      quadCaption:
        'Vertical axis: cost tier ($ to $$$$$, higher is more expensive) · Horizontal axis: effect (further right is stronger) · Tap an item for details',
      lowEffect: 'Smaller effect',
      highEffect: 'Larger effect →',
      listLabel: 'Treatments in this category',
      priceTier: (tier) => `Estimated self-pay cost: ${tier}`,
      evidence: 'Evidence grade',
      evidenceGrade: (label) => `Grade ${label}`,
      effect: 'Effect',
      starsLabel: (stars) => `Effect rated ${stars} out of 5`,
      product: 'What it looks like',
      notInTaiwan: 'Not available in Taiwan',
      starsNote:
        'The star rating (★1–5) is a rough guide to how strong the effect usually is in clinical practice. Results vary from person to person.',
    },

    symptomTable: {
      keyLabel: 'Symptom labels',
      expandHint: 'Tap a category to see its treatments',
      treatment: 'Treatment',
      helps: 'Helps with',
      moa: 'How it works',
      tips: 'Cautions and tips',
      caution: 'Caution',
      advice: 'Tips',
      product: 'What it looks like',
    },

    lightbox: {
      label: 'What it looks like',
      close: 'Close',
      brandsHint: 'Common brands (tap to see what each looks like)',
      brandAlt: (name) => `${name}: appearance`,
      brandPlaceholder: 'Product photo (coming soon)',
      productAlt: (name) => `${name}: product photo`,
      productPlaceholder: 'Product photo (coming soon)',
      form: 'Form: ',
      offLabel: 'Off-label use (not an approved indication for this medicine). Please discuss it fully with your doctor first.',
    },

    treatments: {
      topicalForm: 'Topical form',
      minoxNote: 'Many brands are sold, so not all can be shown here. Please check with your doctor or pharmacist what yours should look like.',
      minoxType: 'Hair-growth solution or foam',
      offLabel: 'Off-label use (not an approved indication for this medicine). Please discuss it fully with your doctor first.',
    },

    severity: {
      heading: 'How severe is it?',
      hint: 'Doctors grade severity by how much of the scalp has lost hair, usually measured with the SALT score (Severity of Alopecia Tool).',
      escalation: 'If any of the following applies, the severity goes up one level',
    },

    quiz: {
      step: 'Question {n}',
    },
  },
};
