import base from './base'
import _catch from './catch'
import {expect} from './chai'
import env from './env'
import {stderr, stdout} from './stdmock'
import stub from './stub'

import * as FancyTypes from './types'

export const fancy = base
.register('catch', _catch)
.register('env', env)
.register('stub', stub)
.register('stderr', stderr)
.register('stdout', stdout)

export type Fancy = typeof fancy

export {
  expect,
  FancyTypes,
}
export default fancy
