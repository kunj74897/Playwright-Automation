
pipeline {
    agent any

    options {
        timestamps()
    }

    stages {

        stage('Check Environment') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                    if exist package-lock.json (
                        call npm ci
                    ) else (
                        call npm install
                    )
                '''
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Execute Playwright Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Create Playwright Report ZIP') {
            steps {
                powershell '''
                    if (Test-Path "playwright-report") {
                        if (Test-Path "playwright-report.zip") {
                            Remove-Item "playwright-report.zip" -Force
                        }

                        Compress-Archive `
                            -Path "playwright-report\\*" `
                            -DestinationPath "playwright-report.zip" `
                            -Force

                        Write-Host "Playwright report ZIP created successfully!"
                    }
                    else {
                        Write-Error "Playwright report folder not found!"
                        exit 1
                    }
                '''
            }
        }
    }

    post {
        always {

            archiveArtifacts(
                artifacts: 'playwright-report/**,test-results/**,playwright-report.zip',
                allowEmptyArchive: true
            )

            publishHTML(target: [
                reportName: 'Playwright HTML Report',
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])

            emailext(
                to: 'kunj1736@gmail.com, jayesh@qable.io',
                subject: "Playwright Automation - Build #${BUILD_NUMBER} - ${currentBuild.currentResult}",
                mimeType: 'text/html',
                body: """
                    <h2>Playwright Automation Execution Report</h2>

                    <p>Hello Team,</p>

                    <p>Playwright automation execution has completed.</p>

                    <p><b>Project:</b> ${env.JOB_NAME}</p>
                    <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>
                    <p><b>Build Status:</b> ${currentBuild.currentResult}</p>

                    <p><b>Build URL:</b>
                    <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>

                    <p>Please find the Playwright HTML report ZIP attached.</p>

                    <p>Regards,<br>Automation Testing Team</p>
                """,
                attachmentsPattern: 'playwright-report.zip'
            )
        }
    }
}
