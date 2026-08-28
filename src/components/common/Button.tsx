import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    as?: "button";
    to?: never;
    href?: never;
  };

type LinkButtonProps = BaseProps & {
  as: "link";
  to: string;
};

type AnchorButtonProps = BaseProps & {
  as: "a";
  href: string;
  target?: string;
  rel?: string;
  download?: boolean;
};

type Props = ButtonProps | LinkButtonProps | AnchorButtonProps;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover hover:shadow-glow active:translate-y-px",
  secondary:
    "bg-surface text-text border border-border hover:bg-surface-hover hover:border-border-strong",
  ghost: "text-text hover:bg-surface-hover",
  outline:
    "border border-border-strong text-text hover:bg-surface-hover hover:border-accent hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

function buildClassName({ variant = "primary", size = "md", className }: Pick<Props, "variant" | "size" | "className">) {
  return cn(baseStyles, variants[variant], sizes[size], className);
}

export function Button(props: Props) {
  const { variant, size, className, children, icon, iconRight } = props;

  const content = (
    <>
      {icon ? <span className="-ml-0.5 inline-flex">{icon}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="-mr-0.5 inline-flex">{iconRight}</span> : null}
    </>
  );

  const classes = buildClassName({ variant, size, className });

  if (props.as === "link") {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  if (props.as === "a") {
    const { href, target, rel, download } = props;
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noreferrer noopener" : undefined)}
        download={download}
        className={classes}
      >
        {content}
      </a>
    );
  }

  const { icon: _icon, iconRight: _iconRight, variant: _v, size: _s, className: _c, children: _ch, as: _a, ...rest } =
    props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
