/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {
      spacing:{
        '5.5': '350px',
      },
      backgroundImage:{
        'custom-image': "url('./images/header/banner.png.webp')", 
        'custom-image-dog':"url('./images/dog-service/service_icon_bg_1.png.webp')",
        'custom-image-contact':"url('./images/header/contact_bg.png.webp')"
      },
      colors:{
        prm:{
          500: "#fc6518",
          400:"#e82619",
        },
      },
    },
  },
  plugins: [],
}

