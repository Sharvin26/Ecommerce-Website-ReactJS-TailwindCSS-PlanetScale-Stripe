import NextLink from "next/link";

const Navbar = () => {
    return (
        <div className="relative bg-white mx-6">
            <div className="flex items-center justify-between pt-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <h1 className="text-2xl">
                        <NextLink href="/" className="cursor-pointer">
                            Ecomm App
                        </NextLink>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
