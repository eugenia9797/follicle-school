export const SITE_NAME = '毛囊研究所';
export const SITE_NAME_EN = 'Follicle School';
export const SITE_TAGLINE = '皮膚科落髮衛教專區';
export const SITE_DESCRIPTION =
  '皮膚科落髮衛教專區：認識雄性禿、休止期落髮與圓禿的成因、分期與治療選擇，並提供自我落髮檢測，協助您與醫師討論合適的治療方向。';

// Shown above the treatment comparison on both AGA pages.
export const COST_DISCLAIMER =
  '下列治療效果與費用會因院所、醫師操作及個人體質而有所不同，象限圖與表格僅供衛教參考，非實際療效或收費承諾；實際治療計畫與費用請以醫師當面診察評估之結果為主。';

export const MEDICAL_DISCLAIMER =
  '本網站所提供之衛教內容僅供一般教育參考之用，非個人化醫療建議，無法取代醫師之當面診斷、評估與處方。落髮成因多元，實際治療方式請務必經皮膚科醫師檢查後共同討論決定。';

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
