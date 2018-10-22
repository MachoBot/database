import { MusicPlaylist } from '.';
export declare class MusicSong {
    id: string;
    title: string;
    url: string;
    playlists: MusicPlaylist;
    constructor(song?: MusicSong);
}
