import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { checking, slideingNext, slideingPrev } from './Calcslice';

function App() {
  const dispatch = useDispatch();
  const result = useSelector(state => state.calc.result);
  const current = useSelector(state => state.calc.current);
  const arr = [100, 200, 55, 150, 250];

  return (
    <div className="App">
      {result}
      {arr.map(item => <button onClick={() => dispatch(checking(item))}>{item}</button>)}
      <button onClick={() => dispatch(slideingPrev())}>PREV</button>
      <div className="item" style={{left : `${current}px`}}></div>
      <button onClick={() => dispatch(slideingNext())}>NEXT</button>
    </div>
  );
}

export default App;
