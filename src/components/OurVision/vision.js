import styled from "styled-components";
import ourVisionImg from "../Images/OurVision.png"
import background from "../Images/AboutUsBackground.png"
import image1 from "../Images/OurStoryImg1.png"
import { mobile } from "../../responsive";

//position absolute -> can overlay
const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
    justify-content: space-between;
    background-color: #e2edf1;
    position: relative;
    z-index: -1;
`;

const Title = styled.h1`    
    margin-left: auto;
    margin-right: auto;
    margin-top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: 0;
    right: 0;
    text-align: ${(props) => props.align || "justify"};
    font-weight: bold;
    font-size: ${(props) => props.size || "5vw"};
    color: ${(props) => props.color};
    font-family: "Lexend", sans-serif;  
    position: ${(props) => props.position||"relative"};
    z-index: 2;
    ${mobile({ margin: "auto"})};
`;

const Text = styled.p`
    text-align: ${(props) => props.align || "justify"};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.font};
    margin-bottom: 30px;
    font-family: "Lexend", sans-serif;
    position: ${(props) => props.position};
`

const OurVisionContainer = styled.div`
    position: relative;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 100px;
    display: flex;
    flex-wrap: wrap;
`;

const TextWarpper = styled.div`
    width: ${(props) => props.width || "55%"};
    ${mobile({ width: "100%"})}
`;

const Image = styled.img`
    margin: auto;
    padding: 20px;
    width: ${(props) => props.width || "40%"};
    ${mobile({ width: "70%"})};
`;


const OurStoryContainer = styled.div`
    width: 100%;
    position: relative;
    background-color:white;
    padding-top: 20px;

`;

const Background = styled.img`
    width: 100%;
    height: 255vh;
    position: absolute;
    ${mobile({ visibility: "hidden"})};

`;

const Box = styled.div`
    width: 35%;
    margin-left: ${(props) => props.left};
    margin-right: ${(props) => props.right};
    margin-top: ${(props) => props.top};
    padding: 20px;
    position: relative;
    z-index: 2;
    ${mobile({ width: "90%"})};
    ${mobile({ margin: "auto"})};
`;

const Bwrapper = styled.div`
    margin-top: ${(props) => props.top || "100px"};
    position: relative;
    display: flex;
    flex-wrap: wrap;
    ${mobile({ margin: "auto"})};
`;


const OurVision = () => {
    return(
        <Container>
            <OurVisionContainer>
                <Image src={ourVisionImg}/>
                <TextWarpper>
                    <Title color="black">Our Vision</Title>
                    <Text>Here at Stint, we firmly believe that anyone, regardless of citizenship status, deserves a fair chance at a future working in Australia.{"\n"}</Text>
                    <Text> Ultimately, we aim to create a more equitable job landscape - supporting international students to land relevant jobs and internships, and educating employers to judge students based on their skills and experiences, rather than their citzenship status.</Text> 
                    <Text font="bold">That’s why our vision is to deliver a better future for international students in Australia by transforming the way they are viewed - by employers, universities and governments alike.</Text>                       
                </TextWarpper>
            </OurVisionContainer> 

            <OurStoryContainer> 
                <Background src={background}/>                   
                <Title top="20px" align="center" size="4vw">
                    Our Story So Far...
                </Title>                      
                <Bwrapper>                                      
                    <Box left="80px">
                        <Title size="25px" >The "unlikely" dream</Title>
                        <Text>For international students, leaving behind the comfort and familiarity of their home and moving abroad to Australia symbalises their aspirations for a better education, career prospects and ultimately, a better future.{"\n"}</Text>
                        <Text>However, from being deemed ineligible due to their PR and visa status, to a lack of familiarity with the application process and minimal  support available,  the job-searching experience is an isolating and disempowering one.{"\n"}</Text>
                        <Text>As a result, for the majority of students, the prospect of building a life in Australia is at best, unrealistic and at most, virtually improbable…{"\n"}</Text>
                        <Image width="100%" src={image1}/>
                    </Box>
                    <Box left="15%" top="20px">
                        <Image width="100%" src={image1}/>
                        <Title size="25px">Unlocking the doors of opportunity</Title>
                        <Text>In response to the barriers and difficulties faced by international students, four University of Melbourne students created Stint - an online platform and community dedicated to helping students land relevant jobs and internships  - <b>right here in Australia.</b>{"\n"}</Text>
                        <Text>While we are committed to empowering and supporting students, we also aim to dismantle and reform the underlying structures and pervasive misconceptions preventing students from being given a fair chance at a future working in Australia.{"\n"}</Text>
                    </Box> 
                </Bwrapper>                     
                <Title align="center" size="30px" top="15%">Towards a more diverse and inclusive workforce</Title>
              
                
            </OurStoryContainer>                   
        </Container>
    )
}

export default OurVision;
