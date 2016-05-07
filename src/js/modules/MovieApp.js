require('stylesheets/movies.scss');

import React from 'react';
import {Component, render} from 'react';
import Movie from './movie';

export default class MovieApp extends Component {
  render () {
    let movies = this.props.movies
                  .sort((m1, m2) => m2.rating - m1.rating)
                  .map((data, i) => <Movie key={i} {...data} /> );

    return <div className="movie-db">{movies} </div>;
  }
}
