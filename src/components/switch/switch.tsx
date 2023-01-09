import React, { FC, Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { Label, LabelSizes } from '../typography/label';
import { mergeClassNames } from '../../helpers/merge-class-names';

export type SwitchProps = {
  /**
   * Action to handle the modal close event
   */
  tabNames: Array<string>;
  /**
   * Action to handle the tab change event
   */
  tabChange: (index: number) => void;
};

//TODO: calculate the with of the tablist or make it more dynamic to support more than two tabs and with different text lengths
const tabListBaseStyle = [
  'group',
  'flex',
  'flex-row',
  'justify-between',
  'items-center',
  'p-xs',
  'w-[325px]',
  'rounded-lg',
  'bg-slate-200',
  'text-slate-600',
  'cursor-default',
];

const tabItemBaseStyle = [
  'flex',
  'p-xs',
  'rounded-md',
  'border-none',
  'outline-none',
  'transition-all',
  ' ease-in-out',
  'duration-350',

  'ui-selected:bg-white',
  'ui-selected:text-violet-600',
  'ui-selected:group-hover:grow',
  'ui-not-selected:text-slate-600',
  'ui-not-selected:group-hover:text-slate-800',
  'ui-not-selected:cursor-pointer',
];
const tabItemLeft = ['justify-start'];
const tabItemRight = ['justify-end'];

export const Switch: FC<SwitchProps> = ({ tabChange, tabNames }) => {
  return (
    <Tab.Group defaultIndex={0} onChange={(index) => tabChange(index)}>
      <Tab.List>
        <div className={mergeClassNames([tabListBaseStyle])}>
          {/* TODO: Dynamic generate TabItems based on Array of tabNames -> */}
          <Tab as={Fragment}>
            <div className={mergeClassNames([tabItemBaseStyle, tabItemLeft])}>
              <Label size={LabelSizes.l}>{tabNames[0]}</Label>
            </div>
          </Tab>
          <Tab as={Fragment}>
            <div className={mergeClassNames([tabItemBaseStyle, tabItemRight])}>
              <Label size={LabelSizes.l}>{tabNames[1]}</Label>
            </div>
          </Tab>
        </div>
      </Tab.List>
      {/** TODO: Remove Tab.Panels as we will change content with the onChange function */}
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
