import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import { commonStyle } from '../../utils/constants';

export const Event = styled(Box) <{ heightCoefficient: number, positionCoefficient: number }>`
    color: black;
    background-color: blue;
    display: block;
    position: absolute;
    left: 2.5%;
    width: 95%;

    ${(props) => {
        const { heightCoefficient, positionCoefficient } = props;
        const { tableTimeColumnHeight } = commonStyle;

        return `
            top: ${tableTimeColumnHeight / positionCoefficient}px;
            height: ${heightCoefficient * (tableTimeColumnHeight / 4)}px;
        `
    }}
`
