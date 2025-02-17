import styled from 'styled-components';
import { ChangeEvent } from 'react';

export interface RadioProps {
  value: string;
  name: string;
  checked?: boolean;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.sm};
  position: relative;
  
  &:checked {
    border-color: ${({ theme }) => theme.colors.primary};
    
    &::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Radio = ({ value, name, checked, label, onChange }: RadioProps) => (
  <Label>
    <RadioInput
      type="radio"
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </Label>
); 