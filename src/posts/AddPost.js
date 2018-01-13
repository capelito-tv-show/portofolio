import React, { Component } from "react";

class AddPost extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "",
      text: ""
    }
  }

  handleChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleTextChange = e => {
    this.setState({
      text:e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.firebase.ref("posts").push({
      title: this.state.title,
      text: this.state.text,
      upvote: 0,
      downvote: 0
    });

    this.setState({
      title: "",
      text: ""

    });
  };

  render() {
    return (
      <form className="post-box">
        <div className="AddPost">
          <input
            type="text"
            placeholder="Write the title of your post"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <textarea
            placeholder="テキストを入力"
            onChange={this.handleTextChange}
            value={this.state.text}
          />
          <button type="submit" onClick={this.handleSubmit}>
            送信する
          </button>
        </div>
      </form>
    );
  }
}

export default AddPost;
