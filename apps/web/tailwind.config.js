/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'grayimp': 'rgb(107 114 128 / 1) !important',
        'noneimp': 'transparent !important'
      },
      screens: {
        'vlg': {'min': '968px'},
        'vvsm': {'min': '0px', 'max': '436px'},
        'vsm': {'min': '437px', 'max': '639px'},
        'mlg': {'min': '1025px', 'max': '1180px'}
        
      },
      transitionProperty: {
        'right': 'right',
        'max-height': 'max-height'
      },
      boxShadow: {
        'custom': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'nav': 'inset 0px -1px 0 0 #333',
      },
      height: {
        'calc' : 'calc(100dvh - 60px)'
      },
      minHeight: {
        'calc' : 'calc(100dvh - 60px)'
      }
    },
  },
  plugins: [nextui(),require('tailwindcss-animate')],
  darkMode: 'selector',
}