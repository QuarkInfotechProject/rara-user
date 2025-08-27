import Image from "next/image";
import { Itinerary, AltitudeChart } from "../type";

interface AltitudeChartProps {
  itineraryData?: Itinerary;
  altitudeChartData?: AltitudeChart;
}

const Altitude_chart = ({
  itineraryData,
  altitudeChartData,
}: AltitudeChartProps) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-3xl font-bold">Altitude Chart</h1>
      {/* Use altitude chart data if available */}
      {altitudeChartData?.src ? (
      <Image
        src={altitudeChartData.src}
        alt={altitudeChartData.alt}
        width={800}
        height={400}
        priority
        className="w-full h-auto"
      />):(
        <p className="text-gray-600">Altitude chart data is not available.</p>
      )}
      <div className="flex w-full flex-col gap-4">
        <h2 className="font-bold text-lg">Brief Itinerary</h2>

        {/* Display itinerary data in bullet points */}
        <div className="flex flex-col gap-2">
          {itineraryData &&
            Object.entries(itineraryData).map(([dayKey, dayData]) => {
              const dayNumber = dayKey.replace("day", "");
              return (
                <div key={dayKey} className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span className="text-gray-800">
                    <strong>Day {String(dayNumber).padStart(2, "0")}:</strong>{" "}
                    {dayData.title}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Altitude_chart;