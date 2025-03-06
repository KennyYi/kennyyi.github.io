import { useState } from 'react';
import styled from 'styled-components';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { theme } from '../../theme';
import Text from './Text';

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
    width: 100%;
    height: fit-content;
    text-align: start;
`;

interface CopyableBoxProps {
    target: string;
}

export const CopyableBox: React.FC <CopyableBoxProps>= ({target}) => {

    const [copied, setCopied] = useState(false);

    return <StyledCode>
        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm, width: 'inherit', cursor: 'pointer', alignSelf: 'end' }} onClick={() => {
            navigator.clipboard.writeText(target);
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
        {target}
    </StyledCode>;
}
