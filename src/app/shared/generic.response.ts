export interface IResponse {
    success: boolean;
    message: string;
    isAdmin: boolean;
    validationErrors: string[];
}