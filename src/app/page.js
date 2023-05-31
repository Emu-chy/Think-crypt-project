import Featured from "./components/Featured";
import Giftsection from "./components/Giftsection";
import Herosection from "./components/Herosection";
import StoryContent from "./components/Story-content";

const page = () => {
    return (
        <>
            <Herosection />
            <StoryContent />

            <Featured
                title={"Handicrafted Scented Candles"}
                description={"With over hundreds of fragrances to choose from"}
            />

            <div className="mt-24">
                <Featured
                    title={"Handicrafted Scented Candles"}
                    description={"With over hundreds of fragrances to choose from"}
                />
            </div>
            <div className="mt-24">
                <Featured
                    title={"Handicrafted Scented Candles"}
                    description={"With over hundreds of fragrances to choose from"}
                />
            </div>
            <div className="mt-24">
                <Featured
                    title={"Handicrafted Scented Candles"}
                    description={"With over hundreds of fragrances to choose from"}
                />
            </div>
            <Giftsection
                title={"Handicrafted Scented Candles"}
                description={"With over hundreds of fragrances to choose from"}
            />
        </>
    );
};

export default page;
