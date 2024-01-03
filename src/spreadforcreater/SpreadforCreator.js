import {
  CreatorStorcard,
  Desc,
  DescPara,
  EmtyDiv,
  HeadingDiv,
  LargeDiv,
  LeftImageDiv,
  LeftSideImage,
  LeftsideDiv,
  PinkH1,
  PinkLineDiv,
  RightSideDiveTOp,
  RightsideDiv,
  SmallSizeimage,
  Subdiv,
  TextDiv,
  TextStyle,
  WhiteCardDiv,
} from "./SpreadforCreator.styled";

export function SpreadforCreator() {
  return (
    <>
      <LargeDiv>

      {/* ----this is image div right side  */}
        <RightSideDiveTOp>
          <SmallSizeimage src="https://spreadd.io/assets/home/left-dot-patch.svg"></SmallSizeimage>
        </RightSideDiveTOp>
        <HeadingDiv>
          <Subdiv>
            <LeftsideDiv>
              <PinkLineDiv>100+ curated products</PinkLineDiv>
              <WhiteCardDiv>
                <PinkH1>100+</PinkH1>
                <Desc>Happy Customers 😍</Desc>
              </WhiteCardDiv>
              <LeftSideImage src="https://spreadd.io/assets/home/iphone.png"></LeftSideImage>
            </LeftsideDiv>
            <EmtyDiv></EmtyDiv>
            <RightsideDiv>
              <CreatorStorcard>Creator Store</CreatorStorcard>
              <TextDiv>
                <TextStyle>Curate your</TextStyle>
              </TextDiv>
              <TextDiv>
                <TextStyle>products and turn</TextStyle>
              </TextDiv>
              <TextDiv>
                <TextStyle>your content shop-</TextStyle>
              </TextDiv>
              <TextDiv>
                <TextStyle>able</TextStyle>
              </TextDiv>
              <DescPara>
                <p>Apply to create your own store. You can choose brands</p>
                <p>and display their product within your own store. You can</p>
                <p>get paid on every sale brand makes through you.</p>
              </DescPara>
            </RightsideDiv>
          </Subdiv>
        </HeadingDiv>
      </LargeDiv>
    </>
  );
}
