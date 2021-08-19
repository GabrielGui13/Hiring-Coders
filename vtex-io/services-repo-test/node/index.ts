import type { ClientsConfig, ServiceContext } from '@vtex/api'
import { method, Service } from '@vtex/api'

import { Clients } from './clients' // recebe a classe dos clients
import { status } from './middlewares/status' // recebe o middleware de status
import { statusPost } from './middlewares/statusPost' // recebe o middleware de statusPost

const TIMEOUT_MS = 800

const clients: ClientsConfig<Clients> = {
  // configuracao dos clients (rotas e apis)
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
  },
}

declare global {
  // typescript
  type Context = ServiceContext<Clients>
}

export default new Service({
  // exportando o service para colocar a api no ar
  clients,
  routes: {
    status: method({
      // mesmo nome declarado no service.json, o endpoint eh declarado la
      GET: [status],
    }),
    statusPost: method({
      POST: [statusPost],
    }),
  },
})
