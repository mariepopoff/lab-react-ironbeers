import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './AllBeers.css';

export default class AllBeers extends Component {
  render() {
    console.log(this.props.beers[0].image_url);
    return (
      <div>
        <Header></Header>
        <div>
          {this.props.beers.map((beer, i) => {
            return (
              <div class="single-beer">
                <Link exact to={'/beers/' + beer._id}>
                  <img src={beer.image_url} />
                  <div class="text-section">
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <p>
                      <b>Created by: </b> {beer.name}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
