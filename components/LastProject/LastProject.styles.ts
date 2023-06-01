import styled from 'styled-components';
import ProjImg from '../../assets/images/cc-proj.png';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
`;

export const Img = styled.div`
  width: 400px;
  height: 210px;
  opacity: 0.7;

  background-image: url(${ProjImg.src});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.4);
  -moz-box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.4);
  box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.4);

  &:hover {
    opacity: 0.9;

    -webkit-box-shadow: 0px 0px 20px 4px rgba(196, 253, 228, 0.4);
    -moz-box-shadow: 0px 0px 20px 4px rgba(196, 253, 228, 0.4);
    box-shadow: 0px 0px 20px 4px rgba(196, 253, 228, 0.4);
  }

  transition: all 400ms;
`;

export const Content = styled.div``;
export const Heading = styled.h3``;
export const Description = styled.p``;
