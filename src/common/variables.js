export const breakpoints = {
  mobile: 350,
  tablet: 768,
  laptop: 1024,
  laptopM: 1280,
  laptopL: 1440,
  desktop: 1600,
  desktopL: 1800,
};

export const variables = {
  colors: {
    black: '#000000',
    black2: '#1A1B1D',
    blue: '#4460F7',
    grey: '#F2F2F2',
    grey2: '#9194A5',
    grey3: '#B1B5C9',
    grey4: '#E0E2EA',
    orange: '#F9A52B',
    red: '#CD5C5C',
    green: '#3CB371',
    white: '#FFFFFF',
  },
  mediaQueries: {
    mobile: `screen and (min-width: ${breakpoints.mobile}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    laptop: `screen and (min-width: ${breakpoints.laptop}px)`,
    laptopM: `screen and (min-width: ${breakpoints.laptopM}px)`,
    laptopL: `screen and (min-width: ${breakpoints.laptopL}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
    desktopL: `screen and (min-width: ${breakpoints.desktopL}px)`,
  },
  paddings: {
    button: '11px 24px',
    mainMobile: '0 25px',
    mainTablet: '0 50px',
    mainLaptop: '0 108px',
  },
  paths: {
    img: 'common/img/',
  },
};