import { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Button } from './Button';

interface Option {
    label: string;
    value: any;
}

interface SelectProps {
    label: string;
    options: Option[];
    selected: Option;
    disabled: boolean;
    onSelected: (option: Option) => void;
}

const SelectContainer = styled.div`
    position: relative;
    min-width: 120px;
`;

const SelectButton = styled(Button)<{ $disabled: boolean }>`
    width: 100%;
    padding: ${theme.spacing.sm};
    border: 1px solid ${theme.colors.primary.button.border.default};
    border-radius: ${theme.radius.md};
    background: ${theme.colors.primary.button.background.default};
    cursor: pointer;
    text-align: left;

    ${(p) => p.$disabled && css`
        background: ${theme.colors.primary.button.background.disabled};
        color: ${theme.colors.primary.text.disabled}
        cursor: not-allowed;
    `}
`;

const OptionsContainer = styled.div<{ isopen: boolean }>`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: ${theme.spacing.sm};
    padding: ${theme.spacing.sm};
    background: ${theme.colors.primary.button.background.default};
    border: 1px solid ${theme.colors.primary.button.border.default};
    border-radius: ${theme.radius.md};
    box-shadow: ${theme.shadow.md};
    z-index: ${theme.zIndex.dropdown};
    display: ${({ isopen }) => (isopen ? 'block' : 'none')};
`;

const OptionItem = styled.div`
    padding: ${theme.spacing.sm};
    cursor: pointer;
    border-radius: ${theme.radius.sm};
    color: ${theme.colors.primary.text.default};

    &:hover {
        background: ${theme.colors.primary.button.background.hover};
        color: ${theme.colors.primary.text.hover};
    }
`;

export const Select = ({ label, options, selected, disabled, onSelected }: SelectProps) => {
    const [isopen, setIsopen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option>(selected);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        onSelected(option);
        setIsopen(false);
    };

    return (
        <SelectContainer >
            <SelectButton onClick={() => {
                if (disabled) return;
                setIsopen(!isopen);
            }} $disabled={disabled}>
                {selectedOption?.label || label}
            </SelectButton>
            <OptionsContainer isopen={isopen}>
                {options.map((option) => (
                    <OptionItem key={option.value} onClick={() => handleSelect(option)}>
                        {option.label}
                    </OptionItem>
                ))}
            </OptionsContainer>
        </SelectContainer>
    );
};
