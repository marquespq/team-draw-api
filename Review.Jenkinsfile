pipeline {
  agent {
    label 'kubernetes'
  }

  options {
    buildDiscarder(logRotator(numToKeepStr:'10'))
    timeout(time: 5, unit: 'MINUTES')
    ansiColor('xterm')
  }

  stages {
    stage('Run tests') {
      steps {
        nvm('v14.18'){
          sh 'node --version'
          sh 'npm install'
        }
      }
    }
  }
}
