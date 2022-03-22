import DiaryItem from "./DiaryItem";
const DiaryList = ({ onEdit, onDelete, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
/* <div key = {it.id}>
                        <div>작성자: {it.author}</div>
                        <div>내용: {it.content}</div>
                        <div>감정지수: {it.emotion}</div>
                        <div>날짜: {it.created_date}</div>
                    </div> */
