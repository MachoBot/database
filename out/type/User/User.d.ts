import { UserBalance, UserLevel, UserLinks } from ".";
export declare class User {
    id: string;
    name: string;
    avatarUrl: string;
    banned: boolean;
    dateCreated: number;
    dateLastMessage: number;
    balance: UserBalance;
    level: UserLevel;
    links: UserLinks;
    admin: boolean;
    accessToken: string;
    constructor(user?: User);
}
