import { UserInputError } from '@vtex/api'
import { json } from 'co-body'

export async function statusPost(ctx: Context, next: () => Promise<any>) {
  const { code } = await json(ctx.req)

  if (!code) {
    // se estiver null ou undefined
    throw new UserInputError('Code is required') // Wrapper for a Bad Request (400) HTTP Error. Check others in https://github.com/vtex/node-vtex-api/blob/fd6139349de4e68825b1074f1959dd8d0c8f4d5b/src/errors/index.ts
  }

  const codeNumber = parseInt(code, 10)

  const res = await ctx.clients.status.getStatus(codeNumber).catch((reason) => {
    // quando retorna todo o corpo do codigo http, o sistema reconhece como um erro
    return reason?.response?.data
  })

  ctx.set('Cache-Control', 'no-cache no-store') // passa a config para os headers, e nao cachear as req get
  ctx.body = res
  ctx.status = codeNumber // passa o codigo http como o status da req

  await next()
}
