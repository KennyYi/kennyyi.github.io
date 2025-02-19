import { useContext } from 'react';
import styled from 'styled-components';

import { theme } from '../../theme';
import { DemoSectionContainer } from '../../styles';
import { Button } from '../base/Button';
import { FlexContext } from '../context/FlexContext';
import { Select } from '../base/Select';

const Container = styled.div`
    display: flex;
    padding: 1px;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.radius.sm};
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

export const DemoSection = () => {

    const flexStyle = useContext(FlexContext);

    return (<DemoSectionContainer style={{display: 'flex', flex: 1, height: '100%', flexDirection: 'column', gap: theme.spacing.md}}>
        
        <ControllerBox>
            <Row>
                <span>Flex Direction: </span>
                <Button onClick={() => flexStyle.setFlexDirection(flexStyle.flexDirection === 'row' ? 'column' : 'row')}>{flexStyle.flexDirection}</Button>
            </Row>
            <Row>
                <span>Justify Content: </span>
                <Select label="Justify Content" options={JustifyContentOptions} onSelected={(option) => flexStyle.setJustifyContent(
                    option.value as 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
                )} />
            </Row>
            <Row>
                <span>Align Items: </span>
                <Select label="Align Items" options={AlignItemsOptions} onSelected={(option) => flexStyle.setAlignItems(
                    option.value as 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
                )} />
            </Row>
        </ControllerBox>
        <Container style={{
            flexDirection: flexStyle.flexDirection, 
            justifyContent: flexStyle.justifyContent,
            alignItems: flexStyle.alignItems,
            height: 'auto'}}>
            <FlexItem>Box 1</FlexItem>
            <FlexItem>Box 2</FlexItem>
        </Container>
    </DemoSectionContainer>);
}
