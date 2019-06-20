/**
 * User
 */
export class User {
    /**
     * id
     */
    id: string;

    nickname: string;

    pwd_hash: string;

    created_at: number;

    deleted_at: number;

    blocked_at: number;
}

export class UserInfo {
    /**
     * id
     */
    id: string;
}
