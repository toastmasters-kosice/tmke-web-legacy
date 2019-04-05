import React from 'react'
import NavBar from '../../components/NavBar'
import { routes } from '../../constants'
import HomeButton from './HomeButton'

const TmNavBar = () =>
  <NavBar logo={<HomeButton px="24px" />}>
    <NavBar.Link to={routes.EDUCATION} p="12px 24px">Vzdelávanie</NavBar.Link>
    <NavBar.Link to={routes.ABOUT} p="12px 24px">O nás</NavBar.Link>
    <NavBar.Link to={routes.MEETINGS} p="12px 24px">Stretnutia</NavBar.Link>
    <NavBar.Link to={routes.CONTACT} p="12px 24px">Kontakt</NavBar.Link>
    <NavBar.Link to={routes.FOR_MEMBERS} p="12px 24px">Pre členov</NavBar.Link>
  </NavBar>

TmNavBar.propTypes = {}

export default TmNavBar
