import styled from "styled-components/native";
import { Box } from "../../../Layout/Box";
import { Text } from "../../../Layout";

export const Wrapper = styled(Box).attrs({
    p: [37, 34, 37, 34],
    align: 'center'
})`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const Heading = styled(Text).attrs(({ theme }) => ({
    size: 22,
    fontFamily: theme.fonts.inter.extraBold,
    color: theme.colors.text,
}))``;

export const Paragraph = styled(Text).attrs(({ theme }) => ({
    size: 16,
    fontFamily: theme.fonts.inter.regular,
    color: theme.colors.darkenText,
}))`
    text-align: center;
`;