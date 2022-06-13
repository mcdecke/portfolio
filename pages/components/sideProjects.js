import Ethereum from './ethereum'
import Misty from './misty'
import Stocks from './stock'

function SideProjects(){
  return (
    <div>
      <div className='row projects'>
        <div className = 'fbar'>
          <h2 className='attention'>Other Projects</h2>
        </div>
      </div>

      <cards className='row projects'>
        <card className='col'>
          <Misty></Misty>
        </card>
        <card className='col'>
          <Stocks></Stocks>
        </card>
        <card className='col'>
          <Ethereum></Ethereum>
        </card>
      </cards>
      <div className='fbar top'></div>
    </div>
  )
}

export default SideProjects;
