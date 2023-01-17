export interface ApplicationStorage {
    getData(selector: string): Array<Record<string, any>>,
    addData(item: Record<string, any>, type: string): void
}

export type TodoTask = {
    id?: number;
    title: string;
    task: string;
    date: string;
    color?: string;
    completed?: boolean;
}