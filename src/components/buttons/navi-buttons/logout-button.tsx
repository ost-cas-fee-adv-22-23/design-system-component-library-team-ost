import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { NaviButton } from './navi-button';

export type LogoutButtonProps = {
  /**
   * Specifies a custom link component, e.g. next/link.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  linkComponent?: FC<any>;
  /**
   * Specifies the arguments of the custom link component.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  linkComponentArgs?: Record<string, any>;
  /**
   * Specifies the action, which is called as the user clicks on the logout button.
   */
  onClick?: () => void;
  /**
   * Specifies if the navi button should render as a link component.
   */
  renderAsLink?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const LogoutButton: FC<LogoutButtonProps> = ({
  linkComponent,
  linkComponentArgs,
  onClick,
  renderAsLink = false,
  ...args
}) => {
  return (
    <NaviButton
      {...args}
      {...linkComponentArgs}
      /*
       * Es wurde bewusst entschieden, dass IconLogout zu kopieren und nicht dieses wiederzuverwenden, da die Animation des Pfeils hier ein sehr spezifischer
       * Anwendungsfall darstellt. Gemäss Definition im Figma würde der Pfeil initial 3px aus der viewBox des SVGs ragen. Auf die Vergrösserung der viewBox wurde
       * aktuell bewusst verzichtet. Dafür wurde eine neue Animation -translate-x-1/8 eingeführt, um dem Benutzer trotzdem ein optimales Benutzererlebnis zu bieten.
       */
      icon={
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_447_767)">
            <path
              className="group-hover:translate-x-0 -translate-x-1/8 duration-300"
              d="M6.293 11.955C6.35799 11.9846 6.42858 12 6.5 12C6.62106 11.9999 6.73796 11.9558 6.829 11.876L10.829 8.376C10.8825 8.32907 10.9254 8.27125 10.9548 8.20641C10.9842 8.14157 10.9994 8.07119 10.9994 8C10.9994 7.92881 10.9842 7.85844 10.9548 7.79359C10.9254 7.72875 10.8825 7.67093 10.829 7.624L6.829 4.124C6.75672 4.06084 6.66779 4.01982 6.57283 4.00584C6.47787 3.99186 6.38089 4.00551 6.29347 4.04516C6.20606 4.0848 6.1319 4.14878 6.07986 4.22943C6.02782 4.31008 6.0001 4.40401 6 4.5V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H6V11.5C6.00003 11.596 6.02767 11.6899 6.07962 11.7706C6.13158 11.8512 6.20565 11.9153 6.293 11.955Z"
              fill="currentColor"
            />
            <path
              d="M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V4C0 4.26522 0.105357 4.51957 0.292893 4.70711C0.48043 4.89464 0.734784 5 1 5C1.26522 5 1.51957 4.89464 1.70711 4.70711C1.89464 4.51957 2 4.26522 2 4V2H14V14H2V12C2 11.7348 1.89464 11.4804 1.70711 11.2929C1.51957 11.1054 1.26522 11 1 11C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_447_767">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
      linkComponent={linkComponent}
      onClick={onClick}
      renderAsLink={renderAsLink}
    >
      Logout
    </NaviButton>
  );
};
