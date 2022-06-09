import Image from 'next/image'
import headshotPic from '../images/mac-headshot-sqr.jpg'

function Bio(){
  return (
    <div className='row top'>
      <div className='col-md-3'>
          <Image
            className = 'headshot'
            alt="CNN Stock Forecast Repo"
            src={headshotPic}
            layout='intrinsic'
            width={'300'}
            height={'300'}
          />
        <h6 className='subtitle'>Mac Decker - Software Engineer</h6>
      </div>
      <div className='col'>
        <h3> Hi, my name is</h3>
        <h1 className='attention bigness shift'> Mac Decker </h1>
        <h5 className='blueLine'>
          <div className='pinch'> I am a software engineer and full-stack web developer, passionate about building accessible technologies, machine learning and robotics.
          </div>
        </h5>
        <h5 className='blueLine'>
          <div className='pinch'>
          I currently work remote for freelance clients, being open to new opportunities.
          </div>
        </h5>
      </div>
    </div>
  )
}

export default Bio;
