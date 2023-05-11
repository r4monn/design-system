import { styled } from './styles'
import { ComponentProps } from 'react'

/*export type ButtonProps = {
    size: 'small' | 'big'
}*/

export type ButtonProps = ComponentProps<typeof Button>

export const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$flawless300',
    borderRadius: '$sm',
    border: 0,
    fontWeight: 'bold',
    color: '$white',

    variants: {
        size: {
            small: {
                fontSize: 14,
                padding: '$2 $4',
            },
            big: {
                fontSize: 16,
                padding: '$3 $6',
            },
        }
    },

    defaultVariants: {
        size: 'small',
    }
})