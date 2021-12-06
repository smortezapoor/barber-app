import React, { Component } from "react";
import Data from "../data";
class GalleryCarousel extends React.Component {
  render() {
    return (
      <div>
        <div
          id="carouselMultiItemExample"
          class="carousel slide carousel-dark text-center"
          data-mdb-ride="carousel"
        >
          <div class="d-flex justify-content-center mb-4">
            <button
              class="carousel-control-prev position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="carousel-inner py-4">
            <div class="carousel-item active">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 d-none d-lg-block">
                    <div class="card">
                      <img
                        src="https://mdbootstrap.com/img/new/standard/nature/183.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#!" class="btn btn-primary">
                          Button
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 col-md-12">
                    <div class="card">
                      <img
                        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#!" class="btn btn-primary">
                          Button
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <div class="card">
                      <img
                        src="https://mdbootstrap.com/img/new/standard/nature/185.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#!" class="btn btn-primary">
                          Button
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <div class="card">
                      <img
                        src="https://mdbootstrap.com/img/new/standard/nature/186.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#!" class="btn btn-primary">
                          Button
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <Data />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryCarousel;
