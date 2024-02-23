import ProtectedList from "./ProtectedList";

const DashboardPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* <div className="text-4xl hover:text-slate-300">Dashboard</div> */}
      <ProtectedList />
    </div>
  );
};
export default DashboardPage;
