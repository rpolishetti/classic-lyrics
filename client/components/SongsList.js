import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { Link } from 'react-router';

class SongsList extends Component {

  render() {
    const { loading, songs } = this.props.data;
    if (loading) {
      return <div>Loading</div>
    }
    return (
      <div>
        <h1>Best collections</h1>
        <ul className='collection'>
        {
          songs.map(d => <li className='collection-item' key={d.id}>{d.title}</li>)
        }
      </ul>
      <Link to="/createSong" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
      </div>
      
    );
  }
};

const query = gql`
  query {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongsList);