import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import GuideMessage from '@/app/chat/features/Conversation/ChatList/Extras/GuideMessage';

import { RenderErrorMessage } from '../types';
import { ErrorActionContainer } from './style';

const NotAllowed: RenderErrorMessage['Render'] = memo(() => {
  return (
    <ErrorActionContainer>
      <Flexbox gap={24} style={{ width: '100%' }}>
        <GuideMessage />
      </Flexbox>
    </ErrorActionContainer>
  );
});

export default NotAllowed;
