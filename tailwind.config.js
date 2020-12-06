module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
      
        pink: "#ED4A71",
        black: "#000",
        blue: "#C0FFFF",
        blue2:"#2B478B",
        green: '#066A71',
        greenBold: '#05494D',
        green3: '#1BDF64',
        green2: '#05494D',
        blueLight: '#C0FFFF'

      },
      textColor: {
        primary: "#fffff",
        secondary: "#c7d0d8"
      },
      container: {
        center: true
      },
      fontFamily: {
        // Shown in the SocialBar component as font-open-sans
        'open-sans': '"Open Sans", Helvetica, Arial, sans-serif',
      },
    },
  
  },
  variants: {},
  plugins: []
};
