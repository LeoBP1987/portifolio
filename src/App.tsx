import { Route } from 'react-router'
import { BrowserRouter, Routes } from 'react-router'
import PaginaBase from './paginas/PaginaBase'
import Home from './paginas/Home'
import SobreMim from './paginas/SobreMim'
import Projeto from './paginas/Projeto'
import ScrollToTop from './componentes/ScrollToTop'
import { UsuarioProvider } from './context/UsuarioContext'
import { FormLoginProvider } from './context/FormLoginContext'
import Admin from './paginas/Admin'
import Pessoal from './paginas/Pessoal'
import EditarPessoal from './paginas/EditarPessoal'
import Tecnologias from './paginas/Tecnologias'
import { TecnologiasProvider } from './context/TecnologiasContext'
import Projetos from './paginas/Projetos'
import NovoProjeto from './paginas/NovoProjeto'
import { ProjetosProvider } from './context/ProjetosContext'
import EditarProjeto from './paginas/EditarProjeto'
import { CarregandoProvider } from './context/CarregandoContext'

function App() {

  return (
    <BrowserRouter>
      <CarregandoProvider>
        <UsuarioProvider>
          <TecnologiasProvider>
            <ProjetosProvider>
              <FormLoginProvider>
                <ScrollToTop />
                <Routes>
                  <Route path='/' element={<PaginaBase />}>
                    <Route index element={<Home />} />
                    <Route path='/sobremim' element={<SobreMim />} />
                    <Route path='/projeto/:idProjeto' element={<Projeto key={window.location.pathname} />} />
                    <Route path='/admin' element={<Admin />}>
                      <Route index element={<Pessoal />} />
                      <Route path='/admin/editarPessoal' element={<EditarPessoal />} />
                      <Route path='/admin/tecnologias' element={<Tecnologias />} />
                      <Route path='/admin/projetos' element={<Projetos />} />
                      <Route path='/admin/novoprojeto' element={<NovoProjeto />} />
                      <Route path='/admin/editarprojeto/:idProjeto' element={<EditarProjeto key={window.location.pathname} />} />
                    </Route>
                  </Route>
                </Routes>
              </FormLoginProvider>
            </ProjetosProvider>
          </TecnologiasProvider>
        </UsuarioProvider>
      </CarregandoProvider>
    </BrowserRouter>
  )
}

export default App