export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type AlignContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
export type FlexBasis = 'auto' | 'content' | '20%' | '50%' | '100px' | '200px' | 'null'
export type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type FlexMode = 'none' | 'flex';

export type FlexItemProperties = {
    flexMode: FlexMode;
    flexGrow: number;
    flexShrink: number;
    flexBasis: FlexBasis;
    order: number;
};

export type FlexItemValue = FlexItemProperties & {
    setFlexMode: (flex: FlexMode) => void;
    setFlexGrow: (grow: number) => void;
    setFlexShrink: (shrink: number) => void;
    setFlexBasis: (basis: FlexBasis) => void;
    setOrder: (order: number) => void;
};

export type FlexProperties = {
    flexDirection: Direction;
    flexWrap: FlexWrap;
    justifyContent: JustifyContent;
    alignItems: AlignItems;
    alignContent: AlignContent;
    gap: string;
    rowGap: string;
    columnGap: string;
    flex: string;
    flexGrow: number;
    flexShrink: number;
    flexBasis: FlexBasis;
    order: number;
    alignSelf: AlignSelf;
    flexItems: FlexItemProperties[];
}

export type FlexValue = FlexProperties & {
    setFlexDirection: (direction: Direction) => void;
    setFlexWrap: (wrap: FlexWrap) => void;
    setJustifyContent: (content: JustifyContent) => void;
    setAlignItems: (items: AlignItems) => void;
    setAlignContent: (content: AlignContent) => void;
    setGap: (gap: string) => void;
    setRowGap: (gap: string) => void;
    setColumnGap: (gap: string) => void;
    setFlex: (flex: string) => void;
    setFlexGrow: (grow: number) => void;
    setFlexShrink: (shrink: number) => void;
    setFlexBasis: (basis: FlexBasis) => void;
    setOrder: (order: number) => void;
    setAlignSelf: (self: AlignSelf) => void;
    setFlexItems: (items: FlexItemProperties[]) => void;
};

export const DEFAULT_FLEX_ITEM_PROPERTIES: FlexItemProperties = {
    flexMode: 'flex',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    order: 0,
};