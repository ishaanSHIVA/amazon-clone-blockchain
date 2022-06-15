import React, { useContext } from "react";
// 0x14dA953A53277680845775876aa2439d89a0A9ac
import logo from "../assets/amazon_logo_full.png";
import Image from "next/link";
import { CgMenuGrid0 } from "react-icons/cg";
import { IoMdNutrition, IoMdSearch } from "react-icons/io";
import { FaCoins } from "react-icons/fa";

import { AmazonContext } from "../context/Amazon.context";
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";

// isModalOpen: boolean;
//     openModal: () => void;
//     closeModal
// const { openModal, isModalOpen, closeModal } = useModal();

const Header = () => {
  const styles = {
    container: `h-[60px] w-full flex items-center gap-5 px-16`,
    logo: `flex items-center ml-[20px] cursor-pointer flex-1`,
    search: `p-[25px] mr-[30px] w-[400px] h-[40px] bg-white rounded-full shadow-lg flex flex items-center border border-black`,
    searchInput: `bg-transparent focus:outline-none border-none flex-1 items-center flex`,
    menu: `flex items-center gap-6`,
    menuItem: `flex items-center text-md font-bold cursor-pointer`,
    coins: `ml-[10px]`,
  };

  return (
    <div className={styles.container}>
      
    </div>
  );
};

export default Header;
