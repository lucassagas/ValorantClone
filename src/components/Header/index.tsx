import { Container } from './styles'

import Logo from '../../assets/logoriot.png'

function Header() {
  return (
    <Container>
      <img src={Logo} width={50} alt="Logo" />

      <nav>
        <ul>
          <li>
            <a href="">game info</a>
          </li>
          <li>
            <a href="">media</a>
          </li>
          <li>
            <a href="">news</a>
          </li>
          <li>
            <a href="">leader boards</a>
          </li>
          <li>
            <a href="">support</a>
          </li>
          <li>
            <a href="">our socials</a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Header
