
import './App.css';

const commitments = ['Aprender React', 'Aprender Redux', 'Se esforçar', 'Conseguir emprego']
const task = (value) => {
  return (
    value.map((item) => {
     return <li>{item}</li>
    } )
    
  );
}
function App() {
  return (
    task(commitments)
  );
}

export default App;
