import Image from 'next/image'
import Link from 'next/link'
import caribouPic from '../01.jpeg'
import cooksPic from '../cookssawlogo.png'


function Websites(){
  return (
    <div className='row websites hbar'>
      <div className='row'>
        <div className='col'>
          <h3 className="attention">Websites</h3>
          <h5>Here are a few of the websites that I have designed!</h5>
        </div>
        <div className='col'>
          <Link href="https://www.cookssaw.com">
            <div>
              <h5 className="padded">Cooks Saw</h5>
              <Image
                className="padded"
                alt="Cooks Saw"
                src={cooksPic}
                layout='intrinsic'
                width={'200'}
                height={'100'}
              />
            </div>
          </Link>
        </div>

        <div className='col'>
          <Link href="http://www.caribouridge.com">
            <div>
              <h5 className="padded">Caribou Ridge</h5>
              <Image
                className="padded"
                alt="caribou ridge"
                src={caribouPic}
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
