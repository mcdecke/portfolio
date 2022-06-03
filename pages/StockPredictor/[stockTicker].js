import {useRouter} from 'next/router'

function StockPage() {
  const router = useRouter()

  let ticker = router.query.stockTicker


  return <h1>{ticker} Page</h1>
}

export default StockPage
