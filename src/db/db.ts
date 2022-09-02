import Dexie, { Table } from 'dexie';

export interface Event {
    id?: number;
    title: string;
    start: Date;
    end: Date;
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
