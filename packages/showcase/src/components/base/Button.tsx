import styled from 'styled-components';
import { theme } from '../../theme';

export const Button = styled.button`
  background: ${theme.colors.surface};
  color: ${theme.colors.text.primary};
  padding: ${`${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${theme.radius.md};
  font-size: ${theme.typography.size.md};
  transition: all ${theme.transitions.fast};
  
  &:hover {
    background: ${theme.colors.primary};
  }
`; 
