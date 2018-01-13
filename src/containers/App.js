import React, { Component } from "react";
import * as firebase from "firebase";

import initializeApp from "../Firebase/index";

class App extends Component {
  constructor() {
    super();
    // Initialize Firebase
    initializeApp();
  }

  state = {
    posts: [],
    loading: true
  };

  componentWillMount() {
    let postsRef = firebase.database().ref("posts");

    let _this = this;

    postsRef.on("value", function(snapshot) {
      console.log(snapshot.val());

      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          {this.props.children &&
            React.cloneElement(this.props.children, {
              firebase: firebase.database(),
              posts: this.state.posts,
              loading: this.state.loading
            })}
        </p>
      </div>
    );
  }
}

export default App;
