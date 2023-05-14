import * as RadixToast from '@radix-ui/react-toast';
import { X } from 'phosphor-react';
import { ComponentProps } from 'react';
import { ToastDescription, ToastTitle, ToastClose, ToastRoot, ToastViewPort } from './styles';

export interface ToastProps extends ComponentProps<typeof RadixToast.Root> {
  title: string;
  description?: string;
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <RadixToast.Provider>
      <ToastRoot {...props} >
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}

        <ToastClose>
          <X weight='light' size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewPort />
    </RadixToast.Provider>
  )
}

Toast.displayName = 'Toast'