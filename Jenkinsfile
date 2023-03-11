pipeline {
    agent any
    stages {
        stage('Hello') {
            steps {
                echo "Hello world"
                    }
            }
        }
   post{
        always{
            emailext: "gumbe12@gmail.com",
            subject: "Test Email",
            body: "Test"
        }
    }
}
    
    tools {nodejs "node"}

    stages {
        stage('Start') {
            steps {
                echo 'Build is starting'
            }
        }
        stage('Clone github repository') {
            steps {
                git url: 'https://github.com/sarahgumbe/WEEK6GALLERY', branch: 'master'
            }
        }
        stage('Install dependencies') {
            steps {
                sh '''
                   
                   npm install
                   '''
            }
        }
        stage('Run test') {
            steps {
                sh '''
                   npm test
                   '''
            }
        }
        stage('Deploy to render') {
            steps {
                sh '''
                   curl -d POST https://api.render.com/deploy/srv-cg54b8rhp8u9l27ogs00?key=y6uwJbobS18
                   '''
            }
        }
        stage('End') {
            steps {
                echo 'Build has run successfully'
            }
        }
    }
