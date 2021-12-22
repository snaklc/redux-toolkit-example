import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCounter, removeCounter } from './state/features/counterslice';
import { RootState } from './state/store';

function App() {

  const dispatch = useDispatch()
  const sayi = useSelector((state: RootState) => state.counter.value)

  return (
    <div className="App">
      <div style={{fontSize:'105px'}}>
        {sayi}
      </div>
      <button onClick={()=>{dispatch(addCounter())}}>Ekle</button>
      <button onClick={()=>{dispatch(removeCounter())}}>Cıkar</button>
    </div>
  );
}

export default App;
