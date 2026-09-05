import Button from "./Button";

export default function Card({
  title,
  description,
  image,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-img" />}

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>

        <Button onClick={onButtonClick}>{buttonText}</Button>
      </div>
    </div>
  );
}
