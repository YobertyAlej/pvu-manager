module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': ['plugin:react/recommended', 'prettier'],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react', 'prettier'
    ],
    'rules': {
        'prettier/prettier': [
            'error',
            {
              'singleQuote': true
            }
        ],
        'react/jsx-filename-extension': [
            'warn',
            {
              'extensions': ['.js', '.jsx']
            }
        ]
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};