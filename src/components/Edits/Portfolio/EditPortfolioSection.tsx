import { useDispatch } from "react-redux";
import {
    CertificateCardProps,
    CertificateItem,
    PlaygroundCardProps,
    PlaygroundItem,
    ProjectCardProps,
    ProjectItem,
} from "../../../types/portfolioTypes";
import { Formik, Form, Field } from "formik";
import { isValuesChanged } from "../../../utils";
import Confirm from "../../Utils/Confirm";
import { updatePortfolioSection } from "../../../redux/portfolioSlice";

export interface SectionProps<T, E> {
    title: string;
    data: Array<E>;
    Card: React.FC<T>;
}

const EditPortfolioSection = <
    T extends CertificateCardProps | PlaygroundCardProps | ProjectCardProps,
    E extends CertificateItem | PlaygroundItem | ProjectItem
>(
    props: SectionProps<T, E>
) => {
    const dispatch = useDispatch();
    const handleSubmit = (values: E[]) => {
        dispatch(
            updatePortfolioSection({ [props.title.toLowerCase()]: values })
        );
    };
    return (
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
            {({ values }) => (
                <Form>
                    <div className="heading">
                        <h1 className="title">{props.title}</h1>
                        <Confirm
                            disable={isValuesChanged(values, props.data)}
                        />
                    </div>
                    <div className="cards-cont">
                        {values.map((obj, index) => (
                            <Field
                                key={obj.id}
                                value={obj.visible}
                                type="checkbox"
                                name={`[${index}].visible`}
                                component={props.Card}
                                {...obj}
                            />
                        ))}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default EditPortfolioSection;
