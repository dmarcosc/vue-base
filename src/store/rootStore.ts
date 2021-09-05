import { StateSecurity } from './modules/security/types'
import { StateSession } from './modules/session/types'
import { StateUi } from './modules/ui/types'

export interface RootStore {
  ui: StateUi;
  session: StateSession;
  security: StateSecurity;
}
