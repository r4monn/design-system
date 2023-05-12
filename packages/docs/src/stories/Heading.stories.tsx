import { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '@flawless-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom title text'
  }
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