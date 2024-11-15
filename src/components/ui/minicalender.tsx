import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <div className={cn("p-1", className)}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-1 sm:space-x-1 sm:space-y-0",
          month: "space-y-2", 
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-xs font-semibold text-[#631363]",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-6 w-6 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-2",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-6 font-normal text-[0.8rem]",
          row: "flex w-full mt-1",
          cell: "h-6 w-6 text-center text-xs p-0 relative font-semibold rounded-none focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-6 w-6 p-0 font-normal aria-selected:opacity-100"
          ),
          day_range_start: "rounded-l-full",
          day_range_end: "day-range-end bg-[#631363] border rounded-r-full",
          day_selected:
            "bg-[#631363] text-white hover:bg-primary hover:text-white focus:bg-[#631363] focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-[#631363] border-0 rounded-none aria-selected:text-white aria-selected:opacity-20",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeft className="h-3 w-3" />, // Reduced icon size
          IconRight: ({ ...props }) => <ChevronRight className="h-3 w-3" />, // Reduced icon size
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
