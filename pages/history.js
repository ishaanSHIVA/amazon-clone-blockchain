import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Transaction from "../components/Transaction";

import { AmazonContext } from "../context/Amazon.context";

import { useModal } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";

const History = () => {
  const { closeModal } = useModal();

  const { ownedAssets, username } = useContext(AmazonContext);

  useEffect(() => {
    console.log("clsoing modal");
    closeModal();
  }, []);

  const styles = {
    container: `h-full w-full flex bg-[#fff]`,
    main: `w-full h-full flex flex-col mt-[50px]`,
    tableContainer: `w-full h-full flex flex-col p-[100px] justify-center`,
    pageTitle: `text-2xl font-bold text-left mt-[50px] mb-[30px]`,
    transactions: `flex gap-[50px] flex-row flex-wrap`,
  };

  return (
    <div className={styles.container}>
      <Sidebar></Sidebar>
      <div className={styles.main}>
        <Header></Header>
        <div className={styles.tableContainer}>
          {ownedAssets ? (
            <div className={styles.pageTitle}>Purchase History</div>
          ) : (
            <div className={styles.pageTitle}>No Purchase History</div>
          )}
          <div className={styles.transactions}>
            {ownedAssets &&
              ownedAssets.map((item, index) => {
                return (
                  <Transaction username={username} key={index} item={item} />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
