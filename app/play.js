import React from 'react';

import {searchTrack} from './api';
import {Player} from './player';

export default class Play extends React.Component {
    componentWillMount() {
        searchTrack(this.props.params.id).then((data) => {
            var player = new Player();
            player.play(data.tracks.items[0].preview_url)
        });
    }
    render() {
        return(
            <span>{ this.props.params.id }</span>
        );
    }
}
