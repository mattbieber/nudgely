import type { Session } from '@nudgely/auth'
import type { Database } from '@nudgely/db'

export type Context = {
    session: Session | null
    db: Database
}
