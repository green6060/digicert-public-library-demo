import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import Library from './features/library/Library';
import { fetchBooksAsync } from './features/library/LibraryActions';

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBooksAsync())
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        The Game of Thrones Library
      </header>
      <Library />

    </div>
  );
}

export default App;
