import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import './SingleBeer.css';

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { random: null };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({ random: response.data });
      });
  }

  render() {
    // console.log(this.props.match.params)
    // console.log('here', this.props.location.pathname)
    if (!this.state.random) return <div>loading</div>;
    const { id } = this.props.match.params;
    let beer;
    if (this.props.location.pathname === '/random-beer') {
      beer = this.state.random;
    } else {
      beer = this.props.beers.find((b) => b._id === id);
    }
    console.log('beer', beer);
    return (
      <div>
        <Header />
        <div id="header">
        <img src={beer.image_url} />
        <div id="title">
          <h1>{beer.name}</h1>
          <p>{beer.attenuation_level}</p>
        </div>

        <div id="second">
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
        </div>

        <article>{beer.description}</article>
        <p id="contribution">{beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}
