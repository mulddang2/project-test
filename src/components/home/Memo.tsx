import { styled } from "styled-components";

function Memo() {
  return (
    <MemoContainer>
      <input type="text" id="name" />
      <button>X</button>
    </MemoContainer>
  );
}

export default Memo;

const MemoContainer = styled.div`
  > input {
    width: 300px;
    background-color: pink;
  }

` 