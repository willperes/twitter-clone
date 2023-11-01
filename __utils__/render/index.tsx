import type React from 'react';
import { type RenderOptions, render } from '@testing-library/react-native';
import { TestingProviders, type TestingProvidersProps } from '../providers';

const customRender = (
  ui: React.ReactElement,
  config?: { wrapperProps?: TestingProvidersProps; options?: Omit<RenderOptions, 'wrapper'> }
): ReturnType<typeof render> =>
  render(ui, {
    wrapper: ({ children }) => TestingProviders({ children, ...config?.wrapperProps }),
    ...config?.options,
  });

export * from '@testing-library/react-native';
export { customRender as render };
