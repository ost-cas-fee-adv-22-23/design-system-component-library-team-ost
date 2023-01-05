import React, { FC, ReactNode, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Heading, HeadingSizes } from '../text/heading';
import { IconCancel } from '../icons/icon-cancel';

export enum ModalType {
  narrow = 'narrow',
  wide = 'wide',
}

export type ModalProps = {
  /**
   * Content of the modal
   */
  children: ReactNode;
  /**
   * Defines if the modal is open or closed
   */
  isOpen: boolean;
  /**
   * Specifies the width of the modal
   */
  modalType: ModalType;
  /**
   * Action to handle the modal close event
   */
  onClose: () => void;
  /**
   * Defines the modal title
   */
  title: string;
};

export const Modal: FC<ModalProps> = ({ modalType = ModalType.narrow, isOpen, title, onClose, children }) => {
  const panelWidth = modalType === 'narrow' ? 'w-11/12 sm:w-2/3 md:w-1/2 xl:w-1/3' : 'w-11/12 sm:w-5/6 md:w-2/3 xl:w-1/2';
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose}>
        {/* This transition is applied to the backdrop, 
        which is rendered as a fixed sibling to the panel container */}
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-150 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-100 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-violet-600/20" aria-hidden="true" />
        </Transition.Child>

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center">
          <div className={panelWidth}>
            {/* This transition is applied to the Dialog panel.
                Even though the design system doesn't include a transition scale, 
                it was interesting to try two different transitions for Backdrop and Panel.
             */}
            <Transition.Child
              as={Fragment}
              enter="duration-300 ease-in-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* eslint-disable-next-line react/forbid-component-props -- Dialog.Panel is rendered as html element. */}
              <Dialog.Panel className="mx-auto rounded-lg bg-white">
                {/* eslint-disable-next-line react/forbid-component-props -- Dialog.Title is rendered as html element. */}
                <Dialog.Title className="flex justify-between items-center px-l py-m bg-violet-600 rounded-t-lg text-white">
                  <Heading headingLevel={HeadingSizes.h3}>{title}</Heading>
                  {/* As the icon is only 16x16px we added the button a bigger clickarea. */}
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-l h-l flex justify-center items-center border-none focus:outline-none active:outline-none"
                  >
                    <IconCancel></IconCancel>
                  </button>
                </Dialog.Title>
                <div className="p-l">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
