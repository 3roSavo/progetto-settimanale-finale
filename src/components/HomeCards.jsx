import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomeCards = ({ tracks }) => {
  const dispatch = useDispatch();
  const [musics, setMusics] = useState(null);
  const selector = useSelector((state) => state.favouriteSongs);

  const handleHeartClick = (clickedTrack) => {
    const isTrackInFavorites = selector.some(
      (singleTrack) => singleTrack.id === clickedTrack.id
    );
    if (isTrackInFavorites) {
      dispatch({
        type: "REMOVE_FAVOURITE_SONGS",
        payload: clickedTrack.id,
      });
    } else {
      dispatch({
        type: "ADD_FAVOURITE_SONGS",
        payload: clickedTrack,
      });
    }
    console.log(isTrackInFavorites);
  };

  const getTracks = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + tracks,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key":
            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricerca");
        }
      })
      .then((data) => {
        setMusics(data.data.slice(0, 4));
        console.log(data.data.slice(0, 4));
      })

      .catch((err) => {
        return err;
      });
  };
  useEffect(() => {
    getTracks();
  }, []);

  return (
    <>
      {musics &&
        musics.map((track) => {
          const isTrackInFavorites = selector.some(
            (singleTrack) => singleTrack.id === track.id
          );
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
              <div className="row">
                <div
                  className="col-9 p-0 m-0"
                  onClick={() => {
                    dispatch({
                      type: "SELECTED_SONG",
                      payload: track,
                    });
                  }}
                >
                  Track: {track.title.slice(0, 16)}... <br></br>Artist:{" "}
                  <span>{track.artist.name}</span>
                </div>
                <div className="col-1 p-0 row align-items-center">
                  <i
                    onClick={() => handleHeartClick(track)}
                    className={`click-hover bi bi-suit-heart${
                      isTrackInFavorites ? "-fill" : ""
                    }`}
                  ></i>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default HomeCards;
