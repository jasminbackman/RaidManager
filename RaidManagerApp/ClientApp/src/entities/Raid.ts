import { BaseState } from "./BaseState";

export interface RaidState extends BaseState, Immutable.Map<string, any>
{
    data: Raid[];
}

export interface Raid
{
    id: number;
    name: string;
    date: Date;
    reports: string[];
    logTitle: string;
}