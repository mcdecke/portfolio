import Image from 'next/image'
import Link from 'next/link'
import caribouPic from '../01.jpeg'
import cooksPic from '../cookssawlogo.png'


function Websites(){
  return (
    <div className='row fbar websites'>
    <h3 className="attention">Websites</h3>
      <div className='row'>
        <div className='col'>
          <h5>Here are a few of the websites that I have designed!</h5>
        </div>
        <div className='col'>
          <Link href="http://www.caribouridge.com">
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
        </div>
        <div className='col'>
          <Link href="https://www.cookssaw.com">
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
