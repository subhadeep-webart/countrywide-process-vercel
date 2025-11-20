import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";


export default function ServiceAfterFilingSection({ form }) {
    const [serveAfterFiling, setServeAfterFiling] = useState(false);
    const [advanceWitnessFees, setAdvanceWitnessFees] = useState(false);

    return (
        <Card className="p-6 space-y-6">
            <div>
                <h3 className="text-lg font-semibold mb-4">Serve After Filing?</h3>
                <RadioGroup
                    value={serveAfterFiling ? "yes" : "no"}
                    onValueChange={(value) => {
                        const isYes = value === "yes";
                        setServeAfterFiling(isYes);
                        form.setValue("serveAfterFiling", isYes);
                    }}
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="serve-yes" />
                        <Label htmlFor="serve-yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="serve-no" />
                        <Label htmlFor="serve-no" className="font-normal cursor-pointer">No</Label>
                    </div>
                </RadioGroup>
            </div>

            {serveAfterFiling && (
                <div className="space-y-4 border-l-4 border-primary pl-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Party(s) to Serve *</Label>
                            <Input placeholder="Enter party names" />
                        </div>
                        <div>
                            <Label>Capacity</Label>
                            <Input placeholder="Enter capacity" />
                        </div>
                    </div>

                    <div>
                        <Label>Registered Agent Name</Label>
                        <Input placeholder="Enter registered agent name" />
                    </div>

                    <div>
                        <Label>Business Name or Address *</Label>
                        <Input placeholder="Start typing to search..." />
                        <p className="text-sm text-muted-foreground mt-1">
                            Google API will auto-detect Business or Residence
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Hearing Date</Label>
                            <Input type="date" />
                        </div>
                        <div>
                            <Label>Hearing Time</Label>
                            <Input type="time" />
                        </div>
                    </div>

                    <div>
                        <Label>Dept / Div</Label>
                        <Input placeholder="Enter department or division" />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="witness-fees"
                                checked={advanceWitnessFees}
                                onCheckedChange={(checked) => setAdvanceWitnessFees(checked)}
                            />
                            <Label htmlFor="witness-fees" className="font-normal cursor-pointer">
                                Advance Witness Fees?
                            </Label>
                        </div>

                        {advanceWitnessFees && (
                            <div className="ml-6">
                                <Label>Amount</Label>
                                <Input type="number" placeholder="Enter amount" />
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>Proof/Affidavit</Label>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="file-proof" />
                                <Label htmlFor="file-proof" className="font-normal cursor-pointer">
                                    File
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="notarize-proof" />
                                <Label htmlFor="notarize-proof" className="font-normal cursor-pointer">
                                    Notarize
                                </Label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Label>Special Instructions</Label>
                        <Textarea
                            placeholder="Enter any special instructions..."
                            rows={4}
                        />
                    </div>
                </div>
            )}
        </Card>
    );
}
