import styled from "styled-components";

//position absolute -> can overlay
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    position: relative
`;

const Title = styled.h1`
    text-align: justify;
    font-weight: bold;
    font-size: 30px;
    colour: ${(props) => props.color};
`;

const Text = styled.p`
    text-align: justify;
    margin: 20px 0px;
    width: 70%;
    colour: ${(props) => props.color};
`

const OurVisionContainer = styled.div`
    width: 100%
`;

const OurVision = () => {
    return(
        <Container>
            <OurVisionContainer>
                <Title color="black">Our Vision</Title>
                <Text>
                Here at Stint, we firmly believe that anyone, regardless of citizenship status, deserves a fair chance at a future working in Australia.

                Ultimately, we aim to create a more equitable job landscape - supporting international students to land relevant jobs and internships, and educating employers to judge students based on their skills and experiences, rather than their citzenship status.

                That’s why our vision is to deliver a better future for international students in Australia by transforming the way they are viewed - by employers, universities and governments alike.
                </Text>
            </OurVisionContainer>
        </Container>
    )
}

export default OurVision;
