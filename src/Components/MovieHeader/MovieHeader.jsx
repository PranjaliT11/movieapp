

import "./MovieHeder.css"
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import StarRating from '../StarRating/StarRating'
export function MovieHeader({ movie }) {
    console.log(movie);

    return (
        <div className="detailContainer" style={{
            backgroundImage: 'url("https://st4.depositphotos.com/1020618/28685/i/450/depositphotos_286856426-stock-photo-cinema-concept-of-vintage-film.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',  // Adjust the background size as needed
            backgroundPosition: 'center',
            // Adjust the background position as needed
        }}>
            <div className="detailsbox">
            <div className="details" >
              <div className="big-img">
                <img src={movie.image} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>Name : {movie.title}</h2>
                  <span>Id: {movie.id}</span>
                </div>
                <p>Language: {movie.language}</p>
                <p>Movie Duration: {movie.movie_length}</p>
                
                
                <a href={`${movie.id}/ticketPlan`} class="btnBookTickets">Book Tickets</a>
              </div>
            </div> 
      </div>
        </div>
    );
}
