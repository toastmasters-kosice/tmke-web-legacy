import React from 'react'
import NavLink from './NavLink'
import { routes } from '../../constants'

const NavGroup = () =>
  <React.Fragment>
    <NavLink to={routes.EDUCATION} p="12px 24px">Vzdelávanie</NavLink>
    <NavLink to={routes.ABOUT} p="12px 24px">O nás</NavLink>
    <NavLink to={routes.MEETINGS} p="12px 24px">Stretnutia</NavLink>
    <NavLink to={routes.CONTACT} p="12px 24px">Kontakt</NavLink>
    <NavLink to={routes.FOR_MEMBERS} p="12px 24px">Pre členov</NavLink>
  </React.Fragment>

export default NavGroup
