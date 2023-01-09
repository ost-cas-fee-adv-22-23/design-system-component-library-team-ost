import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Switch } from './switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  // const [isOpen, setIsOpen] = useState(true);

  // useEffect(() => {
  //   setIsOpen(args.isOpen);
  // }, [args.isOpen]);

  return <Switch {...args} onClose={() => console.log('switch')} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Switch Content',
  onClose: null,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=521%3A3177&t=FA0Jm3Ru09rCucgV-1',
  },
};
