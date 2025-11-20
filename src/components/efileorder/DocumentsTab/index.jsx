import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText, Upload } from "lucide-react";

export default function DocumentsTab({ efileOrderId, onNext, onBack }) {
    return (
        <div className="space-y-6">
            <Alert>
                <AlertDescription className="space-y-2">
                    <p className="font-semibold">Important Document Guidelines:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Upload Lead Document First</li>
                        <li>Please review all document details prior to submission</li>
                        <li>Documents must be text-searchable (not scanned images)</li>
                    </ul>
                </AlertDescription>
            </Alert>

            <Card className="p-8">
                <div className="text-center space-y-4">
                    <FileText className="h-16 w-16 mx-auto text-muted-foreground" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Upload Documents</h3>
                        <p className="text-muted-foreground">
                            Document upload functionality will be implemented with file selection and metadata entry
                        </p>
                    </div>
                    <Button>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload from Computer
                    </Button>
                </div>
            </Card>

            <div className="flex justify-between">
                <Button variant="outline" onClick={onBack}>
                    Back to Participants
                </Button>
                <Button onClick={onNext}>Continue to Order Details</Button>
            </div>
        </div>
    );
}
