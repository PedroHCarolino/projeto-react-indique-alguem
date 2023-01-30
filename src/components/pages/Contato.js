import React, {useState} from 'react'
// import { useForm } from 'react-hook-form'
import styles from './Contato.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import LinkButton from '../layout/LinkButton'


function Contato ({btnText}) {

   
    return (

        <form className={styles.form_contato}>          


            <Input 
                type="text"
                text="Nome"
                placeholder="Nome"
            />


            <Input 
                type="text"
                text="E-mail"
                placeholder="E-mail"
            />


            <Input 
                type="text"
                text="Mensagem"
                placeholder="Digite sua mensagem"
            />
            

</form>

    )
}

    
    

    
export default Contato