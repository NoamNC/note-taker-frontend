import Board from "./components/Board/Board";
import Modal from 'react-modal';
import Loader from "./components/Loader/Loader";

Modal.setAppElement('#root');
function App() {
  return (
    <div className="App">
      <Board />
      <Loader/>
    </div>
  );
}

export default App;
