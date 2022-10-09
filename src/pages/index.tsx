import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>All Products</title>
                <meta name="description" content="All Products" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto">
                <h1 className="h-1">Hello</h1>
            </main>
        </div>
    );
};

export default Home;
