import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function OrderDetailsTab({ efileOrderId, onBack }) {
    //   const { toast } = useToast();

    const handleSubmit = () => {
        toast({
            title: "Order Submitted",
            description: "Your eFiling order has been submitted successfully",
        });
    };

    return (
        <div className="space-y-6">
            <Card className="p-8">
                <div className="text-center space-y-4">
                    <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Review Order Details</h3>
                        <p className="text-muted-foreground">
                            Final review and submission functionality will be implemented here
                        </p>
                    </div>
                </div>
            </Card>

            <div className="flex justify-between">
                <Button variant="outline" onClick={onBack}>
                    Back to Documents
                </Button>
                <Button onClick={handleSubmit}>Submit eFiling Order</Button>
            </div>
        </div>
    );
}
