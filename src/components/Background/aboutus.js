import background from "../../aboutUsBackground.png"
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const BackGround = styled.img`
    width:100%;
    object-fit:cover;
`

const Background = () => {
    return (
        <Container>
            <BackGround src = {background}/>
        </Container>
    )
}

export default Background;