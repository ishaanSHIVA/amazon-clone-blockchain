import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AmazonContext } from "../context/AmazonContext";
import Cards from "./Cards";
import Featured from "./Featured";
import Header from "./Header.jsx";

const Main = () => {
  const styles = {
    container: `h-full w-full flex flex-col mt-[50px] pr-[50px] overflow-hidden`,
    recentTitle: `text-2xl font-bold text-center mb-[20px] text-center `,
    recentTransactionsList: `flex flex-col`,
    transactionCard: `flex justify-between mb-[20px] p-[30px] bg-[#42667e] text-white rounded-xl shadow-xl font-bold gap-[20px] text-xl`,
  };
  const { transactions } = useContext(AmazonContext);

  useEffect(() => {
    console.log("useEffect main transactions");
    try {
      // if (transactions[0].attributes) {
      const { ownedAssets } = transactions[0].attributes;

      console.log("owned assets ", ownedAssets);
      // }
    } catch (e) {}
  }, [transactions]);

  return (
    <div className={styles.container}>
      <Header />
      <Featured />
      <Cards />
      {transactions.length > 0 && (
        <h1 className={styles.recentTitle}>Recent Transaction</h1>
      )}
      {transactions &&
        transactions.map((transaction, index) => {
          return (
            <div className={styles.recentTransactionsList} key={index}>
              <div className={styles.transactionCard}>
                <p>From :{transaction.attributes.from_address.slice(0, 10)}</p>
                <p>To : {transaction.attributes.to_address.slice(0, 10)}</p>
                <p>
                  Hash:
                  <a
                    rel="noopener noreferrer"
                    href={`https://rinkeby.etherscan.io/tx/${transaction.attributes.hashTransaction}`}
                    target="_blank"
                  >
                    {console.log(transaction.attributes)}
                    transaction
                  </a>
                </p>
                <p>Gas :- {transaction.attributes.gas}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Main;
