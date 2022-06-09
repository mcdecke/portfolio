import Image from 'next/image'
import Link from 'next/link'
import forecastPic from '../images/stock_pred.png'
import { FaGithub } from 'react-icons/fa';

function Stocks(){
  return(
    <div className='card vh-100'>
      <h5>Stock Forecasting with Convolutional Neural Networks</h5>
      <div className='row'>
        <Image
          alt="CNN Stock Forecast Repo"
          src={forecastPic}
          layout='intrinsic'
          width={'300'}
          height={'300'}
        />
      </div>
      <div className='col'>
        Created a CNN that uses end of day stock data to predict the next days end of day price.
        <div className='card hbar tools'>Tools: <br/>
          Python<br/>
          TensorFlow<br/>
          Keras<br/>
          Pandas
        </div>
      </div>

      <div className='col'>
        <Link href="https://colab.research.google.com/drive/1QI1F_cBfxiNHwdhepTC-dVWfcIQMQ0dj?usp=sharing" passHref>
          <button>Colab Notebook</button>
        </Link>
        <Link href="https://github.com/mcdecke/CNN_Stock_Forecast" passHref>
          <button>Github Repo<FaGithub size={20}/></button>
        </Link>
      </div>

    </div>
  )
}

export default Stocks;
