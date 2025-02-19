import React from "react";

export default function Experiences() {
  const infos = [
    {
      period: "February 2025 - Now",
      position: "Versatile employee (Student job)",
      company: "Carrefour Market (Romilly-Sur-Seine)",
      responsabilities: "Responsible for processing customer payments and restocking shelves.",
    },
    {
      period: "May 2024 - June 2024",
      position: "Fullstack Developer (Internship)",
      company: "Recycle Ta Planète Solidarité",
      responsabilities: "Developed a booking website and a Python application for stock management.",
    },
    {
      period: "July 2023 - July 2023",
      position: "Archivist (Student job)",
      company: "Office Notarial (Nogent-Sur-Seine)",
      responsabilities: "Digitization and archiving of customer files.",
    },
    {
      period: "July 2022 - July 2022",
      position: "Archivist (Student job)",
      company: "Office Notarial (Nogent-Sur-Seine)",
      responsabilities: "Digitization and archiving of customer files.",
    },
  ];

  return (
    <div class="my-2 not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
      <table class="w-full h-full table-auto border-collapse text-[12px] sm:text-sm">
        <thead>
          <tr class="border-b border-gray-200 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200">
            <th class="py-2 pl-8">Period</th>
            <th class="py-2 pl-8">Position / Role</th>
            <th class="py-2 pl-8">Company / Organization</th>
            <th class="py-2 pl-8">Key Responsabilities</th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800">
          {infos.map((info, index) => (
            <tr key={index} class="border-b border-gray-100 text-gray-500 dark:border-gray-700 dark:text-gray-400">
              <td class="py-2 pl-8">{info.period}</td>
              <td class="py-2 pl-8">{info.position}</td>
              <td class="py-2 pl-8">{info.company}</td>
              <td class="py-2 pl-8">{info.responsabilities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
