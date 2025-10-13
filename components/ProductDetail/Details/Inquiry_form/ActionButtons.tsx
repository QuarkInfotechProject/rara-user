
import CustomTripInquiryPopup from "../Departure/CustomInquiry";

interface GuestCounts {
  infant: number;
  child: number;
  adult: number;
}

interface ActionButtonsProps {
  onInquireAvailability?: () => void;
  onCheckAvailability?: () => void;
  disabled?: boolean;
  id?: number;
  title?: string;
  selectedDates?: {
    from: Date | null;
    to: Date | null;
  };
  guests?: GuestCounts;
  totalCost?: number;
}

function ActionButtons({
  title,
  id,
}: ActionButtonsProps) {
  return (
    <div className="space-y-3">
      <CustomTripInquiryPopup
        buttonText="Enquire Now"
        trekTitle={title}
        trekId={id}
      />
    </div>
  );
}

export default ActionButtons;
