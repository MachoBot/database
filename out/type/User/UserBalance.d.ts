import { User } from ".";
export declare class UserBalance {
    id: number;
    netWorth: number;
    balance: number;
    dateClaimedDailies: number | null;
    user: User;
    constructor();
}
