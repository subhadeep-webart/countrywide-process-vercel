import { Inbox, Clock, FileEdit, Briefcase, PauseCircle, CheckCircle, XCircle, LayoutDashboard, Users, DollarSign, ShoppingCart, FolderOpen, FileText } from "lucide-react"

export const STATS_DATA = [
    { title: "Incoming", value: 464, icon: Inbox, variant: "info" },
    { title: "Pending", value: 49, icon: Clock, variant: "warning" },
    { title: "Draft", value: 319, icon: FileEdit, variant: "default" },
    { title: "Cases", value: 0, icon: Briefcase, variant: "default" },
    { title: "On-Hold", value: 293, icon: PauseCircle, variant: "default" },
    { title: "Executed", value: 293, icon: CheckCircle, variant: "success" },
    { title: "Closed", value: 0, icon: XCircle, variant: "default" },
];

export const SIDEBAR_NAV_ITEMS = [
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        path: "/",
        roles: ["admin", "account", "vendor"],
        children: [],
    },
    {
        icon: Users,
        label: "Portal",
        path: "#",
        roles: ["vendor"],
        children: []
    },
    {
        icon: Users,
        label: "Users",
        path: "#",
        roles: ["admin"],
        children: [
            { icon: FileText, label: "Admin Users", path: "#" },
            { icon: FileText, label: "Account Users", path: "/users/accounts" },
            { icon: FileText, label: "Vendors", path: "/vendors" },
        ]
    },
    {
        icon: DollarSign,
        label: "Finance",
        path: "/finance",
        roles: ["admin"],
        children: [
            { icon: FileText, label: "Open Credit Requests", path: "/credit-requests" },
        ]
    },
    {
        icon: ShoppingCart,
        label: "Place Order",
        path: "#",
        roles: ["admin", "account", "vendor"],
        children: [
            { icon: FileEdit, label: "eFiling", path: "/efile-order", roles: ["admin", "account"] },
            { icon: FileText, label: "Court Filing", path: "#", roles: ["admin", "account"] },
            { icon: FileText, label: "Process Serving", path: "#", roles: ["admin", "account"] },
        ]
    },
    {
        icon: FolderOpen,
        label: "Closed Order",
        path: "/closed-order",
        roles: ["admin", "account", "vendor"],
        children: []
    },
    {
        icon: Clock,
        label: "Pending Order",
        path: "/pending-order",
        roles: ["admin", "account", "vendor"],
        children: []
    },
    {
        icon: FileEdit,
        label: "Draft",
        path: "/draft",
        roles: ["admin"],
        children: [
            { icon: FileText, label: "View All Drafts", path: "/draft/all" },
        ]
    },
    {
        icon: Inbox,
        label: "Incoming Order",
        path: "/incoming-order",
        roles: ["admin", "vendor"],
        children: []
    },
    {
        icon: Inbox,
        label: "Submitted",
        path: "/incoming-order",
        roles: ["account"],
        children: []
    },
    {
        icon: CheckCircle,
        label: "Executed Order",
        path: "/executed-order",
        roles: ["admin", "account", "vendor"],
        children: []
    },
    {
        icon: Briefcase,
        label: "Manage Cases",
        path: "/manage-cases",
        roles: ["admin", "account"],
        children: []
    },
];

export const BREADCRUMB_ROUTE_LABEL = {
    "/": "Dashboard",
    "/accounts": "Accounts",
    "/offices": "Offices",
    "/vendors": "Vendors",
    "/users/vendors": "Field Agents",
    "/users/accounts": "Accounts",
    "/users/admin": "Admin Users",
    "/portfolios": "Portfolios",
    "/programs": "Programs",
    "/projects": "Projects",
    "/resourcing": "Resourcing",
    "/requests": "Requests",
    "/reports": "Reports",
    "/calendars": "Calendars",
    "/user": "User",
    "/teams": "Teams",
    "/settings": "Settings",
}

export const RECENT_ORDERS = [
    { id: "ER9932646", orderType: "Erecord Form", caseNo: "6545434545445", status: "Pending" },
    { id: "ER8976697", orderType: "Erecord Form", caseNo: "468914681256154685468", status: "Completed" },
    { id: "ER8170248", orderType: "Erecord Form", caseNo: "325154616145684646849684", status: "Incoming" },
    { id: "ER4041557", orderType: "Erecord Form", caseNo: "TEST12345678", status: "Incoming" },
    { id: "ER4028537", orderType: "Erecord Form", caseNo: "57645615134643473", status: "Pending" },
];

export const DRAFT_ORDERS = [
    { id: "SD9485194", orderType: "Subpoena Form", caseNo: "6566856868", status: "Draft" },
    { id: "SD9485185", orderType: "Subpoena Form", caseNo: "88979879", status: "Draft" },
    { id: "SD9485184", orderType: "Subpoena Form", caseNo: "785785785", status: "Draft" },
    { id: "SD9485183", orderType: "Subpoena Form", caseNo: "6545487982", status: "Draft" },
    { id: "SD9485182", orderType: "Subpoena Form", caseNo: "6918789787", status: "Draft" },
];