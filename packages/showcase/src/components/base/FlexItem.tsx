import React, { useState, useMemo } from 'react';

import { FlexItem as FlexItemStyle } from '../../styles';
import { Popover } from './Popover';
import { FlexBasis, FlexItemProperties, FlexMode } from '../context/types';
import { Select } from './Select';
import Text from './Text';
import styled from 'styled-components';
import { theme } from '../../theme';

type FlexItemPropertyType<K extends keyof FlexItemProperties> = 
    K extends 'flexMode' ? FlexMode :
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

const FlexOptions: {label: string, value: FlexMode}[] = [
    { label: 'none', value: 'none' },
    { label: 'flex', value: 'flex' }
];

const FlexBasisOptions: {label: string, value: FlexBasis}[] = [
    { label: 'auto', value: 'auto' },
    { label: 'content', value: 'content' },
    { label: '20%', value: '20%' },
    { label: '50%', value: '50%' },
    { label: '100px', value: '100px' },
    { label: '200px', value: '200px' },
    { label: 'null', value: 'null' },
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

    const [isopen, setIsopen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
        setIsopen(!isopen);
    };

    const getOptions = (key: string) => {
        switch (key) {
            case 'flexMode':
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
            const options: { label: string, value: string | number}[] = getOptions(key);
            const selectedOption = options.find(option => option.value === value);

            if (!selectedOption) {
                return null;
            }

            const disabled = (key !== 'flexMode' && flexProperties['flexMode'] !== 'flex');

            return (
                <Row key={key}>
                    <Text variant="LABEL" color='secondary'>{key}</Text>
                    <Select
                        label={key}
                        selected={selectedOption}
                        disabled={disabled}
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
        <Popover open={isopen} anchorEl={anchorEl} onClose={() => setIsopen(false)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
                {elements}
            </div>
        </Popover>
    </>;
};
