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
    accent: '#d2ac53',
    'var-orange': '#F7921D',
    'var-red': '#ED2024',
    'var-sky': '#3FBAEB',
    'var-yellow': '#F4D90D',
    'var-blue': '#3D58A7',
    'var-pink': '#EE3291',
    'var-light-pink': '#F4BAD5',
    'var-purple': '#8E4E9F',
    'var-white': '#D8D9D9',
    'var-green': '#178942',
   },
   boxShadow: {
    'calc-btn': '2px 2px 5px rgba(0, 0, 0, 0.4), -1px -1px 2px rgba(255, 255, 255, 0.1)',
   },
   keyframes: {
    rotateX: {
     '0%': {
      opacity: '0',
      transform: 'rotateX(-90deg)',
     },
     '50%': {
      transform: 'rotateX(-20deg)',
     },
     '100%': {
      opacity: '1',
      transform: 'rotateX(0deg)',
     },
    },
   },
   animation: {
    'rotate-x': 'rotateX 300ms ease-in-out forwards',
   },
  },
  screens: {
   'lg-mb': '500px',
   tablet: '780px',
   desktop: '1221px',
  },
 },
 plugins: [],
}
export default config
