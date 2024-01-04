import {
  CombineDiv,
  FirstDiv,
  LogoDiv,
  LogoImage,
  MainContainer,
  SecondDiv,
  SpreadH1,
  SpreadPara,
  SpreadTitle,
  ThirdDiv,
  WhyspreadTxt,
  MainSection,
} from "./Whyspread.styled";

export function Whyspread() {
  return (
    <>
      <MainSection>
        <MainContainer>
          <WhyspreadTxt>
            <SpreadH1>Why Spreadd?</SpreadH1>
            <p>
              Its time to give your ideas the wings they need. Bring them on to
              Spreadd and see them grow.
            </p>
          </WhyspreadTxt>
          <CombineDiv>
            <FirstDiv>
              <LogoDiv>
                <LogoImage src="https://spreadd.io/assets/home/whyspreadd/noname.svg"></LogoImage>
                <SpreadTitle>No middle-man</SpreadTitle>
                <SpreadPara>
                  Spreadd helps you to get in touch with your brand ambassadors
                  directly. Avoid paying extra cuts to multiple agencies. We are
                  here to save your money.
                </SpreadPara>
              </LogoDiv>
            </FirstDiv>
            <SecondDiv>
              <LogoDiv>
                <LogoImage src="https://spreadd.io/assets/home/whyspreadd/marketplace.svg"></LogoImage>
                <SpreadTitle>NFT marketplace</SpreadTitle>
                <SpreadPara>
                  Spreadd helps you to get in touch with your brand ambassadors
                  directly. Avoid paying extra cuts to multiple agencies. We are
                  here to save your money.
                </SpreadPara>
              </LogoDiv>
            </SecondDiv>
            <ThirdDiv>
              <LogoDiv>
                <LogoImage src="https://spreadd.io/assets/home/whyspreadd/sales.svg"></LogoImage>
                <SpreadTitle>Increase your product sale</SpreadTitle>
                <SpreadPara>
                  Spreadd helps you to get in touch with your brand ambassadors
                  directly. Avoid paying extra cuts to multiple agencies. We are
                  here to save your money.
                </SpreadPara>
              </LogoDiv>
            </ThirdDiv>
          </CombineDiv>
        </MainContainer>
      </MainSection>
    </>
  );
}
