import cn from 'classnames';

interface IButton {
  children: React.ReactNode;
  color?: 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean
}

const Button = ({
  children,
  className,
  color,
  size,
  isLoading,
  ...rest
}: IButton &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  const classes = cn(
    'rounded transition-colors ',
    {
      'px-2 py-1': size === undefined,
      'px-8 py-2 text-xl': size === 'large',
      'px-4 py-1 text-lg': size === 'medium',
      'px-2 py-1 text-sm': size === 'small',
    },
    {
      'bg-white text-black': color === undefined,
      'bg-green-500 text-white hover:bg-green-600': color === 'success',
      'bg-red-500 text-white hover:bg-red-600': color === 'danger',
    },
    {
      grayscale: isLoading,
    },
    className
  );

  return (
    <button className={classes} {...rest} disabled={isLoading}>
      {children}
    </button>
  );
};
export default Button;
