import { useParams } from "react-router";
import { Container } from "./styled";
import baloons from '../../img/baloons.png'

const WelcomeCard = () => {

    const params = useParams();
    const name = params.name;

    return (
        <Container>
            <h1>Bem Vindo {name}</h1>
            <img src={baloons} alt="Balões" />
        </Container>
    )
}

export default WelcomeCard;