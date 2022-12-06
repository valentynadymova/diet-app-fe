import styled from 'styled-components';
import main_bg_tablet from '../../images/main_bg_tablet.png';
import main_bg_desktop from '../../images/main_bg_desktop.png';

export const BgImageStyled = styled.div`
  @media (min-width: 768px) {
    background: url(${main_bg_tablet}) bottom right no-repeat;
    position: absolute;
    width: 100%;
    height: 940px;

    z-index: -1;
  }
  @media (min-width: 1280px) {
    background: url(${main_bg_desktop}) top right no-repeat;
    position: absolute;
    right: 0;
    top: 0;
    height: 850px;
  }
`;
