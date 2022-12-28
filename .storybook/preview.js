import '../src/global.css';
import { customViewports } from './viewports';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'background',
    values: [
      {
        name: 'surface',
        value: '#ffffff',
      },
      {
        name: 'background',
        value: '#f1f5f9', // bg-slate-100
      },
    ],
    grid: {
      disable: true,
    },
  },
  viewport: {
    viewports: customViewports,
  },
  options: {
    storySort: {
      order: ['Introduction', 'Foundation', 'Components', 'Layouts'],
    },
  },
};
