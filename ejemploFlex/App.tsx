import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import AlbumGrid from './components/AlbumGrid';
import TrackList from './components/TrackList';
import { Album, ScreenState } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('LOGIN');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  if (currentScreen === 'LOGIN') {
    return <LoginScreen onLogin={() => setCurrentScreen('GRID')} />;
  }

  if (currentScreen === 'GRID') {
    return (
      <AlbumGrid
        onLogout={() => setCurrentScreen('LOGIN')}
        onSelectAlbum={(album: Album) => {
          setSelectedAlbum(album);
          setCurrentScreen('LIST');
        }}
      />
    );
  }

  return (
    <TrackList
      album={selectedAlbum}
      onBack={() => setCurrentScreen('GRID')}
    />
  );
}