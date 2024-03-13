import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RealStatePage from "./pages/RealStatePage";
import ContactPage from "./pages/ContactPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex-1">
          <Header/>
          <Routes>
            <Route path={'/'} element={<HomePage/>} />
            <Route path={'/realstate'} element={<RealStatePage/>} />
            <Route path={'/contact'} element={<ContactPage/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
