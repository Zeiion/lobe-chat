/* eslint-disable sort-keys-fix/sort-keys-fix */
import { transform } from 'lodash-es';

import { withBasePath } from '@/utils/basePath';

const mapWithBasePath = <T extends object>(apis: T): T => {
  return transform(apis, (result, value, key) => {
    if (typeof value === 'string') {
      // @ts-ignore
      result[key] = withBasePath(value);
    } else {
      result[key] = value;
    }
  });
};

// TODO check
export const API_ENDPOINTS = mapWithBasePath({
  config: '/api/config',
  proxy: '/api/proxy',
  oauth: '/api/auth',

  // agent markets
  market: '/api/market',

  // plugins
  gateway: '/api/plugin/gateway',
  pluginStore: '/api/plugin/store',

  // chat: (provider: string) => withBasePath(`/api/chat/${provider}`),
  chat: '/api/openai/chat',
  images: '/api/openai/images',

  // TTS & STT
  stt: '/api/openai/stt',
  tts: '/api/openai/tts',
  edge: '/api/tts/edge-speech',
  microsoft: '/api/tts/microsoft-speech',
});
