import { Guild } from '.';
export declare class GuildSettings {
    id: number;
    suggestionChannel: string | null;
    musicTextChannel: string | null;
    musicVoiceChannel: string | null;
    logChannel: string | null;
    guild: Guild;
    constructor();
}
