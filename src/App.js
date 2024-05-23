import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListaClientes from "./components/ListaClientes";


function App() {

  const [clientes, setClientes] = useState([]);
  const [mostra, setMostra] = useState(false);

  function listaClientes() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setClientes(JSON.parse(data));
      });
  }
  
  const aoNovoClienteAdicionado = (cliente) => {
    var nome = cliente.nome;
    var email = cliente.email;
    var telefone = cliente.telefone;
    var coordenadaX = cliente.coordenadaX;
    var coordenadaY = cliente.coordenadaY;
    fetch('http://localhost:3001/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({nome, email, telefone, coordenadaX, coordenadaY}),
    })
      .then(response => {
        return response.text();
      });
  }

  useEffect(() => {
    listaClientes();
  }, []);

  function refreshPage() {
    window.location.reload(true);
  }

  return (
    <div className="App">
        <button className="botao center" onClick={() => setMostra(!mostra) && refreshPage()}>{mostra ? 'Voltar' : 'Novo cliente'}</button>
        { mostra ? <Formulario aoClienteCadastrado={cliente => aoNovoClienteAdicionado(cliente)}/> : <div className="tabela-clientes"><div className="header">Clientes</div><table><tr><th>Nome</th><th>Email</th><th>Telefone</th></tr>{clientes.map(cliente => <ListaClientes key={cliente.id} nome={cliente.nome} email={cliente.email} telefone={cliente.telefone} />)}</table></div>}
    </div>
  );
}

export default App;
