import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {
  
  state = {
    population: null,
    rotationPeriod: null,
    diameter: null,
  }
  
  render() {
    
    const { population, rotationPeriod, diameter } = this.state;
    
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
              alt='Planet'/>
        <div>
          <h4>Planet Name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">{rotationPeriod}</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">{diameter}</span>
              <span>100</span>
            </li>
          </ul>
        </div>
      </div>
    
    );
  }
}
