import Member from "../Member/member";
import styled from "styled-components";
import {team} from "../TextContents/Team";

//position absolute -> can overlay
const Container = styled.div`
    justify-content: space-between;
    position: relative;
    background-color: white;
    margin-top: 20px;
    margin-bottom: 20px;

`;

const TeamContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    position: relative;
    
`;

const Title = styled.h1`
    font-family: "Lexend", sans-serif;  
    text-align: center;
    font-weight: bold;
    font-size: ${(props) => props.size || "40px"};
    color: ${(props) => props.color};
`;


const OurTeam = () => {
    return(
        <Container>
            <Title>Meet the Team</Title>              
            <TeamContainer>                
                {team.map((member) => (
                <Member img={member.image} name={member.name} desc={member.desc} link={member.link}/>
                ))}         
            </TeamContainer>  
        </Container>
    )
}

export default OurTeam;