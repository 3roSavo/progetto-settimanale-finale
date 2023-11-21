/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
import FooterPlayer from "./components/FooterPlayer";
import Favourites from "./components/Favourites";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            {/* SIDEBAR VERTICAL */}

            <MyNavbar />

            {/* END SIDEBAR VERTICAL */}

            {/* MAIN SECTION */}
            <Routes>
              <Route path="/" element={<MainSection />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
            {/* END MAIN SECTION */}
          </div>
        </div>
        {/* NAVBAR FLEX-BOTTOM */}

        <FooterPlayer />

        {/* END NAVBAR BOTTOM */}
      </BrowserRouter>
    </>
  );
}

export default App;
