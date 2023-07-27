import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/hero/Hero";
import Topbar from "./component/topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container flexSB paddingTB">
        <Hero />
      </div>
    </>
  );
}

export default App;
