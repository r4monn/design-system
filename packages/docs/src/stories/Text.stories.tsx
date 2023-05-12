import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@flawless-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    tags: ['autodocs'],
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, atque? Consectetur mollitia non, ipsa quod placeat animi inventore odio dignissimos, praesentium aperiam eaque soluta! Vel officiis totam soluta ipsam quod.'
    }
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