import React, {useState} from 'react';
// import Button from './material-ui/core/Button';

const CreateNote = (props) => {

  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title:"",
    content: ""

  });

  const inputEvent = (event)=>{

    const {name, value} = event.target;

    setNote((preVal) =>{
      return {
        ...preVal, 
        [name]: value
      };
      
    });
  }

  const addEvent = (e)=>{
    e.preventDefault();
    
    props.passNote(note)
  }

  const expandIt = ()=>{
    setExpand(true);
  }

  return (
    <>
      <div className="main_note">
        <form action="">
            {expand?
            <input type="text" placeholder='Enter Title' autoComplete='off' name="title" value={note.title} onChange={inputEvent} /> 
            : null} 
          <br />
          <textarea id="" cols="35" rows="8" placeholder='Write a note' name="content" value={note.content} onChange={inputEvent} onClick={expandIt}></textarea>
           {expand?
           <button className='btn' onClick={addEvent}><span className='add'>+</span></button>
          : null} 
        </form>
      </div>
    </>
  )
}

export default CreateNote
