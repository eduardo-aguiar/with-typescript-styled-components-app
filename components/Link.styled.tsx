import styled from "styled-components";
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { FC } from "react";

const Link: FC<NextLinkProps & { className?: string}> = ({className, children, href}) => (
    <NextLink href={href}>
        <a className={className}>{children}</a>
    </NextLink>
)

export const StyledLink = styled(Link)`
    color: green;
    text-decoration: none;
    font-size: 2em;
    font-weight: 400;
    margin: 1.5em;

    &:hover {
        color: red;
    }
`