import { useContext } from 'react';
import styled from 'styled-components';

import { theme } from '../../theme';
import { DemoSectionContainer } from '../../styles';
import { FlexContext } from '../context/FlexContext';
import { Select } from '../base/Select';
import Text from '../base/Text';

const Container = styled.div`
    display: flex;
    padding: 1px;
    border: 1px solid ${theme.colors.secondary.background};
    border-radius: ${theme.radius.sm};
    width: 500px;
    height: 200px;
`;

const ControllerGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.md};
    justify-content: flex-start;
`;

const Controller = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${theme.spacing.sm};
    justify-content: flex-start;
`;

const ControllerBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.md};
    align-items: center;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.sm};
    align-items: center;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.spacing.sm};
    justify-content: flex-start;
`;

const FlexItem = styled.div`
    background-color: ${theme.colors.secondary.background};
    color: ${theme.colors.secondary.text.default};
    border-radius: ${theme.radius.sm};
    padding: ${theme.spacing.sm};
    border: 1px solid ${theme.colors.secondary.button.border.default};
`;

type direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type flexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';
type justifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type alignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type alignContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';

const DirectionOptions = [
    { label: 'Row', value: 'row' },
    { label: 'Column', value: 'column' },
    { label: 'Row Reverse', value: 'row-reverse' },
    { label: 'Column Reverse', value: 'column-reverse' },
];

const JustifyContentOptions = [
    { label: 'Flex Start', value: 'flex-start' },
    { label: 'Flex End', value: 'flex-end' },
    { label: 'Center', value: 'center' },
    { label: 'Space Between', value: 'space-between' },
    { label: 'Space Around', value: 'space-around' },
    { label: 'Space Evenly', value: 'space-evenly' },
];

const AlignItemsOptions = [
    { label: 'Flex Start', value: 'flex-start' },
    { label: 'Flex End', value: 'flex-end' },
    { label: 'Center', value: 'center' },
    { label: 'Baseline', value: 'baseline' },
    { label: 'Stretch', value: 'stretch' },
];

const AlignContentOptions = [
    { label: 'Flex Start', value: 'flex-start' },
    { label: 'Flex End', value: 'flex-end' },
    { label: 'Center', value: 'center' },
    { label: 'Space Between', value: 'space-between' },
    { label: 'Space Around', value: 'space-around' },
];

const FlexWrapOptions = [
    { label: 'Wrap', value: 'wrap' },
    { label: 'Wrap Reverse', value: 'wrap-reverse' },
    { label: 'No Wrap', value: 'nowrap' },
];

export const DemoSection = () => {

    const flexStyle = useContext(FlexContext);

    return (<DemoSectionContainer style={{display: 'flex', flex: 1, height: '100%', flexDirection: 'column', gap: theme.spacing.md}}>
        
        <ControllerBox>

            <Column>
                <Text variant="BODY" weight='BOLD' color='primary'>Directions</Text>
                <ControllerGroup>
                    <Controller>
                        <Text variant="LABEL" color='primary'>flex-direction:</Text>
                        <Select label="Direction" options={DirectionOptions} onSelected={(option) => flexStyle.setFlexDirection(
                            option.value as direction
                        )} />
                    </Controller>
                    <Controller>
                    <Text variant="LABEL" color='primary'>flex-wrap:</Text>
                        <Select label="Flex Wrap" options={FlexWrapOptions} onSelected={(option) => flexStyle.setFlexWrap(
                            option.value as flexWrap
                        )} />
                    </Controller>
                </ControllerGroup>
            </Column>

            <Column>
                <Text variant="BODY" weight='BOLD' color='primary'>Alignment</Text>
                <ControllerGroup>
                    <Controller>
                    <Text variant="LABEL" color='primary'>justify-content</Text>
                        <Select label="Justify Content" options={JustifyContentOptions} onSelected={(option) => flexStyle.setJustifyContent(
                            option.value as justifyContent
                        )} />
                    </Controller>
                    <Controller>
                    <Text variant="LABEL" color='primary'>aling-items</Text>
                        <Select label="Align Items" options={AlignItemsOptions} onSelected={(option) => flexStyle.setAlignItems(
                            option.value as alignItems
                        )} />
                    </Controller>
                    <Controller>
                    <Text variant="LABEL" color='primary'>aling-content</Text>
                        <Select label="Align Items" options={AlignContentOptions} onSelected={(option) => flexStyle.setAlignContent(
                            option.value as alignContent
                        )} />
                    </Controller>
                </ControllerGroup>
            </Column>
        </ControllerBox>
        <Container style={{
            flexDirection: flexStyle.flexDirection, 
            flexWrap: flexStyle.flexWrap,
            justifyContent: flexStyle.justifyContent,
            alignItems: flexStyle.alignItems,
            alignContent: flexStyle.alignContent,
        }}>
            <FlexItem>Box 1</FlexItem>
            <FlexItem>Box 2</FlexItem>
            <FlexItem>Box 3</FlexItem>
            <FlexItem>Box 4</FlexItem>
            <FlexItem>Box 5</FlexItem>
            <FlexItem>Box 6</FlexItem>
            <FlexItem>Box 7</FlexItem>
            <FlexItem>Box 8</FlexItem>
            <FlexItem>Box 9</FlexItem>
            <FlexItem>Box 10</FlexItem>
        </Container>
    </DemoSectionContainer>);
}
