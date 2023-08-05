import { styled } from "styled-components";
import CreateMemo from "../components/create/createMemo";

function Create() {
  return (
    <CreateContainer>
      <CreateMemo />
    </CreateContainer>
  );
}

export default Create;

const CreateContainer = styled.section`
  
`;
