import { IOClients } from '@vtex/api'

import Status from './status'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  // recebe todos os clients e insere aqui para funcionar
  public get status() {
    return this.getOrSet('status', Status)
  }
}
