import type { Meta, StoryObj } from '@storybook/vue3';
import ButtonComponent from './button.vue';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    label: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    type: 'button',
    label: 'Secondary Button',
  },
};
