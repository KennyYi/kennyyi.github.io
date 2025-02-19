import React, { ChangeEvent, ReactNode } from 'react';
import { Flex } from './Flex';
import { RadioProps } from './Radio';

interface RadioGroupProps {
  children: ReactNode;
  value: string;
  onChange: (value: string) => void;
  name: string;
  direction?: 'row' | 'column';
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ 
  children, 
  value, 
  onChange, 
  name,
  direction = 'column' 
}: RadioGroupProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Flex direction={direction} gap="1rem">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<RadioProps>(child)) {
          return React.cloneElement(child, {
            name,
            checked: child.props.value === value,
            onChange: handleChange
          });
        }
        return child;
      })}
    </Flex>
  );
}; 
