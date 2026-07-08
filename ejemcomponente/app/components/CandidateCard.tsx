import React from 'react';

import type { CandidateCardProps } from '../types';
import './CandidateCard.css';

export default function CandidateCard({ candidate, onVote }: CandidateCardProps) {

  return (
    <div className="card">
    <img src={candidate.image} alt={candidate.name} width={100} height={100} />
      <h3 className="candidate-name">{candidate.name}</h3>
      <p className="votes">Votes: {candidate.votes}</p>
      <button className="btn-votar" onClick={() => onVote(candidate.id)}>
        Votar
      </button>
    </div>
  );
}