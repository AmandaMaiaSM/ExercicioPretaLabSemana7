export interface Animals {
    id?: string;
    created_at: string;
    name: string;
    description: string | null;
    value?: number | null;
    age?: number | null;
    breed?: string | null;
    color?: string | null;
    status: "read" | "unread" | "archived" | "deleted" | "donated";
}
