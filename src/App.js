import './App.css';
import { useRef, useState } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]); //...data는 원래데이터 + newItem은 새로운 데이터
  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`)
    const newDiaryList = data.filter((it) => it.id !== targetId);
    console.log(newDiaryList);
    setData(newDiaryList);    
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => 
        it.id === targetId ? {...it, content:newContent} : it)
    )
  }

  return (
    <div>      
      <DiaryEditor onCreate = {onCreate} />
      <DiaryList onEdit = {onEdit} onDelete ={onDelete} diaryList = {data} />
    </div>
  );
};

export default App;
