import React, { FC, Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { Label, LabelSizes } from '../typography/label';

export type SwitchProps = {
  /**
   * Action to handle the modal close event
   */
  onClose: () => void;
  /**
   * Defines the modal title
   */
  title: string;
};

export const Switch: FC<SwitchProps> = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <div
          className="group flex
    flex-col
    sm:flex-row
    justify-between
    items-center
    py-xs
    px-xs
    w-[336px]
    [width: calc(100% + 20px)]
    
    rounded-lg
    bg-slate-200 
    cursor-pointer
    "
        >
          <Tab as={Fragment}>
            <div
              className="flex
                  text-slate-600
                  p-xs
                  rounded-md  
                  border-none outline-none
                  transition-all ease-in-out duration-350
                  justify-start
                  ui-selected:bg-white ui-selected:text-violet-600 ui-selected:group-hover:grow 
                  ui-not-selected:group-hover:(text-slate-800) ui-not-selected:justify-end ui-not-selected:text-right
                  "
            >
              <Label size={LabelSizes.l}>Deine Mumble</Label>
            </div>
          </Tab>
          <Tab as={Fragment}>
            <div
              className="flex
                  text-slate-600
                  p-xs
                  rounded-md 
                  border-none outline-none 
                  transition-all ease-in-out duration-350
                  justify-end
                  ui-selected:bg-white ui-selected:justify-end ui-selected:text-violet-600 ui-selected:group-hover:grow
                  ui-not-selected:group-hover:(text-slate-800) ui-not-selected:justify-start
                  "
            >
              <Label size={LabelSizes.l}>Deine Likes</Label>
            </div>
          </Tab>
        </div>
      </Tab.List>
    </Tab.Group>
  );
};
