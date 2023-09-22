import React, {Component} from 'react';
import gql from "graphql-tag";
import {graphql} from 'react-apollo';
import {Link, hashHistory } from "react-router";

class SongCreate extends Component {
  constructor(props) {
    super();
    this.state = {
      title: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    }).then(() => {
      hashHistory.push('/');
    });
  }

  render() {
    return (
      <div>
        <Link to="/">
          Home
        </Link>
        <h3>Create New Song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song title</label>
          <input onChange={e => this.setState({title: e.target.value})} value={this.state.title}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
};

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);