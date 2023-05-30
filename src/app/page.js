import Link from "next/link";
import Featured from "./components/Featured";
import Giftsection from "./components/Giftsection";
import Herosection from "./components/Herosection";
import StoryContent from "./components/Story-content";

const page = () => {
    return (
        <>
            <Herosection />
            <StoryContent />
            <Link href="Product">
                <Featured
                    title={"Handicrafted Scented Candles"}
                    description={"With over hundreds of fragrances to choose from"}
                />
            </Link>

            <div className="mt-24">
                <Link href="/Product">
                    <Featured
                        title={"Handicrafted Scented Candles"}
                        description={"With over hundreds of fragrances to choose from"}
                    />
                </Link>
            </div>
            <div className="mt-24">
                <Link href="/Product">
                    <Featured
                        title={"Handicrafted Scented Candles"}
                        description={"With over hundreds of fragrances to choose from"}
                    />
                </Link>
            </div>
            <div className="mt-24">
                <Link href="/Product">
                    <Featured
                        title={"Handicrafted Scented Candles"}
                        description={"With over hundreds of fragrances to choose from"}
                    />
                </Link>
            </div>
            <Giftsection
                title={"Handicrafted Scented Candles"}
                description={"With over hundreds of fragrances to choose from"}
            />
        </>
    );
};

export default page;
