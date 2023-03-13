def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]
def WEB_URL = 'https://week6galleryip.onrender.com/'

pipeline {
    agent any
        environment {

        

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

 post {
        always {
            slackSend channel: '#sarah_ip1',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* Job ${JOB_NAME} build ${BUILD_NUMBER} \n link to the application ${WEB_URL} \n More information can be found at: ${BUILD_URL}HTML_20Report/"
            
            emailext subject: "Build ${currentBuild.currentResult}: Job ${JOB_NAME} build ${BUILD_NUMBER}",
                body: "The build for Job ${JOB_NAME} build ${BUILD_NUMBER} a ${currentBuild.currentResult}. \n link to the application ${WEB_URL} \n More information can be found at: ${BUILD_URL}HTML_20Report/",
                recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']]
         }
    }
}