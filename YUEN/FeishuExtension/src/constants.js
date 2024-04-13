import Cover from './assets/cover.png';
import Icon from './assets/icon.png';

export { Cover, Icon };

export const extensionNS = 'YUEN';

// eslint-disable-next-line no-undef
export const extensionId = `${extensionNS}.feishu${DEPLOY_ENV && DEPLOY_ENV === 'pre' ? '1' : ''}`;
