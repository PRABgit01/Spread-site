import {
  ButtonDiv,
  CenterDiv,
  Description,
  EmtyDiv,
  LeftDiv,
  LeftSideImage,
  MainDiv,
  MiddleSection,
  OutsideDiv,
  ParaDiv,
  RightDiv,
  RightDivAfter,
  RightDivBefore,
  RightImage,
  SmallCard,
  SmallImage,
  Title,
  CardText
} from "./SpreadAcademy.styled";

export function SpreadAcademy() {
  return (
    <div>
      <OutsideDiv>
        <CenterDiv>
          <LeftSideImage
            src="https://spreadd.io/assets/home/left-dot-patch.svg"
            alt="leftimage"
          />
        </CenterDiv>
        <MainDiv>
          <MiddleSection>
            <LeftDiv>
              <ButtonDiv>Spreadd Academy</ButtonDiv>
              <Title>Create course and</Title>

              <Title>curriculums for your</Title>
              <Title>collaborators/followers</Title>
              <ParaDiv>
                <Description>
                  We have got a host of features that can enable you to
                  skyrocket your
                </Description>
                <Description>
                  workshop and course sales. Empower your collaborators by
                  delivering
                </Description>
                <Description>
                  deeply engaging experience wherever they are, anytime,
                  anywhere.
                </Description>
              </ParaDiv>
            </LeftDiv>
            <EmtyDiv></EmtyDiv>
            <RightDiv>
              <SmallCard>
                <SmallImage src="https://spreadd.io/assets/home/academy.jpg"></SmallImage>
                <CardText>Amazing course, i would definetely recommend</CardText>
              </SmallCard>
              <RightImage
                src="https://spreadd.io/assets/home/academy.jpg"
                alt="rigtimage"
              ></RightImage>
              <RightDivBefore src="https://spreadd.io/assets/home/round-patch.svg"></RightDivBefore>
              <RightDivAfter src="https://spreadd.io/assets/home/dot-patch.svg"></RightDivAfter>
            </RightDiv>
          </MiddleSection>
        </MainDiv>
      </OutsideDiv>
    </div>
  );
}
