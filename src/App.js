import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Technology from './components/Technology';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App bg-black text-white">
      <Navbar/>
      <Home/>
      <Technology/>
      <Testimony/>
    </div>
  );
}

export default App;
