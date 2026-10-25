import Link from "next/link";

interface NavI {
    id: string,
    slug: string,
    nameBn: string,
    icon: string | null
}

const Navlinks = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories")
    const data: NavI[] = await res.json();

    return (
        <div className=" h-15 px-2 flex justify-start items-center gap-2 md:gap-8 text-md md:text-lg">

            {
                data.map((n, index: number) => (
                    <Link key = {index} href= {`/category/${n.slug}`}  >
                        {n.icon} &nbsp;
                        {n.nameBn}
                    </Link>
                ) )

            }

        </div>
    );
};

export default Navlinks;