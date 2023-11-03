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
      colors: {
        calc: '#333',
        'calc-bg': '#1A1A1A',
      },
      boxShadow: {
        'calc-btn': '2px 2px 5px rgba(0, 0, 0, 0.4), -1px -1px 2px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
