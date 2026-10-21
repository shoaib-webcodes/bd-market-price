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
        <div className="h-15 flex justify-start items-center gap-5">

            {
                data.map((n, index: number) => (
                    <Link key = {index} href={n.slug}  >
                        {n.icon} &nbsp;
                        {n.nameBn}
                    </Link>
                ) )

            }

        </div>
    );
};

export default Navlinks;