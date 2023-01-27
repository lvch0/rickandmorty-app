import { lazy } from 'react';

export { default as HomePage } from './home/HomePage';

export const LoginPage = lazy(() => import('./login/LoginPage'))
export const CharacterPage = lazy(() => import('./character/CharacterPage'))
