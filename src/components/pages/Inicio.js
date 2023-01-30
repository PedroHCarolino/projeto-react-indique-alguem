import styles from './Inicio.module.css';

import savings from '../../img/buscando_prestador.png'
import LinkButton from '../layout/LinkButton';


function Inicio () {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao Indique Alguém</h1>
            <h2>Está buscando um prestador de serviço para sua casa ou empresa?</h2>
            <h3>Aqui você encontra os melhores prestadores de serviços!</h3>
            <h4>A Indique Alguém vai te conectar a profissionais das mais diversas áreas.</h4>

            <LinkButton to="/newusuario" text="Já tem uma conta?" />    

            <img src={savings} alt="IndiqueAlguem"/>

            {/* <form className="caixa-form">                               
                                        
                    <select required id="prestador" name="select"  className="select-prestador" >
                        <option value=" " disabled selected>Prestador</option>
                        <option value="Advogado">Advogado</option>
                        <option value="Encanador">Encanador</option>
                        <option value="Pedreiro">Pedreiro</option>
                        <option value="Pintor">Pintor</option>
                    </select> 
                    
                    <select id="cidades" name="select" className="select-cidade">
                        <option value=" " disabled selected>Onde?</option>
                        <option value="Bayeux">Bayeux</option>
                        <option value="Cabedelo">Cabedelo</option>
                        <option value="Conde">Conde</option>
                        <option value="Joao Pessoa">João Pessoa</option>
                    </select>                                      

                    <input type="submit" value="Buscar >"/>    

                    <img src={savings} alt="IndiqueAlguem"/>
                
            </form> */}
            
        </section>
    )
}

export default Inicio


