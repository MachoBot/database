import { GuildSettings } from '.';
export declare class Guild {
    id: string;
    name: string;
    banned: boolean;
    dateCreated: string;
    settings: GuildSettings;
    constructor(guild?: Guild);
}
