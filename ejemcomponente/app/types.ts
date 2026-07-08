export interface Candidate {
  id: number;
  name: string;
  image: string;
  votes: number;
}

export interface CandidateCardProps {
  candidate: Candidate;
  onVote: (candidateId: number) => void;
}

export interface ElectionDashboardProps {
 title: string;
}