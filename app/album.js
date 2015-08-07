import React from 'react';
import { Link } from 'react-router';

export default class Album extends React.Component {
    render() {
        return(
            <span>
                <Link to={`/play/${this.props.data.id}`} ><img src={this.props.data.images[1].url} /></Link>
            </span>
        );
    }
}
