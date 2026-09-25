/**
 * ApplicationHeader — application-shell entry point for the reusable Header.
 * Navigation meaning and route state remain owned by the consuming shell.
 */

import { Header, type HeaderProps } from './header'
type ApplicationHeaderProps = HeaderProps

export function ApplicationHeader(props: ApplicationHeaderProps) {
  return <Header {...props} />
}
