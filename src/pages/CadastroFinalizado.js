// import React, { useState } from "react";
// import { useNavigate  } from "react-router-dom";
// import axios from "axios";
// import Modal from 'react-modal';
// import Input from '../form/Input'
// import LinkButton from '../layout/LinkButton';
// import styles from './Cadastro.Finalizado.css'
// import { toast } from "react-toastify";



// export default function Login() {
//   const [nomeCompleto, setNomeCompleto] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const logar = async (e) => {
//     e.preventDefault();
//     if (!nomeCompleto.length && !password.length){
//       const response = await axios.post(`https://indique-alguem-back-end.herokuapp.com/usuarios/auth`, {
//         nomeCompleto,
//         password,
//       });
//       console.log(response)
//       if (response.data && response.status === 200) {
//         navigate("/lista/cliente");
//       }
//       toast('Username ou senha incorretos!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }
//     else{
//     toast.error('Por favor, preencher os campos obrigatórios', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   }
//   };




// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//       background: 'rgb(186, 225, 248)',
//       // : 'rgb(40, 121, 168)',
//     },
//   };

// function CadastroFinalizado () {

//     let subtitle;
//     const [modalIsOpen, setIsOpen] = React.useState(false);
  
//     function openModal() {
//       setIsOpen(true);
//     }
  
//     function afterOpenModal() {
//       // references are now sync'd and can be accessed.
//       subtitle.style.color = 'rgb(40, 121, 168)';
      
//     }
  
//     function closeModal() {
//       setIsOpen(false);
//     }


//     return (
//         <div>
//             <h1>Cadastro finalizado com sucesso!</h1> 

//             <div>
//                     <button className={styles.button_moda} onClick={openModal}>Finalizar</button>

//                     <Modal
//                         isOpen={modalIsOpen}
//                         onAfterOpen={afterOpenModal}
//                         onRequestClose={closeModal}
//                         style={customStyles}
//                         contentLabel="Example Modal"
//                     >
//                         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Bem Vindo ao Indique Alguém</h2>
//                         <button className={styles.button_modal_clos} onClick={closeModal}>X</button>
                        
//                         <form className= {styles.form_moda}>
//                             <label>
//                                 <Input 
//                                     type="text"
//                                     text="E-mail"
//                                     placeholder="E-mail"
//                                     onChange={({ target }) => setNomeCompleto(target.value)}                    
//                                 />
//                                 <Input 
//                                     type="text"
//                                     text="Senha"
//                                     placeholder="Senha"
//                                     onChange={({ target }) => setPassword(target.value)}                      
//                                 />
//                                 <LinkButton text="Entrar" onClick={(e) => logar(e)} />
//                             </label>
                                
                                
                        
//                         </form>
//                     </Modal>
//                 </div>
//             </div>
//     )
// }
// }
// // export default CadastroFinalizado