import React, {Component} from 'react';

const Display = () => (
  <div class="jumbotron">
    <h1 class="display-4">Number</h1>
    <p class="lead">people present in your local area.</p>
    <hr class="my-4" />
    <p>World Check-in is a free website designed to display the population density of your area at a given time. If you are going outside, "check-in" into the outside world by entering the ZIP code of the location you are going to and clicking "Check-in". Once you arrive back at home, report that you have left the outside world by clicking "Check-out".</p>
    <div class="my-3" />
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Check-in</a>
      <span class="mx-3" />
      <a class="btn btn-secondary btn-lg" href="#" role="button">Check-out</a>
    </p>
</div>
);

export default Display;