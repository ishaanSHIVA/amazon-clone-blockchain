import React, { useContext, useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { HashLoader } from "react-spinners";
import Link from "next/link";

import { AmazonContext } from "../context/AmazonContext";

const styles = {
  container: `h-full w-full flex flex-col `,
  closeX: `w-full h-[50px] flex items-center justify-end mb-[20px]`,
  title: `text-3xl font-bold flex flex-1 items-center mt-[20px] justify-center mb-[40px]`,
  content: `flex w-full mb-[30px] text-xl justify-center`,
  input: `w-[50%] h-[50px] bg-[#f7f6f2] rounded-lg p-[10px] flex mx-auto`,
  inputBox: `w-full h-full flex items-center justify-center bg-[#f7f6f2] focus:outline-none`,
  price: `w-full h-full flex justify-center items-center mt-[20px] font-bold text-3xl`,
  buyBtn: `w-[20%] h-[50px] bg-[#000] mt-[40px] rounded-lg p-[10px] flex mx-auto text-white justify-center items-center cursor-pointer`,
  loaderContainer: `w-full h-[500px] flex items-center justify-center`,
  loader: `w-full h-full flex items-center justify-center`,
  etherscan: `w-full h-full flex items-center justify-center text-green-500 text-2xl mt-[20px] font-bold cursor-pointer`,
  success: `w-full h-full flex items-center justify-center text-xl mt-[20px] font-bolder`,
};

const Buymodal = ({ close }) => {
  console.log("Buymodal");
  const {
    amountDue,
    setAmountDue,
    tokenAmount,
    isLoading,
    setIsLoading,
    setTokenAmount,
    etherScan,
    setEtherScan,
    buyTokens,
  } = useContext(AmazonContext);

  useEffect(() => {
    console.log("Loading ", isLoading);
  }, [isLoading]);

  useEffect(() => {
    calculatePrice();
  }, [tokenAmount]);

  const calculatePrice = () => {
    const price = parseFloat(tokenAmount * 0.001);
    price = price.toFixed(4);
    setAmountDue(price);
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <>
          <div className={styles.loaderContainer}>
            <HashLoader size={80} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.closeX}>
            <IoIosClose
              onClick={() => {
                close();
                setAmountDue("");
                setTokenAmount("");
                setAmountDue("");
                setEtherScan("");
              }}
              fontSize={50}
              className="cursor-pointer  "
            />
          </div>
          <div className={styles.title}>Buy More Amazon Coins Here!</div>
          <div className={styles.content}>
            Select how many tokens you would like to buy?
          </div>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Amount..."
              className={styles.inputBox}
              onChange={(e) => setTokenAmount(e.target.value)}
            />
          </div>
          <div className={styles.price}>
            Total Due:
            {tokenAmount && tokenAmount > 0 ? amountDue + " ETH" : "0 ETH"}
          </div>
          <div>
            <button
              disabled={!tokenAmount && tokenAmount}
              className={styles.buyBtn}
              onClick={() => {
                setIsLoading(true);
                buyTokens();
              }}
            >
              BUY
            </button>
            {etherScan && (
              <>
                <div className={styles.success}>
                  Transanction successfull! Check out your reciept
                </div>
                <Link href={`${etherScan}`} className={styles.etherscan}>
                  <a target="_blank" href="" className={styles.etherscan}>
                    Transanction reciept
                  </a>
                </Link>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Buymodal;
