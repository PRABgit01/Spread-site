import styled from "styled-components";

export const MainDiv = styled.section`
  display: flex;
  justify-content: center;
  background-color: #fff6f6;
  align-items: center;
  @media  (max-width: 700px){
    justify-content: flex-start; 
  }
`;
export const OutsideDiv = styled.section`
  background-color: #fff6f6;
`;

export const MiddleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Pstyle = styled.p`
  font-size: 13pc;
`;

export const LeftDiv = styled.div`
  max-width: max-content;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 700px) {
    padding: 9px 17px 62px 8px
  }
`;

export const CenterDiv = styled.div`
  background-color: #fff6f6;
  margin: 23px 0px;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const RightImage = styled.img`
  max-width: 280px;
  z-index: 1;
  border-radius: 16px;
  @media (max-width: 700px) {
    max-width: 192px;
  }
`;

export const SmallCard = styled.div`
  position: absolute;
  top: -22px;
  right: -23px;
  background: rgb(254, 79, 82);
  border-radius: 3px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 260px;
  width: 100%;
  z-index: 2;
  color: white;
  @media (max-width: 700px) {
    padding: 11px 12px 11px 11px;
    right: -32px;
    width: 74%;
  }
`;

export const CardText =styled.span`
@media (max-width: 700px) {
    font-size: 8px;
  }
`

export const SmallImage = styled.img`
  max-width: 30px;
  width: 100%;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  @media (max-width: 700px) {
    max-width: 17px;
    height: 17px;
  }
`;

export const RightDiv = styled.div`
  height: auto;
  max-width: 48%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RightDivBefore = styled.img`
  position: absolute;
  top: -26px;
  left: 10%;
  width: 96px;
  height: 96px;
  z-index: 0;
  border: 0px solid red;
  border-radius: 50%;
  @media (max-width: 700px) {
    left: -21%;
  }
`;
export const RightDivAfter = styled.img`
  content: "";
  position: absolute;
  bottom: -18px;
  left: 9%;
  width: 90px;
  height: 57px;
  z-index: 1;
  @media (max-width: 700px) {
    left: -21%;
  }
`;

export const ParaDiv = styled.div`
  margin: 17px 0px;
  line-height: 15px;
  border: 0px;
  vertical-align: baseline;
  @media (max-width: 700px) {
   font-size: 10px; 
  line-height: 12px;

  }
`;
export const Description = styled.p`
  color: black;
  font-style: sans-serif;
  font-size: 14px;
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

export const EmtyDiv = styled.div`
  width: 106px;
  padding: 0px 69px 0px 19px;
`;

export const ButtonDiv = styled.div`
  line-height: 1.5;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
  font-size: 10px;
`;

export const Title = styled.span`
  letter-spacing: 1px;
  color: #212b36;
  font-style: sans-serif;
  line-height: 44px;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-size: 39.4px;
  @media (max-width: 700px) {
    letter-spacing: 1px;
    color: #212b36;
    font-style: sans-serif;
    line-height: 29px;
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-size: 27.4px;
  }
`;

export const LeftSideImage = styled.img``;
