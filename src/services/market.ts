import urlJoin from 'url-join';

import { URLS } from '@/services/_url';
import { LobeChatAgentsMarketIndex } from '@/types/market';

class MarketService {
  getAgentList = async (locale: string): Promise<LobeChatAgentsMarketIndex> => {
    // const res = await fetch(`${URLS.market}?locale=${locale}`);
    const res = await fetch(urlJoin('agents', `agents.${locale}.json`));
    return res.json();
  };

  /**
   * 请求助手 manifest
   */
  getAgentManifest = async (identifier: string, locale: string) => {
    if (!identifier) return;
    // const res = await fetch(`${URLS.market}/${identifier}?locale=${locale}`);
    // return res.json();

    const res = await this.getAgentList(locale);
    return res.agents.find((agent) => agent.identifier === identifier) as any;
  };
}
export const marketService = new MarketService();
