import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '라디오 옵션',
    value: 'option1',
    name: 'radio-story',
  },
};

export const Checked: Story = {
  args: {
    label: '선택된 라디오',
    value: 'option2',
    name: 'radio-story',
    checked: true,
  },
}; 