import { Album, Track } from '../types';

export const ALBUMS_DATA: Album[] = [
  { id: '1', title: 'Enfoque Profundo', artist: 'Lofi & Chill', cover: 'https://picsum.photos/id/10/300/300' },
  { id: '2', title: 'Top Hits 2026', artist: 'Varios Artistas', cover: 'https://picsum.photos/id/20/300/300' },
  { id: '3', title: 'Discover Weekly', artist: 'Spotify', cover: 'https://picsum.photos/id/30/300/300' },
  { id: '4', title: 'Release Radar', artist: 'Nuevos Lanzamientos', cover: 'https://picsum.photos/id/40/300/300' },
];

export const TRACKS_DATA: Track[] = [
  { id: '1', title: 'Midnight City Code', artist: 'Lofi Girl', album: 'Study Sessions', duration: '2:45', cover: 'https://picsum.photos/id/10/200/200' },
  { id: '2', title: 'Coffee & Keyboard', artist: 'Chillhop Music', album: 'Daydreams', duration: '3:10', cover: 'https://picsum.photos/id/20/200/200' },
  { id: '3', title: 'Acoustic Focus', artist: 'Solar Echoes', album: 'Instrumental Waves', duration: '4:02', cover: 'https://picsum.photos/id/30/200/200' },
  { id: '4', title: 'Deep Work Ambient', artist: 'Brain Waves', album: 'Alpha Frequencies', duration: '5:15', cover: 'https://picsum.photos/id/40/200/200' },
];