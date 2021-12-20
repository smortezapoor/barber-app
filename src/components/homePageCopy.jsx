import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "../../src/styles.css";
import Slide from "./slide";

class HomePageCopy extends Component {
  render() {
    console.log(this.props);
    const mapStyles = {
      width: "350px",
      height: "350px",
      borderRadius: "4px",
    };
    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-6 mt-5">
            <ul className="list-style-none">
              <li>
                <h3>Suche nach Barber...</h3>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none font-weight-light text-secondary"
                >
                  <h5>
                    suche barber nach Entfernung...
                    <i className="bi bi-exclamation-circle-fill "></i>
                  </h5>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-decoration-none font-weight-light text-secondary  	"
                >
                  <h5>Suche nach Top Rated Frisuren</h5>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mt-5">
            <div className="row">
              <div className="col-md-3 "></div>
              <div className="col-md-3 text-center p-3">
                <a href="#" className="text-decoration-none">
                  <h4>Karte Suche</h4>
                </a>

                <Map
                  google={this.props.google}
                  zoom={8}
                  style={mapStyles}
                  initialCenter={{ lat: 47.444, lng: -122.176 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE",
})(HomePageCopy);
