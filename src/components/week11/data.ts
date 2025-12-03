export interface UserData {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
}

export const sampleData: UserData[] = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "Inactive" },
    { id: 4, name: "Alice Williams", email: "alice@example.com", role: "User", status: "Active" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "Admin", status: "Active" },
];
