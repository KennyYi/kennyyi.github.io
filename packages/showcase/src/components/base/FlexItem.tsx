import React, { useContext, useState } from 'react';

import { FlexItem as FlexItemStyle } from '../../styles';
import { Popover } from './Popover';
import { FlexItemProperties } from '../context/types';
// import { FlexContext } from '../context/FlexContext';
import Text from './Text';

interface FlexItemProps {
    flexProperties: FlexItemProperties;
    children: React.ReactNode;
}

export const FlexItem: React.FC<FlexItemProps> = ({ flexProperties, children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    // const { flexItems, setFlexItems } = useContext(FlexContext);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(!isOpen);
    };

    // flexProperties to label - value
    

    return <>
        <FlexItemStyle onClick={handleClick}>{children}</FlexItemStyle>
        <Popover open={isOpen} anchorEl={anchorEl} onClose={() => setIsOpen(false)}>
            {Object.entries(flexProperties).map(([key, value]) => `${key}: ${value}`)
                .map((property, index) => <Text key={index} variant="LABEL" color='primary'>{property}</Text>)
            }
        </Popover>
    </>;
};
