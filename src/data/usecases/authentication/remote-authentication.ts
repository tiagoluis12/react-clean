import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { AutheticationParams } from '@/domain/usecases/authentication'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async auth(params: AutheticationParams): Promise<void> {
    await this.httpPostClient.post({
      url:this.url,
      body: params
    })
  }
}