import Header from '../Header'

import Logo from '../../assets/logo.png'

import { FiFacebook, FiInstagram, RiGlobalLine } from '../../styles/icons'

import { Container } from './styles'

function Layout() {
  return (
    <Container>
      <Header />

      <video muted autoPlay loop>
        <source src={require('../../video/valorant.mp4')} type="video/mp4" />
      </video>

      <main>
        <strong>A 5v5 character-based tactical shooter</strong>
        <img src={Logo} width={1000} alt="Logo" />
        <button type="button">
          <div>
            <span>play free</span>
            <div />
          </div>
        </button>
      </main>

      <aside>
        <FiFacebook size={27} />
        <FiInstagram size={27} />
        <RiGlobalLine size={27} />
      </aside>
    </Container>
  )
}

export default Layout
