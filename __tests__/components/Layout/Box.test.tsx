import { render } from '@testing-library/react-native';
import { TestingWrapper } from '../../../__utils__/wrappers/TestingWrapper';
import { Box } from '../../../src/components/Layout/Box';
import { moderateScale } from '../../../src/utils/layout';

describe('components/layout/Box', () => {
  it('should have the correctly applied margins when provided with the m number prop', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box m={10} />
      </TestingWrapper>
    );

    const box = getByTestId('box');

    expect(box).toHaveStyle({
      marginTop: moderateScale(10),
      marginBottom: moderateScale(10),
      marginLeft: moderateScale(10),
      marginRight: moderateScale(10),
    });
  });

  it('should only have the correctly applied margins when provided only with a m array prop of two values', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box m={[10, 10]} />
      </TestingWrapper>
    );

    const box = getByTestId('box');

    expect(box).toHaveStyle({
      marginTop: moderateScale(10),
      marginBottom: 0,
      marginLeft: 0,
      marginRight: moderateScale(10),
    });
  });

  it('should apply margin left when provided with the prop ml', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box ml={10} />
      </TestingWrapper>
    );

    const box = getByTestId('box');
    expect(box).toHaveStyle({ marginLeft: moderateScale(10) });
  });

  it('should apply margin right when provided with the prop mr', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box mr={10} />
      </TestingWrapper>
    );

    const box = getByTestId('box');
    expect(box).toHaveStyle({ marginRight: moderateScale(10) });
  });

  it('should apply margin top when provided with the prop mt', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box mt={10} />
      </TestingWrapper>
    );

    const box = getByTestId('box');
    expect(box).toHaveStyle({ marginTop: moderateScale(10) });
  });

  it('should apply margin bottom when provided with the prop mb', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box mb={10} />
      </TestingWrapper>
    );

    const box = getByTestId('box');
    expect(box).toHaveStyle({ marginBottom: moderateScale(10) });
  });

  it('should have the correctly applied paddings when provided with the p number prop', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box p={10} />
      </TestingWrapper>
    );

    const box = getByTestId('box');

    expect(box).toHaveStyle({
      paddingTop: moderateScale(10),
      paddingBottom: moderateScale(10),
      paddingLeft: moderateScale(10),
      paddingRight: moderateScale(10),
    });
  });

  it('should only have the correctly applied paddings when provided only with a p array prop of two values', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box p={[10, 10]} />
      </TestingWrapper>
    );

    const box = getByTestId('box');

    expect(box).toHaveStyle({
      paddingTop: moderateScale(10),
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: moderateScale(10),
    });
  });

  it('should apply padding left when provided with the prop pl', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box pl={10} />
      </TestingWrapper>
    );

    const box = getByTestId('box');
    expect(box).toHaveStyle({ paddingLeft: moderateScale(10) });
  });

  it('should apply padding right when provided with the prop pr', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box pr={10} />
      </TestingWrapper>
    );

    const box = getByTestId('box');
    expect(box).toHaveStyle({ paddingRight: moderateScale(10) });
  });

  it('should apply padding top when provided with the prop pt', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box pt={10} />
      </TestingWrapper>
    );

    const box = getByTestId('box');
    expect(box).toHaveStyle({ paddingTop: moderateScale(10) });
  });

  it('should apply padding bottom when provided with the prop pb', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <Box pb={10} />
      </TestingWrapper>
    );

    const box = getByTestId('box');
    expect(box).toHaveStyle({ paddingBottom: moderateScale(10) });
  });
});
