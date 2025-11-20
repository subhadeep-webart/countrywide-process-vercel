import { OrdersTable } from "@/components/common/TableComponent/OrdersTable";
import { DRAFT_ORDERS, RECENT_ORDERS } from "@/utils/constant";

const DashboardTableContainer = () => {
    return (
        <div className="space-y-6">
            <OrdersTable
                title="Recent Orders"
                orders={RECENT_ORDERS}
                showPagination={true}
            />

            <OrdersTable
                title="Draft Orders"
                orders={DRAFT_ORDERS}
                showPagination={true}
                actionLink="View Draft Orders"
            />
        </div>
    )
}
export default DashboardTableContainer;