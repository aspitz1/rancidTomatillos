import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom'
import { Swtich } from 'react-router-dom'

class SearchByNameForm extends Component {
    constructor() {
        super();
        this.state = {
            movieTitle: '',
            id: ''
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
        const id = this.props.findMovieByTitle(this.state.movieTitle);
        console.log(id)
        this.setState({id: id, movieTitle: ''})
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
                <Link to={'/' + this.state.id} >
                    <input 
                        className='search-by-title-submit'
                        type='submit'
                        value='SEARCH'
                        disabled={!this.state.movieTitle.length}
                        onClick={(event => this.handelSubmit(event))}
                    />
                </Link>

            </form>
        )
    }
}

export default SearchByNameForm;