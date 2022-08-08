import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className='outer-container'>
      <div className="App">
        <Home/>
        <About/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
