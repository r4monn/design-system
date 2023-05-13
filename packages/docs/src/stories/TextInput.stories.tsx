import { StoryObj, Meta } from '@storybook/react';
import { Text, Box, TextInput, TextInputProps } from '@flawless-ui/react'

export default {
    title: 'Form/Text Input',
    component: TextInput,
    tags: ['autodocs'],
    args: {},
    decorators: [
      (Story) => {
        return (
          <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
            <Text>Username</Text>
            {Story()}
          </Box>
        )
      }
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
      placeholder: 'Type your name',
    }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'flawless.com/',
    placeholder: 'your-username',
  }
}