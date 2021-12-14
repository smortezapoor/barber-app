import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "../../src/styles.css";

class HomePageContent extends Component {
  render() {
    const mapStyles = {
      width: "350px",
      height: "350px",
    };
    return (
      <div className="container margin-t">
        <div className="p-4 p-md mb-4 rounded bg-homepage bg-gradient">
          <div className="row">
            <div className="col-md-6 px-0">
              <h1 className="display-4 ">Find a Barber</h1>

              <input
                type="text"
                className="form-control form-control-lg rounded homepage-input"
                placeholder="Wer/Wo?..."
              ></input>
              <div className="m-3 fs-4 fst-italic">
                <ul className="list-style-none">
                  <li className="m-3">-Lorem ipsum dolor sit amet?</li>
                  <li className="m-3">
                    -Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sunt, amet.
                  </li>
                  <li className="m-3">
                    -Lorem ipsum dolor sit amet consectetur?
                  </li>
                  <li className="m-3">
                    -Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sunt, amet.
                  </li>
                </ul>
              </div>
              <h4 className="m-3">
                <a href="#" className="text-decoration-none">
                  Neue top rated frisuren
                </a>{" "}
              </h4>
            </div>
            <div className="col-md-6 text-center">
              <h3>Karte Suche</h3>

              <div className="text-center container-fluid rounded">
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
})(HomePageContent);
