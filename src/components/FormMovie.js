import React, { Component } from "react";
import axios from "axios";

export class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const url = "https://post-a-form.herokuapp.com/api/movies";

    axios
      .post(url, this.state)
      .then((response) => response.data)
      .then((response) => {
        alert(`Movie added with the ID ${response.id}!`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Error when adding your movie: ${e.message}`);
      });
  }

  render() {
    return (
      <div className="MovieForm">
        <h1>Add your favourite movie</h1>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>
            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <input
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
