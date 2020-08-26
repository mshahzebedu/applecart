// @flow
import * as React from 'react';

export function FeatureProducts() {
  return (
    <section class="feature-product">
    <h2 class="m-30">Feature Product.</h2>
<div class="container">
  <div class="row">

    <div class="col-lg-4">
      <img src="assets/images/iphone.jpg"/> 
      <h3>iPhone</h3>
      <p>From $229 or<br/>$9.54/mo. for 24 mo.<br/>with trade-in</p>
    </div>
    <div class="col-lg-4">
      <img src="assets/images/mac.jpg"/> 
      <h3>Mac</h3>
      <p>From $999 or<br/>$83.25/mo. for 12 mo.</p>
    </div>
    <div class="col-lg-4">
      <img src="assets/images/ipad.jpg"/> 
      <h3>iPad</h3>
      <p>From $329 or<br/>$27.41/mo. for 12 mo.</p>
    </div>

    <div class="col-lg-4">
      <img src="assets/images/airpod.jpg"/> 
      <h3>AirPods</h3>
      <p>From $159 or<br/>$26.50/mo. for 6 mo.</p>
    </div>
    <div class="col-lg-4">
      <img src="assets/images/homepod.jpg"/> 
      <h3>HomePod</h3>
      <p>From $299 or<br/>$49.83/mo. for 6 mo.</p>
    </div>
    <div class="col-lg-4">
      <img src="assets/images/appletv.jpg"/> 
      <h3>Apple Tv</h3>
      <p>From $179 or<br/>$29.83/mo. for 6 mo.</p>
    </div>
    
  </div>
</div>
<p class="btn">See all eligible products</p>
</section>

  );
};