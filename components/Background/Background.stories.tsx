import { ComponentStory, ComponentMeta } from '@storybook/react';
import Background, { IBackground } from './Background';
import { mockBackgroundProps } from './Background.mocks';

export default {
  title: 'components/Background',
  component: Background,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Background>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Background> = (args) => (
  <Background {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBackgroundProps.base,
} as IBackground;
