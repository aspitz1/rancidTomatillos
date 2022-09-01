import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import { Redirect, NavLink } from 'react-router-dom'

class SearchByNameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: '',
            id: this.props.id || ''
        }
        this.handelMovieTitle = this.handelMovieTitle.bind(this)
        this.handelSubmit = this.handelSubmit.bind(this)
    }
    
    handelMovieTitle = (event) => {
        event.preventDefault()
        this.setState({movieTitle: event.target.value });
        console.log(this.state.movieTitle)
        return this.state.movieTitle
    }
    
    resetMovieTitle = () => {
        this.setState({ movieTitle: '' });
    }

    handelSubmit = (event) => {
       event.preventDefault()
        const movie = this.props.findMovieByTitle(this.state.movieTitle);
       
        this.setState({id: movie.id})
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
                <NavLink className='search-by-title-submit' to={`/${this.props.id}`} onClick={(event) => this.handelSubmit(event)}
                >SEARCH</NavLink>

            </form>
        )
    }
}

export default SearchByNameForm;