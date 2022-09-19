import Board from './components/Board';
import Start from './components/Start';
import './index.css';

function App() {
  return (
    <div className="App flex justify-center items-center min-h-screen">


      <div className=' max-w-md w-full py-8 px-4'>
        <Start />
        <Board />
      </div>
      
    </div>
  );
}

export default App;
