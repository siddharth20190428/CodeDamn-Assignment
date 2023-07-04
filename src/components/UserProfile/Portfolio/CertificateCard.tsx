import { CertificateItem } from "../../../types/portfolioTypes";

const CertificateCard: React.FC<CertificateItem> = (props: CertificateItem) => {
    return (
        <div className="cert-card">
            <img src={props.icon} className="icon" alt="" />
            <h1 className="title">{props.title}</h1>
            <p className="date">{props.date}</p>
            <a className="creds">See Credentials</a>
        </div>
    );
};

export default CertificateCard;
