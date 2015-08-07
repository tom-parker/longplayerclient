import 'whatwg-fetch';

import React from 'react';
import _ from 'underscore';

import { searchAlbums } from './api';

import Search from './search';
import AlbumList from './albumlist';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            albums: []
        };
    }

    componentWillMount() {
        this.handleSearchChange = _.debounce(this.handleSearchChange.bind(this), 2000);
    }

    handleSearchChange(searchTerm) {
        this.setState({
            searchTerm: searchTerm
        });
        if (searchTerm === '') {
            this.setState({
                albums: []
            });
            return;
        }
        searchAlbums(searchTerm).then((data) => {
            this.setState({ albums: data.albums.items});
        });
    }

    render() {
        return (
            <div>
                <Search updateSearch={this.handleSearchChange} />
                <div className="search-results">
                    <h2>Search Results</h2>
                    <AlbumList albums={this.state.albums} />
                </div>
            </div>
        );
    }
}
