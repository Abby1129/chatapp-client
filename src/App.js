import { connect, sendMsg } from "./api/index";
import Header from "./components/Header/Header";

function App() {
  connect();

  const send = () => {
    console.log("hello");
    sendMsg("Hello World");
  };

  return (
    <div className="App">
      <Header />
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
