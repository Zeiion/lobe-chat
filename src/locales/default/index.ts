import tool from '../default/tool';
import chat from './chat';
import common from './common';
import empty from './empty';
import error from './error';
import market from './market';
import migration from './migration';
import plugin from './plugin';
import setting from './setting';
import term from './term';
import welcome from './welcome';

const resources = {
  chat,
  common,
  empty,
  error,
  market,
  migration,
  plugin,
  setting,
  term,
  tool,
  welcome,
} as const;

export default resources;
