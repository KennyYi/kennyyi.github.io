import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

type TextVariant = 'HEADING' | 'BODY' | 'CAPTION' | 'BUTTON' | 'LABEL' | 'SUBTITLE' | 'TITLE';
type TextWeight = 'LIGHT' | 'REGULAR' | 'MEDIUM' | 'SEMI_BOLD' | 'BOLD';
type TextColor = 'primary' | 'secondary';

interface TextProps {
    color?: string;
    variant?: TextVariant;
    weight?: TextWeight;
    children: React.ReactNode;
}

const Text = styled.span<TextProps>`
    color: ${({ color }) => theme.colors[color as TextColor].text.default};
    font-size: ${({ variant }) => theme.typography.fontSize[variant as TextVariant]};
    font-weight: ${({ weight }) => theme.typography.fontWeight[weight as TextWeight]};
`;

export default Text;
