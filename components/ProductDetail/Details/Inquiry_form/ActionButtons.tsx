import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  onInquireAvailability?: () => void;
  onCheckAvailability?: () => void;
  disabled?: boolean;
}

function ActionButtons({
  onInquireAvailability,
  onCheckAvailability,
  disabled = false,
}: ActionButtonsProps) {
  return (
    <div className="space-y-3">
      <Button
        className={`w-full bg-[#71B344] hover:bg-green-700 text-white font-medium py-3 rounded-full ${
          disabled ? "cursor-not-allowed" : ""
        }`}
        onClick={onInquireAvailability}
        disabled={disabled}
      >
        Inquire Availability
      </Button>

      <Button
        variant="outline"
        className={`w-full border-[#71B344] text-[#71B344] hover:bg-green-50 font-medium py-3 rounded-full ${
          disabled ? "cursor-not-allowed" : ""
        }`}
        onClick={onCheckAvailability}
        disabled={disabled}
      >
        Check Availability
      </Button>
    </div>
  );
}

export default ActionButtons;
