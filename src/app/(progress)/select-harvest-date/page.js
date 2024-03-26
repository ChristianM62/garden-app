import Link from "next/link";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function page() {
  return (
    <div className="flex h-screen">
      <div className="box-content grid h-96 w-64 p-4 border-4 bg-white mx-auto mt-12 md:mt-20">
        <div className="text-4xl p-4 text-center my-auto">
          Select the harvest date:{" "}
        </div>
        <div className="grid grid-cols-2 gap-4 place-content-evenly">
          {/* "back" button - return to home */}
          <Link
            href="/"
            className="rounded-md border-2 border-lime-700 p-2 pt-3 text-xl flex gap-4"
          >
            <FaRegCalendarCheck size={28} />
            Back
          </Link>
          {/* "select" button - to pick crop harvested */}
          <Link
            href="/pick-crop-harvested"
            className="rounded-md border-2 border-lime-700 p-2 pt-3 text-xl flex gap-4"
          >
            <FaRegCalendarAlt size={28} />
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}
