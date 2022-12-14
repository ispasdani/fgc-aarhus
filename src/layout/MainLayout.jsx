import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import "./mainLayout.css";

export const MainLayout = (props) => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
};
