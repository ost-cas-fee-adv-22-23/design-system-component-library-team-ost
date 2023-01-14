export type LogoProps = {
  /**
   * Has to be set (Verb + Noun), to specify the action if a onClick is set.
   */
  ariaLabel: string;
  /**
   * Action to handle a user click on a logo
   */
  onClick?: () => void;
};
