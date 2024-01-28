import { AutheticationParams } from "@/domain/usecases/authentication";
import { AccountModel } from "@/domain/models/account-models";

import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AutheticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
})