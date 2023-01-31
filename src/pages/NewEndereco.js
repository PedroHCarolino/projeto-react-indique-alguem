import styles from './NewEndereco.module.css'
import Endereco from '../Cadastro/Endereco'

function NewEndereco () {
    return (
        <div className={styles.newendereco_container}>
            <h1>Endereço do Usuário</h1>
            <Endereco btnText="Finalizar"/>
            
            
        </div>

    )
}

export default NewEndereco
