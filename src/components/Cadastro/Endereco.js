import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import styles from "./Endereco.module.css";
import { toast } from "react-toastify";


const Endereco = () => {
  let navigate = useNavigate();
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [usuarioId, setUsuarioId] = useState("");
  const { id } = useParams()

  const cadastrarEndereco = async (e) => {
    e.preventDefault();
    const enderecos = {
      logradouro: logradouro,
      cep: cep,
      numero: numero,
      bairro: bairro,
      complemento: complemento,
      cidade: cidade,
      estado: estado,
      usuarioId: Number(id)
    };
    const response = await axios.post(
      "http://localhost:3001/endereco",
      enderecos,
    );

    if (response.status === 200) {
      toast.success("Cadastrado feita com Sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      navigate("/");
    }
  }
  // console.log(cadastrarEndereco);
  console.log(Number("awesome"));
  
  const {register, handleSubmit, setValue, setFocus} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    // console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.cidade);
      setValue('uf', data.estado);
      setFocus('addressNumber');
    });
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_endereco}>
        <input
          className={styles.form_control}
          placeholder="CEP"
          type="text"
          text="cep"
          id="cep"
          {...register("cep")} onBlur={checkCEP}
          // value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        <input
          className={styles.form_control}
          type="text"
          placeholder="Logradouro"
          text="logradouro"
          id="logradouro"
          // value={logradouro}
          {...register("address" )}
          onChange={(e) => setLogradouro(e.target.value)}
        />

        <input
          className={styles.form_control}
          type="text"
          placeholder="Numero"
          text="numero"
          id="numero"
          // value={numero}
          {...register("addressNumber" )}
          onChange={(e) => setNumero(e.target.value)}
        />

        <input
          className={styles.form_control}
          type="text"
          placeholder="Bairro"
          text="bairro"
          id="bairro"
          {...register("neighborhood" )}
          // value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />

        <input
          className={styles.form_control}
          type="text"
          placeholder="Complemento"
          text="complemento"
          id="complemento"
          // value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />

        <input
          className={styles.form_control}
          type="text"
          placeholder="Cidade"
          text="cidade"
          id="cidade"
          {...register("city" )}
          // value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <input
          className={styles.form_control}
          type="text"
          placeholder="Estado"
          text="estado"
          id="estado"
          {...register("uf" )}
          // value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />

        <button onClick={(e) => cadastrarEndereco(e)}>cadastrar</button>
      </form>
  );
};

export default Endereco;
