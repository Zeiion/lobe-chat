import urlJoin from 'url-join';

import { getClientConfig } from '@/config/client';
import { Locales } from '@/types/locale';
import { withBasePath } from '@/utils/basePath';

import pkg from '../../package.json';
import { DEFAULT_LANG } from './locale';
import { INBOX_SESSION_ID } from './session';

export const OFFICIAL_URL = 'https://chat-preview.lobehub.com/';

export const getCanonicalUrl = (path: string) => urlJoin(OFFICIAL_URL, path);

export const GITHUB = pkg.homepage;
export const CHANGELOG = urlJoin(GITHUB, 'blob/main/CHANGELOG.md');

const { LOBE_CHAT_DOCS } = getClientConfig();

export const DOCUMENTS = !!LOBE_CHAT_DOCS ? '/docs' : 'https://chat-docs.lobehub.com';

export const WIKI_PLUGIN_GUIDE = urlJoin(GITHUB, 'wiki', 'Plugin-Development');

export const MANUAL_UPGRADE_URL = urlJoin(GITHUB, 'wiki', 'Upstream-Sync');

// export const CHANGELOG = urlJoin(GITHUB, 'blob/master/CHANGELOG.md');
export const ABOUT = pkg.homepage;
export const FEEDBACK = pkg.bugs.url;
export const DISCORD = 'https://discord.gg/AYFPHvv2jT';
export const PRIVACY_URL = 'https://lobehub.com/privacy';

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';
// export const { PLUGINS_INDEX_URL, AGENTS_INDEX_URL } = getClientConfig();

// export const getPluginIndexJSON = (lang: Locales = DEFAULT_LANG, baseUrl = PLUGINS_INDEX_URL) => {
//   if (checkLang(lang)) return baseUrl;

//   return urlJoin(baseUrl, `index.${lang}.json`);
// };

export const getMockAgentJSON = (lang: Locales = DEFAULT_LANG) => {
  return urlJoin('agents', `agents.${lang}.json`);
};

// export const getAgentIndexJSON = (lang: Locales = DEFAULT_LANG, baseUrl = AGENTS_INDEX_URL) => {
//   if (checkLang(lang)) return baseUrl;

//   return urlJoin(baseUrl, `index.${lang}.json`);
// };

// export const getAgentJSON = (
//   identifier: string,
//   lang: Locales = DEFAULT_LANG,
//   baseUrl = AGENTS_INDEX_URL,
// ) => {
//   if (checkLang(lang)) return urlJoin(baseUrl, `${identifier}.json`);

//   return urlJoin(baseUrl, `${identifier}.${lang}.json`);
// };

export const MORE_MODEL_PROVIDER_REQUEST_URL =
  'https://github.com/lobehub/lobe-chat/discussions/1284';

export const AGENTS_INDEX_GITHUB = 'https://github.com/lobehub/lobe-chat-agents';
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new');

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  mobile ? `/chat/mobile?session=${id}` : `/chat?session=${id}`;

export const imageUrl = (filename: string) => withBasePath(`/images/${filename}`);
