import { StoryObj, Meta } from '@storybook/react';
import { Text, Box, Checkbox, CheckboxProps } from '@flawless-ui/react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    args: {},
    decorators: [
      (Story) => {
        return (
          <Box as='label' css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
            {Story()}
            <Text>Accept terms of use</Text>
          </Box>
        )
      }
    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
    
}