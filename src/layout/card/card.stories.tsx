import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ChangeEvent, FC, useState } from 'react';
import { Paragraph, ParagraphSize } from '../../components/typography/paragraph';
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
import { Form } from '../../components/form/form';
import { Textarea } from '../../components/form/form-textarea';
import { TextButton, TextButtonColor, TextButtonDisplayMode, TextButtonSize } from '../../components/buttons/text-button';
import { IconUpload } from '../../components/icons/icon-upload';
import { Heading, HeadingSize } from '../../components/typography/heading';

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
    children: {
      control: { disable: true },
    },
    containerWidth: {
      control: { type: 'range', min: 200, max: 1000, step: 10 },
      description:
        "Specifies the width of the parent component. It's not a property of the Card Component and only for demo purposes.",
    },
    isInteractive: {
      control: { type: 'boolean' },
    },
    key: {
      control: { type: 'text' },
    },
  },
  parameters: {
    backgrounds: { default: 'background' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<CardWithContainerWidth> = (args) => (
  <div style={{ width: (args as unknown as CardWithContainerWidth).containerWidth + 'px' }}>
    <Card key={args.key} borderRadiusType={args.borderRadiusType} isInteractive={args.isInteractive}>
      <div className="text-slate-900">
        <Paragraph size={ParagraphSize.m}>
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
  children: undefined,
  containerWidth: 680,
  isInteractive: false,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=437%3A676&t=cRJ318aLvInTEJn4-4',
  },
};

export const Interactive = Template.bind({});
Interactive.args = {
  borderRadiusType: BorderRadiusType.roundedFull,
  children: undefined,
  containerWidth: 680,
  isInteractive: true,
};
Interactive.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=437%3A676&t=cRJ318aLvInTEJn4-4',
  },
};

const MumbleAsResponseTemplate: ComponentStory<CardWithContainerWidth> = (args) => {
  return (
    <div style={{ width: (args as unknown as CardWithContainerWidth).containerWidth + 'px' }}>
      <Card key={args.key} borderRadiusType={args.borderRadiusType}>
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
            <Paragraph size={ParagraphSize.m}>
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
  children: undefined,
  containerWidth: 680,
  isInteractive: false,
  key: '1',
};
MumbleAsResponse.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=437%3A710&t=cRJ318aLvInTEJn4-4',
  },
};
MumbleAsResponse.storyName = '🐼 Mumble As Response';

const MumbleOnDetailpageTemplate: ComponentStory<CardWithContainerWidth> = (args) => {
  return (
    <div style={{ width: (args as unknown as CardWithContainerWidth).containerWidth + 'px' }}>
      <Card key={args.key} borderRadiusType={args.borderRadiusType}>
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
            <Paragraph size={ParagraphSize.l}>
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
  children: undefined,
  containerWidth: 680,
  isInteractive: false,
  key: '1',
};
MumbleOnDetailpage.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=437%3A710&t=cRJ318aLvInTEJn4-4',
  },
};
MumbleOnDetailpage.storyName = '🐼 Mumble On Detailpage';

const MumbleInTimelineTemplate: ComponentStory<CardWithContainerWidth> = (args) => {
  return (
    <div style={{ width: (args as unknown as CardWithContainerWidth).containerWidth + 'px' }}>
      <Card key={args.key} borderRadiusType={args.borderRadiusType} isInteractive={args.isInteractive}>
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
            <Paragraph size={ParagraphSize.m}>
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
  children: undefined,
  containerWidth: 680,
  isInteractive: true,
  key: '1',
};
MumbleInTimeline.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=437%3A710&t=cRJ318aLvInTEJn4-4',
  },
};
MumbleInTimeline.storyName = '🐼 Mumble In Timeline';

const WriteComponentInlineTemplate: ComponentStory<CardWithContainerWidth> = (args) => {
  const [form, setForm] = useState({
    text: '',
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ width: (args as unknown as CardWithContainerWidth).containerWidth + 'px' }}>
      <Card borderRadiusType={args.borderRadiusType} isInteractive={args.isInteractive}>
        <Stack direction={StackDirection.col} spacing={StackSpacing.s}>
          <UserShortRepresentation
            alt="Robert Vogt"
            displayName="Robert Vogt"
            hrefProfile="#"
            labelType={UserShortRepresentationLabelType.m}
            username="robertvogt"
            profilePictureSize={UserShortRepresentationProfilePictureSize.s}
            src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
          />

          <Form handleSubmit={action('Handle form submit')}>
            <Textarea
              ariaLabel="Und was meinst du dazu?"
              errorMessage=""
              name="text"
              onChange={handleChange}
              placeholder="Und was meinst du dazu?"
              required
              rows={5}
              value={form.text}
            />
          </Form>

          <Stack spacing={StackSpacing.s}>
            <TextButton
              color={TextButtonColor.slate}
              displayMode={TextButtonDisplayMode.fullWidth}
              icon={<IconUpload />}
              onClick={action('onBildHochladenClick')}
              size={TextButtonSize.m}
            >
              Bild hochladen
            </TextButton>
            <TextButton
              color={TextButtonColor.violet}
              displayMode={TextButtonDisplayMode.fullWidth}
              icon={<IconUpload />}
              onClick={action('onAbsendenClick')}
              size={TextButtonSize.m}
              type="submit"
            >
              Absenden
            </TextButton>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};
export const WriteComponentInline = WriteComponentInlineTemplate.bind({});
WriteComponentInline.args = {
  borderRadiusType: BorderRadiusType.none,
  children: undefined,
  containerWidth: 680,
  isInteractive: false,
};
WriteComponentInline.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=457%3A3326&t=cRJ318aLvInTEJn4-4',
  },
};
WriteComponentInline.storyName = '🐼 Write Component Inline';

const WriteComponentHauptfeldTemplate: ComponentStory<CardWithContainerWidth> = (args) => {
  const [form, setForm] = useState({
    text: '',
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ width: (args as unknown as CardWithContainerWidth).containerWidth + 'px' }}>
      <Card borderRadiusType={args.borderRadiusType} isInteractive={args.isInteractive}>
        <div className="absolute -left-l top-m">
          <ProfilePicture
            alt="Robert Vogt"
            size={ProfilePictureSize.m}
            src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
          />
        </div>
        <Stack direction={StackDirection.col} spacing={StackSpacing.s}>
          <Heading headingLevel={HeadingSize.h4}>Hey, was läuft?</Heading>

          <Form handleSubmit={action('Handle form submit')}>
            <Textarea
              ariaLabel="Und was meinst du dazu?"
              errorMessage=""
              name="text"
              onChange={handleChange}
              placeholder="Und was meinst du dazu?"
              required
              rows={5}
              value={form.text}
            />
          </Form>

          <Stack spacing={StackSpacing.s}>
            <TextButton
              color={TextButtonColor.slate}
              displayMode={TextButtonDisplayMode.fullWidth}
              icon={<IconUpload />}
              onClick={action('onBildHochladenClick')}
              size={TextButtonSize.m}
            >
              Bild hochladen
            </TextButton>
            <TextButton
              color={TextButtonColor.violet}
              displayMode={TextButtonDisplayMode.fullWidth}
              icon={<IconUpload />}
              onClick={action('onAbsendenClick')}
              size={TextButtonSize.m}
              type="submit"
            >
              Absenden
            </TextButton>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};
export const WriteComponentHauptfeld = WriteComponentHauptfeldTemplate.bind({});
WriteComponentHauptfeld.args = {
  borderRadiusType: BorderRadiusType.roundedFull,
  children: undefined,
  containerWidth: 680,
  isInteractive: false,
};
WriteComponentHauptfeld.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=457%3A3326&t=648dM1ZOl1gEZTal-4',
  },
};
WriteComponentHauptfeld.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=457%3A3326&t=cRJ318aLvInTEJn4-4',
  },
};
WriteComponentHauptfeld.storyName = '🐼 Write Component Hauptfeld';
