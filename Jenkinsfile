pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'sakib75/jenkins-test:1.0'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t jenkins-test:1.0 .'
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-cred', passwordVariable: 'DOCKER_REGISTRY_PASSWD', usernameVariable: 'DOCKER_REGISTRY_USER')]) {
                    sh "docker login -u $DOCKER_REGISTRY_USER -p $DOCKER_REGISTRY_PASSWD"
                    sh "docker tag jenkins-test:1.0 ${DOCKER_IMAGE}"
                    sh "docker push ${DOCKER_IMAGE}"
                    sh 'docker logout'
                }
            }
        }
    }
}
