interface CostSummaryProps {
  costPerAdult: number;
  totalCost: number;
}

function CostSummary({ costPerAdult, totalCost }: CostSummaryProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">Cost</span>
        <span className="text-gray-700 font-medium">${costPerAdult}/adult</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-medium">Total</span>
        <span className="text-gray-900 font-bold text-lg">${totalCost}</span>
      </div>
    </div>
  );
}

export default CostSummary;
