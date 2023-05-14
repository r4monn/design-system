import { StoryObj, Meta } from '@storybook/react';
import { Tooltip, TooltipProps, Button, Box } from '@flawless-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: 'null'
      }
    }
  },
  decorators: [
    (Story) => {
      return (
        <Box 
          css={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '$20',
            backgroundColor: '$gray500',
          }}>
            {Story()}
        </Box>
      )
    }
  ]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {}
}