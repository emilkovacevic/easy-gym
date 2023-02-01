import Info from './info/Info'
import Navbar from './navbar/Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
        <Info />
        <Navbar />
    </header>
  )
}

export default Header