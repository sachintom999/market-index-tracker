import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import withAuth from "./withAuth";

 function IndexList() {
  const [indices, setIndices] = useState(null);

const url = `${process.env.NEXT_PUBLIC_POLYGON_BASE_URL}/v3/reference/tickers?type=CS&market=stocks&active=true&order=asc&limit=2&sort=name&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`


console.log({url})




  const indexData = 
   [
        {
            "ticker": "I:A1BSC",
            "name": "Dow Jones Americas Basic Materials Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1CYC",
            "name": "Dow Jones Americas Consumer Services Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1DOW",
            "name": "Dow Jones Americas Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1ENE",
            "name": "Dow Jones Americas Oil & Gas Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1FIN",
            "name": "Dow Jones Americas Financials Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1HCR",
            "name": "Dow Jones Americas Health Care Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1IDU",
            "name": "Dow Jones Americas Industrials Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1NCY",
            "name": "Dow Jones Americas Consumer Goods Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1SGI",
            "name": "Dow Jones Sustainability North America Composite Index (USD)",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1TEC",
            "name": "Dow Jones Americas Technology Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1TLS",
            "name": "Dow Jones Americas Telecommunications Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:A1UTI",
            "name": "Dow Jones Americas Utilities Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:AAVE100",
            "name": "Cboe 100 Aave / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:AAVE10RP",
            "name": "Cboe 10 Aave / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:AAVE25RP",
            "name": "Cboe 25 Aave / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:AAVE400",
            "name": "Cboe 400 Aave / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:AAVE50RP",
            "name": "Cboe 50 Aave / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ABAQ",
            "name": "ABA NASDAQ Community Bank",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:ABQI",
            "name": "NASDAQ OMX ABA Community Bank",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:ABQX",
            "name": "NASDAQ OMX ABA Community Bank Total Rtn",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:ADA100K",
            "name": "Cboe 100K Cardano / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ADA10KRP",
            "name": "Cboe 10K Cardano / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ADA25KRP",
            "name": "Cboe 25K Cardano / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ADA50KRP",
            "name": "Cboe 50K Cardano / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ADA5KRP",
            "name": "Cboe 5000 Cardano / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ADOW",
            "name": "The Asia Dow (USD)",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:ADOWA",
            "name": "The Asia Dow (AUD)",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:ADOWE",
            "name": "The Asia Dow (EUR)",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:ADOWJ",
            "name": "The Asia Dow (JPY)",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:AGQIV",
            "name": "PROSHARES ULTRA SILVER ETF",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesINAV"
        },
        {
            "ticker": "I:ALGO100",
            "name": "Cboe 100 Algorand / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ALGO1KRP",
            "name": "Cboe 1000 Algorand / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ALGO5KRP",
            "name": "Cboe 5000 Algorand / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:AMBOR1M",
            "name": "AMERIBOR 1 Month Spot Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOR1W",
            "name": "AMERIBOR 1 Week Spot Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOR1Y",
            "name": "AMERIBOR 1 Year Spot Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOR2Y",
            "name": "AMERIBOR 2 Year Spot Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOR30",
            "name": "30 Day Average AMERIBOR Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOR30T",
            "name": "AMERIBOR Term-30 Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOR3M",
            "name": "AMERIBOR 3 Month Spot Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOR6M",
            "name": "AMERIBOR 6 Month Spot Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOR90",
            "name": "90 Day Average AMERIBOR Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOR90T",
            "name": "AMERIBOR Term-90 Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOS",
            "name": "One Month AMERIBOR Average Settlement",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBOX",
            "name": "One Month AMERIBOR Average Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBRS",
            "name": "14 Day AMERIBOR Average Settlement",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBRX",
            "name": "14 Day AMERIBOR Average Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBTS",
            "name": "Three Month AMERIBOR Compound Average Settlement",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBTX",
            "name": "Three Month AMERIBOR Compound Average Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBWS",
            "name": "7 Day AMERIBOR Average Settlement",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMBWX",
            "name": "7 Day AMERIBOR Average Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMERIBOR",
            "name": "AMERIBOR Unsecured Overnight Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMT1M",
            "name": "AMERIBOR Term-30 Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMT1R",
            "name": "Ameribor 30 Day Term Settlement Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMT1S",
            "name": "Ameribor 30 Day Term Settlement Value",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMT3M",
            "name": "AMERIBOR Term-90 Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMT3R",
            "name": "Ameribor 90 Day Term Settlement Rate",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AMT3S",
            "name": "Ameribor 90 Day Term Settlement Value",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:ANEWIV",
            "name": "PROSHARES MSCI TRANSFORMATIONAL CHANGES ETF",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesINAV"
        },
        {
            "ticker": "I:APRTIV",
            "name": "AllianzIM U.S. Large Cap Buffer10 Apr ETF Intraday Indicative Value",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesINAV"
        },
        {
            "ticker": "I:APRWIV",
            "name": "AllianzIM U.S. Large Cap Buffer20 Apr ETF Intraday Indicative Value",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesINAV"
        },
        {
            "ticker": "I:APRZIV",
            "name": "TrueShares Structured Outcome (April) ETF Intraday Indicative Value",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesINAV"
        },
        {
            "ticker": "I:ATDOW",
            "name": "Dow Jones Austria Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:ATDOWD",
            "name": "Dow Jones Austria Index (USD)",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:ATOM150",
            "name": "Cboe 150 Cosmos / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ATOM300",
            "name": "Cboe 300 Cosmos / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ATOM600",
            "name": "Cboe 600 Cosmos / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:ATOM75RP",
            "name": "Cboe 75 Cosmos / US Dollar RealPrice Index",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesCCCY"
        },
        {
            "ticker": "I:AUAC",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:AUACGL",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:AUACT",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:AUDOWD",
            "name": "Dow Jones Australia Index (USD)",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CMEMarketDataPlatformDowJones"
        },
        {
            "ticker": "I:AUGTIV",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesINAV"
        },
        {
            "ticker": "I:AUGWIV",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesINAV"
        },
        {
            "ticker": "I:AUGZIV",
            "name": "TrueShares Structured Outcome (August) ETF Intraday Indicative Value",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesINAV"
        },
        {
            "ticker": "I:AVCHQYLD",
            "name": "Alpha Vee Quality Yield",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AVGRNTSP",
            "name": "Alpha Vee Green Transportation",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AVRMENEQ",
            "name": "Alpha Vee Risk Managed Enhanced US Equity",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AVT5EQTB",
            "name": "Alpha Vee Risk Managed Top 5 Sector Equities & Treasury Bonds",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AVT5ETTB",
            "name": "Alpha Vee Risk Managed Top 5 Sector ETFs & Treasuries",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AVT5SMAL",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AVT5SMID",
            "name": "Alpha Vee Risk Managed SMID Top 5 Sector Equities",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:AVUSMEGA",
            "name": "Alpha Vee US Mega Cap",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "CboeGlobalIndicesMain"
        },
        {
            "ticker": "I:B10GI",
            "name": "OMX Baltic Technology GI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B10PI",
            "name": "OMX Baltic Technology PI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B15GI",
            "name": "OMX Baltic Telecommunications GI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B15PI",
            "name": "OMX Baltic Telecommunications PI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B20GI",
            "name": "OMX Baltic Health Care GI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B20PI",
            "name": "OMX Baltic Health Care PI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B3010GI",
            "name": "OMX Baltic Banks GI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B3010PI",
            "name": "OMX Baltic Banks PI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B3020GI",
            "name": "OMX Baltic Financial Services GI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B3020PI",
            "name": "OMX Baltic Financial Services PI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B30GI",
            "name": "OMX Baltic Financials GI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B30PI",
            "name": "OMX Baltic Financials PI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B35GI",
            "name": "OMX Baltic Real Estate GI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B35PI",
            "name": "OMX Baltic Real Estate PI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B4020GI",
            "name": "OMX Baltic Consumer Products and Services GI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B4020PI",
            "name": "OMX Baltic Consumer Products and Services PI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        },
        {
            "ticker": "I:B4030GI",
            "name": "OMX Baltic Media GI",
            "market": "indices",
            "locale": "us",
            "active": true,
            "source_feed": "NasdaqGIDS"
        }
    ]



  useEffect(() => {
    const fetchIndexData = async (): Promise<any | null> => {
      try {
        const response: AxiosResponse<any> = await axios.get(url);
        console.log("response:",response.data.results)
        
        setIndices(response.data.results);
        // setIndices(indexData);
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
    <div className="p-4 h-screen">

        <h2 className="text-gray-600 text-xl font-bold">Indices</h2>

    <div className="h-5/6 overflow-y-auto mt-4 p-2 rounded">

      {indices &&
        indices?.map((index) => (
            <p className="text-sm text-blue-500 p-2 hover:text-blue-800" key={index.ticker}   >
              <Link  href={`/indices/${index.ticker}`}  className="">
            {index.name}
            </Link>
          </p>
        ))}
    
    
        </div>
    
    </div>
  );
}


export default IndexList
// export default withAuth(IndexList)