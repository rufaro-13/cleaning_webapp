/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navcolour':'#040226',
        'orangetheme':'#ff7f0f',
        'bluetheme':'#89cff0',
        'red':'#ff0000'
      },

      backgroundImage: {
        'hero_pattern': "url('/src/images/full-shot-people-cleaning-office.jpg')",
        'bathroom':"url('/src/images/mature-woman-cleans-tile-bathroom.jpg')",
        
      },

      fontFamily: {
        //'sans': ['Proxima Nova'],
        'cursive':['Lucida Handwriting'],
        'malanya':['malanya'],
      }

    },
  },
  plugins: [require('flowbite/plugin')],
}

