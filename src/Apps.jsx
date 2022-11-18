import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote'
import Note from './components/Note';
import './style.css';

const Apps = () => {

  const [addItems, setAddItems] = useState([]);

  const addNote = (note)=>{
    setAddItems((preVal) =>{
      return [...preVal, note];
    });
  }

  const onDelete = (id)=>{
    setAddItems((oldVal)=>{
      return oldVal.filter((curVal, index)=>{
          return index !== id;
      })
    })
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {
        addItems.map((val, ind)=>{

         return ( 
         <Note 
         key={ind}
         id={ind}
         title={val.title}
         content={val.content}
         deleteItem = {onDelete}
         />
         )
        })
      }
      <Footer />
    </>
  )
}

export default Apps
