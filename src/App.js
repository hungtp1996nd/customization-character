import { useEffect, useState } from 'react';
import './App.css';
import Child from './components/Child';

function App() {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(40)
  useEffect(() => {
    if (count === 10) {
      setAge(60)
    }
  }, [count])
  return (
    <div className="App">
      {/* props: phương thức để truyền data từ cha sang con */}
      <Child name={"Hào"} age={age} />
      <h2>{count}</h2>
      <button onClick={() => setCount(count+1)}>Change count</button>
    </div>
  );
}

export default App;
