import DashboardCardStatsContainer from "@/components/dashboard-home/DashboardCardStatsContainer";
import DashboardTableContainer from "@/components/dashboard-home/DashboardTableContainer";
import HomePageWelcomeContainer from "@/components/dashboard-home/HomePageWelcomeContainer";
import Breadcrumbs from "@/components/shared/BreadCrumb";


export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <Breadcrumbs />
      <HomePageWelcomeContainer />
      <DashboardCardStatsContainer />
      <DashboardTableContainer />
    </div>
  );
}
