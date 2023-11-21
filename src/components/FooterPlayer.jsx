/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import nextButton from "../assets/playerbuttons/next.png";
import playButton from "../assets/playerbuttons/play.png";
import prevButton from "../assets/playerbuttons/prev.png";
import repeatButton from "../assets/playerbuttons/repeat.png";
import shuffleButton from "../assets/playerbuttons/shuffle.png";
import pausa1 from "../assets/playerbuttons/pausa1.png";
import { useSelector } from "react-redux";

const FooterPlayer = () => {
  const selector = useSelector((state) => state.selectedSong);
  useEffect(() => {}, [selector]);
  const [playOrPause, setPlayOrPause] = useState(false);

  return (
    <div className="fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-8">
          <div className="row h-100 flex-column justify-content-center align-items-end">
            <div className="col-8 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffleButton} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prevButton} alt="prev" />
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setPlayOrPause(!playOrPause);
                  }}
                >
                  <img
                    src={playOrPause === false ? playButton : pausa1}
                    height={"14px"}
                    alt="play"
                  />
                </a>
                <a href="#">
                  <img src={nextButton} alt="next" />
                </a>
                <a href="#">
                  <img src={repeatButton} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
        {selector && (
          <div className="col-4 d-flex align-items-center">
            <span className="text-light me-2">
              {selector.title.slice(0, 20)}
            </span>
            <img
              src={selector.album.cover}
              style={{ width: "60px" }}
              alt="albumImage"
            />
          </div>
        )}
        {/* non ho tempo per il layout css :((( */}
      </div>
    </div>
  );
};
export default FooterPlayer;
