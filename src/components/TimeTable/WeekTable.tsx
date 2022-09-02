import React, { useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableRow, WeekDayName, WeekDate } from './style';
import moment from 'moment';
import { grey } from '@mui/material/colors';
import { DateFormat } from '../../utils/enums';
import { createArrayWithLength } from '../../utils/common';
import Event from '../Events/Event';

interface Props {
    startDate?: string;
}

export default function WeekTable({ startDate = moment().toLocaleString() }: Props) {
    const sevenDays = createArrayWithLength(7);
    const hoursOfTheDay = createArrayWithLength(24);
    const event = {
        start: moment().subtract(1, 'days').hour(10).minute(15).second(0).toLocaleString(),
        end: moment().subtract(1, 'days').hour(11).minute(30).second(0).toLocaleString(),
        name: 'Some random name of event'
    }
    console.log(`🚀 -> file: WeekTable.tsx -> line 27 -> WeekTable -> event`, event);
    const selectedWeekDates = useMemo<string[]>(() => {
        return sevenDays.map((_e, i) => moment(startDate).day(i).toLocaleString())
    }, [startDate, sevenDays])
    // console.log(`🚀 -> file: WeekTable.tsx -> line 30 -> selectedWeekDates -> selectedWeekDates`, selectedWeekDates);

    return (
        <TableContainer sx={{ boxShadow: 'unset', }} component={Paper}>
            <Table sx={{ minWidth: 650, maxWidth: '95%', border: 'unset', marginLeft: "5%" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {selectedWeekDates.map((day, index) => {
                            const weekDay = moment(day)
                            const dayOfTheWeek = weekDay.format(DateFormat.WEEK_DAY_SHORT);
                            const date = weekDay.day(index).format(DateFormat.DATE_SHORT);
                            const today = moment();
                            const isCurrentDate = today.format(DateFormat.LONG_DATE_FORMAT) === moment(day).format(DateFormat.LONG_DATE_FORMAT);
                            return (
                                <TableCell key={day} sx={{ textAlign: 'center' }}>
                                    <WeekDayName>{dayOfTheWeek}</WeekDayName>
                                    <WeekDate isCurrentDate={isCurrentDate}>{date}</WeekDate>
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {hoursOfTheDay.map((_e, index) => {
                        const hours = moment().hour(index).minute(0).format(DateFormat.FULL_TIME);
                        return (
                            <StyledTableRow time={hours} key={hours}>
                                {selectedWeekDates.map((_e, i) => {
                                    const column = moment(event.start).day();
                                    const row = moment(event.start).hour();
                                    const heightCoefficient = moment(event.end).diff(moment(event.start), 'minutes') / 15;
                                    const positionCoefficient = 60 / moment(event.start).diff(moment(event.start).minute(0), 'minutes');
                                    const eventToRender = (i === column && index === row ? <Event coefficientOfHeight={heightCoefficient} coefficientOfPosition={positionCoefficient} title={event.name} /> : null)

                                    console.log(`🚀 -> file: WeekTable.tsx -> line 65 -> {selectedWeekDates.map -> positionCoefficient`, positionCoefficient);

                                    return (<TableCell key={i} sx={{ border: `1px solid ${grey[300]}`, position: 'relative', }} scope="row">{eventToRender}</TableCell>)
                                })}
                            </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
