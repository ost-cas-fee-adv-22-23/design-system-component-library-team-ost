import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';
import { Paragraph, ParagraphSizes } from '../../components/typography/paragraph';
import {
  UserShortRepresentation,
  UserShortRepresentationLabelType,
  UserShortRepresentationProfilePictureSize,
} from '../../components/user/short-representation/user-short-representation';
import { Stack, StackDirection, StackSpacing } from '../stack/stack';
import { BorderRadiusType, Card, CardProps } from './card';
import { ImageContainer } from '../../components/image-container/image-container';
import { action } from '@storybook/addon-actions';
import { Like } from '../../components/buttons/interaction-buttons/like';
import { Share } from '../../components/buttons/interaction-buttons/share';
import { Reply } from '../../components/buttons/interaction-buttons/reply';
import { ProfilePicture, ProfilePictureSize } from '../../components/profile-picture/profile-picture';

interface CardWithContainerWidth extends FC<CardProps> {
  /**
   * Specifies the width of the parent component. It's not a property of the TextButton Component and only
   * for demo purposes.
   */
  containerWidth: number;
}

export default {
  title: 'Layouts/Card',
  component: Card,
  argTypes: {
    borderRadiusType: {
      control: { type: 'select' },
    },
    containerWidth: {
      control: { type: 'range', min: 200, max: 1000, step: 10 },
      description:
        "Specifies the width of the parent component. It's not a property of the Card Component and only for demo purposes.",
    },
    isInteractive: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    backgrounds: { default: 'background' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<CardWithContainerWidth> = (args) => (
  <div style={{ width: (args as unknown as CardWithContainerWidth).containerWidth + 'px' }}>
    <Card borderRadiusType={args.borderRadiusType} isInteractive={args.isInteractive}>
      <div className="text-slate-900">
        <Paragraph size={ParagraphSizes.m}>
          Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
          sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos
          excepturi ut deleniti ut repellat magni.
        </Paragraph>
      </div>
    </Card>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  borderRadiusType: BorderRadiusType.roundedFull,
  containerWidth: 680,
  isInteractive: false,
};

export const Interactive = Template.bind({});
Interactive.args = {
  borderRadiusType: BorderRadiusType.roundedFull,
  containerWidth: 680,
  isInteractive: true,
};

const MumbleAsResponseTemplate: ComponentStory<CardWithContainerWidth> = (args) => {
  return (
    <div style={{ width: (args as unknown as CardWithContainerWidth).containerWidth + 'px' }}>
      <Card borderRadiusType={BorderRadiusType.none}>
        <Stack direction={StackDirection.col} spacing={StackSpacing.s}>
          <UserShortRepresentation
            alt="Robert Vogt"
            displayName="Robert Vogt"
            hrefProfile="#"
            labelType={UserShortRepresentationLabelType.s}
            profilePictureSize={UserShortRepresentationProfilePictureSize.s}
            src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
            timestamp="vor 42 Minuten"
            username="robertvogt"
          />
          <div className="text-slate-900">
            <Paragraph size={ParagraphSizes.m}>
              Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum
              optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae
              quos excepturi ut deleniti ut repellat magni.
            </Paragraph>
          </div>

          <ImageContainer
            alt="View of St. Gallen"
            onClick={action('onImageContainerClick')}
            src="https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg"
          />

          <Stack spacing={StackSpacing.m}>
            <Reply onClick={action('onReplyClick')} repliesCount={0} withReaction={false} />

            <Like likesCount={0} onClick={action('onLikeClick')} withReaction={false} />

            <Share linkToCopy="https://www.fcsg.ch/" />
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};
export const MumbleAsResponse = MumbleAsResponseTemplate.bind({});
MumbleAsResponse.args = {
  borderRadiusType: BorderRadiusType.none,
  containerWidth: 680,
  isInteractive: false,
};
MumbleAsResponse.storyName = '🐼 Mumble As Response';

const MumbleOnDetailpageTemplate: ComponentStory<CardWithContainerWidth> = (args) => {
  return (
    <div style={{ width: (args as unknown as CardWithContainerWidth).containerWidth + 'px' }}>
      <Card borderRadiusType={BorderRadiusType.roundedTop}>
        <div className="absolute -left-l">
          <ProfilePicture
            alt="Robert Vogt"
            size={ProfilePictureSize.m}
            src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
          />
        </div>

        <Stack direction={StackDirection.col} spacing={StackSpacing.s}>
          <UserShortRepresentation
            displayName="Robert Vogt"
            hrefProfile="#"
            labelType={UserShortRepresentationLabelType.l}
            timestamp="vor 42 Minuten"
            username="robertvogt"
          />
          <div className="text-slate-900">
            <Paragraph size={ParagraphSizes.l}>
              Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum
              optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae
              quos excepturi ut deleniti ut repellat magni.
            </Paragraph>
          </div>

          <ImageContainer
            alt="View of St. Gallen"
            onClick={action('onImageContainerClick')}
            src="https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg"
          />

          <Stack spacing={StackSpacing.m}>
            <Reply onClick={action('onReplyClick')} repliesCount={32} withReaction={true} />

            <Like likesCount={42} onClick={action('onLikeClick')} withReaction={true} />

            <Share linkToCopy="https://www.fcsg.ch/" />
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};
export const MumbleOnDetailpage = MumbleOnDetailpageTemplate.bind({});
MumbleOnDetailpage.args = {
  borderRadiusType: BorderRadiusType.roundedTop,
  containerWidth: 680,
  isInteractive: false,
};
MumbleOnDetailpage.storyName = '🐼 Mumble On Detailpage';

const MumbleInTimelineTemplate: ComponentStory<CardWithContainerWidth> = (args) => {
  return (
    <div style={{ width: (args as unknown as CardWithContainerWidth).containerWidth + 'px' }}>
      <Card borderRadiusType={BorderRadiusType.roundedFull} isInteractive={args.isInteractive}>
        <div className="absolute -left-l">
          <ProfilePicture
            alt="Robert Vogt"
            size={ProfilePictureSize.m}
            src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
          />
        </div>

        <Stack direction={StackDirection.col} spacing={StackSpacing.s}>
          <UserShortRepresentation
            displayName="Robert Vogt"
            hrefProfile="#"
            labelType={UserShortRepresentationLabelType.m}
            timestamp="vor 42 Minuten"
            username="robertvogt"
          />
          <div className="text-slate-900">
            <Paragraph size={ParagraphSizes.m}>
              Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum
              optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae
              quos excepturi ut deleniti ut repellat magni.
            </Paragraph>
          </div>

          <ImageContainer
            alt="View of St. Gallen"
            onClick={action('onImageContainerClick')}
            src="https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg"
          />

          <Stack spacing={StackSpacing.m}>
            <Reply onClick={action('onReplyClick')} repliesCount={32} withReaction={true} />

            <Like likesCount={42} onClick={action('onLikeClick')} withReaction={true} />

            <Share linkToCopy="https://www.fcsg.ch/" />
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};
export const MumbleInTimeline = MumbleInTimelineTemplate.bind({});
MumbleInTimeline.args = {
  borderRadiusType: BorderRadiusType.roundedFull,
  containerWidth: 680,
  isInteractive: true,
};
MumbleInTimeline.storyName = '🐼 Mumble In Timeline';
