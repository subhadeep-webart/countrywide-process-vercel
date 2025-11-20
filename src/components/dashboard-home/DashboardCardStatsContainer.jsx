import { STATS_DATA } from "@/utils/constant";
import { DashboardCard } from "../common/CardComponent/DashboardCard";

const DashboardCardStatsContainer = () => {
    return (
        <div className="w-full grid grid-cols-6 gap-4">
            {STATS_DATA.map((stat) => (
                <DashboardCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                    variant={stat.variant}
                />
            ))}
        </div>
    )
}

export default DashboardCardStatsContainer;