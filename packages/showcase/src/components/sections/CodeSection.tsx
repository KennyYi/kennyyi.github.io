import { useContext, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { CodeSectionContainer } from '../../styles';
import { FlexContext } from '../context/FlexContext';
import { theme } from '../../theme';
import Text from '../base/Text';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '../base/Button';
const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.sm};
    align-items: center;
`;

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

const getContentClass = (alignContent: string) => {
    // normal 값은 클래스를 생성하지 않음
    if (alignContent === 'normal') return '';
    
    // Tailwind에서 지원하는 값들로 매핑
    const contentMap: Record<string, string> = {
        'flex-start': 'content-start',
        'flex-end': 'content-end',
        'center': 'content-center',
        'space-between': 'content-between',
        'space-around': 'content-around',
        'space-evenly': 'content-evenly',
        'stretch': 'content-stretch'
    };

    return contentMap[alignContent] || '';
};

export const CodeSection = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<'css' | 'scss' | 'styled-components' | 'tailwind'>('css');
    const flexStyle = useContext(FlexContext);

    const cssCode = useMemo(() => `.container {
    display: flex;
    flex-direction: ${flexStyle.flexDirection};
    flex-wrap: ${flexStyle.flexWrap};
    justify-content: ${flexStyle.justifyContent};
    align-items: ${flexStyle.alignItems};
    align-content: ${flexStyle.alignContent};
    gap: ${flexStyle.gap};
}`, [flexStyle]);

    const scssCode = useMemo(() => `.container {
    display: flex;
    flex: {
        direction: ${flexStyle.flexDirection};
        wrap: ${flexStyle.flexWrap};
    }
    justify-content: ${flexStyle.justifyContent};
    align: {
        align-items: ${flexStyle.alignItems};
        align-content: ${flexStyle.alignContent};
    }
    gap: ${flexStyle.gap};
}`, [flexStyle]);

    const styledComponentsCode = useMemo(() => `const Container = styled.div\`
    display: flex;
    flex-direction: ${flexStyle.flexDirection};
    flex-wrap: ${flexStyle.flexWrap};
    justify-content: ${flexStyle.justifyContent};
    align-items: ${flexStyle.alignItems};
    align-content: ${flexStyle.alignContent};
    gap: ${flexStyle.gap};
\``, [flexStyle]);

    const tailwindCode = useMemo(() => `<div className="
    flex
    ${flexStyle.flexDirection === 'row' ? '' : `flex-${flexStyle.flexDirection}`}
    ${flexStyle.flexWrap === 'nowrap' ? '' : `flex-${flexStyle.flexWrap}`}
    ${flexStyle.justifyContent === 'flex-start' ? '' : `justify-${flexStyle.justifyContent}`}
    ${flexStyle.alignItems === 'stretch' ? '' : `items-${flexStyle.alignItems}`}
    ${getContentClass(flexStyle.alignContent)}
    gap-${flexStyle.gap}
">
    {/* children */}
</div>`, [flexStyle]);

    const [copied, setCopied] = useState(false);

    const code = useMemo(() => {
        switch (selectedLanguage) {
            case 'css':
                return cssCode;
            case 'scss':
                return scssCode;
            case 'styled-components':
                return styledComponentsCode;
            case 'tailwind':
                return tailwindCode;
        }
    }, [selectedLanguage, cssCode, scssCode, styledComponentsCode, tailwindCode]);
    
    return (
        <CodeSectionContainer>
            <Row style={{width: '100%', justifyContent: 'space-between'}}>
                <Button selected={selectedLanguage === 'css'} onClick={() => setSelectedLanguage('css')}>CSS</Button>
                <Button selected={selectedLanguage === 'scss'} onClick={() => setSelectedLanguage('scss')}  >SCSS</Button>
                <Button selected={selectedLanguage === 'styled-components'} onClick={() => setSelectedLanguage('styled-components')}>Styled Components</Button>
                <Button selected={selectedLanguage === 'tailwind'} onClick={() => setSelectedLanguage('tailwind')}>Tailwind</Button>
            </Row>
            <StyledCode>
                <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm, width: 'inherit', cursor: 'pointer', alignSelf: 'end' }} onClick={() => {
                        navigator.clipboard.writeText(code);
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
                {code}
            </StyledCode>
        </CodeSectionContainer>
    );
};