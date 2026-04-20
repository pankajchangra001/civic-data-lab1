import { Dataset } from "@/service/dataset.service";
import { formatDate } from "@/utils/helper";
import Image from "next/image";

const GridCard = ({ item }: { item: Dataset }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col h-full">
      {/* Title */}
      <h3 className="text-sm font-semibold text-blue-700 leading-snug line-clamp-2 mb-3">
        {item.title}
      </h3>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
        <span className="flex items-center gap-1">
          <Image src="/calender.svg" alt={"calender"} width={20} height={20} />{" "}
          {formatDate(item.created)}
        </span>

        <span className="flex items-center gap-1">
          <Image src="/download.svg" alt={"download"} width={20} height={20} />{" "}
          {item.download_count || 0}+
        </span>

        <span className="flex items-center gap-1">
          <Image src="/globe.svg" alt={"globe"} width={20} height={20} />{" "}
          {item.geographies?.[0] || "N/A"}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-3"></div>

      {/* Description */}
      <div
        className="text-sm text-gray-600 mb-3 overflow-hidden break-words line-clamp-3"
        dangerouslySetInnerHTML={{ __html: item.description || "" }}
      />

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        {/* Icons */}
        <div className="flex gap-2">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs">
            ☁
          </span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 text-xs">
            📊
          </span>
        </div>

        {/* Publisher */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>published by</span>
          {item.organization?.logo ? (
            <Image
              src={
                process.env.NEXT_PUBLIC_API_BASE_URL + item.organization.logo
              }
              alt={item.organization.name}
              width={10}
              height={10}
              className="w-6 h-6 rounded-full object-cover border"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-200" />
          )}
        </div>
      </div>
    </div>
  );
};
export default GridCard;
