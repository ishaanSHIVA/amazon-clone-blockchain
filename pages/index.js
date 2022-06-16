import Main from "../components/MainUpdated";
import Sidebar from "../components/SideBar.jsx";

const styles = {
  container: "h-full w-full flex bg-[#fff]",
};
export default function Home() {
  return (
    <div className={styles.container}>
      {/* hello */}
      <Sidebar />
      <Main />
    </div>
  );
}
