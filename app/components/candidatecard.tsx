"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

export type CandidateType = {
  id?: number;
  candidateName?: string;
  src?: string | StaticImageData | undefined;
  totalVotes?: number;
};

const candidatecard = ({ candidateName, src, totalVotes }: CandidateType) => {
  return (
    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 p-6"
      >
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={src as string}
          alt=""
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {candidateName}
          </h5>
          <p className="mb-3 font-normal text-gray-700">Votes: {totalVotes}</p>
        </div>
      </a>
    </div>
  );
};

export default candidatecard;
