import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom';

import './App.css';
import TopNavBar from './components/TopNavBar/TopNavBar'
import Conocenos from './pages/Conocenos/Conocenos'
import Cantones from './pages/Cantones/Cantones'
import Canton from './pages/Canton/Canton'
import Patrimonio from './pages/Patrimonio/Patrimonio'
import ZonasVerdes from './pages/ZonasVerdes/ZonasVerdes'
import ZonaV from './pages/ZonaV/ZonaV'
import LogIn from './pages/LogIn/LogIn'
import Registro from './pages/Registro/Registro'

function App() {
  //ToDo: Hacer que al iniciar la app, "Conócenos" esté en negrita
  return (
    <Router className='App'>
      <TopNavBar />
      <Routes>
        {/*Acá van las rutas en este estilo:
        <Route path="/" element={<MainPage />}/>
        */ }
        <Route path='/' element={<Conocenos />} />
        <Route path='/Cantones' element={<Cantones />} />
        <Route path='/Cantones/:Canton' element={<Canton />} />
        <Route path='/Cantones/:Canton/:Patrimonio' element={<Patrimonio />} />
        <Route path='/ZonasVerdes' element={<ZonasVerdes />} />
        <Route path='/ZonasVerdes/:ZonaV' element={<ZonaV />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/Registro' element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
