import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import Logo from '@/components/common/Logo';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return <MobileNavBar center={<Logo />} right={<ShareAgentButton mobile />} />;
});

export default Header;
