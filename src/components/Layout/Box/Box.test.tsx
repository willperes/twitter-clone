import { render } from '../../../../__utils__/render';
import { Box } from '.';
import { moderateScale } from '../../../utils/layout';

describe('components/layout/Box', () => {
  it('should have the correctly applied margins when provided with the m number prop', () => {
    const { getByTestId } = render(<Box m={10} />);

    const box = getByTestId('box');

    expect(box).toHaveStyle({
      marginTop: moderateScale(10),
      marginBottom: moderateScale(10),
      marginLeft: moderateScale(10),
      marginRight: moderateScale(10),
    });
  });

  it('should only have the correctly applied margins when provided only with a m array prop of two values', () => {
    const { getByTestId } = render(<Box m={[10, 10]} />);

    const box = getByTestId('box');

    expect(box).toHaveStyle({
      marginTop: moderateScale(10),
      marginBottom: 0,
      marginLeft: 0,
      marginRight: moderateScale(10),
    });
  });

  it('should apply margin left when provided with the prop ml', () => {
    const { getByTestId } = render(<Box ml={10} />);

    const box = getByTestId('box');
    expect(box).toHaveStyle({ marginLeft: moderateScale(10) });
  });

  it('should apply margin right when provided with the prop mr', () => {
    const { getByTestId } = render(<Box mr={10} />);

    const box = getByTestId('box');
    expect(box).toHaveStyle({ marginRight: moderateScale(10) });
  });

  it('should apply margin top when provided with the prop mt', () => {
    const { getByTestId } = render(<Box mt={10} />);

    const box = getByTestId('box');
    expect(box).toHaveStyle({ marginTop: moderateScale(10) });
  });

  it('should apply margin bottom when provided with the prop mb', () => {
    const { getByTestId } = render(<Box mb={10} />);

    const box = getByTestId('box');
    expect(box).toHaveStyle({ marginBottom: moderateScale(10) });
  });

  it('should have the correctly applied paddings when provided with the p number prop', () => {
    const { getByTestId } = render(<Box p={10} />);

    const box = getByTestId('box');

    expect(box).toHaveStyle({
      paddingTop: moderateScale(10),
      paddingBottom: moderateScale(10),
      paddingLeft: moderateScale(10),
      paddingRight: moderateScale(10),
    });
  });

  it('should only have the correctly applied paddings when provided only with a p array prop of two values', () => {
    const { getByTestId } = render(<Box p={[10, 10]} />);

    const box = getByTestId('box');

    expect(box).toHaveStyle({
      paddingTop: moderateScale(10),
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: moderateScale(10),
    });
  });

  it('should apply padding left when provided with the prop pl', () => {
    const { getByTestId } = render(<Box pl={10} />);

    const box = getByTestId('box');
    expect(box).toHaveStyle({ paddingLeft: moderateScale(10) });
  });

  it('should apply padding right when provided with the prop pr', () => {
    const { getByTestId } = render(<Box pr={10} />);

    const box = getByTestId('box');
    expect(box).toHaveStyle({ paddingRight: moderateScale(10) });
  });

  it('should apply padding top when provided with the prop pt', () => {
    const { getByTestId } = render(<Box pt={10} />);

    const box = getByTestId('box');
    expect(box).toHaveStyle({ paddingTop: moderateScale(10) });
  });

  it('should apply padding bottom when provided with the prop pb', () => {
    const { getByTestId } = render(<Box pb={10} />);

    const box = getByTestId('box');
    expect(box).toHaveStyle({ paddingBottom: moderateScale(10) });
  });

  it('should apply correctly the box props as styles', () => {
    const { getByTestId } = render(<Box fd={'row'} align={'center'} justify={'space-between'} />);

    const box = getByTestId('box');
    expect(box).toHaveStyle({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    });
  });
});
