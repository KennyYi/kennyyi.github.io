import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flex?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap, theme }) => gap || theme.spacing.sm};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  flex: ${({ flex }) => flex || 'initial'};
`; 
