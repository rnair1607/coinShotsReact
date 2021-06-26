import "./App.css";
import MainContainer from "./maincontainer/MainContainer";
import Info from "./info/Info";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="app">
      <section className="one">
        <MainContainer />
      </section>
      <section className="two">
        <Info />
        <Footer />
      </section>
    </div>
  );
}

export default App;
