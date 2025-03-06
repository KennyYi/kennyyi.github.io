import styled from "styled-components";
import { theme } from "../theme";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;

    @media (max-width: ${theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`;

export const DemoSectionContainer = styled.div`
    display: flex;
    flex-grow: 2;
    height: 100%;
    background-color: ${theme.colors.primary.background};
    justify-content: start;
    padding: ${theme.spacing.lg};

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.md};
        flex-grow: 1;
    }
`;

export const CodeSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    background-color: ${theme.colors.secondary.background};
    justify-content: start;
    padding: ${theme.spacing.lg};

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.md};
    }
`;

export const FlexItem = styled.div`
    background-color: ${theme.colors.secondary.background};
    color: ${theme.colors.secondary.text.default};
    border-radius: ${theme.radius.sm};
    padding: ${theme.spacing.sm};
    border: 1px solid ${theme.colors.secondary.button.border.default};

    &:hover {
        color: ${theme.colors.secondary.text.hover};
        box-shadow: ${theme.shadow.md};
        border: 2px solid ${theme.colors.secondary.button.border.hover};
    }
    
    cursor: pointer;
`;
