export class Session {
    CreatedBy: User;
    Users: User[] = [];

    constructor(readonly Name: string) {
    }
}

export class User {
    Vote: number;
    constructor(readonly Name) {}
}