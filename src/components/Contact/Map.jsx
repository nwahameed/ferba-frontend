import React from "react";
import styled from "styled-components";
import MapImg from "../../assets/map.png";
import PText from "./PText";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

const Map = () => {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>GEC circle, Chittagong, Bangladesh</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Sulaymaniyah/@35.5632298,45.2952529,12z/data=!3m1!4b1!4m6!3m5!1s0x40002c0536d143b1:0xf791750d4e215dea!8m2!3d35.5557603!4d45.4351181!16zL20vMDJfd3Az"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      <img src={MapImg} alt="Map" />
    </MapStyles>
  );
};

export default Map;
