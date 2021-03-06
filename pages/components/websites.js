import Image from 'next/image'
import Link from 'next/link'
import caribouPic from '../images/01.jpeg'
import cooksPic from '../images/cookssawlogo.png'


function Websites(){
  return (
    <div className='row fbar websites'>
    <h3 className="attention">Websites</h3>
      <div className='row'>
        <links className='col'>
          <Link href="http://www.caribouridge.com" passHref>
            <div className="website">
              <h5>Caribou Ridge</h5>
              <Image
                alt="caribou ridge"
                src={caribouPic}
                layout='intrinsic'
                width={'200'}
                height={'100'}
              />
            </div>
          </Link>
        </links>
        <center className='col'>
          <h5>Here are a few of the websites that I have designed!</h5>
        </center>
        <div className='col'>
          <Link href="https://www.cookssaw.com" passHref>
            <div className="website">
              <h5>Cooks Saw</h5>
              <Image
                alt="Cooks Saw"
                src={cooksPic}
                layout='intrinsic'
                width={'200'}
                height={'100'}
              />
            </div>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Websites;
