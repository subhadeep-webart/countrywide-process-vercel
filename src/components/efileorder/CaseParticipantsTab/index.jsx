import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, UserPlus } from "lucide-react";
import AddParticipantDialog from "@/components/common/DialogComponent/AddParticipantDialog";
import AddAttorneyDialog from "@/components/common/DialogComponent/AddAttorneyDialog";
import { useState } from "react";

const CaseParticipantsTab = ({ onNext,onBack }) => {
    const [showAddParty, setShowAddParty] = useState(false);
    const [showAddAttorney, setShowAddAttorney] = useState(false);

    const participants = [];
    const attorneys = [];
    return (
        <div className="space-y-6">
            <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Case Participants</h3>
                    <Button onClick={() => setShowAddParty(true)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Party
                    </Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Lead Client</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {participants && participants.length > 0 ? (
                            participants.map((participant) => (
                                <TableRow key={participant.id}>
                                    <TableCell>
                                        {participant.is_lead_client && (
                                            <Badge variant="default">Lead</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {participant.party_type === "Person"
                                            ? `${participant.first_name} ${participant.last_name}`
                                            : participant.organization_name
                                        }
                                    </TableCell>
                                    <TableCell>{participant.role}</TableCell>
                                    <TableCell>{participant.email || "-"}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleDeleteParticipant(participant.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center text-muted-foreground">
                                    No participants added yet. Click "Add Party" to begin.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Card>

            <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Attorneys</h3>
                    <Button onClick={() => setShowAddAttorney(true)} variant="outline">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Add Attorney
                    </Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Bar ID</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {attorneys && attorneys.length > 0 ? (
                            attorneys.map((assignment) => (
                                <TableRow key={assignment.id}>
                                    <TableCell className="font-medium">
                                        {assignment.attorney.first_name} {assignment.attorney.last_name}
                                    </TableCell>
                                    <TableCell>{assignment.attorney.bar_id}</TableCell>
                                    <TableCell>{assignment.attorney.city}, {assignment.attorney.state}</TableCell>
                                    <TableCell>{assignment.attorney.phone}</TableCell>
                                    <TableCell>{assignment.attorney.email}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="sm">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center text-muted-foreground">
                                    {`No attorneys added yet. Click "Add Attorney" to begin.`}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Card>

            <div className="flex justify-between">
                <Button variant="outline" onClick={onBack}>
                    Back to Case Info
                </Button>
                <Button onClick={onNext}>Continue to Documents</Button>
            </div>

            <AddParticipantDialog
                open={showAddParty}
                onOpenChange={setShowAddParty}
                efileOrderId={
                    "123"
                }
                onSuccess={() => {
                    refetchParticipants();
                    setShowAddParty(false);
                }}
            />

            <AddAttorneyDialog
                open={showAddAttorney}
                onOpenChange={setShowAddAttorney}
                efileOrderId={
                    "123"
                }
                onSuccess={() => {
                    refetchAttorneys();
                    setShowAddAttorney(false);
                }}
            />
        </div>
    )
}

export default CaseParticipantsTab;