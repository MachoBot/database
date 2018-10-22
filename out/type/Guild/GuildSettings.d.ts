import { Guild } from '.';
export declare class GuildSettings {
    id: number;
    suggestionChannel: string | null;
    musicTextChannel: string | null;
    musicVoiceChannel: string | null;
    logChannel: string | null;
    levelUpMessages: boolean;
    voteSkipEnabled: boolean;
    voteClearEnabled: boolean;
    guild: Guild;
    constructor();
}
