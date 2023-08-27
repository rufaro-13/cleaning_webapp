/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
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
        'team_work':"url('/src/images/team_4540467 (1).png')",
        
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

