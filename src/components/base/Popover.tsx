import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const PopoverContainer = styled.div<{ top: number; left: number }>`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    background-color: ${theme.colors.secondary.background};
    color: ${theme.colors.secondary.text.default};
    padding: ${theme.spacing.md};
    border-radius: ${theme.radius.md};
    box-shadow: ${theme.shadow.lg};
    z-index: ${theme.zIndex.popover};
    min-width: 200px;
    opacity: 1;
    transition: opacity 0.2s ease;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    z-index: ${theme.zIndex.overlay};
`;

interface PopoverProps {
    children: React.ReactNode;
    open: boolean;
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

export const Popover: React.FC<PopoverProps> = ({children, open, anchorEl, onClose}) => {

    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && 
                !popoverRef.current.contains(event.target as Node) && 
                anchorEl !== event.target) {
                onClose();
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, onClose, anchorEl]);

    if (!open || !anchorEl) return null;

    const rect = anchorEl.getBoundingClientRect();
    const top = rect.bottom + window.scrollY;
    const left = rect.left + window.scrollX;

    return (
        <>
            <Overlay onClick={onClose} />
            <PopoverContainer 
                ref={popoverRef}
                top={top} 
                left={left}
            >
                {children}
            </PopoverContainer>
        </>
    );
};
