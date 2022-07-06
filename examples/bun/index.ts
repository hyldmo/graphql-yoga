import { createServer } from '@graphql-yoga/common'

const yoga = createServer()

export default {
  async fetch(req) {
    return await yoga.handleRequest(req)
  },
}
