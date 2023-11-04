import { SearchBar } from '.';
import { render } from '../../../__utils__/render';

describe('components/SearchBar', () => {
  it('should be disabled when display only is true', () => {
    const { getByTestId } = render(<SearchBar displayOnly />);

    expect(getByTestId('search-bar-input')).toHaveProp('editable', false);
  });

  it('should not have flex 1 when display only is true', () => {
    const { getByTestId } = render(<SearchBar displayOnly />);

    expect(getByTestId('search-bar-input')).not.toHaveStyle({ flex: 1 });
  });
});
