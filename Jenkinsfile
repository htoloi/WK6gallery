def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]
def WEB_URL = 'https://gallery-iqku.onrender.com'

pipeline {
    agent any
        environment {

        EMAIL_BODY = 

        """
            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
            <p>
            View console output at 
            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
            </p> 
            <p><i>(Build log is attached.)</i></p>
        """

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESSFUL' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILED' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_RECEPIENT = 'gumbe12@gmail.com'
        }
        post{
        always{
            emailext to: "gumbe12@gmail.com",
            subject: "jenkins build:${currentBuild.currentResult}: ${env.JOB_NAME}",
            body: "${currentBuild.currentResult}: Job ${env.JOB_NAME}\nMore Info can be found here: ${env.BUILD_URL}"
            slackSend channel: "sarah_ip1", message: "Build Started: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)",
            color: COLOR_MAP[currentBuild.currentResult]
            
            
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
}
 