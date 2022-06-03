// Components
import Bio from './components/bio'
import Header from './components/header'
import Freelance from './components/freelance'
import Websites from './components/websites';

// Project Components
import MainProjects from './components/mainProjects'
import SideProjects from './components/sideProjects'

function HomePage() {
  return(
    <div>
      <Header></Header>
      <Bio></Bio>
      <MainProjects></MainProjects>
      <SideProjects></SideProjects>
      <Websites></Websites>
      <Freelance></Freelance>
    </div>
  )
}

export default HomePage
