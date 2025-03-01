import React, { useState, useMemo } from 'react';

import { FlexItem as FlexItemStyle } from '../../styles';
import { Popover } from './Popover';
import { FlexBasis, FlexItemProperties, FlexShorthand } from '../context/types';
import { Select } from './Select';
import Text from './Text';
import styled from 'styled-components';
import { theme } from '../../theme';

type FlexItemPropertyType<K extends keyof FlexItemProperties> = 
    K extends 'flex' ? FlexShorthand :
    K extends 'flexGrow' ? number :
    K extends 'flexShrink' ? number :
    K extends 'flexBasis' ? FlexBasis :
    K extends 'order' ? number :
    never;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.sm};
    align-items: center;
`;

const FlexOptions: {label: string, value: FlexShorthand}[] = [
    { label: 'initial', value: 'initial' },
    { label: 'auto', value: 'auto' },
    { label: 'none', value: 'none' },
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
];

const FlexBasisOptions: {label: string, value: FlexBasis}[] = [
    { label: 'auto', value: 'auto' },
    { label: 'content', value: 'content' },
    { label: '50px', value: '50px' },
    { label: '50%', value: '50%' },
    { label: '50rem', value: '50rem' },
];

const FlexOrderOptions: {label: string, value: number}[] = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
];

const FlexGrowOptions: {label: string, value: number}[] = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
];

const FlexShrinkOptions: {label: string, value: number}[] = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
];

interface FlexItemProps {
    flexProperties: FlexItemProperties;
    onPropertiesChange: (properties: FlexItemProperties) => void;
    children: React.ReactNode;
}

export const FlexItem: React.FC<FlexItemProps> = ({ flexProperties, onPropertiesChange, children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(!isOpen);
    };

    const getOptions = (key: string) => {
        switch (key) {
            case 'flex':
                return FlexOptions;
            case 'flexGrow':
                return FlexGrowOptions;
            case 'flexShrink':
                return FlexShrinkOptions;
            case 'flexBasis':
                return FlexBasisOptions;
            case 'order':
                return FlexOrderOptions;
            default:
                return [];
        }
    }

    const elements = useMemo(() => {

        return (Object.entries(flexProperties) as [keyof FlexItemProperties, any][]).map(([key, value]) => {
            const options = getOptions(key);
            const selectedOption = options.find(option => option.value === value);

            if (!selectedOption) {
                return null;
            }

            return (
                <Row key={key}>
                    <Text variant="LABEL" color='secondary'>{key}</Text>
                    <Select
                        label={key}
                        selected={selectedOption}
                        options={options}
                        onSelected={(option) => {
                            const newValue = option.value as FlexItemPropertyType<typeof key>;
                            onPropertiesChange({...flexProperties, [key]: newValue});
                        }}
                    />
                </Row>
            );
        });
    }, [flexProperties, onPropertiesChange]);

    return <>
        <FlexItemStyle onClick={handleClick} style={{...flexProperties}}>{children}</FlexItemStyle>
        <Popover open={isOpen} anchorEl={anchorEl} onClose={() => setIsOpen(false)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
                {elements}
            </div>
        </Popover>
    </>;
};
