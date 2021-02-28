import { FunctionalComponent } from '@stencil/core';
import state from '../global/store';

interface Props {
  cmpInstance?: object;
  i18nKey?: string;
  i18nKeyOptions?: any;
}

// TODO recursively convert children nodes to strings if i18nKey undefined*/ /* otherwise the nodes will end up as "[object Object]" and won't map to the key
export const Trans: FunctionalComponent<Props> = ({ i18nKey, i18nKeyOptions }, children) =>
  state.t(i18nKey || children.join(''), {
    ...i18nKeyOptions,
    defaultValue: children,
  });
