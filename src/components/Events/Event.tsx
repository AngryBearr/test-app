import React from "react";
import { Event as StyledEvent } from "./style";
interface Props {
    coefficientOfHeight: number;
    coefficientOfPosition: number;
    eventsInTheSameTime: number; //TODO maybe add a few events in the same column
    title: string;
}
export default function Event({ coefficientOfHeight = 1, coefficientOfPosition = 1, eventsInTheSameTime = 1, title }: Props) {
    return (<StyledEvent heightCoefficient={coefficientOfHeight} positionCoefficient={coefficientOfPosition} splitEventInParts={eventsInTheSameTime}>{title}</StyledEvent>)
}
