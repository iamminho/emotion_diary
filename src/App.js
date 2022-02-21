import './App.css';
import { useRef, useState } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


// const dummyList = [
//   {
//     id: 1,
//     author: "이름",
//     content: "hellow?",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "이름2",
//     content: "hellow!",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "이름3",
//     content: "hellow+",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
  
// ];

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
  return (
    <div>      
      <DiaryEditor onCreate = {onCreate} />
      <DiaryList diaryList = {data} />
    </div>
  );
};

export default App;
