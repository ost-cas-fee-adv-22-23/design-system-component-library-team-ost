import React, { FC, Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { Label, LabelSizes } from '../typography/label';
import { mergeClassNames } from '../../helpers/merge-class-names';

/**
 * We decided to make the switch component more dynamic and expandable.
 * For this reason we called it tab-navigation and allow to pass an array of tab names.
 * The index of the active tab will be returned to the tabChange handler function.
 *
 * headlessUI would also provide tab panels, which we doesn't use at the moment.
 *  <Tab.Panels>
 *       <Tab.Panel>Content 1</Tab.Panel>
 *       ...
 *  </Tab.Panels>
 */

export type TabProps = {
  /**
   * Defines the tab names. Multiple strings are allowed.
   */
  tabNames: Array<string>;
  /**
   * Action to handle the tab change event
   */
  tabChange: (index: number) => void;
};

const tabListBaseStyle = [
  'group',
  'flex',
  'flex-row',
  'justify-between',
  'items-center',
  'p-xs',
  'w-tabnav',
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
  'ease-in-out',
  'duration-350',
  'ui-selected:bg-white',
  'ui-selected:text-violet-600',
  'ui-selected:group-hover:grow',
  'ui-not-selected:text-slate-600',
  'ui-not-selected:group-hover:text-slate-800',
  'ui-not-selected:cursor-pointer',
];
const tabItemLeft = ['justify-start'];
const tabItemMiddle = ['justify-center'];
const tabItemRight = ['justify-end'];

export const TabNav: FC<TabProps> = ({ tabChange, tabNames }) => {
  return (
    <Tab.Group defaultIndex={0} onChange={(index) => tabChange(index)}>
      <Tab.List>
        <div className={mergeClassNames([tabListBaseStyle])}>
          {tabNames.map((tabName, i, tabNames) => (
            <Tab as={Fragment} key={`${tabName}+${i}`}>
              <div
                className={
                  i === 0
                    ? mergeClassNames([tabItemBaseStyle, tabItemLeft])
                    : i === tabNames.length - 1
                    ? mergeClassNames([tabItemBaseStyle, tabItemRight])
                    : mergeClassNames([tabItemBaseStyle, tabItemMiddle])
                }
              >
                <Label size={LabelSizes.l}>{tabName}</Label>
              </div>
            </Tab>
          ))}
        </div>
      </Tab.List>
    </Tab.Group>
  );
};
