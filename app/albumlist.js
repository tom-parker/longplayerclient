import React from 'react';

import Album from './album';

export default class AlbumList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var albums = this.props.albums.map((album) => {
            return <li><Album data={ album } /></li>
        });

        return <ul>{ albums }</ul>;
    }
}
