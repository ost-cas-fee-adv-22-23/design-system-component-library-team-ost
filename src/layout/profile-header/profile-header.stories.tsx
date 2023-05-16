import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React, { FC } from 'react';
import { ProfileBanner } from '../../components/profile-banner/profile-banner';
import { ProfilePicture, ProfilePictureSize } from '../../components/profile-picture/profile-picture';
import {
  UserShortRepresentation,
  UserShortRepresentationLabelType,
} from '../../components/user/short-representation/user-short-representation';
import { Paragraph, ParagraphSize } from '../../components/typography/paragraph';
import { Stack, StackDirection, StackProps, StackSpacing } from '../stack/stack';

interface StackWithContainerWidth extends FC<StackProps> {
  /**
   * Specifies the width of the parent component. It's only for demo purposes.
   */
  containerWidth: number;
}

export default {
  title: 'Layouts/🐼 Profile Header',
  component: Stack,
  argTypes: {
    alignItems: { table: { disable: true } },
    children: { table: { disable: true } },
    containerWidth: {
      control: { type: 'range', min: 200, max: 1000, step: 10 },
      description: "Specifies the width of the parent component. It's only for demo purposes.",
    },
    direction: { table: { disable: true } },
    justifyContent: { table: { disable: true } },
    spacing: { table: { disable: true } },
    withDivider: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Stack>;

const LoggedInTemplate: ComponentStory<StackWithContainerWidth> = (args) => {
  const isLoggedIn = true;

  return (
    <div style={{ width: (args as unknown as StackWithContainerWidth).containerWidth + 'px' }}>
      <Stack spacing={StackSpacing.s} direction={StackDirection.col}>
        <div className="relative">
          <ProfileBanner
            alt="Robert Vogt"
            canEdit={isLoggedIn}
            onEditClick={action('onEditProfileBannerClick')}
            src={
              'https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg'
            }
          />

          <div className="absolute -bottom-20 right-8">
            <ProfilePicture
              alt="Robert Vogt"
              canEdit={isLoggedIn}
              onEditClick={action('onEditProfilePictureClick')}
              size={ProfilePictureSize.xl}
              src="https://res.cloudinary.com/smartive/image/upload/f_auto,c_limit,w_640,q_auto/v1676359202/Team/robert_wmi22t.jpg"
            />
          </div>
        </div>

        <div className="text-slate-900>">
          <UserShortRepresentation
            displayName="Robert Vogt"
            hrefProfile="#"
            joined="Mitglied seit 4 Wochen"
            labelType={UserShortRepresentationLabelType.h3}
            location="St. Gallen"
            onSettingsClick={action('onSettingsClick')}
            showSettings={isLoggedIn}
            username="robertvogt"
          />
        </div>

        <div className="text-slate-400">
          <Paragraph size={ParagraphSize.m}>
            Ostschweizer mit Leidenschaft für Fussball, designaffin, nie ohne Bart, Weinliebhaber, leichte Tendenz zu
            Football Manager-Sucht, kocht gerne indisch, baut seit neustem Duplotürme und Brio-Bahnanlagen.
          </Paragraph>
        </div>
      </Stack>
    </div>
  );
};
export const LoggedIn = LoggedInTemplate.bind({});
LoggedIn.args = {
  containerWidth: 680,
};
LoggedIn.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=488%3A2110&t=cRJ318aLvInTEJn4-4',
  },
};
LoggedIn.storyName = '🐼 Logged In';

const StrangerTemplate: ComponentStory<StackWithContainerWidth> = (args) => {
  const isLoggedIn = false;

  return (
    <div style={{ width: (args as unknown as StackWithContainerWidth).containerWidth + 'px' }}>
      <Stack spacing={StackSpacing.s} direction={StackDirection.col}>
        <div className="relative">
          <ProfileBanner
            alt="Robert Vogt"
            canEdit={isLoggedIn}
            onEditClick={action('onEditProfileBannerClick')}
            src="https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg"
          />

          <div className="absolute -bottom-20 right-8">
            <ProfilePicture
              alt={'Robert Vogt'}
              canEdit={isLoggedIn}
              onEditClick={action('onEditProfilePictureClick')}
              size={ProfilePictureSize.xl}
              src="https://res.cloudinary.com/smartive/image/upload/f_auto,c_limit,w_640,q_auto/v1676359202/Team/robert_wmi22t.jpg"
            />
          </div>
        </div>

        <div className="text-slate-900>">
          <UserShortRepresentation
            displayName="Robert Vogt"
            hrefProfile="#"
            joined="Mitglied seit 4 Wochen"
            labelType={UserShortRepresentationLabelType.h3}
            location="St. Gallen"
            onSettingsClick={action('onSettingsClick')}
            showSettings={isLoggedIn}
            username="robertvogt"
          />
        </div>

        <div className="text-slate-400">
          <Paragraph size={ParagraphSize.m}>
            Ostschweizer mit Leidenschaft für Fussball, designaffin, nie ohne Bart, Weinliebhaber, leichte Tendenz zu
            Football Manager-Sucht, kocht gerne indisch, baut seit neustem Duplotürme und Brio-Bahnanlagen.
          </Paragraph>
        </div>
      </Stack>
    </div>
  );
};

export const Stranger = StrangerTemplate.bind({});
Stranger.args = {
  containerWidth: 680,
};
Stranger.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=503%3A1779&t=cRJ318aLvInTEJn4-4',
  },
};
Stranger.storyName = '🐼 Stranger';

const NewUserTemplate: ComponentStory<StackWithContainerWidth> = (args) => {
  const isNewUser = true;

  return (
    <div style={{ width: (args as unknown as StackWithContainerWidth).containerWidth + 'px' }}>
      <Stack spacing={StackSpacing.s} direction={StackDirection.col}>
        <div className="relative">
          <ProfileBanner canEdit={isNewUser} onEditClick={action('onEditProfileBannerClick')} />

          <div className="absolute -bottom-20 right-8">
            <ProfilePicture
              alt="New Profile Picture"
              canEdit={isNewUser}
              onEditClick={action('onEditProfilePictureClick')}
              size={ProfilePictureSize.xl}
            />
          </div>
        </div>

        <div className="text-slate-900>">
          <UserShortRepresentation
            displayName="Neuer User"
            hrefProfile="#"
            joined="Joined"
            labelType={UserShortRepresentationLabelType.h3}
            location="Location"
            onSettingsClick={action('onSettingsClick')}
            showSettings
            username="neueruser"
          />
        </div>

        <div className="text-slate-400">
          <Paragraph size={ParagraphSize.m}>Schreibe etwas über dich!</Paragraph>
        </div>
      </Stack>
    </div>
  );
};

export const NewUser = NewUserTemplate.bind({});
NewUser.args = {
  containerWidth: 680,
};
NewUser.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=521%3A3328&t=cRJ318aLvInTEJn4-4',
  },
};
NewUser.storyName = '🐼 New User';
