import { styled } from '@mui/material/styles';
import { TableRow, Box } from '@mui/material';
import { grey, blue } from '@mui/material/colors';

export const StyledTableRow = styled(TableRow) <{ time: string }>`
    &:last-child td, 
    &:last-child th {
        border: 0
    }

    ${(props): string => {
        return `
        td:first-of-type {
            position: relative;

            &:before {
                content: '${props.time}';
                display: block;
                position: absolute;
                left: -38px;
                top: -10px;
            }
        }
        `
    }}
`;

export const WeekDayName = styled(Box)`
    color: ${grey[500]};
    font-size: 12px;
`;

export const WeekDate = styled(Box) <{ isCurrentDate: boolean }>`
    color: ${grey[800]};
    font-size: 22px;

    ${(props): string => {
        const { isCurrentDate: isDayToday } = props;
        let style = ``;
        if (isDayToday) {
            style += `
            color: #fff;
            background: ${blue[400]};
        `
        }
        return style;
    }}
`;
