import React from "react";

export default function Experiences() {
  const infos = [
    {
      year: "Soon",
      degree: "BTS CIEL (Option A) - IT and Electronics",
      institution: "Lycée Polyvalent Les Lombards (Troyes)",
    },
    {
      year: "2022",
      degree: "Baccalauréat STMG (Honors: Fairly Good)",
      institution: "Lycée Irène et Frédéric Joliot-Curie (Romilly-sur-Seine)",
    },
    {
      year: "2018",
      degree: "Diplôme National du Brevet (Honors: Very Good)",
      institution: "Collège Paul Langevin (Romilly-sur-Seine)",
    },
  ];

  return (
    <div class="my-2 not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
      <table class="w-full h-full table-auto border-collapse text-[12px] sm:text-sm">
        <thead>
          <tr class="border-b border-gray-200 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200">
            <th class="py-2 pl-8">Year</th>
            <th class="py-2 pl-8">Degree</th>
            <th class="py-2 pl-8">Institution</th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800">
          {infos.map((info, index) => (
            <tr key={index} class="border-b border-gray-100 text-gray-500 dark:border-gray-700 dark:text-gray-400">
              <td class="py-2 pl-8">{info.year}</td>
              <td class="py-2 pl-8">{info.degree}</td>
              <td class="py-2 pl-8">{info.institution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
