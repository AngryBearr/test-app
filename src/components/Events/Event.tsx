import React from "react";
import { Event as StyledEvent } from "./style";
interface Props {
    coefficientOfHeight: number;
    coefficientOfPosition: number;
    title: string;
}
export default function Event({ coefficientOfHeight = 1, coefficientOfPosition = 1, title }: Props) {
    console.log(`🚀 -> file: Event.tsx -> line 9 -> Event -> coefficientOfPosition`, coefficientOfPosition);
    return (<StyledEvent heightCoefficient={coefficientOfHeight} positionCoefficient={coefficientOfPosition}>{title}</StyledEvent>)
}
