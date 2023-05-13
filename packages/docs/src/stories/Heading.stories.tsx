import { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '@flawless-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children: 'Custom title text'
  },
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {}
}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading text',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'By default the heading will always be an `h2`, but we can change this with the `as` property.'
      }
    }
  }
}