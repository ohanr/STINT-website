import styled from "styled-components";
import image1 from "../Images/OurStoryBackground1.png"
import image2 from "../Images/OurStoryBackground2.png"
import { mobile } from "../../responsive";

//position absolute -> can overlay
const Container = styled.div`
    justify-content: space-between;
    position: relative;
    background-color: #e2edf1;
`;

const Title = styled.h1`
    text-align: ${(props) => props.align || "justify"};
    font-weight: bold;
    font-size: ${(props) => props.size || "40px"};
    color: ${(props) => props.color};
`;

const Text = styled.p`
    text-align: ${(props) => props.align || "justify"};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.font};
    margin-bottom: 30px;
`

const OurVisionContainer = styled.div`
    width: 55%;
    position: relative;
    padding: 40px;
    ${mobile({ width: "100%"})}
    
`;

const OurStoryContainer = styled.div`
    width: 100%;
    position: relative;
`;

const Border = styled.div`
    background-color: #1F628C;
    width: 100%;
    height: ${(props) => props.height || "60px"}; 
    padding-left: 40px;
    padding-top: 10px;
`;

const Oval = styled.div`
    background-color: #1F628C;
    margin: auto;
    width: 60%;
    height: 70px; 
    border-radius: 100px;
    margin-top: -80px;
    position: relative;
    z-index: 2;
    padding: 10px


`;

const Image = styled.img`
    width: 100%;
    margin-top: ${(props) => props.top || "10px"};
    position: relative;
    z-index: 1
`;

const WhiteBox = styled.div`
    background-color: white;
    width: 45%;
    margin-left: ${(props) => props.left};
    margin-right: ${(props) => props.right};
    margin-top: ${(props) => props.top};
    border-radius: 55px;
    padding: 50px;
    position: relative;
    z-index: 2
`;

const Bwrapper = styled.div`
    margin-top: ${(props) => props.top || "-10px"};
    position: absolute;
`;


const OurVision = () => {
    return(
        <Container>
            <OurVisionContainer>
                <Title color="black">Our Vision</Title>
                <Text>Here at Stint, we firmly believe that anyone, regardless of citizenship status, deserves a fair chance at a future working in Australia.{"\n"}</Text>
                <Text> Ultimately, we aim to create a more equitable job landscape - supporting international students to land relevant jobs and internships, and educating employers to judge students based on their skills and experiences, rather than their citzenship status.</Text> 
                <Text font="bold">That’s why our vision is to deliver a better future for international students in Australia by transforming the way they are viewed - by employers, universities and governments alike.</Text>   
            </OurVisionContainer>   
            <OurStoryContainer>
                <Border height="90px">
                    <Title color="white">
                        Our Story So Far...
                    </Title> 
                </Border>
                <Bwrapper>                                      
                    <WhiteBox left="5%">
                        <Title size="25px" align="center">The "unlikely" dream</Title>
                        <Text>For international students, leaving behind the comfort and familiarity of their home and moving abroad to Australia symbalises their aspirations for a better education, career prospects and ultimately, a better future.{"\n"}</Text>
                        <Text>However, from being deemed ineligible due to their PR and visa status, to a lack of familiarity with the application process and minimal  support available,  the job-searching experience is an isolating and disempowering one.{"\n"}</Text>
                        <Text>As a result, for the majority of students, the prospect of building a life in Australia is at best, unrealistic and at most, virtually improbable…{"\n"}</Text>
                    </WhiteBox>
                </Bwrapper>  
                <Image src={image1}/>     
                <WhiteBox left="51%">
                        <Title size="25px" align="center">Unlocking the doors of opportunity</Title>
                        <Text>In response to the barriers and difficulties faced by international students, four University of Melbourne students created Stint - an online platform and community dedicated to helping students land relevant jobs and internships  - <b>right here in Australia.</b>{"\n"}</Text>
                        <Text>While we are committed to empowering and supporting students, we also aim to dismantle and reform the underlying structures and pervasive misconceptions preventing students from being given a fair chance at a future working in Australia.{"\n"}</Text>
                </WhiteBox>     
                <Image src={image2} top="-20px"/>              
                <Border height="20px"/>
                <Oval>
                    <Title color="white" align="center" size="30px">Towards a more equitable job landscape</Title>
                </Oval>
            </OurStoryContainer>                   
        </Container>
    )
}

export default OurVision;
