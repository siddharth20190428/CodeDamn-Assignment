import { CertificateCardProps } from "../../../types/portfolioTypes";
import { classNames } from "../../../utils";

const CertificateCard: React.FC<CertificateCardProps> = (
    props: CertificateCardProps
) => {
    const handleChange = () => {
        const newValue = !props.field.value;
        props.form.setFieldValue(props.field.name, newValue);
    };
    return (
        <div className={classNames("cert-card", props.field.value && "active")}>
            <div className="icon-box">
                <img src={props.icon} className="icon" />
                <span
                    className={classNames(
                        "circle",
                        props.field.value && "check"
                    )}
                    onClick={handleChange}
                />
            </div>
            <h1 className="title">{props.title}</h1>
            <p className="date">{props.date}</p>
            <a className="creds">See Credentials</a>
        </div>
    );
};

export default CertificateCard;
