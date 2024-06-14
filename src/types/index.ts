export {};

declare global {
    interface User {
        id: string;
        email: string;
        name: string;
        roles: string[];
    }

    interface AgendaEvent {
        id?: string;
        name: string;
        subtitle: string;
        description: string;
        date: Date;
        location: string;
        externalLink?: string;
    }
}
