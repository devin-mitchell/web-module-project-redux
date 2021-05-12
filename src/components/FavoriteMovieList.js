import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/movieActions';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites.favorites;
    
console.log("FAV LIST PROPS", props)
    const handleDelete = (id) => {
        props.removeFavorite(id)
    }
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
           favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span>
                            <span onClick={() => handleDelete(movie.id)} className="material-icons">remove_circle</span>
                        </span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
   return {
       favorites: state.favorites,
   }
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);