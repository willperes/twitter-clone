import {
  type RenderHookOptions,
  renderHook,
  type RenderHookResult,
} from '@testing-library/react-native';
import { TestingProviders, type TestingProvidersProps } from '../providers/index';

const customRenderHook = <Result, Props>(
  hook: (props: Props) => Result,
  config?: {
    wrapperProps?: TestingProvidersProps;
    options?: Omit<RenderHookOptions<Props>, 'wrapper'>;
  }
): RenderHookResult<Result, Props> =>
  renderHook(hook, {
    wrapper: ({ children }) => TestingProviders({ children, ...config?.wrapperProps }),
    ...config?.options,
  });

export * from '@testing-library/react-native';
export { customRenderHook as renderHook };
