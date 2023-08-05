import styled from "styled-components";
import MemoList from "../components/home/MemoList";

function Home() {
  return (
    <HomeContainer>
      <MemoList />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.section`
`;
