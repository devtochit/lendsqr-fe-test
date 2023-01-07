import { HTMLProps } from 'react';
import cn from 'classnames';
import '../../saas/Pagelink/pagelink.scss';

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({ className, active, disabled, children, ...otherProps}: Props) {
  const customClassName = cn('page-link', className, {
    active,
    disabled,
  });

  if (disabled) {
    return <span className={customClassName}>{children}</span>;
  }

  return (
    <span
      className={customClassName}
      aria-current={active ? 'page' : undefined}
      {...otherProps}
    >
      {children}
    </span>
  );
}