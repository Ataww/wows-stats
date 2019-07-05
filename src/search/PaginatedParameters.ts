import { BaseParameters } from "./BaseParameters";

export interface PaginatedParameters extends BaseParameters {
    limit?: number;
    page_no?: number;
}