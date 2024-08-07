export const exeData = [
 {
  id: 'ff',
  name: 'Ai',
  url: 'https://firefly.adobe.com/upload/inpaint',
  img: 'ff.png',
  hov: 'ff-hover.png',
 },
 {
  id: 'shop',
  name: 'Shopify',
  url: 'https://admin.shopify.com/store/7c5018-3',
  img: 'shop.png',
  hov: 'shop-hover.png',
 },
 {
  id: 'ai',
  name: 'Illustrator',
  url: 'adbai://',
  img: 'ai.png',
  hov: 'ai-hover.png',
 },
 {
  id: 'ps',
  name: 'Photoshop',
  url: 'adbps://',
  img: 'ps.png',
  hov: 'ps-hover.png',
 },
]

export type ExeItem = {
 id: string
 name: string
 url: string
 img: string
 hov: string
}

export type ExeData = typeof exeData
