export enum FontNames {
  // eslint-disable-next-line no-unused-vars
  overpass = 'overpass',
  // eslint-disable-next-line no-unused-vars
  notoSans = 'notoSans',
}

const fontCategories = ['body', 'heading1'];

interface Theme {
  fonts: {
    face: Record<FontNames, string>;
    spec: Record<(typeof fontCategories)[number], string>;
  };
  media: {
    desktopLarge: string;
    desktop: string;
    tablet: string;
    mobile: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
}

export const colors = {
  primary: '#c4fde4',
  secondary: '#607196',
  accent: '#f3c969',
  bg: '#011300',
};

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
        `,
    heading1: `
            font-family: '${FontNames.overpass}', sans-serif;
            font-size: 82px;
            font-weight: 700;
            line-height: 1;
        `,
  },
};

export const media: Theme['media'] = {
  desktopLarge: '(min-width: 1200px)',
  desktop: '(min-width: 992px)',
  tablet: '(min-width: 768px)',
  mobile: '(min-width: 576px)',
};

const theme: Theme = {
  fonts,
  media,
  colors,
} as const;

export default theme;
