import MegaMenu from "components/partials/atoms/MegaMenu";
import "./App.css";
import Standings from "components/pages/Standings";

function App() {
  return (
    <div className="App">
      <MegaMenu />
      <main>
        <Standings />
      </main>
    </div>
  );
}

export default App;
