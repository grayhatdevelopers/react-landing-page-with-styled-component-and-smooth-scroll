import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight, MdPlayArrow, MdStop } from 'react-icons/md';

export const CoverContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const CoverBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;              

export const CoverContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  left: -25vw;
  align-items: flex-start;
`;

// background-image: linear-gradient(to bottom right,#F10000,#B766F7,#6676FF);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
export const CoverH1 = styled.h1`
  color: #fff;
  
  font-size: 68px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CoverP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;

  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CoverBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Play = styled(MdPlayArrow)`
  margin-right: 8px;
  font-size: 20px;
`;

export const PlayDisabled = styled(MdStop)`
  margin-right: 8px;
  font-size: 20px;
`;
