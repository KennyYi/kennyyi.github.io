import { useContext, useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { theme } from '../../theme';
import { DemoSectionContainer } from '../../styles';
import { FlexContext } from '../context/FlexContext';
import { Select } from '../base/Select';
import Text from '../base/Text';
import { Button } from '../base/Button';
import { FlexItem } from '../base/FlexItem';
import { Direction, FlexWrap, JustifyContent, AlignItems, AlignContent, DEFAULT_FLEX_ITEM_PROPERTIES } from '../context/types';

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

const MIN_CHILDREN = 1;
const MAX_CHILDREN = 10;

export const DemoSection = () => {

    const flexStyle = useContext(FlexContext);

    const { directionOption, flexWrapOption, justifyContentOption, alignItemsOption, alignContentOption } = useMemo(() => {
        const directionOption = DirectionOptions.find(option => option.value === flexStyle.flexDirection)!;
        const flexWrapOption = FlexWrapOptions.find(option => option.value === flexStyle.flexWrap)!;
        const justifyContentOption = JustifyContentOptions.find(option => option.value === flexStyle.justifyContent)!;
        const alignItemsOption = AlignItemsOptions.find(option => option.value === flexStyle.alignItems)!;
        const alignContentOption = AlignContentOptions.find(option => option.value === flexStyle.alignContent)!;

        return { directionOption, flexWrapOption, justifyContentOption, alignItemsOption, alignContentOption };
    }, [flexStyle]);

    const flexItems = useMemo((): React.ReactElement[] => {
        return flexStyle.flexItems.map((item, index) => (
            <FlexItem 
                key={'item-'+index} 
                flexProperties={item} 
                onPropertiesChange={(properties) => {
                    flexStyle.setFlexItems(flexStyle.flexItems.map((item, i) => i === index ? properties : item));
                }}
            >Box {index + 1}</FlexItem>
        ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flexStyle.flexItems]);

    const handleChangeFlexItem = useCallback((count: number) => {
        if (count < MIN_CHILDREN || count > MAX_CHILDREN) return;

        if (count > flexStyle.flexItems.length)  {
            flexStyle.setFlexItems([...flexStyle.flexItems, DEFAULT_FLEX_ITEM_PROPERTIES]);
        } else {
            flexStyle.setFlexItems(flexStyle.flexItems.slice(0, count));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flexStyle.flexItems]);

    return (<DemoSectionContainer style={{display: 'flex', flex: 1, height: '100%', flexDirection: 'column', gap: theme.spacing.md}}>
        
        <ControllerBox>
            <Column>
                <Text variant="BODY" weight='BOLD' color='primary'>Directions</Text>
                <ControllerGroup>
                    <Controller>
                        <Text variant="LABEL" color='primary'>flex-direction:</Text>
                        <Select 
                            label="Direction" 
                            selected={directionOption} 
                            options={DirectionOptions} 
                            disabled={false}
                            onSelected={(option) => flexStyle.setFlexDirection(
                                option.value as Direction
                            )} />
                    </Controller>
                    <Controller>
                    <Text variant="LABEL" color='primary'>flex-wrap:</Text>
                        <Select 
                            label="Flex Wrap" 
                            selected={flexWrapOption} 
                            options={FlexWrapOptions} 
                            disabled={false}
                            onSelected={(option) => flexStyle.setFlexWrap(
                                option.value as FlexWrap
                            )} />
                    </Controller>
                </ControllerGroup>
            </Column>

            <Column>
                <Text variant="BODY" weight='BOLD' color='primary'>Alignment</Text>
                <ControllerGroup>
                    <Controller>
                        <Text variant="LABEL" color='primary'>justify-content</Text>
                        <Select 
                            label="Justify Content" 
                            selected={justifyContentOption} 
                            options={JustifyContentOptions} 
                            disabled={false}
                            onSelected={(option) => flexStyle.setJustifyContent(
                                option.value as JustifyContent
                            )} />
                    </Controller>
                    <Controller>
                        <Text variant="LABEL" color='primary'>aling-items</Text>
                        <Select 
                            label="Align Items" 
                            selected={alignItemsOption} 
                            options={AlignItemsOptions} 
                            disabled={false}
                            onSelected={(option) => flexStyle.setAlignItems(
                                option.value as AlignItems
                        )} />
                    </Controller>
                    <Controller>
                        <Text variant="LABEL" color='primary'>aling-content</Text>
                        <Select 
                            label="Align Items" 
                            selected={alignContentOption} 
                            options={AlignContentOptions} 
                            disabled={false}
                            onSelected={(option) => flexStyle.setAlignContent(
                                option.value as AlignContent
                            )} />
                    </Controller>
                </ControllerGroup>
            </Column>

            <Column>
                <Text variant="BODY" weight='BOLD' color='primary'>Childrens</Text>
                <Row>
                    <Button onClick={() => handleChangeFlexItem(Math.max(flexStyle.flexItems.length - 1, MIN_CHILDREN))}>-</Button>
                    <Text variant="BODY" weight='BOLD' color='primary'>{flexStyle.flexItems.length}</Text>
                    <Button onClick={() => handleChangeFlexItem(Math.min(flexStyle.flexItems.length + 1, MAX_CHILDREN))}>+</Button>
                </Row>
            </Column>
        </ControllerBox>
        <Container style={{
            flexDirection: flexStyle.flexDirection, 
            flexWrap: flexStyle.flexWrap,
            justifyContent: flexStyle.justifyContent,
            alignItems: flexStyle.alignItems,
            alignContent: flexStyle.alignContent,
        }}>
            {flexItems}
        </Container>
    </DemoSectionContainer>);
}
