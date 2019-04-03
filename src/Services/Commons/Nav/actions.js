import { CURRENT_NAV_IS_ALL, CURRENT_NAV_IS_INBOX } from './../../../constants/types'

export const currentNavIsInbox = () => ({
  type: CURRENT_NAV_IS_INBOX
})

export const currentNavIsAll = () => ({
  type: CURRENT_NAV_IS_ALL
})
