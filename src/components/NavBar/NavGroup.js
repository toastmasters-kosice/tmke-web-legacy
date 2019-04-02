import React from 'react'
import NavLink from './NavLink'

const NavGroup = () =>
  <React.Fragment>
    <NavLink to="/#vzdelavanie" p="12px 24px">Vzdelavanie</NavLink>
    <NavLink to="/#o-nas" p="12px 24px">O nas</NavLink>
    <NavLink to="/#stretnutia" p="12px 24px">Stretnutia</NavLink>
    <NavLink to="/#kontakt" p="12px 24px">Kontakt</NavLink>
    <NavLink to="/pre-clenov" p="12px 24px">Pre clenov</NavLink>
  </React.Fragment>

NavGroup.propTypes = {}

export default NavGroup
