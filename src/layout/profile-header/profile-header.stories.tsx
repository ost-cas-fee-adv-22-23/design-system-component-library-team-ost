import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ProfileHeader } from './profile-header';
import { ProfileBanner } from '../../components/profile-banner/profile-banner';
import { ProfilePicture, ProfilePictureSize } from '../../components/profile-picture/profile-picture';
import {
  UserShortRepresentation,
  UserShortRepresentationLabelType,
} from '../../components/user/short-representation/user-short-representation';
import { Stack, StackDirection, StackSpacing } from '../stack/stack';
import { Paragraph, ParagraphSizes } from '../../components/typography/paragraph';

export default {
  title: 'Layouts/ProfileHeader',
  component: ProfileHeader,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ProfileHeader>;

export const LoggedIn: ComponentStory<typeof ProfileHeader> = () => {
  const isLoggedIn = true;

  return (
    <ProfileHeader>
      <Stack spacing={StackSpacing.s} direction={StackDirection.col}>
        <div className="relative w-max">
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
              src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
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
          <Paragraph size={ParagraphSizes.m}>
            Ostschweizer mit Leidenschaft für Fussball, designaffin, nie ohne Bart, Weinliebhaber, leichte Tendenz zu
            Football Manager-Sucht, kocht gerne indisch, baut seit neustem Duplotürme und Brio-Bahnanlagen.
          </Paragraph>
        </div>
      </Stack>
    </ProfileHeader>
  );
};

LoggedIn.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=447%3A780&t=dW7d9mR1MQqmSsA6-4',
  },
};

export const Stranger: ComponentStory<typeof ProfileHeader> = () => {
  const isLoggedIn = false;

  return (
    <ProfileHeader>
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
              src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
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
          <Paragraph size={ParagraphSizes.m}>
            Ostschweizer mit Leidenschaft für Fussball, designaffin, nie ohne Bart, Weinliebhaber, leichte Tendenz zu
            Football Manager-Sucht, kocht gerne indisch, baut seit neustem Duplotürme und Brio-Bahnanlagen.
          </Paragraph>
        </div>
      </Stack>
    </ProfileHeader>
  );
};

Stranger.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=447%3A780&t=dW7d9mR1MQqmSsA6-4',
  },
};

export const NewUser: ComponentStory<typeof ProfileHeader> = () => {
  const isNewUser = true;

  return (
    <ProfileHeader>
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
          <Paragraph size={ParagraphSizes.m}>Schreibe etwas über dich!</Paragraph>
        </div>
      </Stack>
    </ProfileHeader>
  );
};

NewUser.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=447%3A780&t=dW7d9mR1MQqmSsA6-4',
  },
};
