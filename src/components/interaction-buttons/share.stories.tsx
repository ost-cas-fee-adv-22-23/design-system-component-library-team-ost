import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Share } from './share';

export default {
  title: 'Components/Interaction Buttons/Share',
  component: Share,
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = (args) => <Share {...args} />;

export const Default = Template.bind({});
Default.args = {
  linkToCopy: 'https://www.fcsg.ch/',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};
