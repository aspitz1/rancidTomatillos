import React, { Component } from 'react';
import '../Navbar/Navbar.css';

class SearchByNameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: ''
        }
    }
    
    handelMovieTitle = (event) => {
        event.preventDefault()
        this.setState({movieTitle: event.target.value });
    }
    
    resetMovieTitle = () => {
        this.setState({ movieTitle: '' });
    }

    handelSubmit = (event) => {
        event.preventDefault()
        const movie = this.props.findMovieByTitle(this.state.movieTitle);
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
                    onChange={this.handelMovieTitle}
                />
                <input
                    type='submit'
                    value='SEARCH' 
                    className='search-by-title-submit' 
                    onClick={(event) => this.handelSubmit(event)}
                    disabled={!this.state.movieTitle}
                />
            </form>
        )
    }
}

export default SearchByNameForm;