module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
      
        purpleDark: "#774DD6",
        purple: "#8257E5",
        gray: "#f0f0f7",
        grayText: "#9C98A6",
        grayTextBase: "#6a6180",
        // red: "#E33D3D",

        // secondary: "#373B53",
        // primary: "#6F52ED",
        cinza: "#D5D9E0",
        grayBackground: "#F8F8FB",
        blueS: "#7FC2FF",
        blueBlack: "#5FABE6",

        secondary: "#3F3D56",
        primary: "#7FC2FF",
        primaryDark: "#81BBF0",
        

      },
      textColor: {
        primary: "#fffff",
        secondary: "#373B53"
      },
      container: {
        center: true
      },
      fontFamily: {
        // Shown in the SocialBar component as font-open-sans
        'open-sans': '"Open Sans", Helvetica, Arial, sans-serif',
      },
      height: {
        hOverflow: '490px',
        hList: '380px'
      }
      
    },
  
  },
  variants: {},
  plugins: []
};
