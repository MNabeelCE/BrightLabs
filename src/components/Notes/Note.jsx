import { useState } from "react";

const Note = () => {
    const [inputState, setInputState] = useState('Looking for an experienced developer for a 3–6-month project.You will work with a small team of healthcare and IT experts to build a tablet and You will work with a small team of healthcare app that must be HIPAA compliant and have the ability to integrate with EHR. Required Experience UI, UX, interactivity Graphics design experience..... Looking for an experienced developer for a 3–6-month project. You will work with a small team of healthcare and IT experts to build a tablet and You will work with a small team of healthcare app that must be HIPAA compliant and have the ability to integrate with EHR. Required Experience UI, UX, interactivity Graphics design experience. \n'  +
        'Looking for an experienced developer for a 3–6-month project.You will work with a small team of healthcare and IT experts to build a tablet and You will work with a small team of healthcare app that must be HIPAA compliant and have the ability to integrate with EHR. Required Experience UI, UX, interactivity Graphics design experience..... Looking for an experienced developer for a 3–6-month project. You will work with a small team of healthcare and IT experts to build a tablet and You will work with a small team of healthcare app that must be HIPAA compliant and have the ability to integrate with EHR. Required Experience UI, UX, interactivity Graphics design experience.');
    const handleChange = (e) => setInputState(e.target.value);
    return (
        <div>
            <h6 className="note-title">Notes</h6>
            <div className="pera">
            <textarea
                name="inputName"
                rows={12}
                value={inputState}
                onChange={handleChange}
            />
            </div>
        </div>
    );
}
export default Note