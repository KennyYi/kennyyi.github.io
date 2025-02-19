import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    label: string;
    options: Option[];
    onSelected: (option: Option) => void;
}

const SelectContainer = styled.div`
    position: relative;
    min-width: 120px;
`;

const SelectButton = styled.button`
    width: 100%;
    padding: ${theme.spacing.sm};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.md};
    background: ${theme.colors.surface};
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
    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.md};
    box-shadow: ${theme.shadow.md};
    z-index: ${theme.zIndex.dropdown};
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Option = styled.div`
    padding: ${theme.spacing.sm};
    cursor: pointer;
    border-radius: ${theme.radius.sm};

    &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.surface};
    }
`;

export const Select = ({ label, options, onSelected }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

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
                    <Option key={option.value} onClick={() => handleSelect(option)}>
                        {option.label}
                    </Option>
                ))}
            </OptionsContainer>
        </SelectContainer>
    );
};
