def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]
def WEB_URL = 'https://week6galleryip.onrender.com/'

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

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"

        EMAIL_RECEPIENT = 'toloih@gmail.com'

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
                git url: 'https://github.com/htoloi/WK6gallery.git', branch: 'master'
            }
        }
        stage('Install dependencies') {
            steps {
                bat '''
                   npm install
                   '''
            }
        }
         stage('Test') {
            steps {
                bat '''
                    npm run test
                   '''
                }
          }
        stage('Deployment') {
            steps {
                bat '''
                   curl -X POST https://api.render.com/deploy/srv-cg45ju7dvk4st71blphg?key=694nIRWHHVk
                   '''
            }
        }

        stage('End') {
            steps {
                echo 'Build has run successfully'
            }
        }

    }

     post {
        success {
            emailext attachLog: true,
                body: EMAIL_BODY,

                subject: EMAIL_SUBJECT_SUCCESS,

                to: EMAIL_RECEPIENT
        }

        failure {
            emailext attachLog: true,
                body: EMAIL_BODY,

                subject: EMAIL_SUBJECT_FAILURE,

                to: EMAIL_RECEPIENT
        }
         always{
            slackSend channel: 'hasan-ip1'
            }   
        
    }
}