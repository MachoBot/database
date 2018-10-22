import { User } from '..';
import { MusicSong } from '.';
export declare class MusicPlaylist {
    id: number;
    songs: MusicSong[];
    user: User;
    constructor(playlist?: MusicPlaylist);
}
