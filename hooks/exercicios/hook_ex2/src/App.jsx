import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const initialTodos = [
    {
      id: "a",
      task: "Learn React",
      complete: true
    },
    {
      id: "b",
      task: "Learn NodeJS",
      complete: true
    },
    {
      id: "c",
      task: "Learn MongoDB",
      complete: false
    }
  ];

  const elementoAdicionar = {
    id: "d",
    task: "Master JS",
    complete: false
  }

  const [element, setElement] = useState(initialTodos)

  
    
  const handleRemoveItem = (element) => {
    const x =[...element]
    x.pop()
    setElement(x)
  };

  const handleAddItem = (element,elementoAdicionar) => {
    const x =[...element]
    x.push(elementoAdicionar)
    setElement(x)
  };
  

  const elementslist = element.map(element => {
    return (      
                <li className="title">{element.task}</li>         
            )
    })

  return (
    <div className="learn-list">
      <div className="title">
          My Roadmap
      </div>
      <ul>
        {elementslist} 
      </ul>
      <button onClick={() => handleRemoveItem(element)}>Remover ultimo Elemento</button>
      <button onClick={() => handleAddItem(element,elementoAdicionar)}>Adicionar Elemento</button>
    </div>
  )
}

export default App
