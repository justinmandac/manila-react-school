import React from 'react';
import {Component, render} from 'react';

function calculateMovieClass (rating) {
	let ratingClassName = '';
	if (rating < 0.50) {
		ratingClassName +='bad';
	} else if (rating > 0.75) {
		ratingClassName += 'good';
	} else {
		ratingClassName += 'okay';
	}

	return ratingClassName;
}

export default class Movie extends Component {

	render () {
    let {title, year, rating, actors} = this.props;

  	let actorsList = this.props.actors.map(actor => <li>{actor}</li>)
    let ratingString = rating*100;


  	return <div className={`movie ${calculateMovieClass(rating)}`}>
    	<div className="title">{title}</div>
      <div className="year">{year}</div>
      <div className="rating">{ratingString} %</div>
      <ul className="actors">
      	{actorsList}
      </ul>
    </div>
  }
}
