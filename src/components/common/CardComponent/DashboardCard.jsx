import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function DashboardCard({ title, value, icon: Icon, variant = "default" }) {
  return (
    <Card
      className={cn(
        "px-3 py-2 transition-all hover:shadow-lg cursor-pointer border-l-4 min-w-[140px]",
        variant === "default" && "border-l-primary bg-gradient-to-br from-primary/5 to-transparent",
        variant === "success" && "border-l-success bg-gradient-to-br from-success/5 to-transparent",
        variant === "warning" && "border-l-warning bg-gradient-to-br from-warning/5 to-transparent",
        variant === "info" && "border-l-info bg-gradient-to-br from-info/5 to-transparent"
      )}
    >
      <div className="flex items-center gap-3 justify-between">
        <p className="text-xs font-medium text-muted-foreground whitespace-nowrap">{title}</p>
        <p className="text-lg font-bold">{value}</p>
        <div
          className={cn(
            "rounded-full p-1.5 shrink-0",
            variant === "default" && "bg-primary/10 text-primary",
            variant === "success" && "bg-success/10 text-success",
            variant === "warning" && "bg-warning/10 text-warning",
            variant === "info" && "bg-info/10 text-info"
          )}
        >
          <Icon className="h-4 w-4" />
        </div>
      </div>
    </Card>
  );
}
