export interface IApplication {
    id: string;

    title: string;

    createdAt: number;

    deletedAt: number;

    blockedAt: number;

    updatedAt: number;

    trusted: boolean;

    clientId: string;

    clientSecret: string;

    roles: IAppRole[];

    scopes: string[];
}

export interface IAppRole {
    id: string;

    name: string;

    title: string;

    description: string;
}
