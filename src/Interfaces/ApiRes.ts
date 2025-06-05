export interface ApiRes<T>{
    success: boolean;
    data?: T;
    message?: string;
}