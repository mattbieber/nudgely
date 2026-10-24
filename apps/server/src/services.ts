import { createAuth } from '@nudgely/auth'
import { createDb } from '@nudgely/db'

import { ENV } from './env.server'

export const db = createDb(ENV)
export const auth = createAuth(ENV, db)
