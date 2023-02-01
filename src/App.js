import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Profissionais from './pages/Profissionais';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import NewContato from './pages/NewContato';
import NewUsuario from './pages/NewUsuario';
import Modal from './pages/Modal';

// import AppLayout from './components/layout/AppLayout'

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Endereco from './components/Cadastro/Endereco';
import Perfil from './components/perfil/Perfil';
import Advogado from './components/profissoes/Advogado';
import TelaPro from './components/profissoes/TelaPro'
import Cards from './components/profissoes/Cards'

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
          <Route exact path='/perfil' element={<Perfil />} />
          <Route exact path='/cards' element={<Cards />} />
          <Route exact path='/advogado' element={<Advogado />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
