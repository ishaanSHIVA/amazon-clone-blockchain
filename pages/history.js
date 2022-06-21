import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import Header from "../components/Header";
import Transaction from "../components/Transaction";

import { AmazonContext } from "../context/AmazonContext";

const History = () => {
  const { ownedAssets, username } = useContext(AmazonContext);

  console.log(ownedAssets);

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
        <Header component={"history"}></Header>
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
