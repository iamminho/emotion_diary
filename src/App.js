import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "이름",
    content: "hellow?",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "이름2",
    content: "hellow!",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이름3",
    content: "hellow+",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  
];

function App() {
  return (
    <div>      
      <DiaryEditor />
      <DiaryList diaryList = {dummyList} />
    </div>
  );
};

export default App;
