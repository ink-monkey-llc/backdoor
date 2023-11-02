export const exeData = [
  {
    name: 'Photoshop',
    url: 'adbps://',
    img: 'Photoshop.jpg',
    hov: 'Photoshop-ovr.jpg',
  },
  {
    name: 'Illustrator',
    url: 'adbai://',
    img: 'Illustrator.jpg',
    hov: 'Illustrator-ovr.jpg',
  },
  {
    name: 'Ai',
    url: 'https://firefly.adobe.com/upload/inpaint',
    img: 'Adobe-AI.jpg',
    hov: 'Adobe-AI-ovr.jpg',
  },
  {
    name: 'Shopify',
    url: 'https://admin.shopify.com/store/7c5018-3',
    img: 'Shopify.jpg',
    hov: 'Shopify-ovr.jpg',
  },
  {
    name: 'Midjourney',
    url: 'https://discord.com/channels/662267976984297473/1008571105990160476',
    img: 'Mid-Journey.jpg',
    hov: 'Mid-Journey-ovr.jpg',
  },
  {
    name: 'Wix',
    url: 'https://manage.wix.com/dashboard/ca7fd259-4161-4cce-b4ef-f4ff60906470/home',
    img: 'Wix.jpg',
    hov: 'Wix-ovr.jpg',
  },
]

export type ExeItem = {
  name: string
  url: string
  img: string
  hov: string
}

export type ExeData = typeof exeData
