import React from "react";

export default function Experiences() {
  return (
    <div class="my-2 not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
      <table class="w-full table-auto border-collapse text-sm">
        <thead>
          <tr class="border-b border-gray-200 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200">
            <th class="p-3 pl-8">
              Period
            </th>
            <th class="p-3 pl-8">
              Position / Role
            </th>
            <th class="p-3 pl-8">
              Company / Organization
            </th>
            <th class="p-3 pl-8">
              Key Responsabilities
            </th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800">
          <tr class="border-b border-gray-100 text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <td class="p-4 pl-8">
              May 2024 - Juin 2024
            </td>
            <td class="p-4 pl-8">
              Fullstack Developer (Internship)
            </td>
            <td class="p-4 pl-8">
              Recycle Ta Planète Solidarité
            </td>
            <td class="p-4 pl-8">
              Developed a booking website and a Python application for stock management.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
