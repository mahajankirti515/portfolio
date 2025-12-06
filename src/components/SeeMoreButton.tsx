import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SeeMoreButton({ href }: { href: string }) {
  return (
    <Link href={href} className="text-sm px-4 py-2 rounded-md font-medium">
      <div className="flex items-center justify-center">
        <button className="rounded-lg relative group border-[2px] border-gray-300 flex bg-neutral-800 dark:bg-neutral-700 dark:border-neutral-500 dark:font-bold text-white items-center gap-2 pl-9 py-1.5 pr-3 shadow-sm">
          <Box />
          <span className="inline-block group-hover:-translate-x-7 transition-transform duration-500 tracking-wider">
            See More
          </span>
        </button>
      </div>
    </Link>
  );
}

const Box = () => {
  return (
    <div className="size-6 absolute left-0.5 group-hover:left-[calc(100%-1.9rem)] transition-all duration-500 ml-0.5 inset-y-0 my-auto gap-px rounded-sm bg-[#FFCC00] flex flex-col justify-center items-center group-hover:transform group-hover:rotate-180 ease-out">
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
        <Bubble />
      </div>
    </div>
  );
};

const Bubble = ({ highlight }: { highlight?: boolean }) => {
  return (
    <span
      className={cn(
        "inline-block size-[3px] rounded-full bg-[#FFFFFF40]",
        highlight && "bg-white animate-pulse ease-linear duration-200"
      )}
    ></span>
  );
};
