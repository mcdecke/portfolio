import { FaFileAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import Link from 'next/link'

function Header(){
  return(
    <div className="contianer row header">
      <div className='logo'>MD</div>
      <div className='col row header-container'>
        <h5 className='col-md-6 offset-md-6'>
          <a href="mailto:mcdecke@gmail.com">
            <button className='attention hbar'>Contact Me <MdOutlineEmail/></button>
          </a>
          <Link href='Robert_M_Decker_SWE_Resume.pdf' target="_blank" download passHref>
            <button className='attention hbar'>See Resume <FaFileAlt /></button>
          </Link>
        </h5>
      </div>
    </div>
  )
}

export default Header;
