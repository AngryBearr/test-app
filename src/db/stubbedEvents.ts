import { Event } from "./db";
import moment from "moment";


export const arrayOfEvents: Event[] = [
    {
        title: 'Sport',
        start: moment().add(5, 'days').hour(8).minute(15).toLocaleString(),
        end: moment().add(5, 'days').hour(8).minute(45).toLocaleString()
    },
    {
        title: 'PI Planning',
        start: moment().add(2, 'days').hour(10).minute(30).toLocaleString(),
        end: moment().add(2, 'days').hour(12).minute(30).toLocaleString()
    },
    {
        title: 'Business lunch',
        start: moment().add(2, 'days').hour(16).minute(45).toLocaleString(),
        end: moment().add(2, 'days').hour(17).minute(30).toLocaleString()
    },
    {
        title: 'Daily stand-up',
        start: moment().add(4, 'days').hour(11).minute(0).toLocaleString(),
        end: moment().add(4, 'days').hour(11).minute(15).toLocaleString()
    },
    {
        title: 'Break on a cup of coffee',
        start: moment().add(4, 'days').hour(11).minute(30).toLocaleString(),
        end: moment().add(4, 'days').hour(12).minute(0).toLocaleString()
    },
    {
        title: 'Meeting with the client',
        start: moment().add(3, 'days').hour(13).minute(15).toLocaleString(),
        end: moment().add(3, 'days').hour(15).minute(45).toLocaleString()
    },
    {
        title: 'Morning run',
        start: moment().add(3, 'days').hour(9).minute(15).toLocaleString(),
        end: moment().add(3, 'days').hour(9).minute(30).toLocaleString()
    },
    {
        title: 'Presentation Demo',
        start: moment().add(5, 'days').hour(15).minute(30).toLocaleString(),
        end: moment().add(5, 'days').hour(17).minute(45).toLocaleString()
    },
    {
        title: 'Discussion of important questions',
        start: moment().add(5, 'days').hour(14).minute(45).toLocaleString(),
        end: moment().add(5, 'days').hour(15).minute(15).toLocaleString()
    },
    {
        title: 'A Date',
        start: moment().hour(19).minute(30).toLocaleString(),
        end: moment().hour(23).minute(0).toLocaleString()
    },
    {
        title: 'Walk with my dog',
        start: moment().add(10, 'days').hour(10).minute(30).toLocaleString(),
        end: moment().add(10, 'days').hour(11).minute(15).toLocaleString()
    },
    {
        title: 'Swimming',
        start: moment().add(10, 'days').hour(11).minute(30).toLocaleString(),
        end: moment().add(10, 'days').hour(13).minute(0).toLocaleString()
    }
];
