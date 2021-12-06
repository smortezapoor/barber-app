import galleryData from "./galleryData.json";
import React, { Component } from "react";

class Data extends React.Component {
  state = {
    galleryData: [{ galleryData }],
  };
  render() {
    const galleryData = this.state.galleryData;
    return (
      <div>
        {galleryData.map((galleryData) => (
          <div class="col-lg-4">
            <div class="card">
              <img src={galleryData.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{galleryData["card-title"]}</h5>
                <p class="card-text">{galleryData["card-text"]}</p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }
}

export default Data;
