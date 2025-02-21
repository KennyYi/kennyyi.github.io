import React from 'react';
import { Radio } from './Radio';
import styled from 'styled-components';
import { theme } from '../../theme';

interface RadioGroupProps {
  children: React.ReactElement<typeof Radio> | React.ReactElement<typeof Radio>[];
  direction?: 'row' | 'column';
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const Container = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${theme.spacing.md};
`;

export const RadioGroup = ({ 
  children, 
  direction = 'column', 
  name, 
  value, 
  onChange 
}: RadioGroupProps) => {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement<React.ComponentProps<typeof Radio>>(child)) {
      return React.cloneElement(child, {
        ...child.props,
        name,
        checked: child.props.value === value,
        onChange
      });
    }
    return child;
  });

  return (
    <Container direction={direction}>
      {childrenWithProps}
    </Container>
  );
}; 
