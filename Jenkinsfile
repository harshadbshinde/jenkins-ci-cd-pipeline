pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t nodejs-demo-app:latest .'
            }
        }

        stage('Test') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'

                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Stopping old container...'
                bat 'docker stop nodejs-demo-container || exit 0'

                echo 'Removing old container...'
                bat 'docker rm nodejs-demo-container || exit 0'

                echo 'Starting new container...'
                bat 'docker run -d -p 3000:3000 --name nodejs-demo-container nodejs-demo-app:latest'
            }
        }

    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
            echo 'Application deployed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed!'
            echo 'Check Jenkins Console Output for errors.'
        }
    }
}
```
