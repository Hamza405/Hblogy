import Settings from "../../components/Settings/Settings";
import SideBar from "../../components/Sidebar/SideBar";

const SettingsPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Settings />
      <SideBar />
    </div>
  );
};

export default SettingsPage;
