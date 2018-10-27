import { GuildSettings, GuildTag } from '.';
export declare class Guild {
    id: string;
    name: string;
    banned: boolean;
    dateCreated: string;
    settings: GuildSettings;
    tags: GuildTag[];
    constructor(guild?: Guild);
}
