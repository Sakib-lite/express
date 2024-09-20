pipeline {
    agent any
    stages {

        
        stage('Checkout') {
            steps {
                checkout scm
            }
        }


        stage('Test') {
            steps {
                sh 'sudo apt install npm'
                sh 'npm test'
            }
        }


        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }


        stage('Build Image') {
           steps{
            sh 'docker build -t jenkins-test:latest .'
           }
        }

        stage('Docker Push') {
              steps {
                withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKER_REGISTRY_PASSWD', usernameVariable: 'DOCKER_REGISTRY_USER')]) {
                    sh "docker login -u $DOCKER_REGISTRY_USER -p $DOCKER_REGISTRY_PASSWD"
                    sh 'docker tag jenkins-test:1.0 sakib75/jenkins-test:1.0'
                    sh 'docker push sakib75/jenkins-test:1.0'
                    sh 'docker logout'
                }
            }
        }

    }
}
