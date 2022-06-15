import React from "react";

import { useState, useContext } from "react";
import Card from "./Card";
import { AmazonContext } from "../context/Amazon.context";
const styles = {
  container: `
        h-full w-full flex flex-col ml-[20px] -mt-[50px]

    `,
  title: `
        text-xl font-bolder mb-[20px] mt-[30px]
        ml-[30px]
    `,
  cards: `  
        flex items-center flex-wrap gap-[80px] 
    `,
};
const Cards = () => {
  console.log("cards working!!!");
  const { assets } = useContext(AmazonContext);
  // console.log(amazonContext);
  return (
    <div className={styles.container}>
      <div className={styles.title}>New Release</div>
      <div className={styles.cards}>
        {assets.map((item) => {
          return <Card key={item.id} item={item.attributes} />;
        })}
        {/* <Card /> */}
        {/* {/* <Card key={item.id} item={item.attributes} /> */}
        {/* <Card key={item.id} item={item.attributes} /> */}
        {/* <Card key={item.id} item={item.attributes} /> */}
      </div>
    </div>
  );
};

export default Cards;
