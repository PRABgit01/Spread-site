import styled from "styled-components";

export const MainSection = styled.section`
  background: white;
  @media (max-width: 700px) {
    margin: 290px 0px;
  }
`;
export const MainContainer = styled.div`
  max-width: 1003px;
  width: 100%;
  margin: 0px auto;
  @media (max-width: 700px) {
    max-width: 998px;
    width: 91%;
    padding: 0px 15px;
  }
`;

export const CombineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  padding: 36px 0px;
  margin-top: 20px;
  z-index: 0;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    margin: 0px auto;
    background: rgb(244, 247, 249);
    width: 80%;
    height: 414px;
    @media ((max-width: 700px)) {
      width: 100%;
      height: 80%;
      top: 86px;
    }
  }
`;
export const WhyspreadTxt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const SpreadH1 = styled.h3`
  align-items: center;
`;
export const SpreadTitle = styled.h3`
  margin-top: 31px;
  margin-bottom: 0.5em;
  color: #212b36;
  font-weight: 500;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
export const SpreadPara = styled.p`
  font-size: 14px;
  line-height: 28px;
  @media (max-width: 700px) {
       font-size: 9px;
    line-height: 19px;
  }
`;

export const FirstDiv = styled.div`
  background: white;
  box-shadow: rgba(49, 49, 49, 0.1) -7px 1px 64.9886px;
  border-radius: 5px;
  max-width: 33%;
  width: 100%;
  min-height: 290px;
  padding: 30px;
  z-index: 2;
  font-size: 1.5rem;
  @media (max-width: 700px) {
    max-width: 68%;
    min-height: 151px;
  }
`;

export const LogoDiv = styled.div`
  margin-bottom: 20px;
  display: contents;
`;

export const LogoImage = styled.img``;

export const SecondDiv = styled.div`
  background: white;
  box-shadow: rgba(49, 49, 49, 0.1) 0px 81.2357px 64.9886px;
  border-radius: 5px;
  max-width: 33%;
  width: 100%;
  min-height: 290px;
  padding: 30px;
  z-index: 2;
  font-size: 1.5rem;
  @media (max-width: 700px) {
    max-width: 68%;
    min-height: 151px;
  }
`;
export const ThirdDiv = styled.div`
  background: white;
  box-shadow: rgba(49, 49, 49, 0.1) 0px 81.2357px 64.9886px;
  border-radius: 5px;
  max-width: 33%;
  width: 100%;
  min-height: 290px;
  padding: 30px;
  z-index: 2;
  font-size: 1.5rem;
  @media (max-width: 700px) {
    max-width: 68%;
    min-height: 151px;
  }
`;
