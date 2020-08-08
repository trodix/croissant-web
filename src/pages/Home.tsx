import React, { useEffect } from 'react';
import PlayerList from '../components/PlayerList';
import { useDispatch } from 'react-redux';
import { croissantActions } from '../actions';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(croissantActions.fetchPlayers());
  });

  return (
    <div>
      <h1>Home page</h1>
      <PlayerList></PlayerList>
    </div>
  );
  
}

export default Home;