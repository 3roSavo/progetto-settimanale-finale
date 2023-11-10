import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const HomeCards = ({ tracks }) => {
  const dispatch = useDispatch();
  const [musics, setMusics] = useState([]);

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
        console.log(data.data);
        setMusics(data.data);
      })
      .catch((err) => {
        return err;
      });
  };
  useEffect(() => {
    getTracks();
  }, []);

  return musics.slice(0, 4).map((track) => {
    return (
      musics && (
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
          <p className="row">
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
                className="bi bi-suit-heart click-hover"
                onClick={() => {
                  dispatch({
                    type: "FAVOURITE_SONGS",
                    payload: track,
                  });
                }}
              ></i>
            </div>
          </p>
        </div>
      )
    );
  });
};
export default HomeCards;
