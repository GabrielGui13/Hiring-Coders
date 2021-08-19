import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Status extends ExternalClient {
  // configura o client para receber as req, ExternalClient chama uma api de fora
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://httpstat.us', context, options) // envia a url por parametro do construtor
  }

  public async getStatus(status: number): Promise<string> {
    // cria uma funcao para ser chamada pelos middlewares
    return this.http.get(status.toString(), {
      // http faz as requisicoes e passa o protocolo
      metric: 'status-get',
    })
  }

  public async getStatusWithHeaders(
    status: number
  ): Promise<IOResponse<string>> {
    return this.http.getRaw(status.toString(), {
      metric: 'status-get-raw',
    })
  }
}
