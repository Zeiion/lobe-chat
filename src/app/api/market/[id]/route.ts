import { DEFAULT_LANG } from '@/const/locale';
import { getMockAgentJSON } from '@/const/url';

import { AgentMarket } from '../AgentMarket';

export const runtime = 'edge';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const { searchParams } = new URL(req.url);

  const locale = searchParams.get('locale');

  const market = new AgentMarket();

  let res: Response;

  // res = await fetch(market.getAgentUrl(params.id, locale as any));
  // if (res.status === 404) {
  //   res = await fetch(market.getAgentUrl(params.id, DEFAULT_LANG));
  // }
  res = await fetch(getMockAgentJSON(locale as any));

  return res;
};
