import { useState } from 'react';
import styled from 'styled-components';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Text from './Text';
import { theme } from '../../theme';

const AccordianContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.secondary.button.border.active}
`;

const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4px 16px;
`;

interface AccordianProps {
    label: string;
    children: React.ReactElement;
}

export const Accordian: React.FC<AccordianProps> = ({ label, children}) => {

    const [isopen, setIsopen] = useState(false);

    return <AccordianContainer onClick={() => setIsopen(!isopen)}>
        <LabelContainer>
            <Text variant="LABEL" color="secondary" >{label}</Text>
            {isopen
                ?<KeyboardArrowDownIcon style={{ fontSize: theme.typography.fontSize.CAPTION }} />
                :<KeyboardArrowUpIcon style={{ fontSize: theme.typography.fontSize.CAPTION }} />
            }
        </LabelContainer>
        {isopen && <>{children}</>}
    </AccordianContainer>;
}