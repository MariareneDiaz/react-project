import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <nav className="navbar navbar-dark">
            <a className="navbar-brand">Search your city's weather </a>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search City"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                Current
              </button>
            </form>
          </nav>
          <br />

          <div className="display-4">
            <div className="today">
              <br />
              📍
              <strong></strong>
            </div>

            <p></p>

            <br />
            <span></span>
            <img src=".." alt="Clear" className="float-left" />
            <span className="temperature">
              <span className="units">
                <div className="float-right">
                  <a href="#">°C</a>
                </div>
              </span>
            </span>
            <div className="partly">
              <span></span>
            </div>
            <div className="temperature">
              <br />
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="weather" id="feels">
            <strong>
              <span className="geneva">Weather today feels like:</span>
            </strong>
            <br />
            <br />
            <div className="row">
              <div className="col-6">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>🌡 Max</td>
                      <td>
                        <span></span>
                      </td>
                    </tr>
                    <tr>
                      <td>💨 Wind</td>
                      <td>
                        <span> </span>
                        km/h
                      </td>
                    </tr>
                    <tr>
                      <td>💧 Humidity</td>
                      <td>
                        {" "}
                        <span></span>%
                      </td>
                    </tr>
                    <tr>
                      <td>🔻 Pressure</td>
                      <td>
                        <span></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-4">
                <table className="table">
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="row weather-forecast">
          <div className="col-2">
            <h5>
              <br />
            </h5>
            <img
              src="http://openweathermap.org/img/wn/${
                  forecast.weather[0].icon
                }@2x.png"
            />
            <div className="weather-forecast-temperature"></div>
          </div>
        </div>
      </div>
      <p>Open-source code</p>
      by Mariarené Diaz
    </div>
  );
}