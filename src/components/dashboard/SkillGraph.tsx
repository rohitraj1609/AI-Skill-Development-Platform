import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SkillGraphProps {
  skills: Array<{ name: string; level: number }>;
}

export function SkillGraph({ skills }: SkillGraphProps) {
  const data = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Skill Level',
        data: skills.map(skill => (skill.level * 20)), // Convert 1-5 to percentage
        backgroundColor: 'rgba(79, 70, 229, 0.6)',
        borderColor: 'rgb(79, 70, 229)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Your Skill Assessment Results',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            const level = Math.round(value / 20); // Convert percentage back to 1-5 scale
            const labels = ['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert'];
            return `Level ${level}/5 (${labels[level - 1]})`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Proficiency Level (%)',
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
}