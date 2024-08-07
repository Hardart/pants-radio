export interface ITrackData {
  id: number
  title: string
  artist: string
  link: string
  artUrl?: string
}

export interface IItunesData {
  art30?: string
  art60: string
  art100?: string
  art300?: string
  art600?: string
}

export type Track = {
  artistName: string
  trackTitle: string
  cover: string
  preview: string
  createdAt?: string
}