import { authHandler } from './auth-handler';
import { articlesHandlers } from './links-handler';

export const handlers = [...articlesHandlers, ...authHandler];
