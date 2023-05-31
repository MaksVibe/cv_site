
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
}

interface ResponsiveValues {
  mobile?: number;
  tablet?: number;
  desktop?: number;
}

export const fonts: Theme['fonts'] = {
    face: {
        [FontNames.notoSans]: "'notoSans', sans-serif",
        [FontNames.overpass]: "'overpass', sans-serif",
    },
    spec: {
        body: `
            font-family: '${FontNames.notoSans}', sans-serif
        `
    }
}

const theme: Theme = {
  fonts,
} as const;

export default theme;