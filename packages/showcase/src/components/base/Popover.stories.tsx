import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { useState } from 'react';
import { Button } from './Button';

const meta = {
    title: 'Components/Popover',
    component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Popover Content',
        open: true,
        anchorEl: null,
        onClose: () => {},
    },
};

// button 클릭 시 팝오버 보여주기
export const WithButton: Story = {
    args: {
        children: 'Popover Content',
        open: false,
        anchorEl: null,
        onClose: () => {},
    },
    render: () => {
        const [isopen, setIsopen] = useState(false);
        const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
            setIsopen(!isopen);
        };

        return (
            <div>
                <Button onClick={handleClick}>
                    Click me
                </Button>
                <Popover 
                    open={isopen} 
                    anchorEl={anchorEl}
                    onClose={() => setIsopen(false)}
                >
                    This is a popover content
                </Popover>
            </div>
        );
    }
};