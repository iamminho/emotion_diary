import { useRef, useState } from "react";

const DiaryItem = ({
    onEdit,
    onDelete,
    author,
    content,
    created_date,
    emotion,
    id
    }) => {

    const [isEdit,setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContents, setLocalContents] = useState(content);
    const localContentsInput = useRef();
    
    const handleRemover = () => {
        if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)){
            onDelete(id);
        }
    };

    const handleQuitEdit = () => {
        setIsEdit(false);  
        setLocalContents(content);
    }

    const handleEdit = () => {
        if(localContents.length < 5){
            localContentsInput.current.focus();
            return;
        }
        if(window.confirm(`${id}번째 창을 수정하시겠습니까?`)){
            onEdit(id, localContents);
            toggleIsEdit();
        }        
    }

    return (
        <div className='DiaryItem'>
            <div className='info'>
                <span>
                    작성자 : {author} | 감정점수 : {emotion}
                </span>
                <br />
                <span className='date'>{new Date(created_date).toLocaleString()}</span>
            </div>
             <div className='content'>
                {isEdit
                    ? ( <>
                         <textarea
                            ref={localContentsInput}
                            value={localContents}
                            onChange = {(e) => {
                                setLocalContents(e.target.value);
                            }}
                        /> 
                        </> 
                      ) 
                    : (
                        <> { content } </>
                      )
                }      
            </div> 

            {isEdit ?(    
                <>
                    <button onClick={ handleQuitEdit }>수정취소</button>
                    <button onClick={ handleEdit }>수정완료</button>
                </> 
                    
                 
            ):(   
                <>
                    <button onClick={ handleRemover }>삭제하기</button>                                                    
                    <button onClick={ toggleIsEdit }>수정하기</button>   
                </>
            )}             
        </div>
    );
};

export default DiaryItem; 
