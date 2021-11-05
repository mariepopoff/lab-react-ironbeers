import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import './Form.css';
export default class Form extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((response) => {
        console.log('done');
      });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div id="form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Tagline</label>
              <input
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>First brewed</label>
              <input
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Brewers tips</label>
              <input
                type="text"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Attenuation level</label>
              <input
                type="number"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Contributed by</label>
              <input
                type="text"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleChange}
              />
            </div>

            <button>ADD NEW</button>
          </form>
        </div>
      </div>
    );
  }
}

{
  /* <form action="/movies/create" method="post">
  <div>
    <label for="title" value="title" class="label">Title</label>
    <input type="text" class="input" name="title" />
  </div>
  <div>
    <label for="genre" value="genre" class="label">Genre</label>
    <input type="text" class="input" name="genre" />
  </div>
  <div>
    <label for="plot" value="plot" class="label">Plot</label>
    <input type="text" class="input" name="plot" />
  </div>
  <div>
    <label for="cast" value="cast" class="label">Cast</label>
    <select name="cast" class="input" multiple>
        {{#each celebrities}}
        <option value="{{_id}}">{{name}}</option>
        {{/each}}
    </select>
  </div>
  <button class="button">Create a movie</button>
</form> */
}
