import { useContext, useState, useMemo } from 'react';
import styled from 'styled-components';
import { CodeSectionContainer } from '../../styles';
import { FlexContext } from '../context/FlexContext';
import { theme } from '../../theme';
import { Button } from '../base/Button';
import { Accordian } from '../base/Accordian';
import { CopyableBox } from '../base/CopyableBox';
import { generateFlexCode } from '../../utils/utils';

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.sm};
    align-items: center;
`;

export const CodeSection = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<'css' | 'styled-components'>('css');
    const flexStyle = useContext(FlexContext);

    const code = useMemo(() => {
        const properties = {
            "display": "flex",
            "flex-direction": flexStyle.flexDirection,
            "flex-wrap": flexStyle.flexWrap,
            "justify-content": flexStyle.justifyContent,
            "align-items": flexStyle.alignItems,
            "align-content": flexStyle.alignContent,
        }
        
        return generateFlexCode(selectedLanguage, properties)
    }, [selectedLanguage, flexStyle.flexDirection, flexStyle.flexWrap, flexStyle.justifyContent, flexStyle.alignItems, flexStyle.alignContent]);
    
    return (
        <CodeSectionContainer>
            <Row style={{width: '100%' }}>
                <Button selected={selectedLanguage === 'css'} onClick={() => setSelectedLanguage('css')}>CSS</Button>
                <Button selected={selectedLanguage === 'styled-components'} onClick={() => setSelectedLanguage('styled-components')}>Styled Components</Button>
            </Row>

            <CopyableBox target={code} />

            {flexStyle.flexItems.map((item, index) => {
                const itemProperties = {
                    "// flex":  `${item.flexGrow} ${item.flexShrink}${item.flexBasis !== "null"?" "+item.flexBasis:""}, // flex-shorthand `,
                    "flex-grow": item.flexGrow,
                    "flex-shrink": item.flexShrink,
                    "flex-basis": item.flexBasis,
                    "order": item.order,
                }

                const itemCode = generateFlexCode(selectedLanguage, itemProperties)

                return  <Accordian key={index} label={"Box "+(index+ 1).toString()}>
                    <CopyableBox target={itemCode} />
                </Accordian>;
            })}
            
        </CodeSectionContainer>
    );
};
