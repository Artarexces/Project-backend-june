// Interface que define la respuesta de la api
export interface ApiRes<T>{
    success: boolean;
    data?: T;
    message?: string;
}