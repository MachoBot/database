import { User } from '.';
export declare class UserBalance {
    id: number;
    netWorth: number;
    balance: number;
    dateClaimedDailies: string | null;
    user: User;
    constructor();
}
