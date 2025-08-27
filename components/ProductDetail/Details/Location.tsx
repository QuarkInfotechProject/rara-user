import Image from "next/image";
import { TripLocationProps } from "../type";

const Location = ({ data }: TripLocationProps) => {
  if (!data) return null;

  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Location</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {data.image?.src ? (
            <Image
              src={data.image.src}
              alt={data.image.alt || "Trip location image"}
              width={800}
              height={600}
              className="w-full h-auto rounded-sm mb-6"
            />
          ) : (
            <p className="text-red-500 mb-6">No image found</p>
          )}

          <div
            className="text-base text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data.description || "" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
