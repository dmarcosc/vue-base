import Xhr from './Xhr'

const xhr = Xhr.builder()
  .setBaseUrl(process.env.VUE_APP_ROOT_API)
  .setHeaders({
    'x-ibm-client-id': process.env.VUE_APP_X_IBM_CLIENT_ID,
    'x-ibm-client-secret': process.env.VUE_APP_CLIENT_SECRET
  })
  .build()

export {
  xhr
}
