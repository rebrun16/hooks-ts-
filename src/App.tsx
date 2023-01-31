import UseStateComponents from "./UseStateComponents";
import UseEffectComponent from "./UseEffectComponent";
import UsecontextComponent from "./UsecontextComponent";

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponents/>
      <h1>useEffect</h1>
      <UseEffectComponent/>
      <h1>useContext</h1>
      <UsecontextComponent/>
      <h1>UseContextComponent</h1>
      <UsecontextComponent/>
    </div>
  );
}

export default App;
