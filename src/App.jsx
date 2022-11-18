import React, {useState} from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import CreateNote from './Component/CreateNote';
import Note from './Component/Note';

const App = () => {
    const [note, setNote] = useState([]);

    const addNote = (addItem)=>{
        setNote((oldVal)=>{
            return [
                ...oldVal,
                addItem
            ]
            
        });

        
    }

    const deleteNote = (id)=>{
        setNote((oldVal)=>{
            return oldVal.filter((curVal, index)=>{
                return index !== id;
            })
        })
    }

  return (
    <div>
      <Header />
      <CreateNote passNote={addNote}/>
      {
        note.map((val,ind)=>{
            return(
                <Note 
                key={ind}
                id={ind}
                title={val.title}
                content={val.content}
                deleteItem={deleteNote}
                />
            )
        })
      }
      <Footer />
    </div>
  )
}

export default App
