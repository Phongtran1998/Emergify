/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Home';
import Menu from './Menu';
import Search from './Search';
import Post from './Post';
import Result from './Result'

const App = () => {
  return(
    <Router>
        <Scene key={"root"}>
          <Scene key={"home"}
                 component={Home}
                 title={"Home"}
          />

          <Scene key={"menu"}
                 component={Menu}
                 title={"Menu"}
                 initial
          />
          <Scene key={"search"}
                 component={Search}
                 title={"Search"}
          />
          <Scene key={"post"}
                 component={Post}
                 title={"Post"}
          />
          <Scene key={"result"}
                 component={Result}
                 title={"Result"}
          />
        </Scene>
    </Router>
  );
};

export default App;