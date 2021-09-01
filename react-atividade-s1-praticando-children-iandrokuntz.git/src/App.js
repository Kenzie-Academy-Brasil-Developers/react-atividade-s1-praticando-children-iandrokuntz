import logo from './logo.svg';
import './App.css';
import CenteredCard from './Componentes/CenteredCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <CenteredCard>  <h1> children - 1 </h1>  </CenteredCard>
        <CenteredCard>  <h1> children - 2 </h1>  </CenteredCard>
        <CenteredCard>  <h1> children - 3 </h1>  </CenteredCard>

      </header>
    </div>
  );
}

export default App;
