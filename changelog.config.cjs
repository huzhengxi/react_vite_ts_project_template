module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes/构建过程或辅助工具更改',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI related changes/项目继续集成流程修改',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes/文档更新',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: 'A new feature/新增功能',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix/修复 bug',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'A code change that improves performance/性能, 体验优化',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature/重构代码(既没有新增功能，也没有修复 bug)',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit/版本发布',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description:
        'Markup, white-space, formatting, missing semi-colons.../不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'Adding missing tests/新增测试用例或是更新现有测试',
      emoji: '💍',
      value: 'test',
    },
    messages: {
      type: "Select the type of change that you're committing:",
      customScope: 'Select the scope this component affects:',
      subject: 'Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n',
    },
  },
};
