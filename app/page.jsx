import Sidebar from "./Components/sidebar";
import Breadcumps from "./Components/breadcumps";
import Stat from "./Components/stat";
import ChartComponent from "./Components/chart";
import DonatChart from "./Components/donatchart";
import Table from "./Components/table";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <Breadcumps />
      <div className="ps-24 pe-10 pt-6">
        <Stat />
        <section id="chart" className="flex gap-4 mt-4 h-[400px]">
          <ChartComponent />
          <DonatChart />
        </section>
        <section id="table" className=" border mt-4 bg-gray-50 mb-4">
          <Table /> 
        </section>
      </div>
    </div>
  );
}
