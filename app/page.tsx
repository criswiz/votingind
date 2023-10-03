import Image from "next/image";
import LeftButton from "./components/leftbutton";
import RightButton from "./components/rightbutton";

import { CandidateType } from "../app/components/candidatecard";
import CandidateCard from "./components/candidatecard";

const candidatesData: CandidateType[] = [
  {
    id: 0,
    candidateName: "Hon. Kennedy Agyepong",
    src: "/ken_agyapong.webp",
    totalVotes: 12,
  },
  {
    id: 1,
    candidateName: "Kwadwo Nsafoah Poku",
    src: "/kwadwo_nsafoah.webp",
    totalVotes: 120,
  },
  {
    id: 2,
    candidateName: "Dr. Mahamudu Bawumia",
    src: "/bawumia.jpeg",
    totalVotes: 4021,
  },
  {
    id: 3,
    candidateName: "Kwabena Agyei Agyepong",
    src: "/kwabena_agyei.jpeg",
    totalVotes: 9803,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex items-center justify-center w-full min-h-screen">
        <LeftButton />
        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8 sm:gap-2">
          {candidatesData ? (
            candidatesData.map((candidate: CandidateType) => (
              <CandidateCard
                candidateName={candidate.candidateName}
                totalVotes={candidate.totalVotes}
                key={candidate.id}
                src={candidate.src}
              />
            ))
          ) : (
            <p>No candidates data available.</p>
          )}
        </div>
        <RightButton />
      </div>
    </main>
  );
}
