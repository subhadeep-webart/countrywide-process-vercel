"use client"
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useNaviga
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import OrderInfoTab from "@/components/efileorder/OrderInfoTab";
import CaseInfoTab from "@/components/efileorder/CaseInfoTab";
// import OrderInfoTab from "@/components/efile/OrderInfoTab";
// import CaseInfoTab from "@/components/efile/CaseInfoTab";
// import CaseParticipantsTab from "@/components/efile/CaseParticipantsTab";
// import DocumentsTab from "@/components/efile/DocumentsTab";
// import OrderDetailsTab from "@/components/efile/OrderDetailsTab";
;
import { useSidebar } from "@/components/ui/sidebar";
import { toast } from "sonner";
import CaseParticipantsTab from "@/components/efileorder/CaseParticipantsTab";
import DocumentsTab from "@/components/efileorder/DocumentsTab";
import OrderDetailsTab from "@/components/efileorder/OrderDetailsTab";
import { useRouter } from "next/navigation";

export default function EfileOrder() {
    // const navigate = useNav();
    // const { toast } = useToas;
    const router = useRouter();
    const { isCollapsed } = useSidebar();
    const [activeTab, setActiveTab] = useState("order-info");
    const [efileOrderId, setEfileOrderId] = useState(null);

    const handleSaveDraft = () => {
        toast({
            title: "Draft Saved",
            description: "Your eFiling order has been saved as a draft.",
        });
    };

    return (
        <div className="flex min-h-screen w-full bg-background pt-4">
            <div
                className={
                    "flex-1 flex flex-col transition-all duration-300"}
            >
                <main className="flex-1 p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                // onClick={() => navigate(-1)}
                                onClick={() => router.back()}
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back
                            </Button>
                            <div>
                                <h1 className="text-3xl font-bold text-foreground">New eFiling Order</h1>
                                <p className="text-muted-foreground">California eFiling Order Entry</p>
                            </div>
                        </div>

                        <Button onClick={handleSaveDraft} variant="outline">
                            <Save className="h-4 w-4 mr-2" />
                            Save as Draft
                        </Button>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>eFiling Order Entry</CardTitle>
                            <CardDescription>
                                Complete all required information across the tabs below
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                                <TabsList className="grid w-full grid-cols-5 mb-6">
                                    <TabsTrigger value="order-info">Order Info</TabsTrigger>
                                    <TabsTrigger value="case-info">Case Info</TabsTrigger>
                                    <TabsTrigger value="participants">Case Participants</TabsTrigger>
                                    <TabsTrigger value="documents">Documents</TabsTrigger>
                                    <TabsTrigger value="order-details">Order Details</TabsTrigger>
                                </TabsList>

                                <TabsContent value="order-info" className="space-y-4">
                                    <OrderInfoTab
                                        onNext={() => setActiveTab("case-info")}
                                        efileOrderId={efileOrderId}
                                        setEfileOrderId={setEfileOrderId}
                                    />
                                </TabsContent>

                                <TabsContent value="case-info" className="space-y-4">
                                    <CaseInfoTab
                                        efileOrderId={efileOrderId}
                                        onNext={() => setActiveTab("participants")}
                                        onBack={() => setActiveTab("order-info")}
                                    />
                                </TabsContent>

                                <TabsContent value="participants" className="space-y-4">
                                    <CaseParticipantsTab
                                        efileOrderId={efileOrderId}
                                        onNext={() => setActiveTab("documents")}
                                        onBack={() => setActiveTab("case-info")}
                                    />
                                </TabsContent>

                                <TabsContent value="documents" className="space-y-4">
                                    <DocumentsTab
                                        efileOrderId={efileOrderId}
                                        onNext={() => setActiveTab("order-details")}
                                        onBack={() => setActiveTab("participants")}
                                    />
                                </TabsContent>

                                <TabsContent value="order-details" className="space-y-4">
                                    <OrderDetailsTab
                                        efileOrderId={efileOrderId}
                                        onBack={() => setActiveTab("documents")}
                                    />
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    );
}
