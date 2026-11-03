import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-ui text-xs uppercase tracking-widest font-medium whitespace-nowrap transition-none outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 interactive',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary dark:hover:bg-primary/90',
        outline:
          'border-2 border-primary bg-transparent text-primary hover:bg-accent-soft active:bg-accent-soft dark:hover:bg-accent-soft dark:active:bg-accent-soft',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/60',
        ghost:
          'bg-transparent hover:bg-muted/50 active:bg-muted/30 text-foreground',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 active:bg-destructive/30 border border-destructive/20',
        link: 'text-primary underline-offset-4 hover:underline bg-transparent',
      },
      size: {
        default: 'h-10 px-5',
        sm: 'h-9 px-4 text-[0.7rem]',
        lg: 'h-12 px-6 text-sm',
        xl: 'h-14 px-8 text-base',
        icon: 'size-10',
        'icon-sm': 'size-9',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }