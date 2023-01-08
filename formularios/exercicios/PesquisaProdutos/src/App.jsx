import { useState, useEffect } from 'react'
import './App.css'

/*Cria um formulário de pesquisa de produtos que permita aos utilizadores filtrar os produtos por nome, categoria e range de preço.  
O formulário deverá ter os seguintes campos:

* Nome: um campo de texto para pesquisar por produtos que contenham o nome introduzido (pode ser parcial)
* Categoria: um campo de seleção com uma lista de opções pré-definidas:
    * 1 - snickers
    * 2 - coats
    * 3 - pants
    * 4 - jackets
* Range de preço: dois campos de número para especificar o valor mínimo e máximo do preço.

Utiliza a [API](https://foxcoding.net/api/getProductsList) - https://foxcoding.net/api/getProductsList para receber os produtos e filtrar-los.

Sempre que o utilizador efectuar o clique no botão pesquisar este deve filtrar a listagem de produtos com os valores inseridos no fomulario.*/

function App() {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);
  const [filterData, setFilterData] = useState("");

  useEffect(() => {
    fetch("https://foxcoding.net/api/getProductsList")
    .then(response => response.json())
    .then(result => {
    setData(result.data.products)
    setFilterData(result.data.products)
    //console.log(result.data.products, "original")
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let aux=[...data]
    
    if(name!='')
    {
      aux=aux.filter((val) => val.name.includes(name))
    }
  
    aux=aux.filter((val) => val.category.every((category) => category==type)).filter((val) => {return val.price>=minPrice && val.price<=maxPrice})
 
    setFilterData(aux)
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const productList = filterData.map((product) => {
    return (
      <>
        <p>{`${product.name} ${product.price}`}</p>
      </>
    )
    })


  return (
    <div className="Login-page">
      <form onSubmit={handleSubmit} className="login-form">
          <input type="text" placeholder="product name" value={name} onChange={handleNameChange}/>
          <select name="Type" value={type} onChange={handleTypeChange}>
            <option value="1">snickers</option>
            <option value="2">coats</option>
            <option value="3">pants</option>
            <option value="4">jackets</option>
          </select> 
          <input type="number" placeholder="min price" value={minPrice} onChange={handleMinPriceChange}/>
          <input type="number" placeholder="max price" value={maxPrice} onChange={handleMaxPriceChange}/>        
            
          <button type="submit">Filter</button>   
      </form> 
      {productList}

    </div>
  )
}

export default App
