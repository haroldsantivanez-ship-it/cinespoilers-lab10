import { useState } from 'react';

interface MovieProps {
  title: string;
  genre: string;
}

const Movie = ({ title, genre }: MovieProps) => {
  const [tickets, setTickets] = useState(0);

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{genre}</p>
      <button
        className="button"
        onClick={() => setTickets(tickets + 1)}
      >
        Tickets: {tickets}
      </button>
    </div>
  );
};

export default Movie;