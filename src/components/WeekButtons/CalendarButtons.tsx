import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

interface Props {
    onButtonClick: (arg: 'prev' | 'next') => void
}

export default function CalendarButtons({ onButtonClick }: Props) {
    return (
        <ButtonGroup sx={{ margin: '0 20px 0 50px' }} variant="text" aria-label="outlined primary button group">
            <Button onClick={() => onButtonClick('prev')}>Previous week</Button>
            <Button onClick={() => onButtonClick('next')}>Next Week</Button>
        </ButtonGroup>
    );
}
