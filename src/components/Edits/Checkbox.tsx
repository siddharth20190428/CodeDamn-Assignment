import { Sections } from "../../types/personalTypes";
import { Field } from "formik";

const Checkbox = (props: Sections) => {
    return (
        <div className="sec-cont">
            <span className="texts">
                <span className="name">{props.name}</span>
                <span className="desc">{props.description}</span>
            </span>
            <Field
                type="checkbox"
                name={`sections[${props.id - 1}].visible`}
                id={`sections[${props.id - 1}].visible`}
                className="checkbox"
            />
        </div>
    );
};

export default Checkbox;
