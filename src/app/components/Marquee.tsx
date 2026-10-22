import Link from "next/link";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"



interface MI {
    nameBn: string,
    slug: string,
    categoryIcon: string,
    today: number,
    change: {
        dir: string,
        pct: number
    }

}



const Marquee = async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
    const data: MI[] = await res.json();

    return (
        <div className="flex items-center bg-green-50 overflow-hidden ">
           <div className="bg-green-500 py-3 px-3 text-white flex text-xl">
           <span> লাইভ</span>    &nbsp; <span>বাজার </span>    &nbsp; <span>দর</span>

           </div>
           <div className="bg-green-50 py-3 ">
             <MarqueeText
                duration={120}
                pauseOnHover={true}
                textSpacing="2.5rem"
                direction="right"
              
            >
                {
                    data.map((n, index: number) => (
                        <Link key={index} href={n.slug} >
                            {n.categoryIcon} &nbsp;
                            {n.nameBn}
                            &nbsp;
                            |
                            &nbsp;
                            {n.today}&nbsp; টাকা / কেজি &nbsp;
                            {(n.change.dir) === 'up' ?

                                <FaArrowUp className="inline-block text-red-600" />



                                :
                                <FaArrowDown className="inline-block text-green-600" />
                            }
                            &nbsp;
                            {n.change.pct}



                        </Link>
                    ))
                }
            </MarqueeText>

           </div>
        </div>
    );
};

export default Marquee;