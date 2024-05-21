import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Sating from "./components/rating/rating";
import Tag from "./components/tag/tag";
import Application from "./components/application/application";
import Support from "./components/support/support";
import Plugin from "./components/pluginss/plugin";
import Footer from "./components/footer/footer";
import Webgl from "./components/webgl";

function App() {
  return (
    <div className="App">
      <div className="webgl-background">
        <Webgl />
      </div>
      <Navbar />
      <Hero />
      <Sating />
      <Tag />
      <Application />
      <Support />
      <Plugin />
      <Footer />
    </div>
  );
}

export default App;
