import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { DistributiveOmit } from "@mui/types";

type LinkProps = DistributiveOmit<MuiLinkProps, "href"> &
  DistributiveOmit<NextLinkProps, "href"> & { href?: NextLinkProps["href"] };

const StyledLink = ({ children, ...props }) => (
  <MuiLink
    {...props}
    sx={(theme) => ({
      color: "primary.main",
      fontFamily: theme.typography.fontFamily,
      fontWeight: 500,
      textDecoration: "none",
      verticalAlign: "top",
      "&:hover": {
        textDecoration: "underline",
      },
      ...(props?.sx ?? {}),
    })}
  >
    {children}
  </MuiLink>
);

const Link = ({ children, ...props }: LinkProps) => {
  return !Boolean(props?.href) && typeof props?.onClick === "function" ? (
    <StyledLink component="button" type="button" {...props}>
      {children}
    </StyledLink>
  ) : (
    <NextLink
      href={props?.href as NextLinkProps["href"]}
      passHref
      legacyBehavior
    >
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
