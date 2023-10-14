module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'eslint-config-airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['prettier', '@typescript-eslint', 'react'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'no-param-reassign': 0,
        'react/function-component-definition': 0,
        'consistent-return': 0,
        'react-hooks/exhaustive-deps': 0,
        'react/self-closing-comp': 0,
        'react/jsx-props-no-spreading': 0,
    },
};
