import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@flawless-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, atque? Consectetur mollitia non, ipsa quod placeat animi inventore odio dignissimos, praesentium aperiam eaque soluta! Vel officiis totam soluta ipsam quod.'
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {}
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}