import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#1b4079',
        'primary-white': '#fbfef9',
        'secondary': '#e5e5e5',
        'secondary-blue': '#5aa9e6',
      },
      textColor: {
        'primary': '#fbfef9',
        'primary-blue': '#1b4079',
        'secondary-blue': '#5aa9e6',
      },
    },
  },
  plugins: [],
}
export default config
