import styled from 'styled-components';
import theme from '../../../styles/theme';
import { desktopLargeWidth, desktopPadding, desktopWidth, mobilePadding, mobileWidth, tabletPadding, tabletWidth } from '../../../styles/vars';

export const Container = styled.div`
    max-width: ${mobileWidth}px;
    padding: 0 ${mobilePadding}px;
    margin: 0 auto;

    @media screen and (${theme.media.tablet}) {
    max-width: ${tabletWidth}px;
    padding: 0 ${tabletPadding}px;
    }

    @media screen and (${theme.media.desktop}) {
    max-width: ${desktopWidth}px;
    padding: 0 ${desktopPadding}px;
    }

    @media screen and (${theme.media.desktopLarge}) {
    max-width: ${desktopLargeWidth}px;
    }
`;
