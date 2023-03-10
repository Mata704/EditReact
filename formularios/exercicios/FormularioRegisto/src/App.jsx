import { useState } from 'react'
import './App.css'

/*# Exercício: Formulário de Registo de utilizador

Cria um formulário de registo de utilizador utilizando React.
O formulário deverá ter os seguintes campos:
- Nome
- Email 
- Password
- Confirmação de Password

O formulário deverá validar os dados introduzidos pelo utilizador de acordo com as seguintes regras:
 
 - O nome deve ter pelo menos 3 caracteres.
 - O email deve ser válido.
 - A password deve ter pelo menos 6 caracteres.
 - A confirmação de password deve ser igual à password.
 
 Quando o utilizador clicar no botão de submit, o formulário deverá enviar os dados do utilizador para o servidor para processamento (``Simular``). Se os dados forem válidos, o utilizador deverá ser redirecionado para a página de sucesso. 
   
Se houver algum erro de validação, o formulário deverá exibir mensagens de erro ao lado de cada campo inválido.  */

function App() {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    let currentErrors = {};

    if (name.length < 3) {
      currentErrors.nome = "Name with less than 3 caracters";
    }

    if (password!=confPassword) {
      currentErrors.password = "Passwords are not equal";
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

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfPasswordChange = (event) => {
    setConfPassword(event.target.value);
  };

  console.log(password,confPassword)
 
  
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
          <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
          <input type="password" placeholder="confirm password" value={confPassword} onChange={handleConfPasswordChange}/>
          {errors.password && (
            <span style={{ marginBottom: "10px", color: "red" }}>
              {errors.password}
            </span>
          )}
          
          <button type="submit">login</button>
        </form>
      
    </div>
  )
}

export default App
