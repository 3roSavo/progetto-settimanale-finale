/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
import FooterPlayer from "./components/FooterPlayer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* SIDEBAR VERTICAL */}

          <MyNavbar />

          {/* END SIDEBAR VERTICAL */}
          {/* MAIN SECTION */}

          <MainSection />

          {/* END MAIN SECTION */}
        </div>
      </div>
      {/* NAVBAR FLEX-BOTTOM */}

      <FooterPlayer />

      {/* END NAVBAR BOTTOM */}
    </>
  );
}

export default App;
