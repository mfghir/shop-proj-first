import './App.css';
import ListToyProduct from './Components/ListToyProduct';
import ToyProProvider from './Provider/ToyProProvider';

function App() {

  return (
    <main className="App">
      <ToyProProvider >
        <ListToyProduct />
      </ToyProProvider>
    </main>
  );
}

export default App;
