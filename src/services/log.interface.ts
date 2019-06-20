export interface IAdminLog {
    id: string;
    action: string;
}

export interface IAuthLog {
    id: string;
    userId: string;
    createdAt: number;
}
