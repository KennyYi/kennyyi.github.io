import { useContext, useState } from 'react';
import styled from 'styled-components';
import { CodeSectionContainer } from '../../styles';
import { FlexContext } from '../context/FlexContext';
import { theme } from '../../theme';
import Text from '../base/Text';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledCode = styled.pre`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${theme.colors.secondary.background};
    color: ${theme.colors.secondary.text.default};
    border: 1px solid ${theme.colors.secondary.button.border.default};
    padding: ${theme.spacing.md};
    border-radius: ${theme.radius.md};
    font-family: monospace;
    white-space: pre;
    height: fit-content;
`;

export const CodeSection = () => {
    const flexStyle = useContext(FlexContext);

    const cssCode = `.container {
    display: flex;
    flex-direction: ${flexStyle.flexDirection};
    flex-wrap: ${flexStyle.flexWrap};
    justify-content: ${flexStyle.justifyContent};
    align-items: ${flexStyle.alignItems};
    align-content: ${flexStyle.alignContent};
    gap: ${flexStyle.gap};
}`;

    const [copied, setCopied] = useState(false);

    return (
        <CodeSectionContainer>
            <StyledCode>
                <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm, width: 'inherit', cursor: 'pointer', alignSelf: 'end' }} onClick={() => {
                        navigator.clipboard.writeText(cssCode);
                        setCopied(true);
                    }}>
                        {copied ? <>
                            <CheckCircleIcon style={{ fontSize: theme.typography.fontSize.CAPTION }} />
                            <Text variant="LABEL" color='secondary'>Copied</Text>
                        </>:<>
                            <ContentCopyIcon style={{ fontSize: theme.typography.fontSize.CAPTION }} />
                            <Text variant="LABEL" color='secondary'>Copy</Text>
                        </>}
                    
                </div>
                {cssCode}
            </StyledCode>
        </CodeSectionContainer>
    );
};