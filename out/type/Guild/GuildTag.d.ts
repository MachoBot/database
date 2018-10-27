import { Guild } from '.';
export declare class GuildTag {
    id: number;
    name: string;
    content: string;
    guild: Guild;
    constructor(guildTag?: GuildTag);
}
