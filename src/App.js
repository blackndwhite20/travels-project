import Trip from "./components/Trip";
import Modal from "./components/Modal";
import BackdropGrey from "./components/BackdropGrey";

function App() {
  return (
    <div>
      <h1>Travel plans</h1>
      <Trip name="Malta" />
      <Trip name="Adriatic Sea Sailing" />
      <Trip name="Crete" />
    </div>
  );
}

export default App;
