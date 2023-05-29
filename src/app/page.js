import Featured from "./components/Featured";
import Giftsection from "./components/Giftsection";
import Herosection from "./components/Herosection";
import StoryContent from "./components/Story-content";

const page = () => {
    return (
        <>
            <Herosection />
            <StoryContent />
            <Featured />
            <div className="mt-24">
                <Featured />
            </div>
            <div className="mt-24">
                <Featured />
            </div>
            <div className="mt-24">
                <Featured />
            </div>
            <Giftsection />
        </>
    );
};

export default page;
