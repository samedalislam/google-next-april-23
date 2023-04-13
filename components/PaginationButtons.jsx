import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const PaginationButtons = () => {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
    return (
        <div className="flex justify-between max-w-lg text-blue-700 mb-10">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className="flex items-center flex-grow flex-col hover:underline">
                        <BsChevronLeft className="h-5 w-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className="flex items-center flex-grow flex-col hover:underline">
                    <BsChevronRight className="h-5 w-5" />
                    <p>Next</p>
                </div>
            </Link>
        </div>
    );
};
export default PaginationButtons;
