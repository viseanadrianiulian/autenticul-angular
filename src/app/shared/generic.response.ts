export interface IResponse {
    success: boolean;
    message: string;
    isAdmin: boolean;
    userName: string;
    validationErrors: string[];
}