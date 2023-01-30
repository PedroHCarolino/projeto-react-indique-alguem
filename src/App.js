import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Inicio from './components/pages/Inicio'
import Profissionais from './components/pages/Profissionais';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NewContato from './components/pages/NewContato';
import NewUsuario from './components/pages/NewUsuario';

// import AppLayout from './components/layout/AppLayout'

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Endereco from './components/Cadastro/Endereco';
import Advogado from './components/profissoes/Advogado';
import Modal from './components/pages/Modal';
import TelaPro from './components/profissoes/TelaPro'
import Cards from './components/profissoes/Cards'
// import ModalLogin from './components/pages/Modal';

function App() {
  
    return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/profissionais' element={<Profissionais />} />
          <Route exact path='/sobre' element={<Sobre />} />
          <Route exact path='/contato' element={<Contato />} />
          <Route exact path='/modal' element={<Modal />} />
          <Route exact path='/newusuario' element={<NewUsuario />} />
          <Route exact path='/endereco/:id' element={<Endereco />} />
          <Route exact path='/newcontato' element={<NewContato />} />
          <Route exact path='/telapro' element={<TelaPro />} />
          <Route exact path='/cards' element={<Cards />} />
          <Route exact path='/advogado' element={<Advogado />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
