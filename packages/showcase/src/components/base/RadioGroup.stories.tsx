import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'group',
    value: 'option1',
    onChange: (value) => console.log(value),
    children: (
      <>
        <Radio name="group" value="option1" label="옵션 1" />
        <Radio name="group" value="option2" label="옵션 2" />
        <Radio name="group" value="option3" label="옵션 3" />
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    ...Default.args,
    direction: 'row',
  },
}; 