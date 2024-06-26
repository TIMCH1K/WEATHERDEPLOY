module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
