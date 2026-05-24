import { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button 
        className="button" 
        onClick={() => setLikes(likes + 1)}
      >
        Likes {likes}
      </button>
    </div>
  );
};

export default Card;