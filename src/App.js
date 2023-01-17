import logo from './logo.svg';
import './App.css';
import { Top } from './top';
import { TechStack } from './techstack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/techstack" element={<TechStack />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
