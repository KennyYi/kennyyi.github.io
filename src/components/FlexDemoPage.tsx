import { PageContainer } from '../styles';
import { DemoSection } from './sections/DemoSection';
import { CodeSection } from './sections/CodeSection';
import { FlexProvider } from './context/FlexContext';
import { JSX } from 'react';

export const FlexDemoPage = (): JSX.Element => {
    return (<FlexProvider>
        <PageContainer>
            <DemoSection />
            <CodeSection />
        </PageContainer>
    </FlexProvider>);
};
