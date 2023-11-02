import styled, { css } from 'styled-components/native';
import { type BoxProps } from '.';
import { moderateScale } from '../../../utils/layout';

export const StyledBox = styled.View<BoxProps>`
  ${({ p }) => {
    if (!p) return null;

    if (typeof p === 'number')
      return css`
        padding: ${moderateScale(p)}px;
      `;

    if (!p?.length) return null;

    return css`
      padding-top: ${moderateScale(p[0] ?? 0)}px;
      padding-right: ${moderateScale(p[1] ?? 0)}px;
      padding-bottom: ${moderateScale(p[2] ?? 0)}px;
      padding-left: ${moderateScale(p[3] ?? 0)}px;
    `;
  }}

  ${({ pt }) =>
    pt &&
    css`
      padding-top: ${moderateScale(pt)}px;
    `}

    ${({ pr }) =>
    pr &&
    css`
      padding-right: ${moderateScale(pr)}px;
    `}

    ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${moderateScale(pb)}px;
    `}

    ${({ pl }) =>
    pl &&
    css`
      padding-left: ${moderateScale(pl)}px;
    `}

    ${({ m }) => {
    if (!m) return null;

    if (typeof m === 'number')
      return css`
        margin: ${moderateScale(m)}px;
      `;

    if (!m?.length) return null;

    return css`
      margin-top: ${moderateScale(m[0] ?? 0)}px;
      margin-right: ${moderateScale(m[1] ?? 0)}px;
      margin-bottom: ${moderateScale(m[2] ?? 0)}px;
      margin-left: ${moderateScale(m[3] ?? 0)}px;
    `;
  }}

    ${({ mt }) =>
    mt &&
    css`
      margin-top: ${moderateScale(mt)}px;
    `}

    ${({ mr }) =>
    mr &&
    css`
      margin-right: ${moderateScale(mr)}px;
    `}

    ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${moderateScale(mb)}px;
    `}

    ${({ ml }) =>
    ml &&
    css`
      margin-left: ${moderateScale(ml)}px;
    `}

    ${({ fd }) =>
    fd &&
    css`
      flex-direction: ${fd};
    `}

    ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}

    ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
`;
