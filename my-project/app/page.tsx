import Navbar from "@/components/Navbar";
import StatsBar from "@/components/StatsBar";
import DashboardMain from "@/components/DashboardMain";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f2f2f4" }}>
      <Navbar />
      <StatsBar />
      <DashboardMain />
      <Footer />
    </div>
  );
}
