import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../SearchResult/search2.css";
import FadeIn from "react-fade-in";
//wait
function search2() {
  // let { name } = useParams();\var name
  var name;
  var price;
  var time;
  var day;
  var url_string = window.location.href;
  var url = new URL(url_string);
  name = url.searchParams.get("name");
  price = url.searchParams.get("price");
  //console.log("aaaa");
  //   console.log(name);

  return (
    <div>
      <div className="container">
        <div>
          <h2>Testimonials</h2>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Carousel indicators */}
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
            </ol>
            {/* Wrapper for carousel items */}
            <div className="carousel-inner">
              <div className="item carousel-item active">
                <div className="img-box">
                  <img src="/examples/images/clients/3.jpg" alt="" />
                </div>
                <p className="testimonial">
                  Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                  id lacinia. Etiam faucibus mauris id tempor egestas. Duis
                  luctus turpis at accumsan tincidunt. Phasellus risus risus,
                  volutpat vel tellus ac, tincidunt fringilla massa. Etiam
                  hendrerit dolor eget rutrum.
                </p>
                <p className="overview">
                  <b>Michael Holz</b>Seo Analyst at <a href="#">OsCorp Tech.</a>
                </p>
                <div className="star-rating">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star-o" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item carousel-item">
                <div className="img-box">
                  <img src="images/photography-4.jpg" alt="" />
                </div>
                <p className="testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  eu sem tempor, varius quam at, luctus dui. Mauris magna metus,
                  dapibus nec turpis vel, semper malesuada ante. Vestibulum idac
                  nisl bibendum scelerisque non non purus. Suspendisse varius
                  nibh non aliquet.
                </p>
                <p className="overview">
                  <b>Paula Wilson</b>Media Analyst at{" "}
                  <a href="#">SkyNet Inc.</a>
                </p>
                <div className="star-rating">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star-o" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item carousel-item">
                <div className="img-box">
                  <img src="/images/photography-4.jpg" alt="" />
                </div>
                <p className="testimonial">
                  Vestibulum quis quam ut magna consequat faucibus. Pellentesque
                  eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                  Pellentesque viverra sagittis quam at mattis. Suspendisse
                  potenti. Aliquam sit amet gravida nibh, facilisis gravida
                  odio. Phasellus auctor velit.
                </p>
                <p className="overview">
                  <b>Antonio Moreno</b>Web Developer at{" "}
                  <a href="#">Circle Ltd.</a>
                </p>
                <div className="star-rating">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-star-half-o" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Carousel controls */}
            <a
              className="carousel-control left carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" />
            </a>
            <a
              className="carousel-control right carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default search2;
