import React from 'react';

const Note = (props) => {

  const deleteNote = ()=>{
    props.deleteItem(props.id);
  }
  return (
    <>
       
       <div className="note">
            <h2>{props.title}</h2>
            <br />
            <p>{props.content}</p>
            <button className='delBtn'>
            <i className="ri-delete-bin-line delIcon" onClick={deleteNote}></i>
            </button>
        </div>
       

    </>
  )
}

export default Note