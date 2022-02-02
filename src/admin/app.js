import AuthLogo from './extensions/uxium.jpg';
import MenuLogo from './extensions/logo_menu.png';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
       auth: {
        logo: AuthLogo,
      },
    // Replace the favicon
      head: {
        favicon: favicon,
      },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    locales: [
      // 'ar',
      'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap() {},
};
