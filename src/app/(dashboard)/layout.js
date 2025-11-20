import { AppSidebar } from "@/components/app-sidebar"
import DashboardFooter from "@/components/common/DashboardFooter"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

export const iframeHeight = "800px"

export const description = "A sidebar with a header and a search form."
const DashboardLayout = ({ children }) => {
    return (
        <div className="[--header-height:calc(--spacing(14))]">
            <SidebarProvider className="flex flex-col">
                <SiteHeader />
                <div className="flex flex-1">
                    <AppSidebar />
                    <SidebarInset>
                        {children}
                        <DashboardFooter/>
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>
    )
}

export default DashboardLayout;