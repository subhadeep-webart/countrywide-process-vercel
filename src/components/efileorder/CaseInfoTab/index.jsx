import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
// import { CASE_CATEGORIES, CASE_TYPES, isUnlawfulDetainer } from "@/lib/efileConstants";
import { CASE_CATEGORIES, CASE_TYPES, isUnlawfulDetainer } from "@/utils/efileutils";
import { useState } from "react";

const CaseInfoTab = ({ onNext, onBack }) => {
    // const { toast } = useToast();
    const [hideZipCode, setHideZipCode] = useState(false);

    const form = useForm({
        // resolver: zodResolver(efileCaseInfoSchema),
        defaultValues: {
            caseTitle: "",
            caseCategory: "",
            caseType: "",
            jurisdictionalAmount: undefined,
            incidentZipCode: "",
        },
    });

    const watchCategory = form.watch("caseCategory");
    const watchCaseType = form.watch("caseType");
    const isUD = watchCaseType && isUnlawfulDetainer(watchCaseType);
    return (
        <Form {...form}>
            <form className="space-y-6">
                <Card className="p-6 space-y-4">
                    <FormField
                        control={form.control}
                        name="caseTitle"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Case Title *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter case title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="caseCategory"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Case Category *</FormLabel>
                                    <Select
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                            const category = CASE_CATEGORIES.find(c => c.value === value);
                                            setHideZipCode(category?.hideZip || false);
                                            form.setValue("caseType", "");
                                        }}
                                        value={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className={"w-full"}>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {CASE_CATEGORIES.map((category) => (
                                                <SelectItem key={category.value} value={category.value}>
                                                    {category.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="caseType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Case Type *</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        disabled={!watchCategory}
                                    >
                                        <FormControl>
                                            <SelectTrigger className={"w-full"}>
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="max-h-[300px]">
                                            {watchCategory && CASE_TYPES[watchCategory]?.map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="jurisdictionalAmount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Jurisdictional Amount</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter amount"
                                            {...field}
                                            onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {!hideZipCode && (
                            <FormField
                                control={form.control}
                                name="incidentZipCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Incident ZIP Code</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter ZIP code" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                    </div>
                </Card>

                {isUD && (
                    <Card className="p-6 space-y-4 border-orange-200 bg-orange-50/50">
                        <h3 className="font-semibold text-lg">Unlawful Detainer Requirements</h3>

                        <div className="space-y-3">
                            <FormField
                                control={form.control}
                                name="conditionallyUnderSeal"
                                render={({ field }) => (
                                    <FormItem className="flex items-center space-x-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <Label className="font-normal cursor-pointer">
                                            Conditionally Under Seal
                                        </Label>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confidentialCase"
                                render={({ field }) => (
                                    <FormItem className="flex items-center space-x-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <Label className="font-normal cursor-pointer">
                                            Confidential Case
                                        </Label>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="complexCase"
                                render={({ field }) => (
                                    <FormItem className="flex items-center space-x-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <Label className="font-normal cursor-pointer">
                                            Complex Case
                                        </Label>
                                    </FormItem>
                                )}
                            />

                            {form.watch("complexCase") && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="classActionIndicator"
                                        render={({ field }) => (
                                            <FormItem className="flex items-center space-x-2 ml-6">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <Label className="font-normal cursor-pointer">
                                                    Class Action Indicator
                                                </Label>
                                            </FormItem>
                                        )}
                                    />
                                    <Alert>
                                        <AlertDescription>
                                            Warning: GC 70616(a) - Complex case filing fees may apply
                                        </AlertDescription>
                                    </Alert>
                                </>
                            )}
                        </div>

                        <FormField
                            control={form.control}
                            name="demandAmount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Demand Amount *</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter demand amount"
                                            {...field}
                                            onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="space-y-4">
                            <h4 className="font-medium">Premises Address *</h4>
                            <FormField
                                control={form.control}
                                name="premisesStreet"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Street Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter street address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-3 gap-4">
                                <FormField
                                    control={form.control}
                                    name="premisesCity"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter city" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="premisesState"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>State</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter state" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="premisesZip"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>ZIP</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter ZIP" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </Card>
                )}

                <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={onBack}>
                        Back to Order Info
                    </Button>
                    <Button type="button" onClick={onNext}>Continue to Participants</Button>
                </div>
            </form>
        </Form>
    )
}

export default CaseInfoTab;