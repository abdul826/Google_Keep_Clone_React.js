import React, {useState} from 'react'

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [addItem, setAddItem] = useState({
        title:"",
        content:""
    });

    const inputEvent = (e)=>{
        const {name, value} = e.target;

        setAddItem((preVal)=>{
            return {
                ...preVal,
                [name]:value
            }
        })
    }

    const addEvent= (e)=>{
        e.preventDefault();

        props.passNote(addItem);

    }

    const expandIt = ()=>{
        setExpand(true);
    }
  return (
    <>
      <div className="main_note">
        
         
           {expand ? <input type="text" placeholder='Enter Title' autoComplete='off' name='title' value={addItem.title} onChange={inputEvent}/> : null }
           
          <br />
          <textarea id=""  placeholder='Write a note' name='content' value={addItem.content} onChange={inputEvent} onClick={expandIt}></textarea>
        
          {expand ?   <button className='btn'><span className='add' onClick={addEvent}>+</span></button> : null }
         
       
      </div>
    </>
  )
}

export default CreateNote