export const SITE_NAME = 'E.sheen 黃易欣皮膚專科';
export const SITE_NAME_EN = 'E.sheen Dermatology';
export const SITE_TAGLINE = '皮膚專科醫師・黃易欣';
export const SITE_DESCRIPTION =
  '皮膚專科醫師黃易欣的衛教與門診資訊：落髮（雄性禿、休止期落髮、圓禿）、酒糟、青春痘等常見皮膚疾病的成因與治療選擇，以及醫學美容與門診預約。';

export const DOCTOR_NAME = '黃易欣';
export const DOCTOR_TITLE = '皮膚專科醫師';

// 落髮衛教專區在站內的子品牌
export const HAIR_SECTION_NAME = '毛囊研究所';
export const HAIR_SECTION_NAME_EN = 'Follicle School';
export const HAIR_SECTION_BASE = '/follicle-school';

// 落髮頁的 <title> 後綴。頁首掛的是 HAIR_SECTION_NAME 這組子品牌，但標題另外
// 帶上醫師名字，搜尋結果才看得出這些衛教是誰寫的。
export const HAIR_SITE_NAME = '毛囊研究所｜黃易欣皮膚專科';

// Shown above the treatment comparison on both AGA pages.
export const COST_DISCLAIMER =
  '下列治療效果與費用會因院所、醫師操作及個人體質而有所不同，圖表僅供衛教參考，非實際療效或收費承諾；實際治療計畫與費用請以醫師當面診察評估之結果為主。';

export const MEDICAL_DISCLAIMER =
  '本網站所提供之衛教內容僅供一般教育參考之用，非個人化醫療建議，無法取代醫師之當面診斷、評估與處方。皮膚與落髮問題成因多元，實際治療方式請務必經皮膚科醫師檢查後共同討論決定。';

// Booking goes to the clinic's PinMed page. The URL the clinic hands out
// carries Google-Reserve attribution (rwg_token, utm_*) from whichever ad
// click produced it; that token is not ours to re-publish and can expire, so
// the site links to the plain appointment URL.
export const CONTACT_LINKS = [
  { id: 'instagram', label: 'Instagram', iconOnly: true, href: 'https://www.instagram.com/e.sheen_derma/' },
  { id: 'facebook', label: 'Facebook', iconOnly: true, href: 'https://www.facebook.com/profile.php?id=61586028155642' },
  { id: 'line', label: 'LINE', iconOnly: true, href: 'https://lin.ee/N2hiCQl' },
  { id: 'booking', label: '線上掛號', href: 'https://pinmed.co/clinic/df31ioxp?openAppointment=true' },
];
