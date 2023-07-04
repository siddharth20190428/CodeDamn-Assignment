import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteProfilePicture,
    updatePersonal,
} from "../../redux/personalSlice";
import { RootState } from "../../store";
import Confirm from "../Utils/Confirm";
import Checkbox from "./Checkbox";
import { isValuesChanged } from "../../utils";

const Profile: React.FC = () => {
    const [pictureFlag, setPictureFlag] = useState(false);
    const dispatch = useDispatch();
    const personal = useSelector((state: RootState) => state.personal);

    const handleSubmit = (values: typeof personal) => {
        dispatch(updatePersonal(values));
        // console.log(values);
    };

    return (
        <Formik initialValues={personal} onSubmit={handleSubmit}>
            {({ values }) => (
                <Form className="edits-cont">
                    <div className="profile-cont">
                        <img src={personal.profilePicture} className="img" />
                        <button
                            type="button"
                            className="upload"
                            onClick={() => setPictureFlag(true)}
                        >
                            Upload New Picture
                        </button>
                        <button
                            type="button"
                            className="cancel"
                            onClick={() => dispatch(deleteProfilePicture())}
                        >
                            Delete
                        </button>
                    </div>
                    {pictureFlag && (
                        <div>
                            <label
                                htmlFor="profilePicture"
                                className="personal-form-label"
                            >
                                Profile Picture
                            </label>
                            <Field
                                type="text"
                                name="profilePicture"
                                id="profilePicture"
                                className="personal-form-input"
                            />
                        </div>
                    )}

                    <div>
                        <label
                            className="personal-form-label"
                            htmlFor="displayName"
                        >
                            Display Name
                        </label>
                        <Field
                            className="personal-form-input"
                            type="text"
                            name="displayName"
                            id="displayName"
                        />
                    </div>

                    <div>
                        <label
                            className="personal-form-label"
                            htmlFor="profession"
                        >
                            Profession
                        </label>
                        <Field
                            className="personal-form-input"
                            type="text"
                            name="profession"
                            id="profession"
                        />
                    </div>

                    <div>
                        <label
                            className="personal-form-label"
                            htmlFor="dateOfBirth"
                        >
                            Date of Birth
                        </label>
                        <Field
                            className="personal-form-input"
                            type="date"
                            name="dateOfBirth"
                            id="dateOfBirth"
                        />
                    </div>

                    <div>
                        <label className="personal-form-label" htmlFor="gender">
                            Gender
                        </label>
                        <Field
                            className="personal-form-input"
                            as="select"
                            name="gender"
                            id="gender"
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Field>
                    </div>
                    <div>
                        <label
                            className="personal-form-label"
                            htmlFor="coverPhoto"
                        >
                            Cover Photo
                        </label>
                        <Field
                            className="personal-form-input"
                            type="text"
                            name="coverPhoto"
                            id="coverPhoto"
                        />
                    </div>
                    <div className="sec-visibilities">
                        <h1 className="heading">Section visibility</h1>
                        <p className="sub-head">
                            Select which sections and content should show on
                            your profile page.
                        </p>
                        <div className="sec">
                            {personal.sections.map((sec) => (
                                <Checkbox {...sec} key={sec.id} />
                            ))}
                        </div>
                    </div>
                    <div className="my-6">
                        <Confirm disable={isValuesChanged(values, personal)} />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Profile;
