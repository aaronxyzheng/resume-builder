import Resume from "./components/Resume";
import ResumeBuilder from "./components/ResumeBuilder";
import { useResumeState } from "./hooks/useResumeState";

function App() {
    const resumeState = useResumeState();

    return (
        <>
            <Resume info={resumeState.info} />
            <ResumeBuilder {...resumeState} />
        </>
    );
}

export default App;
