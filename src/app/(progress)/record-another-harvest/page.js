import Link from "next/link";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

// this should have a back button

export default function page() {
  return (
    <div className="flex h-screen">
      <div className="box-content grid h-96 w-64 p-4 border-4 bg-white mx-auto mt-12 md:mt-20">
        <div className="text-4xl p-4 text-center my-auto">
          Would you like to record another harvest?
        </div>
        <div className="grid grid-cols-2 gap-4 place-content-evenly">
          {/* "yes" button - return to home */}
          <Link
            href="/"
            className="rounded-md border-2 border-lime-700 p-2 pt-3 text-xl flex gap-4"
          >
            <FaRegCalendarCheck size={28} />
            Yes
          </Link>
          {/* "No" button - to thank you */}
          <Link
            href="/thank-you"
            className="rounded-md border-2 border-lime-700 p-2 pt-3 text-xl flex gap-4"
          >
            <FaRegCalendarAlt size={28} />
            No
          </Link>
        </div>
      </div>
    </div>
  );
}
