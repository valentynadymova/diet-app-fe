import styled from 'styled-components';
import login_bg_tablet from '../../images/login_bg_tablet.webp';
import login_bg_desktop from '../../images/main_bg_desktop.png';

export const ImageStyled = styled.div`
  @media (min-width: 768px) {
    background: url(${login_bg_tablet}) bottom right no-repeat;
    position: absolute;
    width: 100%;
    height: 950px;
    z-index: -1;
  }
  @media (min-width: 1280px) {
    background: url(${login_bg_desktop}) top right no-repeat;
    position: absolute;
    right: 0;
    top: 0;
    height: 850px;
  }
`;
