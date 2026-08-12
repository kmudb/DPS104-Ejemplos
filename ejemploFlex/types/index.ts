export interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
}

export type ScreenState = 'LOGIN' | 'GRID' | 'LIST';