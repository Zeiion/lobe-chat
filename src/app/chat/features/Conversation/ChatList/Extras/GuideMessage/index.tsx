import { GradientButton } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useChatInput } from '@/features/ChatInput/useChatInput';

const useStyles = createStyles(({ css, token }) => ({
  guide: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
  item: css`
    width: 300px;
    padding: 4px;
    color: ${token.colorPrimaryText};
    text-align: left;
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
  const { t, i18n } = useTranslation('chat');

  const { onSend, onInput } = useChatInput();

  const handleSelectGuide = (content: string) => {
    onInput(content);
    setTimeout(() => onSend(), 600);
  };

  const { t: tt } = useTranslation('term');
  // TODO tt
  const guides = [
    {
      content: tt('guides.predict', { ns: 'term' }),
      label: tt('guides.predict', { ns: 'term' }),
    },
    {
      content: t('guides.anomaly', { ns: 'term' }),
      label: t('guides.anomaly', { ns: 'term' }),
    },
    {
      content: t('guides.crack', { ns: 'term' }),
      label: t('guides.crack', { ns: 'term' }),
    },
    {
      content: t('guides.fill', { ns: 'term' }),
      label: t('guides.fill', { ns: 'term' }),
    },
  ];

  return (
    <div className={cx(styles.guide, className)}>
      <div>{t('guideMessage.prefix')}</div>
      <div className={styles.list}>
        {guides.map(({ content, label }) => (
          <div key={label} style={{ display: 'contents' }}>
            <GradientButton
              className={styles.item}
              glow={false}
              onClick={() => handleSelectGuide(content)}
              size="large"
            >
              {label}
            </GradientButton>
          </div>
        ))}
      </div>
    </div>
  );
});

export default GuideMessage;
