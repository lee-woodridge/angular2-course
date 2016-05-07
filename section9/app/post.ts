
export interface Post {
    userId: number;
    id?: number; // optional, using create we want server to generate this.
    title: string;
    body: string;
}