import styles from './Input.module.css'

function Input({type, name, text, email, password, number, tel, placeholder, cpf}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type} 
                text={text} 
                cpf={cpf} 
                email={email} 
                password={password} 
                number={number} 
                tel={tel} 
                placeholder={placeholder}                 
            />
        </div>
    )
}

export default Input