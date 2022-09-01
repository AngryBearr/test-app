import * as React from 'react';
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

interface Props {
    startDate?: string;
}

export default function WeekTable({ startDate = moment().toLocaleString() }: Props) {
    const createArrayWithLength = (length: number) => Array(length).fill(undefined);
    const sevenDays = createArrayWithLength(7);
    const hoursOfTheDay = createArrayWithLength(24);

    return (
        <TableContainer sx={{ 'box-shadow': 'unset', }} component={Paper}>
            <Table sx={{ minWidth: 650, maxWidth: '95%', border: 'unset', marginLeft: "5%" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {sevenDays.map((_day, index) => {
                            const weekDay = moment(startDate).day(index);
                            const dayOfTheWeek = weekDay.format('dd');
                            const date = weekDay.day(index).format('DD');
                            const today = moment();
                            const monthAndYearAreEqual = today.format('MM:YYYY') === moment(startDate).format('MM:YYYY');

                            return (
                                <TableCell sx={{ textAlign: 'center' }}>
                                    <WeekDayName>{dayOfTheWeek}</WeekDayName>
                                    <WeekDate isCurrentDate={monthAndYearAreEqual && date === today.format('DD')}>{date}</WeekDate>
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {hoursOfTheDay.map((_e, index) => {
                        const hours = moment().hour(index).minute(0).format('HH:mm');
                        return (
                            <StyledTableRow time={hours} key={hours}>
                                {sevenDays.map(() => {
                                    return (<TableCell sx={{ border: `1px solid ${grey[300]}` }} scope="row"></TableCell>)
                                })}
                            </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
