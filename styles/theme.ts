
export enum FontNames {
  overpass = 'overpass',
  notoSans = 'notoSans',
}

const fontCategories = ['body']

interface Theme {
  fonts: {
      face: Record<FontNames, string>;
      spec: Record<typeof fontCategories[number], string>
  };
    media: {
        desktopLarge: string,
        desktop: string,
        tablet: string,
        mobile: string,
    };
    colors: {
        primary: string,
        secondary: string,
        accent: string,
        bg: string,
    }
}

export const colors = {
    primary: '#ebf2fa',
    secondary: '#607196',
    accent: '#f3c969',
    bg: '#011300'
}

export const fonts: Theme['fonts'] = {
    face: {
        [FontNames.notoSans]: "'notoSans', sans-serif",
        [FontNames.overpass]: "'overpass', sans-serif",
    },
    spec: {
        body: `
            font-family: '${FontNames.notoSans}', sans-serif;
            font-style: normal;
            font-size: 16px;
            font-weight: 300;
            letter-spacing: 0.7px;
            color: ${colors.primary};
            background-color: ${colors.bg};
        `
    }
}

export const media: Theme['media'] = {
    desktopLarge: '(min-width: 1200px)',
    desktop: '(min-width: 992px)',
    tablet: '(min-width: 768px)',
    mobile: '(min-width: 576px)',
}

const theme: Theme = {
    fonts,
    media,
    colors
} as const;

export default theme;