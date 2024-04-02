import { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const [currencies, setCurrencies] = useState(null);
  // const [toAmount, setToAmount] = useState(0);
  const toAmountRef = useRef(null);
  const fromAmountRef = useRef(null);

  const options = {
    method: "GET",
    url: "https://currency-converter-pro1.p.rapidapi.com/currencies",
    headers: {
      "X-RapidAPI-Key": "api-key",
      "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await axios.request(options);
        // console.log(response.data.result);
        setCurrencies(Object.keys(response.data.result));
      } catch (error) {
        console.error(error);
      }
    }

    fetchCurrencies();
  }, []);

  // converting currency

  async function convertCurrency(e) {
    e.preventDefault();

    // console.log(e.target);
    const formData = new FormData(e.target);
    const fromAmount = formData.get("fromAmount");
    const toAmount = formData.get("toAmount");
    let fromCurrency = formData.get("fromCurrency");
    let toCurrency = formData.get("toCurrency");

    // console.log("fromAmount", fromAmount);
    // console.log("toAmount", toAmount);
    // console.log("fromCurrency", fromCurrency);
    // console.log("toCurrency", toCurrency);

    if (fromAmount && toAmount === "") {
      const options = {
        method: "GET",
        url: "https://currency-converter-pro1.p.rapidapi.com/latest-rates",
        params: {
          base: `${fromCurrency}`,
          currencies: `${toCurrency}`,
        },
        headers: {
          "X-RapidAPI-Key":
            "60732b17c4msh55498b244382f00p19ec73jsn2484eff85e0a",
          "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        // console.log(response.data);

        // converting the currency
        // const finalAmount = response.data.result[`${toCurrency}`] * from;

        const conversionRate = response.data.result[`${toCurrency}`];
        const finalAmount = fromAmount * conversionRate;
        toAmountRef.current.value = finalAmount.toFixed(2);
        // console.log(finalAmount);
      } catch (error) {
        console.error(error);
      }
    } else {
      // console.log("uu")
      let tempCurrency = fromCurrency;
      fromCurrency = toCurrency;
      toCurrency = tempCurrency;

      // console.log(fromCurrency, toCurrency);

      const options = {
        method: "GET",
        url: "https://currency-converter-pro1.p.rapidapi.com/latest-rates",
        params: {
          base: `${fromCurrency}`,
          currencies: `${toCurrency}`,
        },
        headers: {
          "X-RapidAPI-Key":
            "60732b17c4msh55498b244382f00p19ec73jsn2484eff85e0a",
          "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        // console.log(response.data);

        // converting the currency
        // const finalAmount = response.data.result[`${toCurrency}`] * from;

        const conversionRate = response.data.result[`${toCurrency}`];
        // console.log(conversionRate)
        const finalAmount = toAmount * conversionRate;
        fromAmountRef.current.value = finalAmount.toFixed(2);
        // console.log(finalAmount);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center mt-2 text-blue-700 font-sans font-bold">
        Currency Converter
      </h1>

      <form className="mt-8" onSubmit={convertCurrency}>
        <section className="flex flex-col items-center">
          <label htmlFor="fromAmount" className="mb-2">
            From:
          </label>

          <div className="flex items-center">
            <input
              type="number"
              id="fromAmount"
              step="0.001"
              name="fromAmount"
              ref={fromAmountRef}
              className="border border-gray-300 rounded-md p-2 mr-2 w-24"
            />

            {/* currency */}
            <select
              name="fromCurrency"
              className="border border-gray-300 rounded-md p-2"
            >
              {/* all currencies */}
              {currencies !== null ? (
                <>
                  {currencies.map((currency, index) => {
                    return <option key={index}>{currency}</option>;
                  })}
                </>
              ) : (
                <>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </>
              )}
            </select>
          </div>
        </section>

        <section className="mt-4 flex flex-col items-center">
          <label htmlFor="toAmount" className="mb-2">
            To:
          </label>

          <div className="flex items-center">
            {/* to amount */}

            <input
              type="number"
              step="0.001"
              id="toAmount"
              name="toAmount"
              ref={toAmountRef}
              className="border border-gray-300 rounded-md p-2 mr-2 w-24 bg-gray-100"
            />

            {/* currency */}
            <select
              name="toCurrency"
              className="border border-gray-300 rounded-md p-2"
            >
              {currencies !== null ? (
                <>
                  {currencies.map((currency, index) => {
                    return <option key={index}>{currency}</option>;
                  })}
                </>
              ) : (
                <>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </>
              )}
            </select>
          </div>
        </section>

        {/* <section className="mt-4">
          <input type="number" name="amount" id="amount" placeholder="Amount" className="border border-gray-300 rounded-md p-2 w-full" />
        </section> */}

        <section className="mt-4 text-center">
          <button
            type="submit"
            className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
          >
            Convert
          </button>
        </section>
      </form>
    </div>
  );
}

export default App;
