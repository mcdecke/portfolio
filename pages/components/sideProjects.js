import Ethereum from './ethereum'
import Misty from './misty'
import Stocks from './stock'

function SideProjects(){
  return (
    <div>
      <div className='row top projects'>
        <div className = 'fbar top'>
          <h2 className='attention'>Other Projects</h2>
        </div>
      </div>

      <div className='row projects'>
        <div  className='col'>
          <Misty></Misty>
        </div>
        <div  className='col'>
          <Stocks></Stocks>
        </div>
        <div  className='col'>
          <Ethereum></Ethereum>
        </div>
      </div>
      <div className='fbar top'></div>
    </div>
  )
}

export default SideProjects;