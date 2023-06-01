import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: normal;
  gap: 20px;
  margin-top: 64px;

  @media screen and (${theme.media.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const Imag = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0.8;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.4);
  -moz-box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.4);
  box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.4);

  &:hover {
    opacity: 1;

    -webkit-box-shadow: 0px 0px 20px 4px rgba(196, 253, 228, 0.6);
    -moz-box-shadow: 0px 0px 20px 4px rgba(196, 253, 228, 0.6);
    box-shadow: 0px 0px 20px 4px rgba(196, 253, 228, 0.6);
  }

  transition: all 400ms;
`;

export const Content = styled.div``;
export const Heading = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const Description = styled.a``;
