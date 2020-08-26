// @flow 
import * as React from 'react';

    

export const Header = () => {
    return (
        <div>
            <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html"><h2>Apple Card<em>.</em></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Overview
                  
                </a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Monthly Installments</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">How-To Films</a>
              </li>
              <li class="nav-item">
                <a class="nav-link bg-clr" href="#">Apply Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header> 
        </div>
    );
};