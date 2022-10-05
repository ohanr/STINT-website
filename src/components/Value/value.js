import styled from "styled-components";
import { mobile } from "../../responsive"

//position absolute -> can overlay
const Container = styled.div`
    justify-content: space-between;
    position: relative;
    width: 40%;
    padding: 20px;
    ${mobile({ width: "100%"})}
`;

const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 3vh;
    color: black;
    padding: 1vw;
`;

const Text = styled.p`
    text-align: center;
    color: black;
    margin-bottom: 30px;
`

const ImageContainer = styled.div`
    width: 200px;
    height: 200px; 
    border-radius: 100px;
    background-color:white;
    margin-left: auto;
    margin-right: auto;
    ${mobile({ width: "30vw"})}
    ${mobile({ height: "30vw"})}

`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100px;
`;


const Values = ({image, title, value}) => {
    return(
        <Container>
            <ImageContainer>
                <Image src={image}/>
            </ImageContainer>
            <Title>{title}</Title>
            {value.map((text) => 
            <Text>{text}</Text>)}    
        </Container>
    )
}

export default Values;
