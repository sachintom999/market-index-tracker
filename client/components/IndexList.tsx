import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function IndexList() {
  const [indices, setIndices] = useState(null);

  const indexData = 
     [
        {
            "ticker": "ACIM",
            "name": "SPDR MSCI ACWI IMI ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001168164",
            "composite_figi": "BBG002PKWJJ6",
            "share_class_figi": "BBG002PKWK85",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "ACWF",
            "name": "ISHRES TR EDGE MSCI MULTIFACTOR GLOBAL ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001100663",
            "composite_figi": "BBG008LNZHV8",
            "share_class_figi": "BBG008LNZHW7",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "BNDS",
            "name": "SPDRS BARCLAYS AGGREGATE BD ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001064642",
            "composite_figi": "BBG000RFSB92",
            "share_class_figi": "BBG001STKD11",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
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
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "CIU",
            "name": "ISHARES TR  INTERMEDIATE CR BD ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0000930667",
            "composite_figi": "BBG000QN1YR5",
            "share_class_figi": "BBG001SSD849",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "CJNK",
            "name": "SPDR SER TR BOFA M.L. CROSSOVER CORP BD ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "composite_figi": "BBG0034VNB73",
            "share_class_figi": "BBG0034VNBZ2",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "CLY",
            "name": "ISHARES TR 10+ YR CR BD ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0000913414",
            "composite_figi": "BBG000PGKK27",
            "share_class_figi": "BBG001T5MKD1",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "CLYH",
            "name": "ISHARES U S TR INT RATE HEDGED 10+ YR CR BD ETF (DE)",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001100663",
            "composite_figi": "BBG009NLX3P8",
            "share_class_figi": "BBG009NLX3N0",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "CSJ",
            "name": "ISHARES BARCLAYS 1-3 YR CD BD ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0000893818",
            "composite_figi": "BBG000QN2BW8",
            "share_class_figi": "BBG001SSD858",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "DBAP",
            "name": "DEUTSCHE X-TRACKERS MSCI ASIA PAC EX JAPAN HEDGED EQTY ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001503123",
            "composite_figi": "BBG005BJ0T82",
            "share_class_figi": "BBG005BJ0T91",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "DRW",
            "name": "WISDOMTREE GLOBAL EX-US REAL ESTATE FND (DE)",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001350487",
            "composite_figi": "BBG000RDDFT2",
            "share_class_figi": "BBG001STHBJ0",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "EZY",
            "name": "WISDOMTREE LARGECAP VALUE FUND",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001350487",
            "composite_figi": "BBG000R1SHP2",
            "share_class_figi": "BBG001SSZBN7",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "FEU",
            "name": "SPDR STOXX EURO 50 ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001168164",
            "composite_figi": "BBG000PG8LL8",
            "share_class_figi": "BBG001SLBKJ3",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "FLM",
            "name": "FIRST TRUST ISE GLOBAL ENGINEERING & CONSTRUCTION INDEX FUND",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "composite_figi": "BBG000BK21J7",
            "share_class_figi": "BBG001SMNHG8",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "FTY",
            "name": "ISHARES TR  REAL ESTATE 50 ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0000930667",
            "composite_figi": "BBG000R72F62",
            "share_class_figi": "BBG001ST7G55",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "GEX",
            "name": "VANECK VECTORS GLOBAL ALTERNATIVE ENERGY ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "composite_figi": "BBG000R18YM0",
            "share_class_figi": "BBG001SSYS60",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "GLDX",
            "name": "GLOBAL X GOLD EXPLORERS ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "composite_figi": "BBG0018HBWX2",
            "share_class_figi": "BBG001TF8DG8",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "GWL",
            "name": "SPDR SER TR FDS SPDR S&P WORLD EX-US ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001168164",
            "composite_figi": "BBG000Q8SV13",
            "share_class_figi": "BBG001SRXRJ1",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "GXF",
            "name": "GLOBAL X FTSE NORDIC REGION ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001432353",
            "composite_figi": "BBG000NV40T9",
            "share_class_figi": "BBG001T5BNG4",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "IPE",
            "name": "SPDR BARCLAYS TIPS ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001064642",
            "composite_figi": "BBG000RFRRV3",
            "share_class_figi": "BBG001STKCZ6",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "ITE",
            "name": "SPDR BARCLAYS INTER TERM TREAS ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001064642",
            "composite_figi": "BBG000RFR2N7",
            "share_class_figi": "BBG001STKCX8",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "ITR",
            "name": "SPDR SER TR BARCLAYS INTERMEDIATE TERM CORP BOND ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001064642",
            "composite_figi": "BBG000F8Y230",
            "share_class_figi": "BBG001T2HCY9",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "KLD",
            "name": "ISHARES MSCI USA ESG SELECT SOCIAL ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001006249",
            "composite_figi": "BBG000QN82F1",
            "share_class_figi": "BBG001SN86J4",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "LOWC",
            "name": "SPDR INDEX SHS FDS SPDR MSCI  ACWI LOW CARBON TARGET ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001168164",
            "composite_figi": "BBG007LP6QN6",
            "share_class_figi": "BBG007LP6Q83",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "LWC",
            "name": "SPDR SER TR BARCLAYS LONG TERM CORP BOND ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001168164",
            "composite_figi": "BBG000BSXL57",
            "share_class_figi": "BBG001SRZBZ6",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "MTK",
            "name": "SPDR MORGAN STANLEY TECHNOLOGY ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001064642",
            "composite_figi": "BBG000C9R1B2",
            "share_class_figi": "BBG001SG42D8",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "ONEK",
            "name": "SPDR RUSSELL 1000 ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001064642",
            "composite_figi": "BBG000KMT5K3",
            "share_class_figi": "BBG001SPTB87",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "ROGS",
            "name": "LATTICE STRATEGIES TR GLOBAL SMALL CAP STRATEGY ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "composite_figi": "BBG0089X2QF4",
            "share_class_figi": "BBG0089X2QD6",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "RSCO",
            "name": "SPDR RUSSELL SMALL CAP COMPLETENESS ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001064642",
            "composite_figi": "BBG000KMBFP5",
            "share_class_figi": "BBG001SPT9T9",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "SCPB",
            "name": "SPDR SER BARCLAYS CAP SHT TERM CORP BOND ETF",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001064642",
            "composite_figi": "BBG000Q1MZ15",
            "share_class_figi": "BBG001T6B0P2",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        },
        {
            "ticker": "WDTI",
            "name": "WISDOMTREE TR MANAGED FUTURES STRATEGY FD",
            "market": "stocks",
            "locale": "us",
            "primary_exchange": "ARCX",
            "type": "INDEX",
            "active": true,
            "currency_name": "usd",
            "cik": "0001350487",
            "composite_figi": "BBG001CSJZ68",
            "share_class_figi": "BBG001V038F5",
            "last_updated_utc": "2016-05-18T00:00:00Z"
        
    
 
}
     ]



  useEffect(() => {
    const fetchIndexData = async (): Promise<any | null> => {
      try {
        // const response: AxiosResponse<any> = await axios.get(
        //   `https://jsonplaceholder.typicode.com/users/`
        // );
        // console.log({ response });
        // setIndices(response.data);
        setIndices(indexData);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Error with Axios request:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
        return null;
      }
    };

    fetchIndexData();

    return () => {};
  }, []);

  return (
    <div>
      {indices &&
        indices?.map((index) => (
            <Link  href={`/index/${index.ticker}`}  key={index.ticker}>
          <p className="text-xs text-red-500" >
            {index.name}
          </p>
            </Link>
        ))}
    </div>
  );
}
