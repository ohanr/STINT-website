import styled from "styled-components";
import linkedin from "../Images/linkedinBlack.png"
import { mobile } from "../../responsive";
const Container = styled.div`
    width: 250px;
    height: 700px;
    justify-content: space-between;
    position: relative;
    padding: 20px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-left: 30px;
    margin-top: 30px;
`;

const ImageContainer = styled.div `
    width: 200px;
    height: 200px; 
    border-radius: 100%;
    margin: auto;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100px;
`;

const Name = styled.h2`
    font-size: 20px;
    font-weight: 900;
    color: black;
    text-align: center;
    margin: auto;
    font-family: "Lexend", sans-serif;  
`;

const Desc = styled.p`
    text-align: center;
    color: black;
    margin-bottom: 30px;
    font-family: "Lexend", sans-serif;  
`

const LinkedinIcon = styled.img`
`;

const Button = styled.button`
    height: 35px; 
    width: 35px;
    margin-left: -17.5px;
    bottom: 20px;  
    position: absolute;
    transition: all 0.1s ease;
    &:hover {
        transform: scale(1.1);
    }
`
const URL = styled.a`
`;

const Text = styled.p`
    font-weight: 100;  
    color: ${(props) => props.color || "white"};
    font-family: "Lexend", serif;
    font-size: 15px;  
    
`;

const Topic = styled.text`
    font-weight: 600;
    font-family: "Lexend", sans-serif;  
`
const TopicWrapper = styled.div`
    padding-bottom: 15px;
`;


const Member = ({img, name, desc, link}) => {
    return(
        <Container>
            <ImageContainer>
                <Image src={img}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Desc>{desc.role}</Desc>
            {desc.content.map((cont) => (
                <TopicWrapper>
                    <Topic>{cont.topic}</Topic>
                    <Text color="black">{cont.text}</Text> 
                </TopicWrapper>   
            ))}
            <Button>
                <URL href={link}><LinkedinIcon src={linkedin}/></URL>
            </Button>                
        </Container>

    )
}

export default Member;
