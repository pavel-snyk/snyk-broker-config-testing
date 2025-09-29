/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['main'],
  repositoryUrl: 'git@github.com:pavel-snyk/snyk-broker-config-testing.git',
  prepare: [
    [
      // compile typescript files
      '@semantic-release/exec',
      {
        prepareCmd: 'npm run build',
      },
    ],
  ],
  publish: ['@semantic-release/github'],
}
