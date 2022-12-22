import React, { FC } from 'react';
import { NaviButton } from './navi-button';
import { IconSettings } from '../icons/icon-settings';

export type SettingsButtonProps = {
  onClick: () => void;
};

export const SettingsButton: FC<SettingsButtonProps> = ({ onClick }) => {
  return (
    <NaviButton
      icon={
        <span className="group-hover:rotate-90 duration-300">
          <IconSettings />
        </span>
      }
      onClick={onClick}
    >
      Settings
    </NaviButton>
  );
};
