// 落髮衛教網站 — 資料模組（治療方案、分期量表、FAQ、自我檢測問卷）
// 純資料 + 少量純函式，無 DOM／React 依賴

export const EVIDENCE_INFO = {
  A: 'A｜高等級證據：已有 RCT 之統合分析（Meta-analysis）證實療效。',
  Bplus: 'B+｜中高等級證據：已有非 RCT 對照研究（Cohort／Case-control）之統合分析支持，但尚無 RCT-only 統合分析。',
  B: 'B｜中等級證據：至少一項 RCT 支持療效，但尚無符合 A 級標準之統合分析。',
  C: 'C｜初步臨床證據：已有非隨機對照研究、Cohort 或 Case-control study 支持，但尚無 RCT。',
  D: 'D｜有限臨床證據：主要證據來自 Case series 或無對照的臨床研究。',
  E: 'E｜前臨床證據：僅有實驗室、細胞、動物等前臨床研究，缺乏人體臨床證據。',
  disclaimer: '＊此分級反映研究證據層級，不代表療效大小、安全性、主管機關核准狀態或個別患者的治療建議。'
};

function starsText(n) {
  const full = Math.floor(n);
  const half = n - full >= 0.5;
  const remaining = Math.max(0, 5 - full - (half ? 1 : 0));
  return '★'.repeat(full) + (half ? '☆' : '') + '☆'.repeat(remaining);
}

function mk(t) {
  return Object.assign({ warning: false, warningText: '' }, t, { starsText: t.starsOverride || starsText(t.stars) });
}

export function getMaleCategories() {
  return [
    {
      id: 'antiandrogen',
      title: '抗雄性素治療',
      summary: '阻斷 DHT 生成或作用，減緩毛囊微小化',
      treatments: [
        mk({
          id: 'oral-finasteride', name: '口服 Finasteride（1mg）', evidence: 'A', stars: 5, priceTier: '$',
          sideEffects: ['性功能相關副作用（性慾降低、勃起功能障礙），發生率約 1–2%，多屬可逆', '少數個案有情緒變化', '男性女乳症（罕見）'],
          notes: ['需連續服用，效果會隨停藥逐漸消失', '孕婦與備孕婦女不可接觸藥錠（尤其是壓碎或破損的藥錠）'],
          timeline: { onset: '約 3 個月：落髮速度開始減緩', visible: '6 個月：可見毛髮增生', max: '12 個月：達最大效果，需持續使用維持' },
          product: { type: '口服錠劑', dose: '1mg／天，睡前或固定時間服用', appearance: '淡橘色至棕色圓形薄膜衣錠，外觀依廠牌而異' },
          brands: [
            { name: 'Propecia 柔沛', appearance: '淡橘色六角形薄膜衣錠' },
            { name: '法路寧', appearance: '淡黃色圓形薄膜衣錠', offLabel: true },
            { name: '波斯卡', appearance: '白色圓形錠', offLabel: true },
            { name: '菲那斯', appearance: '淡橘色圓形錠', offLabel: true },
            { name: '快得', appearance: '白色至淡黃色圓形錠', offLabel: true }
          ]
        }),
        mk({
          id: 'oral-dutasteride', name: '口服 Dutasteride（0.5mg）', evidence: 'A', stars: 5.5, priceTier: '$$',
          sideEffects: ['同 Finasteride，性功能相關副作用發生率略高', '半衰期長，停藥後藥效退除時間較久'],
          notes: ['同時抑制第一型與第二型 5α-reductase，作用較全面', '孕婦與備孕婦女禁止接觸'],
          timeline: { onset: '約 3 個月開始見效', visible: '6 個月明顯改善', max: '12 個月達最大效果' },
          product: { type: '口服軟膠囊', dose: '0.5mg／天', appearance: '黃色至棕色橢圓形軟膠囊' },
          brands: [
            { name: '適尿通', appearance: '黃色至棕色橢圓形軟膠囊', offLabel: true }
          ]
        }),
        mk({
          id: 'topical-finasteride', name: '外用 Finasteride', evidence: 'A', stars: 5, priceTier: '$$', thumbTypeLabel: '外用劑型',
          sideEffects: ['局部頭皮刺激、乾癢（少見）', '全身性副作用發生率低於口服劑型'],
          notes: ['適合無法耐受口服副作用的患者', '需每日塗抹於頭皮，勿接觸口腔黏膜'],
          timeline: { onset: '約 3–4 個月開始感受變化', visible: '6 個月可見效果', max: '12 個月達最大效果' },
          product: { type: '外用液劑／噴霧', dose: '每日 1 次，直接噴灑於頭皮患處', appearance: '透明無色至淡黃色液體' }
        }),
        mk({
          id: 'topical-alfatradiol', name: '外用 Alfatradiol（雌二醇衍生物）', evidence: 'C', stars: 2, priceTier: '$', notAvailableTW: true,
          sideEffects: ['局部頭皮刺激感（少見）'],
          notes: ['作用機轉為抑制頭皮局部 5α-reductase 活性', '證據等級較低，臨床使用經驗因地區而異'],
          timeline: { onset: '需持續使用數月觀察', visible: '效果因人而異，較不明顯', max: '長期使用維持' },
          product: { type: '外用酊劑', dose: '每日塗抹於患處頭皮', appearance: '透明液體，附滴管或噴頭' }
        })
      ]
    },
    {
      id: 'growth',
      title: '促進生長／改變毛髮週期',
      summary: 'Minoxidil 相關治療，延長生長期、增加毛囊血流',
      treatments: [
        mk({
          id: 'oral-minoxidil', name: '口服 Minoxidil', evidence: 'B', stars: 4, priceTier: '$', costScore: -0.2,
          sideEffects: ['多毛症（臉部、四肢毛髮增生）', '姿勢性低血壓、頭暈', '下肢水腫', '心悸（少見）'],
          notes: ['需由醫師評估心血管狀況後處方', '劑量遠低於降血壓用途劑量'],
          timeline: { onset: '約 2–3 個月開始減少落髮', visible: '4–6 個月可見增生', max: '12 個月達較穩定效果' },
          product: { type: '口服錠劑', dose: '依醫師處方，常見 0.25–2.5mg／天', appearance: '白色小型圓形藥錠' },
          brands: [
            { name: '洛寧錠', appearance: '白色小型圓形藥錠' }
          ]
        }),
        mk({
          id: 'topical-minoxidil', name: '外用 Minoxidil（2% / 5%）', evidence: 'A', stars: 4.3, priceTier: '$', costScore: 0.35, minoxTopical: true,
          sideEffects: ['初期落髮增加（休止期毛髮脫落，通常 2–8 週後緩解）', '頭皮乾癢、脫屑', '接觸性皮膚炎（少見）'],
          notes: ['需每日規律使用，中斷後效果會逐漸消退', '5% 濃度效果通常優於 2%，但刺激感也較明顯'],
          timeline: { onset: '約 2 個月：初期可能落髮增加屬正常現象', visible: '4–6 個月可見新生髮', max: '12 個月達較明顯效果，需長期維持' },
          product: { type: '外用液劑／泡沫', dose: '每日 1–2 次，每次 1ml 塗抹頭皮', appearance: '透明液體或白色泡沫，附滴管或噴頭' }
        })
      ]
    },
    {
      id: 'boost',
      title: '加強生長與營養支持',
      summary: '輔助性療程，改善頭皮環境、刺激毛囊活性',
      treatments: [
        mk({
          id: 'nutraceutical', name: '洛克靈-營養保健食品', evidence: 'C', stars: 3.2, priceTier: '$$', costScore: 0.7,
          sideEffects: ['腸胃不適（少見）'],
          notes: ['作為輔助性療法，非取代藥物治療', '含維生素、微量元素及植萃成分，證據等級較低'],
          timeline: { onset: '需持續使用 3 個月以上評估', visible: '效果因人而異', max: '建議搭配主要治療合併使用' },
          product: { type: '口服膠囊／錠劑', dose: '依產品標示，通常每日 1–2 次', appearance: '膠囊或錠劑，外觀依廠牌而異' }
        }),
        mk({
          id: 'lllt-cap', name: '生髮帽（低能量紅光／近紅外線）', evidence: 'Bplus', stars: 2.8, priceTier: '$$', costScore: 1.6,
          sideEffects: ['頭皮溫熱感（少見）', '長期安全性資料相對有限'],
          notes: ['以低能量紅光或近紅外線（LED／LLLT）刺激毛囊粒線體活性', '居家穿戴使用，需規律使用（每週數次）才有效果'],
          timeline: { onset: '約 8–12 週開始感受變化', visible: '4–6 個月可見改善', max: '需長期規律使用維持效果' },
          product: { type: '居家用穿戴儀器', dose: '依裝置說明，通常每次 15–20 分鐘、每週 3 次', appearance: '頭盔或帽狀裝置，內建紅光/近紅外線光源' }
        }),
        mk({
          id: 'lllt-laser', name: '生髮雷射（Er:YAG）', evidence: 'B', stars: 3.8, priceTier: '$$', costScore: 1.15,
          sideEffects: ['治療部位輕微刺痛、發紅', '術後短暫頭皮敏感'],
          notes: ['以 Er:YAG 雷射於頭皮進行微創換膚，刺激局部血流與生長因子釋放', '需於門診由醫師或專業人員執行，療程制'],
          timeline: { onset: '約 1–2 個月開始感受頭皮狀態改善', visible: '3–6 個月可見密度改善', max: '完整療程後評估整體效果，常需搭配藥物治療' },
          product: { type: '門診雷射療程', dose: '依療程設計，通常每 4–6 週 1 次', appearance: '無外用商品，為診間執行之雷射療程' }
        }),
        mk({
          id: 'prp', name: 'PRP 自體血小板血漿注射', evidence: 'A', stars: 4, priceTier: '$$$', costScore: 2,
          sideEffects: ['注射部位疼痛、腫脹、瘀青', '感染風險（少見）'],
          notes: ['需抽取自體血液離心製備，療程通常需 3–4 次', '效果維持時間因人而異，常需定期補強'],
          timeline: { onset: '約 1 個月開始感受頭皮狀態改善', visible: '3 個月可見毛髮變粗、密度增加', max: '完整療程後 6 個月評估整體效果' },
          product: { type: '注射治療（門診執行）', dose: '療程制，通常每 4–6 週 1 次，共 3–4 次', appearance: '無外用商品，為診間執行之注射療程' }
        }),
        mk({
          id: 'exosome', name: '外泌體（Exosome）頭皮育髮療程', evidence: 'B', stars: 3.3, priceTier: '$$$', costScore: 3.6,
          sideEffects: ['注射或導入部位輕微刺激感'],
          notes: ['新興療法，長期大型研究證據仍在累積中', '常與微針或其他導入方式合併使用'],
          timeline: { onset: '需 2–3 次療程後觀察', visible: '效果因人而異', max: '建議與醫師討論合併治療計畫' },
          product: { type: '門診導入療程', dose: '依療程設計，通常每 2–4 週 1 次', appearance: '無外用商品，為診間執行之療程' }
        })
      ]
    },
    {
      id: 'surgery',
      title: '手術治療',
      summary: '將枕部（後腦勺）健康毛囊移植至落髮區域',
      treatments: [
        mk({
          id: 'amt', name: 'AMT 自體細胞微移植', evidence: 'B', stars: 4, priceTier: '$$$', hideProduct: true,
          sideEffects: ['取皮處輕微疼痛、腫脹', '感染風險（少見）'],
          notes: ['將自體毛囊組織處理後注射至落髮區，非傳統植髮手術', '適合早期瀰漫性落髮的輔助治療'],
          timeline: { onset: '約 2–3 個月開始感受頭皮改善', visible: '4–6 個月可見細軟毛增生', max: '效果因人而異，常需搭配藥物治療' },
          product: { type: '門診手術療程', dose: '單次或依醫師評估安排療程次數', appearance: '無外用商品，為診間執行之手術療程' }
        }),
        mk({
          id: 'fue', name: '植髮手術（FUE／FUT）', evidence: 'B', stars: 5, priceTier: '$$$$$', hideProduct: true,
          sideEffects: ['術後腫脹、結痂', '暫時性休止期落髮（術後 shock loss）', '毛囊存活率因技術而異', 'FUT 另有後枕部線形疤痕、暫時性麻木感'],
          notes: ['FUE（毛囊單位摘取術）：一株一株摘取毛囊，傷口小、恢復快，不留線形疤痕，單次可移植量相對有限', 'FUT（頭皮條狀切取術）：切取整條頭皮再分離毛囊單位，單次可移植量較大，但術後有線形疤痕需以頭髮覆蓋', '實際適用術式由醫師依落髮面積與供髮區狀況評估'],
          timeline: { onset: '3 個月內移植髮多數會先脫落（正常現象）', visible: '6 個月開始長出新髮', max: '12–18 個月達最終效果' },
          product: { type: '門診／日間手術', dose: '依落髮面積評估株數，單次約 1000–3000 株以上', appearance: '無外用商品，為手術療程' }
        })
      ]
    }
  ];
}

export function getFemaleCategories() {
  const preg = '孕婦、備孕中或哺乳婦女禁止使用；服藥期間須採取有效避孕措施；不可以裸手接觸破損或壓碎的藥錠。';
  return [
    {
      id: 'antiandrogen',
      title: '抗雄性素治療',
      summary: '適用於雄性素敏感型落髮，部分藥物於育齡婦女有嚴格禁忌',
      warningBanner: '女性使用抗雄性素藥物副作用較男性明顯，可能影響月經週期及其他生理變化；現行藥物均屬 Off-label use（非核准適應症），尤其口服／外用 Finasteride 並不屬於仿單適應症，須經醫師評估溝通後謹慎使用。',
      treatments: [
        mk({
          id: 'spironolactone', name: 'Spironolactone', evidence: 'B', stars: 3, priceTier: '$', costScore: -0.35, hideProduct: true,
          warning: true, warningText: '用於女性落髮屬 Off-label use（非核准適應症）；可能造成月經週期不規則等生理變化，需與醫師充分討論後使用。',
          sideEffects: ['高血鉀（需定期抽血監測）', '月經週期不規則', '姿勢性低血壓、頭暈', '乳房脹痛'],
          notes: ['臨床上女性落髮最常用之抗雄性素藥物之一', '腎功能不全患者需謹慎評估'],
          timeline: { onset: '約 3 個月開始減緩落髮', visible: '6–12 個月可見改善', max: '需長期使用維持效果' },
          product: { type: '口服錠劑', dose: '依醫師評估，常見 25–200mg／天', appearance: '白色或黃色圓形藥錠，依廠牌而異' }
        }),
        mk({
          id: 'cpa', name: 'Cyproterone Acetate', evidence: 'B', stars: 3, priceTier: '$', costScore: 0.6, hideProduct: true,
          warning: true, warningText: '用於女性落髮屬 Off-label use（非核准適應症）；對女性生理影響較大，可能改變月經週期，需與醫師充分討論後使用。',
          sideEffects: ['月經週期改變', '體重增加', '情緒變化', '肝功能影響（需定期監測）'],
          notes: ['常搭配口服避孕藥週期性使用', '有血栓病史者須謹慎評估'],
          timeline: { onset: '約 3–6 個月開始見效', visible: '6–12 個月可見改善', max: '需持續使用維持' },
          product: { type: '口服錠劑', dose: '依醫師處方週期服用', appearance: '白色圓形藥錠' }
        }),
        mk({
          id: 'flutamide', name: 'Flutamide', evidence: 'C', stars: 3, priceTier: '$', costScore: 0.15, hideProduct: true,
          warning: true, warningText: '用於女性落髮屬 Off-label use（非核准適應症），且具肝毒性風險，需經醫師嚴密評估與監測。',
          sideEffects: ['肝毒性風險（需定期監測肝功能）', '皮膚乾燥'],
          notes: ['因肝毒性風險，臨床使用已趨保守，需嚴密追蹤肝功能'],
          timeline: { onset: '約 3 個月開始見效', visible: '6 個月可見改善', max: '需持續使用並定期監測' },
          product: { type: '口服錠劑', dose: '依醫師評估給予低劑量', appearance: '白色藥錠' }
        }),
        mk({
          id: 'oral-finasteride-f', name: '口服 Finasteride', evidence: 'B', stars: 4.5, priceTier: '$', costScore: 1.1,
          warning: true, warningText: '女性使用非該藥物核准適應症（Off-label use），且懷孕禁用：可能導致男性胎兒生殖器官發育異常。備孕婦女須先停藥；服藥期間須採取有效避孕措施；' + preg,
          sideEffects: ['月經週期改變等女性特有副作用，發生率較男性使用時明顯', '停經後婦女使用證據有限', '停藥後效果消退'],
          notes: ['非仿單核准之適應症，主要用於停經後女性落髮，育齡婦女使用需嚴格避孕並由醫師評估溝通後謹慎使用'],
          timeline: { onset: '約 6 個月開始見效', visible: '9–12 個月可見改善', max: '需長期使用維持' },
          product: { type: '口服錠劑', dose: '1mg／天', appearance: '淡橘色至棕色圓形薄膜衣錠' },
          brands: [
            { name: 'Propecia 柔沛', appearance: '淡橘色六角形薄膜衣錠', offLabel: true },
            { name: '法路寧', appearance: '淡黃色圓形薄膜衣錠', offLabel: true },
            { name: '波斯卡', appearance: '白色圓形錠', offLabel: true },
            { name: '菲那斯', appearance: '淡橘色圓形錠', offLabel: true },
            { name: '快得', appearance: '白色至淡黃色圓形錠', offLabel: true }
          ]
        }),
        mk({
          id: 'topical-finasteride-f', name: '外用 Finasteride', evidence: 'C', stars: 4, priceTier: '$$', costScore: 1.6, thumbTypeLabel: '外用劑型', singleOffLabel: true,
          warning: true, warningText: '非該藥物核准適應症（Off-label use）。雖為外用劑型，仍具全身吸收風險，可能影響月經週期等生理變化，懷孕或備孕婦女應避免使用及接觸，須經醫師評估後謹慎使用。',
          sideEffects: ['局部頭皮刺激（少見）', '仍有全身吸收致生理變化之風險'],
          notes: ['吸收量低於口服劑型，但屬非仿單適應症，育齡婦女仍建議謹慎評估'],
          timeline: { onset: '約 4 個月開始感受變化', visible: '6–9 個月可見效果', max: '需長期使用維持' },
          product: { type: '外用液劑／噴霧', dose: '每日 1 次塗抹於頭皮', appearance: '透明無色至淡黃色液體' }
        })
      ]
    },
    {
      id: 'growth',
      title: '促進生長／改變毛髮週期',
      summary: 'Minoxidil 相關治療，為女性落髮的一線用藥',
      treatments: [
        mk({
          id: 'oral-minoxidil-f', name: '口服 Minoxidil', evidence: 'A', stars: 4, priceTier: '$', costScore: -0.2,
          sideEffects: ['多毛症（臉部細毛增生較男性明顯，常見顧慮）', '姿勢性低血壓、頭暈', '下肢水腫'],
          notes: ['劑量通常低於男性使用劑量，需由醫師評估心血管狀況'],
          timeline: { onset: '約 2–3 個月開始減少落髮', visible: '4–6 個月可見增生', max: '12 個月達較穩定效果' },
          product: { type: '口服錠劑', dose: '依醫師處方，常見 0.25–1.25mg／天', appearance: '白色小型圓形藥錠' },
          brands: [
            { name: '洛寧錠', appearance: '白色小型圓形藥錠' }
          ]
        }),
        mk({
          id: 'topical-minoxidil-f', name: '外用 Minoxidil（2% / 5%）', evidence: 'A', stars: 4.3, priceTier: '$', costScore: 0.35, minoxTopical: true,
          sideEffects: ['初期落髮增加（通常 2–8 週後緩解）', '頭皮乾癢、脫屑', '若濃度過高，臉部細毛增生機率較男性明顯'],
          notes: ['女性常建議自 2% 濃度或女性專用低刺激配方開始使用'],
          timeline: { onset: '約 2 個月：初期可能落髮增加屬正常現象', visible: '4–6 個月可見新生髮', max: '12 個月達較明顯效果，需長期維持' },
          product: { type: '外用液劑／泡沫', dose: '每日 1–2 次，每次 1ml 塗抹頭皮', appearance: '透明液體或白色泡沫' }
        })
      ]
    },
    {
      id: 'boost',
      title: '加強生長與營養支持',
      summary: '輔助性療程，改善頭皮環境、刺激毛囊活性',
      treatments: [
        mk({
          id: 'nutraceutical-f', name: '洛克靈-營養保健食品', evidence: 'C', stars: 3.2, priceTier: '$$', costScore: 0.7,
          sideEffects: ['腸胃不適（少見）'],
          notes: ['作為輔助性療法，非取代藥物治療'],
          timeline: { onset: '需持續使用 3 個月以上評估', visible: '效果因人而異', max: '建議搭配主要治療合併使用' },
          product: { type: '口服膠囊／錠劑', dose: '依產品標示，通常每日 1–2 次', appearance: '膠囊或錠劑，外觀依廠牌而異' }
        }),
        mk({
          id: 'lllt-cap-f', name: '生髮帽（低能量紅光／近紅外線）', evidence: 'B', stars: 2.8, priceTier: '$$', costScore: 1.6,
          sideEffects: ['頭皮溫熱感（少見）'],
          notes: ['以低能量紅光或近紅外線（LED／LLLT）刺激毛囊粒線體活性，需規律使用（每週數次）才有效果', '女性研究資料同樣支持其安全性'],
          timeline: { onset: '約 8–12 週開始感受變化', visible: '4–6 個月可見改善', max: '需長期規律使用維持效果' },
          product: { type: '居家用穿戴儀器', dose: '依裝置說明，通常每次 15–20 分鐘、每週 3 次', appearance: '頭盔或帽狀裝置，內建紅光/近紅外線光源' }
        }),
        mk({
          id: 'lllt-laser-f', name: '生髮雷射（Er:YAG）', evidence: 'C', stars: 3.8, priceTier: '$$', costScore: 1.15,
          sideEffects: ['治療部位輕微刺痛、發紅', '術後短暫頭皮敏感'],
          notes: ['以 Er:YAG 雷射於頭皮進行微創換膚，刺激局部血流與生長因子釋放，需於門診執行'],
          timeline: { onset: '約 1–2 個月開始感受頭皮狀態改善', visible: '3–6 個月可見密度改善', max: '完整療程後評估整體效果，常需搭配藥物治療' },
          product: { type: '門診雷射療程', dose: '依療程設計，通常每 4–6 週 1 次', appearance: '無外用商品，為診間執行之雷射療程' }
        }),
        mk({
          id: 'prp-f', name: 'PRP 自體血小板血漿注射', evidence: 'B', stars: 4, priceTier: '$$$', costScore: 2,
          sideEffects: ['注射部位疼痛、腫脹、瘀青'],
          notes: ['療程通常需 3–4 次，效果維持時間因人而異'],
          timeline: { onset: '約 1 個月開始感受頭皮狀態改善', visible: '3 個月可見毛髮變粗、密度增加', max: '完整療程後 6 個月評估整體效果' },
          product: { type: '注射治療（門診執行）', dose: '療程制，通常每 4–6 週 1 次，共 3–4 次', appearance: '無外用商品，為診間執行之注射療程' }
        }),
        mk({
          id: 'exosome-f', name: '外泌體（Exosome）頭皮育髮療程', evidence: 'C', stars: 3.3, priceTier: '$$$', costScore: 3.6,
          sideEffects: ['注射或導入部位輕微刺激感'],
          notes: ['新興療法，長期大型研究證據仍在累積中'],
          timeline: { onset: '需 2–3 次療程後觀察', visible: '效果因人而異', max: '建議與醫師討論合併治療計畫' },
          product: { type: '門診導入療程', dose: '依療程設計，通常每 2–4 週 1 次', appearance: '無外用商品，為診間執行之療程' }
        })
      ]
    },
    {
      id: 'surgery',
      title: '手術治療',
      summary: '女性落髮多為瀰漫性，手術適用性需醫師個別評估',
      treatments: [
        mk({
          id: 'amt-f', name: 'AMT 自體細胞微移植', evidence: 'C', stars: 4, priceTier: '$$$', hideProduct: true,
          sideEffects: ['取皮處輕微疼痛、腫脹'],
          notes: ['適合早期局部落髮的輔助治療，瀰漫性落髮效果有限'],
          timeline: { onset: '約 2–3 個月開始感受頭皮改善', visible: '4–6 個月可見細軟毛增生', max: '效果因人而異，常需搭配藥物治療' },
          product: { type: '門診手術療程', dose: '單次或依醫師評估安排療程次數', appearance: '無外用商品，為診間執行之手術療程' }
        }),
        mk({
          id: 'fue-f', name: '植髮手術（FUE／FUT）', evidence: 'C', stars: 4.5, starsOverride: '★★★★?', priceTier: '$$$$$', hideProduct: true,
          sideEffects: ['術後腫脹、結痂', '暫時性休止期落髮'],
          notes: ['女性因整體毛髮瀰漫性稀疏、供髮區與受髮區對比不明顯，適用性需醫師詳細評估，非所有病患皆適合'],
          timeline: { onset: '3 個月內移植髮多數會先脫落（正常現象）', visible: '6 個月開始長出新髮', max: '12–18 個月達最終效果' },
          product: { type: '門診／日間手術', dose: '依評估結果決定是否施作及株數', appearance: '無外用商品，為手術療程' }
        })
      ]
    }
  ];
}

export const NORWOOD_STAGES = [
  { id: 'I', title: '第 I 期', desc: '髮際線正常，無明顯落髮，作為分期比較基準。' },
  { id: 'II', title: '第 II 期', desc: '前額兩側髮際線開始輕微後退，呈現對稱的三角形凹陷。' },
  { id: 'III', title: '第 III 期', desc: '前額髮際線明顯後退，是臨床上可診斷雄性禿的最早分期；部分患者以頭頂稀疏為主（III vertex）。' },
  { id: 'IV', title: '第 IV 期', desc: '前額後退與頭頂稀疏區域擴大，兩者之間仍有一條頭髮帶相連。' },
  { id: 'V', title: '第 V 期', desc: '前額與頭頂的落髮區域擴大且逐漸靠近，中間頭髮帶變窄。' },
  { id: 'VI', title: '第 VI 期', desc: '前額與頭頂落髮區域融合相連，中間頭髮帶消失。' },
  { id: 'VII', title: '第 VII 期', desc: '最嚴重分期，僅枕部與兩側頭皮保留一圈狹窄的髮帶。' }
];

export const FEMALE_STAGES = [
  { id: 'I', title: 'Ludwig I 級', desc: '頭頂中線頭皮開始輕微變寬，頭髮整體密度略降，通常不易自覺。' },
  { id: 'II', title: 'Ludwig II 級', desc: '頭頂中線明顯變寬，頭皮可見度增加，呈現「聖誕樹型」分布（前額中央較寬、向後漸窄）。' },
  { id: 'III', title: 'Ludwig III 級', desc: '頭頂瀰漫性稀疏更明顯，頭皮大面積可見，但前額髮際線通常仍保留，與男性型落髮不同。' }
];

export const MALE_FAQ = [
  { q: '雄性禿會不會自己好？', a: '雄性禿是漸進性的慢性病程，通常不會自行痊癒，越早介入治療效果越好，建議及早就醫評估。' },
  { q: '藥物治療要吃多久？', a: '雄性禿為慢性且持續性的落髮，藥物需長期規律使用以維持效果，停藥後效果會逐漸消退，需與醫師討論長期治療計畫。' },
  { q: '可以同時使用多種治療方式嗎？', a: '臨床上常合併口服藥物、外用藥物與輔助療程（如 LLLT、PRP）以提升效果，實際搭配方式建議由醫師依個人狀況評估。' },
  { q: '植髮後原本的頭髮會不會繼續掉？', a: '植髮手術移植的毛囊不受 DHT 影響，通常不會再落髮；但原生區域若未接受藥物治療，仍可能持續進行性落髮，建議術後搭配藥物治療。' },
  { q: '生髮相關產品有副作用嗎？', a: '各類治療皆有各自可能的副作用，詳見上方治療比較表格；用藥前請與醫師充分討論病史與潛在風險。' }
];

export const FEMALE_FAQ = [
  { q: '女性落髮一定是雄性禿嗎？', a: '不一定。女性瀰漫性落髮成因多元，包含休止期落髮、甲狀腺功能異常、缺鐵性貧血、多囊性卵巢症候群（PCOS）等，建議由醫師詳細評估、必要時安排抽血檢查以排除其他病因。' },
  { q: '為什麼有些抗雄性素藥物女性不能隨便用？', a: 'Finasteride、Dutasteride 屬於 5α-reductase 抑制劑，對懷孕中的男性胎兒有致畸胎風險，因此育齡婦女使用前必須確認未懷孕並落實有效避孕措施，詳見表格中的紅色警示說明。' },
  { q: '停經後還可以治療落髮嗎？', a: '可以，停經後女性使用抗雄性素藥物的疑慮相對較低，仍建議由醫師評估整體健康狀況後選擇合適療法。' },
  { q: '外用 Minoxidil 會讓臉上長毛嗎？', a: '少數使用者可能出現臉部細毛增生，通常與濃度和個人體質有關，停藥後多可恢復，可與醫師討論調整濃度或劑型。' },
  { q: '生產後大量落髮也是雄性禿嗎？', a: '產後大量落髮多屬於「休止期落髮」，通常在產後 2–4 個月開始、多在 6–12 個月內逐漸恢復，與雄性禿的漸進式落髮型態不同，建議至門診由醫師鑑別診斷。' }
];

// ---------- 自我落髮檢測問卷（計分式，依各型態落髮特徵評分） ----------
export const SELF_CHECK_RESULT_INFO = {
  male_aga: {
    title: '較符合「雄性禿（男性型落髮）」特徵',
    desc: '您描述的落髮型態、好發部位與家族史，較符合男性型雄性禿（AGA）的常見表現。雄性禿為漸進式落髮，與遺傳體質及雄性素代謝相關，早期介入治療效果較好。',
    goLabel: '查看雄性禿男性版完整衛教內容', goGender: 'male'
  },
  female_aga: {
    title: '較符合「女性形態落髮（女性雄性禿）」特徵',
    desc: '您描述的瀰漫性稀疏型態，較符合女性型雄性禿（FPHL）的常見表現，但仍需排除甲狀腺功能異常、缺鐵性貧血、多囊性卵巢症候群等其他內分泌或全身性因素。',
    goLabel: '查看雄性禿女性版完整衛教內容', goGender: 'female'
  },
  acute_telogen: {
    title: '較符合「急性休止期落髮」特徵',
    desc: '短期內大量落髮，且伴隨明確誘因（如手術、生產、外傷、飲食改變、壓力或環境改變等），較符合急性休止期落髮（Acute Telogen Effluvium）的表現。多數會在誘因移除後數月內逐漸恢復。'
  },
  chronic_telogen: {
    title: '較符合「慢性休止期落髮」特徵',
    desc: '持續較長時間、反覆或波動性的瀰漫性落髮，較符合慢性休止期落髮的表現，成因可能包含長期壓力、甲狀腺功能異常、鐵質缺乏等，建議進一步檢查以找出潛在原因。'
  },
  areata: {
    title: '較符合「圓禿」特徵',
    desc: '局部邊界清楚的落髮區塊，甚至合併眉毛、睫毛或體毛脫落，較符合圓禿（Alopecia Areata）的表現，為自體免疫相關疾病，建議儘早就診、及早介入治療效果較好。'
  },
  other: {
    title: '型態較不典型，建議由醫師進一步鑑別',
    desc: '您所描述的情形無法明確歸類至單一常見落髮型態。落髮成因多元，建議由醫師詳細問診、理學檢查，並安排必要的進一步檢查以確認病因。'
  }
};

export const SELF_CHECK_QUESTIONS = [
  {
    id: 'q1_gender', text: '請問您的性別是？', type: 'single',
    options: [
      { label: '男', points: { male_aga: 1, acute_telogen: 1, chronic_telogen: 1, areata: 1, other: 1 } },
      { label: '女', points: { female_aga: 1, acute_telogen: 1, chronic_telogen: 1, areata: 1, other: 1 } }
    ]
  },
  {
    id: 'q2_pcos', text: '是否有月經週期不規則、手腳等體毛較為茂盛、容易長痘痘的情形？', type: 'single',
    showIf: (a) => a.q1_gender === '女',
    options: [
      { label: '是', points: { female_aga: 1 } },
      { label: '否', points: {} }
    ]
  },
  {
    id: 'q3_age', text: '請問您的年齡區間是？', type: 'single',
    options: [
      { label: '20 歲以下', points: { areata: 1, acute_telogen: 1, other: 1 } },
      { label: '20–35 歲', points: { male_aga: 1, female_aga: 1, chronic_telogen: 1 } },
      { label: '35–50 歲', points: { male_aga: 2, female_aga: 2, chronic_telogen: 1 } },
      { label: '50 歲以上', points: { male_aga: 2, female_aga: 2, chronic_telogen: 2 } }
    ]
  },
  {
    id: 'q4_type', text: '落髮型態比較接近下列何者？', type: 'single',
    options: [
      { label: '局部落髮（特定區塊）', points: { areata: 3, other: 1 } },
      { label: '瀰漫性落髮（整體均勻變稀疏）', points: { male_aga: 1, female_aga: 1, acute_telogen: 1, chronic_telogen: 1, other: 1 } }
    ]
  },
  {
    id: 'q5_patch', text: '頭皮上是否有一塊或多塊「邊界清楚」的落髮區塊？', type: 'single',
    options: [
      { label: '是', points: { areata: 3 } },
      { label: '否', points: {} }
    ]
  },
  {
    id: 'q6_distribution', text: '落髮主要分佈在哪些部位？（可多選）', type: 'multi',
    options: [
      { label: '頭頂', points: { male_aga: 1, female_aga: 1, acute_telogen: 1, chronic_telogen: 1 } },
      { label: '頭髮分線變寬（頭頂中線）', points: { female_aga: 2, acute_telogen: 1, chronic_telogen: 1 } },
      { label: '前額髮際線後退', points: { male_aga: 2, acute_telogen: 1, chronic_telogen: 1 } },
      { label: '雙邊顳側', points: { acute_telogen: 1, chronic_telogen: 1 } },
      { label: '枕側（後腦）', points: { acute_telogen: 1, chronic_telogen: 1 } },
      { label: '其他部位', points: { acute_telogen: 1, chronic_telogen: 1 } },
      { label: '沒有特別集中的部位', points: {} }
    ]
  },
  {
    id: 'q7_brow', text: '眉毛、睫毛或手腳毛是否也有脫落的情形？', type: 'single',
    options: [
      { label: '是', points: { areata: 2 } },
      { label: '否', points: {} }
    ]
  },
  {
    id: 'q8_duration', text: '落髮持續的時間大約多久？', type: 'single',
    options: [
      { label: '30 天內', points: { acute_telogen: 2, areata: 1, other: 1 } },
      { label: '1–3 個月內', points: { areata: 1, other: 1 } },
      { label: '3 個月到 2 年', points: { male_aga: 1, female_aga: 1, chronic_telogen: 2, other: 1 } },
      { label: '2 年以上', points: { male_aga: 2, female_aga: 2, chronic_telogen: 2, other: 1 } }
    ]
  },
  {
    id: 'q9_trigger', text: '開始察覺落髮前的半年內，是否有體重明顯下降、手術、外傷、飲食習慣改變、工作壓力或環境改變、生產等情形？', type: 'single',
    options: [
      { label: '是', points: { acute_telogen: 2, chronic_telogen: 1 } },
      { label: '否', points: {} }
    ]
  },
  {
    id: 'q10_family', text: '三等親內的家人是否也有落髮的問題？', type: 'single',
    options: [
      { label: '是', points: { male_aga: 2, female_aga: 2 } },
      { label: '否 / 不確定', points: {} }
    ]
  }
];
