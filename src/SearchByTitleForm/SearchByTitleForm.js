import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import { withRouter } from 'react-router';

class SearchByNameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: '',
            error: ''
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
        event.preventDefault();
        const id = this.props.findMovieByTitle(this.state.movieTitle);
        if(id) {
            this.props.history.push('/' + id);
            this.resetMovieTitle();
        } else {
            this.setState({...this.state, error: 'Looks like we can\'t find this title.'})
            this.resetMovieTitle();
        }
    }

    render() {
        return (
            <div className='form-container'>
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
                {
                    this.state.error &&
                    <p 
                        style={{color: 'red', 
                        fontFamily: 'sans-serif', 
                        padding: 0,
                        margin: 0}}>
                        {this.state.error}
                    </p>
                }
            </div>
        )
    }
}

export default withRouter(SearchByNameForm);