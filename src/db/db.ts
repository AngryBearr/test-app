import Dexie, { Table } from 'dexie';

export interface Event {
    id?: number;
    title: string;
    start: string;
    end: string;
}

export class MySubClassedDexie extends Dexie {
    events!: Table<Event>;

    constructor() {
        super('myDatabase');
        this.version(1).stores({
            events: '++id, title, start, end'
        });
    }
}

export const myDexieDB = new MySubClassedDexie();
