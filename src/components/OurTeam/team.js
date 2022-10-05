import Member from "../Member/member";
import styled from "styled-components";
import {team} from "../TextContents/Team";

//position absolute -> can overlay
const Container = styled.div`
    justify-content: space-between;
    position: relative;
    background-color: #e2edf1;

`;

const TeamContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    padding: 20px;
    position: relative;
`;

const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: ${(props) => props.size || "40px"};
    color: ${(props) => props.color};
`;

const Border = styled.div`
    background-color: #1F628C;
    width: 100%;
    height: 60px; 
    margin-top: 140px;
    position: absolute;
`;

const OurTeam = () => {
    return(
        <Container>
            <Title>Meet the Team</Title>              
            <Border/>
            <TeamContainer>                
                {team.map((member) => (
                <Member img={member.image} name={member.name} desc={member.desc} link={member.link}/>
                ))}         
            </TeamContainer>  
        </Container>
    )
}

export default OurTeam;