import { UserBalance, UserLevel, UserLinks } from '.';
export declare class User {
    id: string;
    name: string;
    avatarUrl: string;
    banned: boolean;
    dateCreated: string;
    dateLastMessage: string;
    balance: UserBalance;
    level: UserLevel;
    links: UserLinks;
    admin: boolean;
    accessToken: string;
    constructor(user?: User);
}
