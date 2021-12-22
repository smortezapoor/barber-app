import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
// import "../../src/styles.css";
import Slide from "./slide";
import "./tools/components.css";

class HomePageCopy extends Component {
  render() {
    console.log(this.props);
    const mapStyles = {
      width: "350px",
      height: "350px",
      borderRadius: "4px",
      marginBottom: "3rem",
    };
    return (
      <div className="container-fluid homepage-bg-color">
        <div className="row mt-5">
          <div className="col-md-6 mt-5">
            <h3 className="text-info ms-5 mt-4">Suche nach Barber...</h3>

            <div className="list-container">
              {" "}
              <ul className="list-style-none ">
                <li className="text-info"></li>
                <li className="">
                  <a
                    href="#"
                    className="text-decoration-none   font-weight-light text-secondary"
                  >
                    <h5 className="line-height-3">
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
                    <h5 className="line-height-3">
                      Suche nach Top Rated Frisuren
                    </h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="row m-3">
              <div className="col-md-3 text-center p-3 ">
                <a href="#" className="text-decoration-none text-info">
                  <h4>Karte Suche</h4>
                </a>
                <div className="map-container-sample ">map-container</div>
                {/* <Map
                  google={this.props.google}
                  zoom={8}
                  style={mapStyles}
                  initialCenter={{ lat: 47.444, lng: -122.176 }}
                /> */}
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3 mt-5">
                <div className="right-side-map-ad text-center">
                  advertisment
                </div>
              </div>

              {/* <p className="ms-5">
                Auf den Map Klicken und schen Sie <br />
                beste frisuren von Map
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4 className="m-3"> Die besten Fisuren Gallery </h4>
            <h6 className="m-4">
              finden Sie die besten Frisuren nach Photogallerie in 4
              verschiedenen Gruppen:{" "}
            </h6>
            <ul className="list-style-none m-3">
              <li>
                <a href="#" className="text-decoration-none">
                  Haarschnitt Frisuren.
                </a>
              </li>
              <li>
                <a href="#" className=" text-decoration-none">
                  Haarscnitt Frisuren.
                </a>
              </li>
              <li>
                <a href="#" className=" text-decoration-none">
                  Make Up
                </a>
              </li>
              <li>
                <a href="#" className=" text-decoration-none">
                  Mode Haarfarben
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            {" "}
            <Slide />{" "}
          </div>
        </div>
        <div className="row m-5">
          <div className="col-sm-4">
            <ul className="list-style-none">
              <li>site map</li>
              <li>site map</li>
              <li>site map</li>
              <li>site map</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="list-style-none">
              <li>Contact</li>
              <li>Contact</li>
              <li>Contact</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="list-style-none">
              <li>Impresson</li>
              <li>Impresson</li>
              <li>Impresson</li>
              <li>Impresson</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageCopy;
//GoogleApiWrapper({
//   apiKey: "YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE",
// })(HomePageCopy);
