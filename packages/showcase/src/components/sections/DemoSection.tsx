import { useContext } from 'react';
import styled from 'styled-components';

import { theme } from '../../theme';
import { DemoSectionContainer } from '../../styles';
import { FlexContext } from '../context/FlexContext';
import { Select } from '../base/Select';

const Container = styled.div`
    display: flex;
    padding: 1px;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.radius.sm};
    width: 500px;
    height: 200px;
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

const FlexItem = styled.div`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    border-radius: ${theme.radius.sm};
    padding: ${theme.spacing.sm};
`;

type direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type justifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type alignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type flexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';

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

const FlexWrapOptions = [
    { label: 'Wrap', value: 'wrap' },
    { label: 'Wrap Reverse', value: 'wrap-reverse' },
    { label: 'No Wrap', value: 'nowrap' },
];

export const DemoSection = () => {

    const flexStyle = useContext(FlexContext);

    return (<DemoSectionContainer style={{display: 'flex', flex: 1, height: '100%', flexDirection: 'column', gap: theme.spacing.md}}>
        
        <ControllerBox>
            <Row>
                <span>Direction: </span>
                <Select label="Direction" options={DirectionOptions} onSelected={(option) => flexStyle.setFlexDirection(
                    option.value as direction
                )} />
            </Row>
            <Row>
                <span>Justify Content: </span>
                <Select label="Justify Content" options={JustifyContentOptions} onSelected={(option) => flexStyle.setJustifyContent(
                    option.value as justifyContent
                )} />
            </Row>
            <Row>
                <span>Align Items: </span>
                <Select label="Align Items" options={AlignItemsOptions} onSelected={(option) => flexStyle.setAlignItems(
                    option.value as alignItems
                )} />
            </Row>
            <Row>
                <span>Flex Wrap: </span>
                <Select label="Flex Wrap" options={FlexWrapOptions} onSelected={(option) => flexStyle.setFlexWrap(
                    option.value as flexWrap
                )} />
            </Row>
        </ControllerBox>
        <Container style={{
            flexDirection: flexStyle.flexDirection, 
            justifyContent: flexStyle.justifyContent,
            alignItems: flexStyle.alignItems,
            flexWrap: flexStyle.flexWrap,
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
