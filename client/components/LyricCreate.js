import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class LyricCreate extends Component {
  render() {
    return (
      <form>
        <label>Add a Lyric</label>
        <input />
      </form>
    )
  }
}

export default LyricCreate; 