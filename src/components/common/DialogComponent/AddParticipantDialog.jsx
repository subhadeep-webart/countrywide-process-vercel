import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
// import { efileParticipantSchema, type EFileParticipantData } from "@/lib/efileValidations";
import { PARTY_ROLES, ORGANIZATION_TYPES, SUFFIX_OPTIONS } from "@/utils/efileutils";
// import { supabase } from "@/integrations/supabase/client";
// import { useToast } from "@/hooks/use-toast";


export default function AddParticipantDialog({
    open,
    onOpenChange,
    efileOrderId,
    onSuccess
}) {
    //   const { toast } = useToast();

    const form = useForm({
        // resolver: zodResolver(efileParticipantSchema),
        defaultValues: {
            partyType: "Person",
            role: "",
            email: "",
            isLeadClient: false,
            isGuardianAdLitem: false,
            isIncompetentPerson: false,
            isMinor: false,
            requiresInterpreter: false,
            feeWaiverOnFile: false,
        },
    });

    const watchPartyType = form.watch("partyType");

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add Party</DialogTitle>
                    <DialogDescription>
                        Add a new participant to the case
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form className="space-y-6">
                        <FormField
                            control={form.control}
                            name="partyType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Party Type *</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex gap-4"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Organization" id="org" />
                                                <Label htmlFor="org" className="cursor-pointer">Organization</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Person" id="person" />
                                                <Label htmlFor="person" className="cursor-pointer">Person</Label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {watchPartyType === "Organization" ? (
                            <>
                                <FormField
                                    control={form.control}
                                    name="organizationName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Organization Name *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter organization name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="organizationType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Organization Type</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {ORGANIZATION_TYPES.map((type) => (
                                                        <SelectItem key={type.value} value={type.value}>
                                                            {type.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        ) : (
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter first name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="middleName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Middle Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter middle name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter last name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="suffix"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Suffix</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select suffix" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {SUFFIX_OPTIONS.map((suffix) => (
                                                        <SelectItem key={suffix} value={suffix}>
                                                            {suffix}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role *</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="max-h-[300px]">
                                                {PARTY_ROLES.map((role) => (
                                                    <SelectItem key={role.value} value={role.value}>
                                                        {role.label}
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
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="space-y-3">
                            <Label className="font-semibold">Party Sub-Type</Label>
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="isGuardianAdLitem"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center space-x-2">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <Label className="font-normal cursor-pointer">Guardian Ad Litem</Label>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="isIncompetentPerson"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center space-x-2">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <Label className="font-normal cursor-pointer">Incompetent Person</Label>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="isMinor"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center space-x-2">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <Label className="font-normal cursor-pointer">Minor</Label>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="isLeadClient"
                            render={({ field }) => (
                                <FormItem className="flex items-center space-x-2">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <Label className="font-normal cursor-pointer">Lead Client</Label>
                                </FormItem>
                            )}
                        />

                        {form.watch("isLeadClient") && (
                            <FormField
                                control={form.control}
                                name="billingCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Billing Code</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter billing code" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}

                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="requiresInterpreter"
                                render={({ field }) => (
                                    <FormItem className="flex items-center space-x-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <Label className="font-normal cursor-pointer">Requires Interpreter</Label>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="feeWaiverOnFile"
                                render={({ field }) => (
                                    <FormItem className="flex items-center space-x-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <Label className="font-normal cursor-pointer">Fee Waiver on File</Label>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Alert>
                            <AlertDescription className="text-sm">
                                {`Please ensure party information matches the Complaint. Examples: "John Doe, an Individual" or "Acme Company, a California Corporation".`}
                            </AlertDescription>
                        </Alert>

                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                                Cancel
                            </Button>
                            <Button type="submit">Add Participant</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
