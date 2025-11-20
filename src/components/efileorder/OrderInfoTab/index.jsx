import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ALL_ACCOUNTS, CALIFORNIA_COUNTIES } from "@/utils/efileutils";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const OrderInfoTab = ({ onNext }) => {
    const [showLAModal, setShowLAModal] = useState(false);
    const isAdmin = true;
    const [selectedAccountId, setSelectedAccountId] = useState("");
    const [showServiceSection, setShowServiceSection] = useState(false);
    const form = useForm({
        // resolver: zodResolver(efileOrderInfoSchema),
        defaultValues: {
            state: "California",
            county: "",
            filingType: "Subsequent Filing",
            eserveParticipants: false,
            autoCreateProof: false,
            serveAfterFiling: false,
        },
    });

    const watchCounty = form.watch("county");
    const watchFilingType = form.watch("filingType");

    useEffect(() => {
        if (watchCounty === "Los Angeles") {
            setShowLAModal(true);
        }
    }, [watchCounty]);

    useEffect(() => {
        if (watchFilingType === "Case Initiation") {
            // Show service section by default for case initiation
            setShowServiceSection(true);
        } else {
            setShowServiceSection(false);
        }
    }, [watchFilingType]);

    return (
        <>
            <Form {...form}>
                <form className="space-y-6">
                    {/* Account Selection for Admins */}
                    {isAdmin && (
                        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1.5">
                                        <CardTitle className="text-xl flex items-center gap-2">
                                            <span className="text-primary">📋</span>
                                            Filing on Behalf of Account
                                        </CardTitle>
                                        <CardDescription className="text-base">
                                            Select which account this eFiling order should be associated with.
                                            You are filing as an administrator on behalf of the selected account.
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="account-select" className="text-base font-semibold">
                                        Account Selection *
                                    </Label>
                                    <Select value={selectedAccountId} onValueChange={setSelectedAccountId}>
                                        <SelectTrigger
                                            id="account-select"
                                            className="h-12 bg-background border-2 hover:border-primary/50 transition-colors"
                                        >
                                            <SelectValue placeholder="Choose an account to file under..." />
                                        </SelectTrigger>
                                        <SelectContent className="bg-background">
                                            {ALL_ACCOUNTS?.map((account) => (
                                                <SelectItem key={account.id} value={account.id} className="text-base">
                                                    <div className="flex flex-col py-1">
                                                        <span className="font-semibold">{account.name}</span>
                                                        <span className="text-sm text-muted-foreground">
                                                            {account.account_number} • {account.account_type}
                                                        </span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {/* {!selectedAccountId && (
                                        <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                                            ⚠️ Please select an account before proceeding
                                        </p>
                                    )} */}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <Card className="p-6">
                        <div className="grid grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Select State *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select state" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="California">California</SelectItem>
                                                <SelectItem value="Illinois">Illinois</SelectItem>
                                                <SelectItem value="Indiana">Indiana</SelectItem>
                                                <SelectItem value="Maryland">Maryland</SelectItem>
                                                <SelectItem value="Texas">Texas</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="county"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Select County *</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select county" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="max-h-[300px]">
                                                {CALIFORNIA_COUNTIES.map((county) => (
                                                    <SelectItem key={county} value={county}>
                                                        {county}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <FormField
                            control={form.control}
                            name="filingType"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Filing Type *</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-col space-y-2"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Subsequent Filing" id="subsequent" />
                                                <Label htmlFor="subsequent" className="font-normal cursor-pointer">
                                                    Subsequent Filing
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Case Initiation" id="initiation" />
                                                <Label htmlFor="initiation" className="font-normal cursor-pointer">
                                                    Case Initiation
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </Card>

                    {/* {watchFilingType === "Case Initiation" && showServiceSection && (
                        <ServiceAfterFilingSection form={form} />
                    )} */}

                    <div className="flex justify-end">
                        <Button type="button" onClick={onNext}>Continue to Case Info</Button>
                    </div>
                </form>
            </Form>

            <AlertDialog open={showLAModal} onOpenChange={setShowLAModal}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Continue with eFile or Court Filing</AlertDialogTitle>
                        <AlertDialogDescription className="space-y-4">
                            <p className="text-destructive font-semibold">
                                Los Angeles County courts REQUIRE electronic filing (eFiling) for CIVIL LIMITED & UNLIMITED (Non-Complex) CASES.
                            </p>
                            <p>
                                Do you want to submit an eFiling order or proceed with a Court Filing Order?
                            </p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setContinueWithEfile(false)}>
                            Continue with Court Filing Order
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={() => setContinueWithEfile(true)}>
                            Continue with eFile Order
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default OrderInfoTab;