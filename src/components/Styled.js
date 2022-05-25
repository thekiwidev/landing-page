import Styled from "styled-components";

export const Icon = Styled.span`

`;

export const Logo = Styled.img`
    width: 64px;
`;
export const Nav = Styled.nav`
    display: flex;
    align-items: center;
    justify-contents: space-between;
    
`;
export const SocialIcon = Styled.a`
    display: gird;
    place-content: center;
    cursor: pointer;
    margin: 0 1rem 0 0;
    color: #505050;
    font-size: 24px;

    transition: .3s all;

    &:hover {
        color: red;
    }
    &:last-child{
        margin: 0;
    }
`;
