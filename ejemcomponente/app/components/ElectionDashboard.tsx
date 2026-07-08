"use client";

import React, { useState } from "react";
import CandidateCard from "./CandidateCard";
import type { Candidate, ElectionDashboardProps } from "../types";

const initialCandidates: Candidate[] = [
    {
        id: 1,
        name: "Candidato A",
        votes: 0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQSJo0nRukTSfgLkmPjt3vqEyoF5Q70zXUuE6XGZ8Wg&s=10"
    },
    {
        id: 2,
        name: "Candidato B",
        votes: 0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJuvSZn89O5ykTh7gYvJWJ9cAzZ6AsCsCjPGyholp4w&s=10"
    },
    {
        id: 3,
        name: "Candidato C",
        votes: 0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwZmpjD4hJjY1Ig8QO4x4_8ECTgPmvMQTJYt68d-_B5ey4yGShg__mDE&s=10"
    }
];

export default function ElectionDashboard({ title }: ElectionDashboardProps) {

    const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);

    const handleVote = (id: number) => {
        setCandidates(
            candidates.map(candidate =>
                candidate.id === id
                    ? { ...candidate, votes: candidate.votes + 1 }
                    : candidate
            )
        );
    };

    const totalVotes = candidates.reduce(
        (sum, c) => sum + c.votes,
        0
    );

    const porcentaje = (votes: number) =>
        totalVotes === 0
            ? 0
            : ((votes / totalVotes) * 100).toFixed(1);

    const maxVotes = Math.max(...candidates.map(c => c.votes));

    const winners = candidates.filter(c => c.votes === maxVotes);

    const isTie = winners.length > 1 && maxVotes > 0;

    const winner = winners[0];

    return (
        <div>

            <h1
                style={{
                    textAlign: "center",
                    fontSize: 38,
                    fontWeight: 800,
                    color: "#2563eb",
                    marginBottom: 10
                }}
            >
                {title}
            </h1>

            {totalVotes === 0 ? (
                <p
                    style={{
                        textAlign: "center",
                        fontSize: "18px",
                        color: "#374151",
                        marginBottom: "30px"
                    }}
                >🗳️ Nadie ha votado aún.</p>
            ) : isTie ? (
                <p>
                    🤝 Empate entre{" "}
                    {winners.map(w => w.name).join(" y ")}
                    {" "}con {maxVotes} votos.
                </p>
            ) : (
                <p>
                    🏆 Ganador: {winner.name} con {winner.votes} votos.
                </p>
            )}

            <div
                style={{
                   display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "25px"
                }}
            >
                {candidates.map(candidate => (
                    <div
                        key={candidate.id}
                        style={{ width: 250 }}
                    >
                        <CandidateCard
                            candidate={candidate}
                            onVote={handleVote}
                        />

                        <div className="progress">
                            <div
                                className="fill"
                                style={{
                                    width: `${porcentaje(candidate.votes)}%`
                                }}
                            />
                        </div>

                        <p
                            style={{
                                textAlign: "center",
                                fontWeight: "bold"
                            }}
                        >
                            {porcentaje(candidate.votes)}%
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
}