import { Statuses, MiniMes } from '@hubbard/custom-types'

export default interface Props { 
  /**
   * My current availability status
   */
  status: Statuses
  /**
   * The date I expect my status to change
   */
  nextDate?: string
  /**
   * The mini-me to use
   */
  miniMeName: MiniMes
  /**
   * The width of the mini-me
   * @default 'regular'
   */
  miniMeWidth?: 'narrow' | 'regular' | 'wide'
  /**
   * The hour of day in 24 hour format. Used to force a specific time setting
   */
  hour?: number
}
