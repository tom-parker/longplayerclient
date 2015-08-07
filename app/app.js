import React from 'react';
// first we import some components
import { Router, Route } from 'react-router';
// the histories are imported separately for smaller builds
import history from 'react-router/lib/HashHistory';

import Search from './searchresults';
import Play from './play';

// then we delete a bunch of code from `App` and add some `Link`
// components
var App = React.createClass({
  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
});

// Finally we render a `Router` component with some `Route`s, it'll do all
// the fancy routing stuff for us.
React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="search" component={Search}/>
      <Route path="play/:id" component={Play}/>
    </Route>
  </Router>
), document.getElementById('app'));
