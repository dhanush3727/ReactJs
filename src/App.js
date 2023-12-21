import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Bag from "./components/Bag";
import Apples from "./components/Apples";
import Pears from "./components/Pears";
import Example from "./components/Example";

// function Header() {
//   return <h1>Hello World</h1>;
// } It is one of way to create component
function App() {
  const bool = false;
  const str1 = "just";
  // Create component and import it
  // Props - Pass data between components. Arguments are passed like HTML atrributes. Uses the keyword Props. Send multiple data types. Flexible dynamic content. Props are passed using JSX syntax. Props are like a javascript object.
  // Pure functions - Always returns the same output for the same argument value
  // <Header />;
  // JSX(JavaScript Syntax) - It is look like togerhter of HTML and JS cod
  return (
    <div>
      <Nav
        title="This is a NavBar"
        first="Home"
        second="Articles"
        third="About"
        fourth="Contact"
      />
      {/* It is a Props to pass data from child element  Some other exercise */}
      <Bag children={<Apples color="Yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} />
      {/* Ternery Operator in JSX */}
      <Example
        toggleBoolean={!bool}
        math={(10 + 20) / 3}
        str={str1 + " another " + "string"}
        // Expressions as props
      />
    </div>
  );
}

export default App;
