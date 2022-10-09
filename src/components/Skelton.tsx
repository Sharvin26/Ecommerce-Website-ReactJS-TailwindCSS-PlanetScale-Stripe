const Skelton = () => {
    return (
        <>
            <div className="mt-12 h-8 w-40 rounded-lg bg-gray-200" />
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {Array(16)
                    .fill(0)
                    .map((_val, index) => (
                        <div className="rounded-2xl bg-black/5 p-4" key={index}>
                            <div className="h-60 rounded-lg bg-gray-200" />
                            <div className="space-y-4 mt-6 mb-4">
                                <div className="h-3 w-3/5 rounded-lg bg-gray-200" />
                                <div className="h-3 w-4/5 rounded-lg bg-gray-200" />
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Skelton;
