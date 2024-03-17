import { EmptyCard, Features, GradientButton, SpotlightCard } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useChatInput } from '@/features/ChatInput/useChatInput';

const useStyles = createStyles(({ css, token }) => ({
  guide: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
  list: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  `,
}));

interface GuideMessageProps {
  className?: string;
  extra?: string;
  hideLogo?: boolean;
  hideName?: boolean;
  size?: number;
}

const GuideMessage = memo<GuideMessageProps>(({ className }) => {
  const { cx, styles } = useStyles();
  const { t } = useTranslation('chat');

  const { onSend, onInput } = useChatInput();

  const handleSelectGuide = (content: string) => {
    onInput(content);
    setTimeout(() => onSend(), 600);
  };

  const { t: tt } = useTranslation('term');
  // TODO tt
  const guides = [
    {
      content: tt('guides.predict.content'),
      title: tt('guides.predict.title'),
    },
    {
      content: tt('guides.anomaly.content'),
      title: tt('guides.anomaly.title'),
    },
    {
      content: tt('guides.crack.content'),
      title: tt('guides.crack.title'),
    },
    {
      content: tt('guides.fill.content'),
      title: tt('guides.fill.title'),
    },
  ];

  return (
    <div className={cx(styles.guide, className)}>
      <div>{t('guideMessage.prefix')}</div>
      {/* {
          // guides.map(({ content, title }) => (
          // <div key={title} style={{ display: 'contents' }}>
          //   <GradientButton
          //     className={styles.item}
          //     size="large"
          //   >
          //     {title}
          //   </GradientButton>
          // </div>
          // ))
        } */}
      <SpotlightCard
        items={guides}
        renderItem={({ content, title }) => (
          <Flexbox
            direction="vertical"
            onClick={() => handleSelectGuide(content)}
            style={{ padding: 10 }}
          >
            <div style={{ fontSize: 15, fontWeight: 600 }}>{title}</div>
            <div style={{ opacity: 0.6 }}>{content}</div>
          </Flexbox>
        )}
      />
    </div>
  );
});

export default GuideMessage;
