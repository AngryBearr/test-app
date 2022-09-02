import React, { useMemo } from "react";
import moment from "moment";
import { useLiveQuery } from "dexie-react-hooks";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { myDexieDB, Event as DBEventType } from "../../db/db";
import { createArrayWithLength } from "../../utils/common";
import { commonStyle } from "../../utils/constants";
import { DateFormat } from "../../utils/enums";
import { grey } from "@mui/material/colors";

import { StyledTableRow, WeekDayName, WeekDate } from "./style";
import Event from "../Events/Event";

interface Props {
  startDate?: string;
}

export default function WeekTable({
  startDate = moment().toLocaleString(),
}: Props) {
  const sevenDays = createArrayWithLength(7);
  const hoursOfTheDay = createArrayWithLength(24);
  const events = useLiveQuery(() => {
    const startOfTheWeek = moment(startDate).startOf("week").toDate();
    const endOfTheWeek = moment(startDate).endOf("week").toDate();

    return myDexieDB.events
      .where("start")
      .between(startOfTheWeek, endOfTheWeek, true, true)
      .toArray();
  }, [startDate]);

  const eventsForTheWeek = useMemo(() => {
    return events?.filter((event) => {
      const startOfTheWeek = moment(startDate).startOf("week");
      const endOfTheWeek = moment(startDate).endOf("week");

      return (
        moment(event.start).isAfter(startOfTheWeek) &&
        moment(event.end).isBefore(endOfTheWeek)
      );
    });
  }, [events, startDate]);

  const getEventsForTheDay = (day: string) => {
    return eventsForTheWeek?.filter((event) => {
      const startOfTheDay = moment(day).startOf("day");
      return (
        moment(event.start).startOf("day").toLocaleString() ===
        startOfTheDay.toLocaleString()
      );
    });
  };

  const getEventsForTheHour = (
    events: DBEventType[] | undefined,
    hour: string
  ) => {
    return events?.filter((event) => {
      return (
        moment(event.start).startOf("hour").format(DateFormat.FULL_TIME) ===
        hour
      );
    });
  };

  const selectedWeekDates = useMemo<string[]>(() => {
    return sevenDays.map((_e, i) => moment(startDate).day(i).toLocaleString());
  }, [startDate, sevenDays]);

  return (
    <TableContainer sx={{ boxShadow: "unset" }} component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          maxWidth: "95%",
          border: "unset",
          marginLeft: "5%",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {selectedWeekDates.map((day, index) => {
              const weekDay = moment(day);
              const dayOfTheWeek = weekDay.format(DateFormat.WEEK_DAY_SHORT);
              const date = weekDay.day(index).format(DateFormat.DATE_SHORT);
              const today = moment();
              const isCurrentDate =
                today.format(DateFormat.LONG_DATE_FORMAT) ===
                moment(day).format(DateFormat.LONG_DATE_FORMAT);
              return (
                <TableCell key={day} sx={{ textAlign: "center" }}>
                  <WeekDayName>{dayOfTheWeek}</WeekDayName>
                  <WeekDate isCurrentDate={isCurrentDate}>{date}</WeekDate>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {hoursOfTheDay.map((_e, index) => {
            const hour = moment()
              .hour(index)
              .minute(0)
              .format(DateFormat.FULL_TIME);
            return (
              <StyledTableRow time={hour} key={hour}>
                {selectedWeekDates.map((day, i) => {
                  const eventsOfTheDay = getEventsForTheDay(day);
                  const eventsOfTheHour = getEventsForTheHour(
                    eventsOfTheDay,
                    hour
                  );
                  const renderEventsOfTheHour = eventsOfTheHour?.map(
                    (event, _i, fullArr) => {
                      const heightCoefficient =
                        moment(event.end).diff(moment(event.start), "minutes") /
                        15;
                      const positionCoefficient =
                        60 /
                        moment(event.start).diff(
                          moment(event.start).minute(0),
                          "minutes"
                        );
                      const eventTimeFromTo = `${moment(event.start).format(
                        DateFormat.FULL_TIME
                      )} - ${moment(event.end).format(DateFormat.FULL_TIME)}`;
                      return (
                        <>
                          <Event
                            key={event.id}
                            eventsInTheSameTime={fullArr.length}
                            coefficientOfHeight={heightCoefficient}
                            coefficientOfPosition={positionCoefficient}
                            title={`${eventTimeFromTo} - ${event.title}`}
                          />
                        </>
                      );
                    }
                  );

                  return (
                    <TableCell
                      key={i}
                      sx={{
                        border: `1px solid ${grey[300]}`,
                        position: "relative",
                        height: `${commonStyle.tableTimeColumnHeight}px`,
                        padding: 0,
                      }}
                      scope="row"
                    >
                      {renderEventsOfTheHour}
                    </TableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
