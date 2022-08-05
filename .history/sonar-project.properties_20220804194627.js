const scanner = require('sonarqube-scanner');

scanner(
    {
      serverUrl : 'https://sonarqube.sistemaagil.net',
      token : "8cd1132139eb61d669dd7165ff3d5549e8c3aba8",
      options: {
        'sonar.projectKey':'backend-webyavirac',
        'sonar.projectName': 'backend-webyavirac',
        'sonar.projectDescription': 'Description for "My App" project...',
        'sonar.sourceEncoding':'UTF-8',
        'sonar.sources': '.',
        'sonar.javascript.lcov.reportPaths': 'coverage/jest/lcov.info'
      }
    },
    () => process.exit()
  )