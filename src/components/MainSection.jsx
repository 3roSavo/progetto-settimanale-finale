/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeCards from "./HomeCards";

const MainSection = () => {
  const selector1 = useSelector((state) => state.displaySearch);
  const selector2 = useSelector((state) => state.listTrucks);
  const dispatch = useDispatch();

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="searchResults" style={{ display: `${selector1}` }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {selector2 &&
                selector2.data.map((track) => {
                  return (
                    <div className="col text-center" key={track.id}>
                      <img
                        className="img-fluid click-hover"
                        src={track.album.cover_medium}
                        alt="artist"
                        onClick={() => {
                          dispatch({
                            type: "SELECTED_SONG",
                            payload: track,
                          });
                        }}
                      />
                      <p>
                        Track: {track.title.slice(0, 16)}... <br></br>Artist:{" "}
                        <span>{track.artist.name}</span>
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              <HomeCards tracks={"eagles"} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Alternative Rock</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="RockAlternativeSection"
            >
              <HomeCards tracks={"kings of leon"} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10" style={{ marginBottom: "100px" }}>
          <div id="hiphop">
            <h2>Pop Rock</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popRock"
            >
              <HomeCards tracks={"negrita"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainSection;
