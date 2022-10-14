import styled from "styled-components";
import {values} from "../TextContents/Values";
import Values from "../Value/value";

//position absolute -> can overlay
const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
    justify-content: space-between;
    position: relative;
    background-color: #e2edf1;
    padding: 30px;
`;

const ValueContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    margin-left: -20px;
`;

const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: ${(props) => props.size || "40px"};
    color: ${(props) => props.color};
    font-family: "Lexend", sans-serif;  
`;


const OurValues = () => {
    return(
        <Container>
            <Title>Our Values</Title>  
            <ValueContainer>
                {values.map((value) => (
                <Values image={value.image} title={value.title} value={value.text} />
                ))}         
            </ValueContainer>  
        </Container>
    )
}

export default OurValues;
