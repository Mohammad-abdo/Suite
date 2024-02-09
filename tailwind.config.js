/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/Components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens:{
    xl:'1920px'
      },
      colors:{
      suite_dark:'#181818',
      suite_section:'#212121',
      suite_button:'#554DB7',
      shite_input_text:'#D6D6D6'
      },
      fontFamily:{
        bodyFont:[' Nunito Sans', 'sans-serif']
      }
    },
  },

    plugins: [
 
  ]
   
}

