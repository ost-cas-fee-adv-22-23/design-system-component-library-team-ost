/**
 * Merges an array of classnames or classname arrays to a single string and removes duplicates.
 * @param classNames An array of classnames or classname arrays. e.g. ['flex', 'items-center', 'rounded-full'] or ['p-s', ['bg-slate-600', 'hover:bg-slate-700']]
 * @returns Single string with classnames. e.g. 'p-s bg-slate-600 hover:bg-slate-700'
 */
export const mergeClassNames = (classNames: (string | string[])[]): string => {
  return [...new Set(classNames.flat())].filter((arg) => typeof arg === 'string').join(' ');
};
