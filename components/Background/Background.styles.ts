import styled from 'styled-components';

export const Filter = styled.section`
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(1, 10, 0, 0.8) 20%,
    rgba(1, 10, 0, 0.8) 40%,
    rgba(1, 10, 0, 0.8) 60%,
    rgba(1, 10, 0, 0.95) 80%,
    rgba(1, 10, 0, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(1, 10, 0, 0.8) 20%,
    rgba(1, 10, 0, 0.8) 40%,
    rgba(1, 10, 0, 0.8) 60%,
    rgba(1, 10, 0, 0.95) 80%,
    rgba(1, 10, 0, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(1, 10, 0, 0.8) 20%,
    rgba(1, 10, 0, 0.8) 40%,
    rgba(1, 10, 0, 0.8) 60%,
    rgba(1, 10, 0, 0.95) 80%,
    rgba(1, 10, 0, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#011300',GradientType=0 ); /* IE6-9 */
`;

export const Bg = styled.div`
  position: relative;
  overflow-y: hidden;
`;
