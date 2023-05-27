import Featured from "./components/Featured";
import Herosection from "./components/Herosection";
import StoryContent from "./components/Story-content";

const page = () => {
    return (
        <>
            <Herosection />
            <StoryContent />
            <Featured />
        </>
    );
};

export default page;
