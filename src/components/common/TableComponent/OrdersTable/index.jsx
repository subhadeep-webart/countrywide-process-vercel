import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export function OrdersTable({ title, orders, showPagination = false, actionLink }) {
    const getStatusVariant = (status) => {
        switch (status) {
            case "Completed":
                return "default";
            case "Pending":
                return "secondary";
            case "Incoming":
                return "outline";
            case "Draft":
                return "outline";
            default:
                return "default";
        }
    };

    return (
        <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between border-b p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                {actionLink && (
                    <Button variant="link" className="text-primary">
                        {actionLink}
                    </Button>
                )}
            </div>

            <div className="p-6">
                <div className="mb-4 flex items-center gap-2">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="Search" className="pl-9" />
                    </div>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order</TableHead>
                            <TableHead>Order Type</TableHead>
                            <TableHead>Case No</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order.orderType}</TableCell>
                                <TableCell className="font-mono text-xs">{order.caseNo}</TableCell>
                                <TableCell>
                                    <Badge variant={getStatusVariant(order.status)}>
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="default" size="sm">
                                        View Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {showPagination && (
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                            Showing 1 to {orders.length} of {orders.length} entries
                        </p>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                                Previous
                            </Button>
                            <Button variant="default" size="sm">
                                1
                            </Button>
                            <Button variant="outline" size="sm">
                                Next
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
