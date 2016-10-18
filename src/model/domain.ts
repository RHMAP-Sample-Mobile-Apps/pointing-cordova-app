export class Session {
    CreatedBy: User;
    Users: User[];

    constructor(readonly Name: string) {
    }
}

export class User {
    constructor(readonly Name) {}
}