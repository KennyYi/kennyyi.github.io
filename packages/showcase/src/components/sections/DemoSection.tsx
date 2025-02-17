import { useContext } from 'react';
import styled from 'styled-components';

import { theme } from '../../theme';
import { DemoSectionContainer } from '../../styles';
import { Button } from '../base/Button';
import { FlexContext } from '../context/FlexContext';

const Container = styled.div`
    display: flex;
    padding: 1px;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.radius.sm};
`;

const ControllerBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.md};
`;

const FlexItem = styled.div`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    border-radius: ${theme.radius.sm};
`;

export const DemoSection = () => {

    const flexStyle = useContext(FlexContext);

    return (<DemoSectionContainer style={{display: 'flex', flex: 1, height: '100%', flexDirection: 'column', gap: theme.spacing.md}}>
        
        <ControllerBox>
            <Button onClick={() => flexStyle.setFlexDirection(flexStyle.flexDirection === 'row' ? 'column' : 'row')}>{flexStyle.flexDirection}</Button>
        </ControllerBox>
        <Container style={{flexDirection: flexStyle.flexDirection, height: 'auto'}}>
            <FlexItem>Box 1</FlexItem>
            <FlexItem>Box 2</FlexItem>
        </Container>
    </DemoSectionContainer>);
}