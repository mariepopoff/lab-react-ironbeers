import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeSection from './homeSection.jsx';
import Header from './Header';
import AllBeers from './AllBeers';
import axios from 'axios';
import SingleBeer from './SingleBeer';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { beers: null };
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((response) => {
      this.setState({ random: response.data });
    });
  }



  render() {
    let text1 =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium vero consequatur corrupti explicabo excepturi quo voluptatem eveniet hic, tempora cupiditate reprehenderit laborum itaque ullam earum sed aliquam perspiciatis officia.';
    let text2 =
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur debitis quaerat id dolorem, totam officia quo error distinctio, dolore maxime veniam dolores repellendus adipisci dolorum optio architecto accusamus delectus?';
    let text3 =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, possimus dignissimos deserunt velit voluptate a est, cumque iure autem aliquam fugit nostrum similique architecto et amet rem vitae repellendus doloremque.';
    if (!this.state.beers) return <div>loading</div>;
   
    
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeSection
              title="All Beers"
              picture="./assets/beers.png"
              route="beers"
              text={text1}
            />
            <HomeSection
              title="Random Beer"
              picture="./assets/random-beer.png"
              route="random-beer"
              text={text2}
            />
            <HomeSection
              title="New Beer"
              picture="./assets/new-beer.png"
              route="new-beer"
              text={text3}
            />
          </Route>

          <Route
            exact
            path="/beers"
            render={(props) => {
             
              return <AllBeers {...props} beers={this.state.beers} />;
            }}
          />

          <Route
            exact
            path="/beers/:id"
            render={(props) => {
              
              return <SingleBeer {...props} beers={this.state.beers} />;
            }}
          />

<Route
            path="/random-beer"
            render={(props) => {

              console.log("random", this.state.random)
              return <SingleBeer {...props} beers={this.state.random} />;
            }}
          />

<Route exact path="/new-beer">
            <Form/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
