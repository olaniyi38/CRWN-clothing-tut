import {useState} from 'react'
import Header from './components/Header'
import Note from './components/Note'
import notes from './notes'


const App = () =>{

  return(
    <>
      <Header name={'app'} />
 
     <section className="notes">
        {
          notes.map((note)=>{
            return <Note title={note.title} content={note.content} />
          })
        }       
      </section>  
     

    </>
  )
}


export default App