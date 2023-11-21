import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
  const selector = useSelector((state) => state.favouriteSongs);
  const dispatch = useDispatch();

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

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage mb-5">
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Favourites</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {selector.map((track) => {
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
                        Track: {track.title.slice(0, 16)}... <br></br>
                        Artist: <span>{track.artist.name}</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Favourites;
