import { useContext } from 'react';
import styled from 'styled-components';
import { CodeSectionContainer } from '../../styles';
import { FlexContext } from '../context/FlexContext';
import { theme } from '../../theme';

const StyledCode = styled.pre`
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text.primary};
    padding: ${theme.spacing.md};
    border-radius: ${theme.radius.md};
    font-family: monospace;
    white-space: pre;
`;

export const CodeSection = () => {
    const flexStyle = useContext(FlexContext);

    const cssCode = `
        .container {
            display: flex;
            flex-direction: ${flexStyle.flexDirection};
            flex-wrap: ${flexStyle.flexWrap};
            justify-content: ${flexStyle.justifyContent};
            align-items: ${flexStyle.alignItems};
            align-content: ${flexStyle.alignContent};
            gap: ${flexStyle.gap};
        }`;

    return (
        <CodeSectionContainer>
            <StyledCode>
                {cssCode}
            </StyledCode>
        </CodeSectionContainer>
    );
};