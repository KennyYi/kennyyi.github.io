import styled, { css } from 'styled-components';
import { theme } from '../../theme';

export const Button = styled.button<{ selected?: boolean }>`
  background: ${theme.colors.primary.button.background.default};
  color: ${theme.colors.primary.text.default};
  padding: ${`${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${theme.radius.md};
  font-size: ${theme.typography.fontSize['BUTTON']};
  transition: all ${theme.transitions.fast};
  cursor: pointer;
  user-select: none;
  
  &:hover {
    background: ${theme.colors.primary.button.background.hover};
    color: ${theme.colors.primary.text.hover};
  }

  ${(p) => p.selected && css`
    background: ${theme.colors.primary.button.background.active};
    color: ${theme.colors.primary.text.active};
  `}
`; 
