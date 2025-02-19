import React from "react";

export default function Certs() {
  const infos = [
    {
      year: "2024",
      certification: "Pix (633/896)",
      organization: "Pix",
    },
    {
      year: "2024",
      certification: "MOOC",
      organization: "SecNumacadémie (ANSSI)",
    },
  ];

  return (
    <div class="my-2 not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
      <table class="w-full h-full table-auto border-collapse text-[12px] sm:text-sm">
        <thead>
          <tr class="border-b border-gray-200 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200">
            <th class="py-2 pl-8">Year</th>
            <th class="py-2 pl-8">Certification</th>
            <th class="py-2 pl-8">Organization</th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800">
          {infos.map((info, index) => (
            <tr key={index} class="border-b border-gray-100 text-gray-500 dark:border-gray-700 dark:text-gray-400">
              <td class="py-2 pl-8">{info.year}</td>
              <td class="py-2 pl-8">{info.certification}</td>
              <td class="py-2 pl-8">{info.organization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
