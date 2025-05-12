export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [0, 'never'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
};
