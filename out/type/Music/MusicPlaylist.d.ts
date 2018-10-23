import { User } from '..';
import { MusicSong } from '.';
export declare class MusicPlaylist {
    id: number;
    name: string;
    songs: MusicSong[];
    user: User;
    constructor(playlist?: MusicPlaylist);
}
