import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import { commonStyle } from '../../utils/constants';
import { deepPurple } from '@mui/material/colors'

export const Event = styled(Box) <{ heightCoefficient: number, positionCoefficient: number, splitEventInParts: number }>`
    color: #fff;
    background-color: ${deepPurple[200]};
    display: block;
    position: absolute;
    left: 2.5%;
    width: 95%;
    border-radius: 5px;
    text-align: center;
    font-size: 11px;
    line-height: 1;
    box-shadow: 0px 0px 2px 2px #fff;

    ${(props) => {
        const { heightCoefficient, positionCoefficient } = props;
        const { tableTimeColumnHeight } = commonStyle;

        return `
            top: ${tableTimeColumnHeight / positionCoefficient}px;
            height: ${heightCoefficient * (tableTimeColumnHeight / 4)}px;
        `
    }}
`
