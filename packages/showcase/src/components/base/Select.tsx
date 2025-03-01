import { useState } from 'react';
import styled from 'styled-components';
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
    onSelected: (option: Option) => void;
}

const SelectContainer = styled.div`
    position: relative;
    min-width: 120px;
`;

const SelectButton = styled(Button)`
    width: 100%;
    padding: ${theme.spacing.sm};
    border: 1px solid ${theme.colors.primary.button.border.default};
    border-radius: ${theme.radius.md};
    background: ${theme.colors.primary.button.background.default};
    cursor: pointer;
    text-align: left;
`;

const OptionsContainer = styled.div<{ isOpen: boolean }>`
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
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
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

export const Select = ({ label, options, selected, onSelected }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option>(selected);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        onSelected(option);
        setIsOpen(false);
    };

    return (
        <SelectContainer>
            <SelectButton onClick={() => setIsOpen(!isOpen)}>
                {selectedOption?.label || label}
            </SelectButton>
            <OptionsContainer isOpen={isOpen}>
                {options.map((option) => (
                    <OptionItem key={option.value} onClick={() => handleSelect(option)}>
                        {option.label}
                    </OptionItem>
                ))}
            </OptionsContainer>
        </SelectContainer>
    );
};
