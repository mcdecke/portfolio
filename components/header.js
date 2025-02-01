import { FaFileAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import Link from 'next/link'

function Header(){
  return(
    <header className="contianer row header">
      <logo className='logo'>MD
      </logo>
      <contact className='col row header-container'>
        <h5 className='col-md-6 offset-md-6'>
          <a href="mailto:mcdecke@gmail.com" rel="noreferrer">
            <button className='attention hbar'>Contact Me <MdOutlineEmail/></button>
          </a>
          <a href='https://docs.google.com/document/d/18GcRwyrRQTiojUbXzi78uq28kc_RYw3ohdb_WIOZZ44/edit?tab=t.0' target="_blank" rel="noreferrer" passHref>
            <button className='attention hbar'>See Resume <FaFileAlt /></button>
          </a>
        </h5>
      </contact>
    </header>
  )
}

export default Header;
