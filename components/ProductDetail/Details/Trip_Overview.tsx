import {
  ClockCounterClockwiseIcon,
  CloudSunIcon,
  MapPinAreaIcon,
  MountainsIcon,
  PersonSimpleHikeIcon,
  UsersThreeIcon,
  PathIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { TripOverviewProps } from "../type";

const ICONS = {
  duration: ClockCounterClockwiseIcon,
  location: MapPinAreaIcon,
  tripGrade: MountainsIcon,
  maximumAltitude: "/assets/maximum-altitude.svg",
  groupSize: UsersThreeIcon,
  activities: PersonSimpleHikeIcon,
  bestTime: CloudSunIcon,
  starts: PathIcon,
} as const;

interface ActivityDetailProps {
  icon: keyof typeof ICONS;
  label: string;
  value: string;
}

const ActivityDetailItem = ({ icon, label, value }: ActivityDetailProps) => {
  const IconComponent = ICONS[icon];

  return (
    <div className="flex items-center gap-2 justify-start">
      {typeof IconComponent === "string" ? (
        <Image
          src={IconComponent}
          alt={label.toLowerCase()}
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ) : (
        <IconComponent className="w-6 h-6" />
      )}
      <div className="flex flex-col items-start justify-start">
        <p className="text-sm text-gray-400">{label}</p>
        <h1 className="font-bold">{value}</h1>
      </div>
    </div>
  );
};

const Trip_Overview = ({ data }: TripOverviewProps) => {
  if (!data) return null;

  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Trip Overview</h1>
      <div className="rounded-3xl bg-white p-6 flex flex-col w-full gap-4">
        <p className="text-lg text-[#3E641C]">{data.description}</p>

        <h1 className="text-lg font-bold">About this activity</h1>
        <div className="rounded-3xl items-start justify-start bg-gray-100 p-6 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ActivityDetailItem
            icon="duration"
            label="Duration"
            value={data.details.duration}
          />

          <ActivityDetailItem
            icon="location"
            label="Location"
            value={data.details.location}
          />

          <ActivityDetailItem
            icon="tripGrade"
            label="Trip Grade"
            value={data.details.tripGrade}
          />

          <ActivityDetailItem
            icon="maximumAltitude"
            label="Maximum Altitude"
            value={data.details.maximumAltitude}
          />

          <ActivityDetailItem
            icon="groupSize"
            label="Group Size"
            value={data.details.groupSize}
          />

          <ActivityDetailItem
            icon="activities"
            label="Activities"
            value={data.details.activities}
          />

          <ActivityDetailItem
            icon="bestTime"
            label="Best Time"
            value={data.details.bestTime}
          />

          <ActivityDetailItem
            icon="starts"
            label="Starts"
            value={data.details.starts}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="font-bold text-lg">Highlights</h2>
        <ul className="list-disc list-inside space-y-2">
          {data.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trip_Overview;
