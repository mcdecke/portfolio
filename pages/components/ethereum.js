import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaEthereum, FaExternalLinkAlt } from 'react-icons/fa';
import {GiPokerHand} from 'react-icons/gi'
import { SiSolidity } from 'react-icons/si';

function Ethereum(){
  return(
    <card className='card vh-100'>
      <Link href="https://mac-game-dapp.vercel.app/" passHref>
      <div>
        <div className='row'>
          <h2 className="website">Dapp Game <FaExternalLinkAlt size={20}/><h2>
        </div>
        <icons className="col row attention">
          <GiPokerHand size={70}/>
          <div className=" attention">
            <SiSolidity size={70}/>
            <FaEthereum size={70}/>
          </div>
        </icons>
      </div>
    </Link>

      <description className='col'>
        Implemented a layer 2 solution to reduce gas fees by over 99% for an Ethereum based NFT game, played on a React web app.
        <tools className='card hbar tools'>Tools:
          Ethereum<br/>
          Solidity<br/>
          JavaScript<br/>
          React<br/>
          Next<br/>
          Truffle<br/>
          Metamask <br/>

        </tools>
        <Link href="https://github.com/mcdecke/GameDapp" rel="noreferrer" passHref>
          <button>Github Repo <FaGithub size={30}/></button>
        </Link>
      </description>
    </card>
  )
}

export default Ethereum;
