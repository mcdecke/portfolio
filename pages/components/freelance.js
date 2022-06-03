import Link from 'next/link'
import { MdOutlineEmail } from 'react-icons/md';

function Freelance(){
  return (
    <div className='footer row'>
      <h3>I also take on freelance opportunities!</h3>
      <h5>
        Have an exciting project that you need help with? Feel free to&nbsp;
        <u className='attention'>
          <a href="mailto:mcdecke@gmail.com">reach out!</a>
        </u>
      </h5>
    </div>
  )
}

export default Freelance;
