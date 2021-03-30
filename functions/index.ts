import * as functions from 'firebase-functions'
import { Express, Request, Response } from 'express'
import { createSSRHandler } from './ssrHandler'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

let ssrHandler: Express | undefined
export const ssr = functions.https.onRequest(async (req: Request, res: Response) => {
  if (ssrHandler == null) {
    ssrHandler = (await createSSRHandler())
  }
  await ssrHandler(req, res)
})
