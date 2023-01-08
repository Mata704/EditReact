import { useState } from 'react'
import './App.css'


/*# Exercício: Formulário de Compra de Bilhetes

Nesse exercício, você vai criar um formulário de compra de Bilhetes para um evento usando React.  
O formulário deverá ter os seguintes campos:

* Nome do comprador
* Email do comprador
* Tipo de Bilhete (com uma lista de opções pré-definidas, como "inteiro", "meio-bilhete" e "estudante")
* Quantidade de Bilhetes
* Forma de pagamento (com uma lista de opções pré-definidas, como "Cartão de crédito" e "Mb Way")

Quando o utilizador clicar no botão de finalizar compra, o formulário deverá enviar os dados da compra para o servidor  para processamento (`simular`). Se os dados forem válidos, o utilizador deverá ser redirecionado para a página de confirmação da compra. 

Validações:
* Bilhete não pode ser menor que 1
* Nome não pode conter menos de 3 caracteres
  
Se houver algum erro de validação, o formulário deverá exibir mensagens de erro ao lado de cada campo inválido.*/



function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numberTickets, setNumberTickets] = useState(1);
  const [ticketType, setTicketType] = useState("inteiro");
  const [payType, setPayType] = useState("Mb Way");
  const [errors, setErrors] = useState({});


  const handleSubmit = (event) => {
    event.preventDefault();

    let currentErrors = {};

    if (name.length < 3) {
      currentErrors.nome = "Name with less than 3 caracters";
    }

    if (name.length < 3) {
      currentErrors.nome = "Name with less than 3 caracters";
    }

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
    } else {
      alert("Login efetuado com sucesso");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNumberTicketsChange = (event) => {  
    event.target.value<1 ? setNumberTickets(1): setNumberTickets(event.target.value);
  };

  const handleTicketTypeChange = (event) => {
    setTicketType(event.target.value);
  };

  const handlePayTypeChange = (event) => {
    setPayType(event.target.value);
  };


  return (
    <div className="Login-page">
      <form onSubmit={handleSubmit} className="login-form">
          <input type="text" placeholder="name" value={name} onChange={handleNameChange}/>
          {errors.nome && (
            <span style={{ marginBottom: "10px", color: "red" }}>
              {errors.nome}
            </span>
          )}
          <input type="email" placeholder="email" value={email} onChange={handleEmailChange}/>
          <input type="number" placeholder="number of tickets" value={numberTickets} onChange={handleNumberTicketsChange}/>
          <select name="Tickets Type" value={ticketType} onChange={handleTicketTypeChange}>
            <option value="inteiro">inteiro</option>
            <option value="meio-bilhete">meio-bilhete</option>
            <option value="inteiro">estudante</option>
          </select>
          <select name="Forma Pagamento" value={payType} onChange={handlePayTypeChange}>
            <option value="Mb Way">Mb Way</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
          <button type="submit">login</button>
        </form>
      
    </div>
  )
}

export default App
