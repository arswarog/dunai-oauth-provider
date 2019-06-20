export interface IUser {
    id: string;

    nickname: string;

    pwdHash: string;

    createdAt: number;

    deletedAt: number;

    blockedAt: number;
}

export interface IUserInfo {
    id: string;
}

export interface IScopeBinding {
    id: string;
    userId: string;
    appId: string;
    scope: string;
    createdAt: number;
    deletedAt: string;
}

export interface IRoleBinding {
    id: string;
    appId: string;
    userId: string;
    roleId: string;
    createdAt: number;
}

export interface IScope {
    name: string;
    description: string;
}
