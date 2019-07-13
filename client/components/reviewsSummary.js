import React from 'react';
// import background from '/Users/hh/Documents/Coding/hackReactor/reviews/dist/iconsAndBadges/avgRatingBackground.gif';
import Graph from './ratingsGraph.js';
import RatingDisplayBlock from './ratingdisplayblock.js';

const ReviewsSummary = function(props) {
  return (
    <section className = "customerSummary">

      <div className = "starsAndAverage">

        <RatingDisplayBlock rating = {props.rating}/>

        <div className = "starsContainer">
          <span className ="stars"><span></span></span>
        </div>
        
        <div className = "totalReviews">{props.totalReviews} Reviews</div>
       
      </div>

      <div className = "ratingsBreakdown">
        <Graph ratingsBreakdown = {props.ratingsBreakdown}/>
      </div>
      
    </section>
  )
}

export default ReviewsSummary;