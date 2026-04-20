import { Dataset } from "@/service/dataset.service";
import { formatDate } from "@/utils/helper";
import Image from "next/image";

const ListCard = ({ item }: { item: Dataset }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* LEFT */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-blue-700 mb-2 truncate">
            {item.title}
          </h3>

          <div
            className="text-sm text-gray-600 mb-3 overflow-hidden break-words line-clamp-2"
            dangerouslySetInnerHTML={{ __html: item.description || "" }}
          />

          <div className="flex flex-wrap text-xs text-gray-500 gap-4">
            <span className="flex items-center gap-1">
              <Image
                src="/calender.svg"
                alt="calendar"
                width={16}
                height={16}
              />
              {formatDate(item.created)}
            </span>

            <span className="flex items-center gap-1">
              <Image
                src="/download.svg"
                alt="download"
                width={16}
                height={16}
              />
              {item.download_count || 0}+
            </span>

            <span className="flex items-center gap-1">
              <Image src="/globe.svg" alt="globe" width={16} height={16} />
              {item.geographies?.[0] || "N/A"}
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-row lg:flex-col items-start lg:items-end justify-between gap-2 shrink-0">
          {/* Icons */}
          <div className="flex gap-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs">
              ☁
            </span>
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 text-xs">
              📊
            </span>
          </div>

          {/* Publisher */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Published by</span>

            {item.organization?.logo ? (
              <img
                src={
                  process.env.NEXT_PUBLIC_API_BASE_URL + item.organization.logo
                }
                alt={item.organization.name}
                className="w-6 h-6 rounded-full object-cover border"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-gray-200" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListCard;
