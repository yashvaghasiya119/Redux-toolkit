import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment, Payloadadd } from "./store/counterslice"


function App(){
  let data = useSelector(state => state.counter.count)
  let dispatch = useDispatch()


  function increment(){
    dispatch(Increment())
  }
  function decrement(){
    dispatch(Decrement())
  }
  function payload(){
    dispatch(Payloadadd(12))
  }
  
  return <>
  <h2>counter: {data}</h2>
  <button onClick={increment}>increment</button>
  <button onClick={decrement}>decrement</button>
  <button onClick={payload}>add payload value</button>

  </>
}
export default App