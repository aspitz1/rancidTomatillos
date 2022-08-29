import React, { Component } from 'react';
import '../Navbar/Navbar.css';

class SearchByNameForm extends Component {
    constructor() {
        super();
        this.state = {
            movieTitle: ''
        }
    }
    
    handelMovieTitle = (event) => {
        this.setState({ movieTitle: event.target.value });
    }
    
    resetMovieTitle = () => {
        this.setState({ movieTitle: '' });
    }

    handelSubmit = event => {
        event.preventDefault();
        this.props.findMovieByTitle(this.state.movieTitle);
        this.resetMovieTitle();
    }

    render() {
        return (
            <form className='search-by-title-form'>
                <input 
                    className='search-by-title-input'
                    type='text' 
                    value={this.state.movieTitle} 
                    name='movieTitle' 
                    placeholder='Movie Name' 
                    onChange={(event) => this.handelMovieTitle(event)}
                />
                <input 
                    className='search-by-title-submit'
                    type='submit'
                    value='SEARCH'
                    disabled={!this.state.movieTitle.length}
                    onClick={(event => this.handelSubmit(event))}
                />
            </form>
        )
    }
}

export default SearchByNameForm;