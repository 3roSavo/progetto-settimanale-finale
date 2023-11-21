/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [querySearch, setQuerySearch] = useState("");

  const dispatch = useDispatch();
  const getString = useSelector((state) => state.query);

  const getSearchData = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + getString,
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
        console.log(data);
        dispatch({
          type: "LIST_TRUCKS",
          payload: data,
        });
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    if (querySearch !== "") {
      getSearchData();
    }
  }, [getString]);

  return (
    <div className="col col-2">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link
                    to={"/"}
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <Link
                    to={"/favourites"}
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-suit-heart-fill"></i>&nbsp; Favourites
                  </Link>
                </li>
                <li>
                  <form
                    className="input-group mt-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      dispatch({
                        type: "DISPLAY_SEARCH",
                        payload: "block",
                      });
                      dispatch({
                        type: "SAVE_STRING",
                        payload: querySearch,
                      });
                    }}
                  >
                    <input
                      value={querySearch}
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={(e) => {
                        setQuerySearch(e.target.value);
                      }}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary btn-sm h-100"
                        type="submit"
                      >
                        GO
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <div>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MyNavbar;
