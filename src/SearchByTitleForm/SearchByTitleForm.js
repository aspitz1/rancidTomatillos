import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../Navbar/Navbar.css';

class SearchByNameForm extends Component {
    constructor() {
        super();
        this.state = {
            movieTitle: '',
            movieID: '',
            submit: false,
            error: ''
        }
    }

    
    
    handelMovieTitle = (event) => {
        this.setState({ movieTitle: event.target.value });
    }
    
    resetForm = () => {
        this.setState({ movieTitle: '' });
    }

    handelSubmit = (event) => {
        event.preventDefault();
        const id = this.props.findMovieByTitle(this.state.movieTitle);
        if(id) {
            this.setState({ ...this.state, movieID: id, submit: true })
        } else {
            this.setState({...this.state, error: 'Looks like we can\'t find this title.'})
            this.resetForm();
        }
    }

    componentDidUpdate() {
        if(this.state.submit) {
            this.setState({ submit: false, movieID: '', error: '', movieTitle: '' })
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
                {this.state.movieID && this.state.submit ? <Redirect push to={'/' + this.state.movieID} /> : null}
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

export default SearchByNameForm;