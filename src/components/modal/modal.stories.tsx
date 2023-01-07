import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Modal, ModalType } from './modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Modal Content',
  isOpen: true,
  modalType: ModalType.narrow,
  onClose: null,
  title: 'Default',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=521%3A3177&t=FA0Jm3Ru09rCucgV-1',
  },
};

export const Settings = Template.bind({});
Settings.args = {
  children: 'Modal Content',
  isOpen: true,
  modalType: ModalType.narrow,
  onClose: null,
  title: 'Einstellungen',
};
Settings.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=521%3A3177&t=FA0Jm3Ru09rCucgV-1',
  },
};

export const ImageUpload = Template.bind({});
ImageUpload.args = {
  children: 'Modal Content',
  isOpen: true,
  modalType: ModalType.wide,
  onClose: null,
  title: 'Bild hochladen',
};
ImageUpload.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=521%3A3177&t=FA0Jm3Ru09rCucgV-1',
  },
};
