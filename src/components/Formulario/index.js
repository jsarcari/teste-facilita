import './Formulario.css'
import CampoTexto from '../CampoTexto'
import Botao from '../Botao'
import { useState } from 'react';

/* Arrow function para a implementação do componente para o Formulário de cadastro de clientes */
const Formulario = (props) => {

    const [nome, setNome] = useState(''); // estado da variável correspondente ao valor digitado no campo Nome
    const [email, setEmail] = useState(''); // estado da variável correspondente ao valor digitado no campo Email
    const [telefone, setTelefone] = useState(''); // estado da variável correspondente ao valor digitado no campo Telefone
    const [coordenadaX, setCoordenadaX] = useState(''); // estado da variável correspondente ao valor digitado no campo Coordenada X
    const [coordenadaY, setCoordenadaY] = useState(''); // estado da variável correspondente ao valor digitado no campo Coordenada Y

    const aoSalvar = (evento) => {
        evento.preventDefault(); //previne o comportamento padrão quando submeter o formulário
        props.aoClienteCadastrado({
            nome,
            email,
            telefone,
            coordenadaX,
            coordenadaY
        })
        window.location.reload(true);
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para cadastrar um novo cliente</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do cliente" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Email"
                    placeholder="exemplo@exemplo.com"
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Telefone"
                    placeholder="Digine apenas números"
                    valor={telefone}
                    aoAlterado={valor => setTelefone(valor)}
                    maxlength="11"
                />
                <div className="campos-coordenadas">
                    <CampoTexto 
                        obrigatorio={true}
                        label="Coordenada X"
                        placeholder=""
                        valor={coordenadaX}
                        aoAlterado={valor => setCoordenadaX(valor)}
                    />
                    <CampoTexto 
                        obrigatorio={true}
                        label="Coordenada Y"
                        placeholder=""
                        valor={coordenadaY}
                        aoAlterado={valor => setCoordenadaY(valor)}
                    />
                </div>
                <Botao texto="Cadastrar cliente" />
            </form>
        </section>
    ) // retorna o JSX para o formulário ser renderizado no componente "pai" 
}

export default Formulario