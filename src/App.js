import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Timer from './components/pages/timer/Timer';
import Clock from './components/pages/clock/Clock';
import Smartwatch from './components/pages/smartwatch/Smartwatch';
function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/timer' element={<Timer />}/>
          <Route path='/' element={<Clock />}/>
          <Route path='/smartwatch' element={<Smartwatch />}/>
        </Routes>
    </div>
  );
}

export default App;
