import { styled } from "styled-components";
import { addMemo } from "../../redux/MemoSlice";
import { useState } from "react";
import { useAppDispatch } from "../../app/hook";
import toast from "react-hot-toast";

function CreateMemo() {
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();

  return (
    <CreateMemoContainer>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={() => {
          dispatch(addMemo(content));
          setContent("");
          toast.success("추가 완료")
        }}
      >
        +
      </button>
    </CreateMemoContainer>
  );
}

export default CreateMemo;

const CreateMemoContainer = styled.div`
  padding: 5px;
  > input {
    display: inline-block;
    width: 300px;
    padding: 5px 0;
    margin-right: 10px;
    background-color: pink;
    border: none;
  }
`;
