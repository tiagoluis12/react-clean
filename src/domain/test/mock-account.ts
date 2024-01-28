import { AutheticationParams } from "@/domain/usecases";
import { AccountModel } from "../models";

import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AutheticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
})