export default interface Props {
  /**
   * What type of button is this?
   * @default 'lozenge'
   */
  type?: 'lozenge' | 'link'
  /**
   * The ability to add custom classes
   */
  classes?: string
  /**
   * What does the button do?
   */
  action: any
}
