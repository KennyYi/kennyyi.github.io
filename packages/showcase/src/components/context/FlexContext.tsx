import { createContext, useState, useEffect } from 'react';

type FlexValue = {
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    gap: string;
    rowGap: string;
    columnGap: string;
    flex: string;
    flexGrow: number;
    flexShrink: number;
    flexBasis: string;
    order: number;
    alignSelf: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

    setFlexDirection: (direction: FlexValue['flexDirection']) => void;
    setFlexWrap: (wrap: FlexValue['flexWrap']) => void;
    setJustifyContent: (content: FlexValue['justifyContent']) => void;
    setAlignItems: (items: FlexValue['alignItems']) => void;
    setAlignContent: (content: FlexValue['alignContent']) => void;
    setGap: (gap: string) => void;
    setRowGap: (gap: string) => void;
    setColumnGap: (gap: string) => void;
    setFlex: (flex: string) => void;
    setFlexGrow: (grow: number) => void;
    setFlexShrink: (shrink: number) => void;
    setFlexBasis: (basis: string) => void;
    setOrder: (order: number) => void;
    setAlignSelf: (self: FlexValue['alignSelf']) => void;
};

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
    alignSelf: 'auto',

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
});

export const FlexProvider = ({ children }: { children: React.ReactNode }) => {
    const [flexDirection, setFlexDirection] = useState<FlexValue['flexDirection']>('row');
    const [flexWrap, setFlexWrap] = useState<FlexValue['flexWrap']>('nowrap');
    const [justifyContent, setJustifyContent] = useState<FlexValue['justifyContent']>('flex-start');
    const [alignItems, setAlignItems] = useState<FlexValue['alignItems']>('flex-start');
    const [alignContent, setAlignContent] = useState<FlexValue['alignContent']>('flex-start');
    const [gap, setGap] = useState('0');
    const [rowGap, setRowGap] = useState('0');
    const [columnGap, setColumnGap] = useState('0');
    const [flex, setFlex] = useState('0 1 auto');
    const [flexGrow, setFlexGrow] = useState(0);
    const [flexShrink, setFlexShrink] = useState(1);
    const [flexBasis, setFlexBasis] = useState('auto');
    const [order, setOrder] = useState(0);
    const [alignSelf, setAlignSelf] = useState<FlexValue['alignSelf']>('auto');

    // flexDirection 이 업데이트 되는지 확인해보자.
    useEffect(() => {
        console.log('flexDirection', flexDirection);
    }, [flexDirection]);

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
        }}>
            {children}
        </FlexContext.Provider>
    );
};
