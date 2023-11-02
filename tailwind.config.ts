import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        photoshop: "url('/img/Photoshop.jpg')",
        'photoshop-ovr': "url('/img/Photoshop-ovr.jpg')",
        illustrator: "url('/img/Illustrator.jpg')",
        'illustrator-ovr': "url('/img/Illustrator-ovr.jpg')",
      },
      colors: {},
    },
  },
  plugins: [],
}
export default config
