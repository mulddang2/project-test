import { useAppSelector, useAppDispatch } from "../../app/hook";
import { styled } from "styled-components";
import { removeMemoById, selectMemoList } from "../../redux/MemoSlice";
import { Memo } from "../../types/Memo";
import * as dayjs from "dayjs";
import toast from "react-hot-toast";

function MemoList() {
  const memoList: Memo[] = useAppSelector(selectMemoList);
  const dispatch = useAppDispatch();

  return (
    <MemoListContainer>
      {memoList.map((memo: Memo) => {
        return (
          <div>
            <span>
              {memo.content} /{" "}
              {dayjs(memo.createdAt).format("YYYY-MM-DD HH:mm")}
            </span>
            <button
              onClick={() => {
                dispatch(removeMemoById(memo.id));
                toast.success("삭제 완료");
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </MemoListContainer>
  );
}

export default MemoList;

const MemoListContainer = styled.div`
  width: 500px;
  height: 500px;
  overflow-y: scroll;

  > div {
    width: 500px;
    > span {
      display: inline-block;
      width: 300px;
    }
  }
`;
