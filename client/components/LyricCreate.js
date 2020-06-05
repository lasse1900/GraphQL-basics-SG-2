import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' }
  }

  onSubmit(event) {
    event.preventDefault();


  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    )
  }
}

const mutation = gql`
  mutation AddLyricToSong($songid: ID!, $content: String){
    addLyricToSong(songId: $songid, content:$content){
      id
      lyrics {
        content
      }
    }
}`;

export default LyricCreate; 