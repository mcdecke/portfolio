import Image from 'next/image'
import Link from 'next/link'
import mistyPic from '../images/misty_ii.jpg'
import { FaGithub } from 'react-icons/fa';

function Misty(){
  return(
    <card className='card vh-100'>
      <h2>Misty</h2>
        <Image
          alt="Misty Motion Control"
          src={mistyPic}
          layout='intrinsic'
          width={'300'}
          height={'300'}
        />
        <description className='col'>
          Developed a React website that allowed users to control Misty&apos;s movement and speech.
          <tools className='card tools hbar'>Tools:
            JavaScript<br/>
            EJS<br/>
            Express<br/>
            Axios<br/>
            IBM Watson<br/>
            Misty Robot
          </tools>
          <Link href="https://github.com/mcdecke/MistySpeaks/" passHref>
            <button>Github Repo <FaGithub size={30}/></button>
          </Link>
        </description>
      </card>
  )
}

export default Misty;
