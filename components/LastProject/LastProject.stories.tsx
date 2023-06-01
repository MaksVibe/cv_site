import { ComponentStory, ComponentMeta } from '@storybook/react';
import LastProject, { ILastProject } from './LastProject';
import { mockLastProjectProps } from './LastProject.mocks';

export default {
  title: 'templates/LastProject',
  component: LastProject,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LastProject>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LastProject> = (args) => (
  <LastProject {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLastProjectProps.base,
} as ILastProject;
