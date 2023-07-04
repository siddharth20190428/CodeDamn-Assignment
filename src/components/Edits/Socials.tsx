import { Field, Form, Formik } from "formik";
import Confirm from "../Utils/Confirm";
import { useDispatch, useSelector } from "react-redux";
import { updateSocials } from "../../redux/personalSlice";
import { RootState } from "../../store";
import { Social } from "../../types/personalTypes";
import { isValuesChanged } from "../../utils";

const LinkInput = (props: Social) => {
    return (
        <div>
            <label htmlFor={props.label} className="personal-form-label">
                {props.label}
            </label>
            <div className="mt-2">
                <Field
                    id={props.id}
                    name={props.id}
                    type="link"
                    placeholder={`${props.label} profile URL`}
                    className="personal-form-input"
                />
            </div>
        </div>
    );
};

const Socials = () => {
    const dispatch = useDispatch();
    const socials = useSelector((state: RootState) => state.personal.socials);

    const hrefs = socials.map((socials) => socials.href);

    const handleSubmit = (values: string[]) => {
        dispatch(updateSocials(values));
    };
    return (
        <Formik initialValues={hrefs} onSubmit={handleSubmit}>
            {({ values }) => (
                <Form className="edits-cont">
                    {socials.map((social) => (
                        <LinkInput {...social} key={social.id} />
                    ))}

                    <div className="my-6">
                        <Confirm disable={isValuesChanged(values, socials)} />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Socials;
