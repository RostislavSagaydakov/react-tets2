import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StyleGuide from "./templates/pages/style-guide";
import Header from "./templates/components/default/header";
import Footer from "./templates/components/default/footer";
import HomePage from "./templates/pages/HomePage";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <main className="main">
          <Routes>
            <Route exact path="/styles" element={<StyleGuide/>}/>
            <Route exact path="/" element={<HomePage/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
