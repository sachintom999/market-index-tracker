import React from 'react'
import LineChart from './LineChart'
import { LineChart2 } from './LineChart2'

export default function IndexDetail() {

  const data = {
    "request_id": "9ace7a0989b939a3075125e232537166",
    "results": {
        "ticker": "CBND",
        "name": "SPDR SER TR BARCLAYS ISSUER SCORED CORP BD",
        "market": "stocks",
        "locale": "us",
        "primary_exchange": "ARCX",
        "type": "INDEX",
        "active": true,
        "currency_name": "usd",
        "cik": "0001064642",
        "composite_figi": "BBG001M534W4",
        "share_class_figi": "BBG001V10544",
        "ticker_root": "CBND",
        "share_class_shares_outstanding": 900000,
        "round_lot": 100
    },
    "status": "OK"
}


  return (
    <div>

      

      <LineChart2  />


    </div>
  )
}
