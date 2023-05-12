import { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '@flawless-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/r4monn.png',
    alt: 'Ramon Dias',
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {}
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}