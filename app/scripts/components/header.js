import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import doSearch from '../actions/do-search.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.submitButton = this.submitButton.bind(this);
    }

    handleSearchClick(history) {
        if (this.refs.inputSearch.value) {
            console.log('BUTTON CLICK: ', history);
            let searchTerm = this.refs.inputSearch.value.split(' ').join('+');
            this.props.dispatch ({
                type:'UPDATE_PATH_QUERY',
                searchTerm: searchTerm,
                history: history
            });
    }
}

    submitButton({history}) {
        return (
            <button

                type = "submit"
                name = 'btn-submt-search'
                onClick = {e => {
                    e.preventDefault();
                    this.handleSearchClick(history);
                }}
            >
            search
            </button>
        );
    }

    headingClickable({history}) {
        return (
            <h1
                className='page-heading'
                onClick={() => history.push('/')}
            >
            Artist Voting
            </h1>
        );
    }
    

    render() {
        return (
            <header>
                <Route render = {this.headingClickable} />
                <form className = "">
                    <input
                        type='text'
                        ref='inputSearch'
                        name='Search from Artist by name'
                        placeholder='search for artists'
                    />
                    <Route render={this.submitButton} />
                </form>
            </header>
        );
    }
}

export default connect()(Header);
