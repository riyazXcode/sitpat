/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors:{
          'bg-grey':'#424645',
          'main-blue':'#54E2EF',
          'main-red':'#FF4C4C',
          'main-yellow':'#FFF767',
          'main-cyan-green':'#30D2B2',
          'dashboard-bg': '#EDEDED'    
        }
      },
    },
    plugins: [],
  }