import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ProfileHeader } from './profile-header';
import { ProfileBanner } from '../../components/profile-banner/profile-banner';
import { ProfilePicture, ProfilePictureSizes } from '../../components/profile-picture/profile-picture';
import {
  UserShortRepresentation,
  UserShortRepresentationSizes,
} from '../../components/user/short-representation/user-short-representation';
import { Stack, StackDirections, StackSpacings } from '../stack/stack';
import { Paragraph, ParagraphSizes } from '../../components/text/paragraph';

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
      <Stack spacing={StackSpacings.s} direction={StackDirections.col}>
        <div className="relative w-max">
          <ProfileBanner
            alt={'Robert Vogt'}
            src={
              'https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg'
            }
            canEdit={isLoggedIn}
            onEditClick={action('onEditProfileBannerClick')}
          />

          <div className="absolute -bottom-20 right-8">
            <ProfilePicture
              size={ProfilePictureSizes.xl}
              src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
              alt={'Robert Vogt'}
              canEdit={isLoggedIn}
              onEditClick={action('onEditProfilePictureClick')}
            ></ProfilePicture>
          </div>
        </div>

        <div className="text-slate-900>">
          <UserShortRepresentation
            size={UserShortRepresentationSizes.xl}
            showSettings={isLoggedIn}
            displayName={'Robert Vogt'}
            username={'robertvogt'}
            location={'St. Gallen'}
            joined={'Mitglied seit 4 Wochen'}
            onSettingsClick={action('onSettingsClick')}
          ></UserShortRepresentation>
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
      <Stack spacing={StackSpacings.s} direction={StackDirections.col}>
        <div className="relative">
          <ProfileBanner
            alt={'Robert Vogt'}
            src={
              'https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg'
            }
            canEdit={isLoggedIn}
            onEditClick={action('onEditProfileBannerClick')}
          />

          <div className="absolute -bottom-20 right-8">
            <ProfilePicture
              size={ProfilePictureSizes.xl}
              src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
              alt={'Robert Vogt'}
              canEdit={isLoggedIn}
              onEditClick={action('onEditProfilePictureClick')}
            ></ProfilePicture>
          </div>
        </div>

        <div className="text-slate-900>">
          <UserShortRepresentation
            size={UserShortRepresentationSizes.xl}
            showSettings={isLoggedIn}
            displayName={'Robert Vogt'}
            username={'robertvogt'}
            location={'St. Gallen'}
            joined={'Mitglied seit 4 Wochen'}
            onSettingsClick={action('onSettingsClick')}
          ></UserShortRepresentation>
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
      <Stack spacing={StackSpacings.s} direction={StackDirections.col}>
        <div className="relative">
          <ProfileBanner canEdit={isNewUser} onEditClick={action('onEditProfileBannerClick')} />

          <div className="absolute -bottom-20 right-8">
            <ProfilePicture
              alt="New Profile Picture"
              size={ProfilePictureSizes.xl}
              canEdit={isNewUser}
              onEditClick={action('onEditProfilePictureClick')}
            ></ProfilePicture>
          </div>
        </div>

        <div className="text-slate-900>">
          <UserShortRepresentation
            size={UserShortRepresentationSizes.xl}
            showSettings={isNewUser}
            onSettingsClick={action('onSettingsClick')}
          ></UserShortRepresentation>
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
