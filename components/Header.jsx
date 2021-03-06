import React, { useContext, useEffect } from "react";
import logo from "../assets/amazon_logo_full.png";
import Image from "next/image";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { FaCoins } from "react-icons/fa";
import {
  Modal,
  ModalProvider,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";

import { AmazonContext } from "../context/AmazonContext";
import Buymodal from "./Buymodal";

const Header = (props) => {
  // isModalOpen: boolean;
  // openModal: () => void;
  // closeModal: () => void;
  const { openModal, isModalOpen, closeModal } = useModal();

  if (props.setRemoveModal) {
    props.setRemoveModal(closeModal);
  }

  const { balance, getBalance, isAuthenticated } = useContext(AmazonContext);

  useEffect(() => {
    console.log("MODAL :- ", isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    if (isAuthenticated && props.component != "history") openModal();
  }, [isAuthenticated]);

  const styles = {
    container: `h-[60px]  flex items-center gap-5 px-16 mb-[50px]`,
    logo: `flex items-center ml-[20px] cursor-pointer flex-1`,
    search: `p-[25px] mr-[30px] w-[400px] h-[40px] bg-white rounded-full shadow-lg flex flex items-center border border-black`,
    searchInput: `bg-transparent focus:outline-none border-none flex-1 items-center flex`,
    menu: `flex items-center gap-6`,
    menuItem: `flex items-center text-md font-bold cursor-pointer`,
    coins: `ml-[10px]`,
  };
  return (
    <ModalProvider>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            className="object-cover"
            src={logo}
            alt="amazon"
            width={100}
            height={100}
          ></Image>
        </div>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search Your Assets..."
          />
          <IoMdSearch fontSize={20} />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>New Releases</div>
          <div className={styles.menuItem}>Featured</div>
          <div
            className={(styles.balance, styles.menu)}
            onClick={openModal}
            transition={ModalTransition.SCALE}
          >
            {balance ? balance : 0}
            <FaCoins className={styles.coins} />
            <Modal isOpen={isModalOpen}>
              <button onClick={closeModal}>Close</button>

              <Buymodal close={closeModal} />
            </Modal>
          </div>
          <CgMenuGridO />
        </div>
      </div>
    </ModalProvider>
  );
};

export default Header;
