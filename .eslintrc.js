module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'prettier'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'ecmaFeatures': {
            'jsx': true
          },
        'sourceType': 'module'
    },
    'plugins': ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    'settings': {
        'react' : {
            'createClass': 'createReactClass',
            'pragma': 'React',  
            'fragment': 'Fragment',
            'version': 'detect',
        },
        'import/resolver': {
          'typescript': {}
        }
    },
    'rules': {
        'react/react-in-jsx-scope': 'off',
        'camelcase': 'error',
        'spaced-comment': 'error',
        'quotes': ['error', 'single'],
        'no-duplicate-imports': 'error',
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'off',
    },
}
