// telegram.d.ts
interface TelegramWebAppUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
}

interface TelegramWebAppInitDataUnsafe {
  user?: TelegramWebAppUser;
}

interface TelegramWebApp {
  initDataUnsafe: TelegramWebAppInitDataUnsafe;
}

interface Telegram {
  WebApp: TelegramWebApp;
}

interface Window {
  Telegram: Telegram;
}
