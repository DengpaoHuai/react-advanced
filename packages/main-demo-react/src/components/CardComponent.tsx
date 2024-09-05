type CardComponentProps = {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
};

const CardComponent: React.FC<CardComponentProps> = ({
  title = "Card Title",
  description = "Card Description",
  image = "https://via.placeholder.com/150",
  onClick = () => {},
}) => {
  return (
    <div>
      <div className="card" onClick={onClick}>
        <img src={image} alt={title} style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{title}</b>
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
