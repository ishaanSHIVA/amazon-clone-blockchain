import Main from "../components/Main.jsx";
import { Sidebar } from "../components/Sidebar.jsx";

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
