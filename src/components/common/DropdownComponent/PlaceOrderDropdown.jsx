import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { DropdownMenuSub } from "@radix-ui/react-dropdown-menu";
const PlaceOrderDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="gap-2">
                    Place Order
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Process Serving</DropdownMenuItem>
                <DropdownMenuItem>e-filing</DropdownMenuItem>
                <DropdownMenuItem>Court Filing</DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>County Recording</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>Physical</DropdownMenuItem>
                        <DropdownMenuItem>eRecording</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem>eService</DropdownMenuItem>
                <DropdownMenuItem>Courtesy Copy Delivery</DropdownMenuItem>
                <DropdownMenuItem>Document Retrieval</DropdownMenuItem>
                <DropdownMenuItem>Court Appearance</DropdownMenuItem>
                <DropdownMenuItem>Skip Tracing</DropdownMenuItem>
                <DropdownMenuItem>Subpoena Domestication</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default PlaceOrderDropdown;