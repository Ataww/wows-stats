import { BaseParameters } from "../BaseParameters";

export interface PlayerParameters extends BaseParameters {
    account_id: number;
    access_token?: string;
}