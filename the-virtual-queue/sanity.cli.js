import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8qrlygx8', // Put your ID from manage.sanity.io here
    dataset: 'production'
  },
  deployment: {
    appId: 'lc3135y2p65nxq4yvw3m7ed9',
  }
})