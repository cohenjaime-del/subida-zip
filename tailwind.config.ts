import { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        amitysGreen: '#2F855A',
        amitysLightGreen: '#A3E635',
        amitysWhite: '#FFFFFF',
        amitysGray: '#F7FAF7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config