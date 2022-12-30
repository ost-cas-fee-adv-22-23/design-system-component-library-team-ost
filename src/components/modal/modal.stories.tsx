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

export const Settings = Template.bind({});
Settings.args = {
  title: 'Einstellungen',
  isOpen: true,
  children: 'Modal Content',
  modalType: ModalType.settings,
};
Settings.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=521%3A3177&t=9P4moAeAyRsJ194k-1',
  },
};

export const ImageUpload = Template.bind({});
ImageUpload.args = {
  title: 'Bild hochladen',
  isOpen: true,
  children: 'Modal Content',
  modalType: ModalType.imageupload,
};
ImageUpload.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=521%3A3177&t=9P4moAeAyRsJ194k-1',
  },
};
