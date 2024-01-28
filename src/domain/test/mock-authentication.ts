import { AutheticationParams } from "@/domain/usecases/authentication";
import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AutheticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})