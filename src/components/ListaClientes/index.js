import './ListaClientes.css'

const ListaClientes = (props) => {
    
    return (
        <tr>
            <td>{props.nome}</td>
            <td>{props.email}</td>
            <td>{props.telefone}</td>
        </tr>
    )
}

export default ListaClientes