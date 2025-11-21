/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  safelist: [
    // Add classes that should not be purged
    'flowbite',
    // ... other classes
  ],
  theme: {

    extend: {
      screens: {
        // 1080p 及以上
        fhd: { raw: "(min-width: 1920px) and (min-height: 1080px)" },
        // ✅ 新增：2K / 1440p 及以上
        qhd: { raw: "(min-width: 2560px) and (min-height: 1440px)" },
        // 4K 及以上
        uhd: { raw: "(min-width: 3840px) and (min-height: 2160px)" },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
        'inter': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif', 'Open Sans', 'Roboto', 'Poppins']
      },
      fontSize: {
        'xxs': '0.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '75': '19.5rem',
        '80.5': '20.25rem',
        '105': '29rem',
        '108': '34rem',
      },
      colors: {
        'primary': '#e5b0ff',
        '$borderColor': '#E6B0FF',
        'secondary': '#5D3B66',
        'tertiary': '#7F5381',
        'quaternary': '#A67399',
        'quinary': '#C999BA',
        'senary': '#EDC2D8',
        'septenary': '#F6E3F0',
        'octonary': '#FBF8FC',
        'novanary': '#FDFDFE',
        'denary': '#F7F7F7',
        'primary-dark': '#270029',
        'primary-light': '#633B66',
        'secondary-dark': '#5D3B66',
        'secondary-light': '#8A638F',
        'tertiary-dark': '#7F5381',
      },
      lineHeight: {
        'leading-2': '0.5rem'
      },
      gridTemplateColumns: {
        'yang': '1fr 1fr'
      }
    },
  },
  plugins: [require('flowbite/plugin')({
    charts: true,
  })],
}

