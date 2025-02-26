import React, { useState } from 'react';

import { FlexItem as FlexItemStyle } from '../../styles';
import { Popover } from './Popover';

interface FlexItemProps {
    children: React.ReactNode;
}

export const FlexItem: React.FC<FlexItemProps> = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(!isOpen);
    };

    // TODO Flexbox children 속성 추가 필요
    /*
    flex
    flex-grow
    flex-shrink
    flex-basis
    algin-self
    order
    */

    return <>
        <FlexItemStyle onClick={handleClick}>{children}</FlexItemStyle>
        <Popover open={isOpen} anchorEl={anchorEl} onClose={() => setIsOpen(false)}>
            pop!!
        </Popover>
    </>;
};
