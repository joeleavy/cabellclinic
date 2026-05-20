import { useState, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import MembershipApplicationForm from "@/components/MembershipApplicationForm";

type Props = {
  children: ReactNode;
};

const SelfAssessmentDialog = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-navy">
            See if we're a fit
          </DialogTitle>
          <DialogDescription className="text-muted-foreground leading-relaxed pt-1">
            A short, honest self-assessment. About five minutes. Your answers help both sides decide before any conversation.
          </DialogDescription>
        </DialogHeader>

        {/* Emergency disclaimer */}
        <div className="flex gap-3 p-4 border-l-4 border-gold bg-warm-gray/30">
          <AlertTriangle
            className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
            strokeWidth={1.75}
          />
          <p className="text-sm text-navy/85 leading-relaxed">
            <strong className="text-navy">If you are experiencing a medical emergency,</strong> please call 911 or go to the nearest emergency room.
          </p>
        </div>

        <MembershipApplicationForm
          compact
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SelfAssessmentDialog;
