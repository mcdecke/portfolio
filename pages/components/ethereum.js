import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaEthereum } from 'react-icons/fa';
import {GiPokerHand} from 'react-icons/gi'
import { SiSolidity } from 'react-icons/si';

function Ethereum(){
  return(
    <div className='card vh-100'>
      <h2>NFT</h2>
      <div className="col row attention">
        <GiPokerHand size={70}/>
        <div className=" attention"><SiSolidity size={70}/>
        <FaEthereum size={70}/>
        </div>
      </div>

      <div className='col'>
        Implemented a layer 2 solution to reduce gas fees by over 99% for an Ethereum based NFT game, played on a React web app.
        <div className='card hbar tools'>Tools:
          Solidity<br/>
          Ethereum<br/>
          Truffle<br/>
          Metamask <br/>
          JavaScript<br/>
          React<br/>
          Next<br/>
        </div>
        <Link href="https://github.com/mcdecke/CNN_Stock_Forecast" passHref>
          <button>Github Repo <FaGithub size={30}/></button>
        </Link>
      </div>
    </div>
  )
}

export default Ethereum;
