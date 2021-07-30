import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class HomePageContent extends Component {
  render() {
    const mapStyles = {
      width: "400px",
      height: "400px",
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
