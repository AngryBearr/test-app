import { Event } from "./db";
import moment from "moment";

export const arrayOfEvents: Event[] = [
  {
    title: "Sport",
    start: moment().add(5, "days").hour(8).minute(15).toDate(),
    end: moment().add(5, "days").hour(8).minute(45).toDate(),
  },
  {
    title: "PI Planning",
    start: moment().add(2, "days").hour(10).minute(30).toDate(),
    end: moment().add(2, "days").hour(12).minute(30).toDate(),
  },
  {
    title: "Business lunch",
    start: moment().add(2, "days").hour(16).minute(45).toDate(),
    end: moment().add(2, "days").hour(17).minute(30).toDate(),
  },
  {
    title: "Daily stand-up",
    start: moment().add(4, "days").hour(11).minute(0).toDate(),
    end: moment().add(4, "days").hour(11).minute(15).toDate(),
  },
  {
    title: "Break on a cup of coffee",
    start: moment().add(4, "days").hour(11).minute(30).toDate(),
    end: moment().add(4, "days").hour(12).minute(0).toDate(),
  },
  {
    title: "Meeting with the client",
    start: moment().add(3, "days").hour(13).minute(15).toDate(),
    end: moment().add(3, "days").hour(15).minute(45).toDate(),
  },
  {
    title: "Morning run",
    start: moment().add(3, "days").hour(9).minute(15).toDate(),
    end: moment().add(3, "days").hour(9).minute(30).toDate(),
  },
  {
    title: "Presentation Demo",
    start: moment().add(5, "days").hour(15).minute(30).toDate(),
    end: moment().add(5, "days").hour(17).minute(45).toDate(),
  },
  {
    title: "Discussion of important questions",
    start: moment().add(5, "days").hour(14).minute(45).toDate(),
    end: moment().add(5, "days").hour(15).minute(15).toDate(),
  },
  {
    title: "A Date",
    start: moment().hour(19).minute(30).toDate(),
    end: moment().hour(23).minute(0).toDate(),
  },
  {
    title: "Walk with my dog",
    start: moment().add(10, "days").hour(10).minute(30).toDate(),
    end: moment().add(10, "days").hour(11).minute(15).toDate(),
  },
  {
    title: "Swimming",
    start: moment().add(10, "days").hour(11).minute(30).toDate(),
    end: moment().add(10, "days").hour(13).minute(0).toDate(),
  },
];
