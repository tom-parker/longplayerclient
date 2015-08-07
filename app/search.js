import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSearchChange() {
        var value = React.findDOMNode(this.refs.searchinput).value;
        console.log(value);
        this.props.updateSearch(value);
    }

    render() {
        return <input className="search" type="search" ref="searchinput" onChange={this.handleSearchChange.bind(this)} placeholder="Search" />;
    }
}
