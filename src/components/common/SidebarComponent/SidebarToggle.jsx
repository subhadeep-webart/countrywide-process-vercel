import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeft, PanelLeftClose } from "lucide-react";

const SidebarToggle = () => {
    const { toggleSidebar, isCollapsed } = useSidebar()
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="shrink-0 text-sidebar-foreground hover:bg-sidebar-accent"
        >
            {isCollapsed ? <PanelLeft className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
        </Button>
    )
}

export default SidebarToggle;