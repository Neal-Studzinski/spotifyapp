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
            this.props.dispatch(doSearch(this.refs.inputSearch.value, history));
            let searchParameters = this.refs.inputSearch.value.split(' ').join('+');
            history.push(`/search-results?q=$[searchParameters]`);
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
