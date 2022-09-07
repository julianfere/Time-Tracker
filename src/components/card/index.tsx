import "./index.scss";
import { ReactComponent as Options } from "../../assets/icon-ellipsis.svg";
import { IconHelper } from "../../helpers/icon-helper";

type CardProps = {
  title: string;
  bodyContent: string;
  footerContent: string;
  type: string;
};

const Card = ({ title, bodyContent, footerContent, type }: CardProps) => {
  const Icon = IconHelper(type);

  return (
    <div className="card-container">
      <div className={`top-card ${type}`}>
        <Icon />
      </div>
      <section className="card">
        <header className="card-header">
          <h1 className="card-title">{title}</h1>
          <Options />
        </header>
        <section>
          <p className="card-text">{bodyContent}</p>
        </section>
        <footer>
          <p className="card-footer-text">{footerContent}</p>
        </footer>
      </section>
    </div>
  );
};

export { Card };
