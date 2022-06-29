import Image from 'next/image'
import Link from 'next/link'
import tiagoPic from '../images/skeletonWave.png'
import dualWave from '../images/waveSBS.gif'
import { FaGithub } from 'react-icons/fa';

function Tiago(){
  return (
    <card className="card">
      <h5>Tiago Robot Remote Motion Control</h5>
      <div className='row'>
        <div className='col'>
          <Image
            alt="Tiago Robot Remote Motion Control"
            src={dualWave}
            layout='intrinsic'
            width={'400'}
            height={'300'}
            loading='eager'
            priority='high'
          />
          <buttons>
            <Link href="https://github.com/mcdecke/TiagoWaves" passHref>
              <button className='buttons'>Github Repo <FaGithub size={20}/></button>
            </Link>
            <Link href="https://colab.research.google.com/gist/mcdecke/fcbe94f1bc562bc0c234afd959e17cae/tiagowavecamcap.ipynb" passHref>
              <button className='buttons'>Colab Notebook</button>
            </Link>
          </buttons>
        </div>

        <div className='col'>
          <div className='row'>
            <description  className='col top'>
              Developed a pipeline to translate video recorded human motion into a motion controller for the Tiago++ robot.

              <tools className='col card hbar tools'>Tools: <br/>
                Python<br/>
                Webots<br/>
                Detectron2<br/>
                JavaScript
              </tools>
            </description>
          </div>
        </div>
      </div>
    </card>
  )
}

export default Tiago;
