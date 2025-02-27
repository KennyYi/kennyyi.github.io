import { createContext, useState, useEffect } from 'react';
import { AlignContent, AlignItems, AlignSelf, DEFAULT_FLEX_ITEM_PROPERTIES, Direction, FlexBasis, FlexItemProperties, FlexItemValue, FlexValue, FlexWrap, JustifyContent } from './types';

export const FlexContext = createContext<FlexValue>({
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    gap: '0',
    rowGap: '0',
    columnGap: '0',
    flex: '0 1 auto',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    order: 0,
    alignSelf: 'flex-start',
    flexItems: [],

    setFlexDirection: () => {},
    setFlexWrap: () => {},
    setJustifyContent: () => {},
    setAlignItems: () => {},
    setAlignContent: () => {},
    setGap: () => {},
    setRowGap: () => {},
    setColumnGap: () => {},
    setFlex: () => {},
    setFlexGrow: () => {},
    setFlexShrink: () => {},
    setFlexBasis: () => {},
    setOrder: () => {},
    setAlignSelf: () => {},
    setFlexItems: () => {},
});

export const FlexProvider = ({ children }: { children: React.ReactNode }) => {
    const [flexDirection, setFlexDirection] = useState<Direction>('row');
    const [flexWrap, setFlexWrap] = useState<FlexWrap>('nowrap');
    const [justifyContent, setJustifyContent] = useState<JustifyContent>('flex-start');
    const [alignItems, setAlignItems] = useState<AlignItems>('flex-start');
    const [alignContent, setAlignContent] = useState<AlignContent>('flex-start');
    const [gap, setGap] = useState('0');
    const [rowGap, setRowGap] = useState('0');
    const [columnGap, setColumnGap] = useState('0');
    const [flex, setFlex] = useState('0 1 auto');
    const [flexGrow, setFlexGrow] = useState(0);
    const [flexShrink, setFlexShrink] = useState(1);
    const [flexBasis, setFlexBasis] = useState<FlexBasis>('auto');
    const [order, setOrder] = useState(0);
    const [alignSelf, setAlignSelf] = useState<AlignSelf>('flex-start');
    const [flexItems, setFlexItems] = useState<FlexItemProperties[]>([DEFAULT_FLEX_ITEM_PROPERTIES, DEFAULT_FLEX_ITEM_PROPERTIES]);

    return (
        <FlexContext.Provider value={{
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            alignContent,
            gap,
            rowGap,
            columnGap,
            flex,
            flexGrow,
            flexShrink,
            flexBasis,
            order,
            alignSelf,
            flexItems,
            setFlexDirection,
            setFlexWrap,
            setJustifyContent,
            setAlignItems,
            setAlignContent,
            setGap,
            setRowGap,
            setColumnGap,
            setFlex,
            setFlexGrow,
            setFlexShrink,
            setFlexBasis,
            setOrder,
            setAlignSelf,
            setFlexItems,
        }}>
            {children}
        </FlexContext.Provider>
    );
};
