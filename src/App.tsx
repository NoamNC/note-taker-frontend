import Board from "./components/Board/Board";
import Modal from 'react-modal';

Modal.setAppElement('#root');
function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
