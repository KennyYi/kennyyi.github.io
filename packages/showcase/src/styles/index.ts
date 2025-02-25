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
    justify-content: center;
    padding: ${theme.spacing.lg};

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.md};
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