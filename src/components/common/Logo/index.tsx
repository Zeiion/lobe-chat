import { createStyles } from 'antd-style';
import { SlashIcon } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Icons from '../Icons';

const useStyles = createStyles(({ css, token }) => ({
  extra: css`
    color: ${token.colorTextSecondary} !important;
  `,
  icon: css`
    fill: ${token.colorPrimaryTextActive};
  `,
  logo: css`
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 20px;
  `,
  name: css`
    display: flex;
    gap: 6px;
    align-items: center;

    font-size: 20px;
    font-weight: ${token.fontWeightStrong};

    background: linear-gradient(
      to right,
      ${token.colorPrimary} 0%,
      ${token.colorPrimaryActive} 100%
    );
    background-clip: text;

    -webkit-text-fill-color: transparent;
  `,
}));

interface LogoProps {
  className?: string;
  extra?: string;
  hideLogo?: boolean;
  hideName?: boolean;
  size?: number;
}

const DEFAULT_SIZE = 32;

const Logo = memo<LogoProps>(({ className, hideLogo = true, hideName, size, extra }) => {
  const { cx, styles } = useStyles();
  const { t } = useTranslation('common');

  return (
    <div className={cx(styles.logo, className)}>
      {!hideLogo && (
        <Icons.logo
          className={styles.icon}
          height={size ?? DEFAULT_SIZE}
          width={size ?? DEFAULT_SIZE}
        />
      )}
      {!hideName && (
        <div className={styles.name} style={{ textWrap: 'nowrap' }}>
          {t('appName')}
        </div>
      )}
      {extra && (
        <>
          <SlashIcon
            style={{ color: 'rgba(0, 0, 0, 0.12)', margin: '0 -4px', transform: 'scaleX(0.5)' }}
          />
          <div className={styles.extra}>{extra}</div>
        </>
      )}
    </div>
  );
});

export default Logo;
