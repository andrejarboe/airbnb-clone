//./components/Header.js
import Image from 'next/image';

function Header() {
    return (
        <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            {/* left  */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto ">
                <Image
                    src="http://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* left end */}
            {/* middle - search */}
            <div className="">
                
            </div>
            {/* middle end */}
            {/* right */}
            <div className=""></div>
            {/* right end */}
        </div>
    )
}

export default Header
