import styled from "styled-components";
import test from "../Images/test.png"

const Container = styled.div`
    width: 250px;
    height: 700px;
    justify-content: space-between;
    position: relative;
    padding: 10px;
`;

const ImageContainer = styled.div `
    width: 100%;
    height: 300px;
    border-radius: 100px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100px;
`;

const Name = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: center;
`;

const Desc = styled.p`
    text-align: center;
    color: black;
    margin-bottom: 30px;
`
const Button = styled.button`
    background-color: #1F628C;
    width: 230px;
    height: 30px; 
    border-radius: 100px;
    position: absolute;
    margin-left: -115px;
    bottom: 0px;
`

const URL = styled.a`
`;

const Text = styled.p`
    color: ${(props) => props.color || "white"};
`;

const Topic = styled.text`
    font-weight: bold
`

const Member = ({img, name, desc, link}) => {
    return(
        <Container>
            <ImageContainer>
                <Image src={img}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Desc>{desc.role}</Desc>
            {desc.content.map((cont) => (
                <div>
                    <Topic>{cont.topic}</Topic>
                    <Text color="black">{cont.text}</Text> 
                </div>   
            ))}
            <Button>
                <URL href={link}><Text>Connect with {name}</Text></URL>
            </Button>                
        </Container>

    )
}

export default Member;
