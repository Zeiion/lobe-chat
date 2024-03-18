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

export const API_ENDPOINTS = {
  config: '/api/config',
  proxy: '/api/proxy',
  oauth: '/api/auth',

  // agent markets
  market: '/api/market',
  marketItem: (identifier: string) => withBasePath(`/api/market/${identifier}`),

  // plugins
  gateway: '/api/plugin/gateway',
  pluginStore: '/api/plugin/store',

  // chat
  chat: '/api/openai/chat',
  // chat: (provider: string) => withBasePath(`/api/chat/${provider}`),
  // chat: 'https://mock.apifox.com/m1/2773542-0-default/api/openai/chat',
  // chat: 'http://127.0.0.1:8000/api/chat',
  // chat: 'http://39.106.1.86:8085/chat',
  // chat: 'http://39.97.209.211:8085/api/chat',

  // trace
  trace: '/api/trace',

  // image
  images: '/api/openai/images',

  // TTS & STT
  stt: '/api/openai/stt',
  tts: '/api/openai/tts',
  edge: '/api/tts/edge-speech',
  microsoft: '/api/tts/microsoft-speech',
};
