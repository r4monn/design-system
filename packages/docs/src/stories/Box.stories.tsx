import { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps, Text } from '@flawless-ui/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    tags: ['autodocs'],
    args: {
        children: <Text>Testando o elemento Text</Text>
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
    args: {}
}
