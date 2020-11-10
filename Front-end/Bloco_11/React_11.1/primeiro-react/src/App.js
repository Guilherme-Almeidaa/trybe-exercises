
import './App.css';

const commitments = ['Aprender React', 'Aprender Redux', 'Se esforçar', 'Conseguir emprego']
const task = (value) => {
  return (
    value.map((task) => {
     return <li>{task}</li>
    } )
    
  );
}
function App() {
  return (
    task(commitments)
  );
}

export default App;
