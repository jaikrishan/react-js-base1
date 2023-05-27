import './App.css';

// example for props
 
function FullName(props) {
  // return <h3>My name is {props.name}</h3>;
  return <h3>My name is {props.fName.name}</h3>;
}

function App() {
  // const name ="jai krishan sinha"
  const fName = {
    name : 'jai krishan sinha'
  }
  return (
    // <FullName name="jai krishan"/>
    <FullName fName={fName} />
    // <h3>Jai</h3>
  )
}

export default App;
