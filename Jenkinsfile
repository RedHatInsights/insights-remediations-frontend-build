node {
    stage ('deploy_beta') {
        sh 'rm -rf /tmp/insights-build/'
        sh 'git clone git@github.com:RedHatInsights/insights-build.git /tmp/insights-build/'
        def pipeline = load '/tmp/insights-build/platform/Jenkinsfile'
        pipeline.deploy('insightsbeta/platform/remediations/')
    }
}
