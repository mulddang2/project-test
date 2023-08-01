import styled from "styled-components";
import Memo from "../components/home/memo";

function Home() {
  return (
    <HomeContainer>
      <Memo /> 
      <Memo /> 
      <Memo /> 
    </HomeContainer>

  );
}

export default Home;

const HomeContainer = styled.section`
border: 1px solid red;
` 