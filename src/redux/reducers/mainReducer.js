const initialState = {
  query: "",
  displaySearch: "none",
  listTrucks: null,
  selectedSong: null,
  favouriteSongs: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_STRING":
      return {
        ...state,
        query: action.payload,
      };

    case "DISPLAY_SEARCH":
      return {
        ...state,
        displaySearch: "block",
      };
    case "LIST_TRUCKS":
      return {
        ...state,
        listTrucks: action.payload,
      };
    case "SELECTED_SONG":
      return {
        ...state,
        selectedSong: action.payload,
      };
    case "FAVOURITE_SONGS":
      return {
        ...state,
        favouriteSongs: action.payload,
      };

    default:
      return state;
  }
};
export default mainReducer;
