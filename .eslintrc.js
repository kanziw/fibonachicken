module.exports = {
  extends: [
    'kanziw',
    'plugin:react/recommended',
    'react-app',
    'react-app/jest',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/react-in-jsx-scope': 'off',
  },
}
