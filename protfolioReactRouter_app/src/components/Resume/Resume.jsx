import React from 'react';
import Projects from './../Project/Projects';

const Resume = () => {
  return (
<div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg my-8">
  <h2 className="text-center text-4xl font-bold mb-6">My Curriculum Vitae</h2>

  <div className="mb-6">
    <p className="font-semibold text-lg">Education:</p>
    <ul className="list-disc pl-8 mt-2">
      <li>
        Bachelor of Science in Computer Science and Engineering (Ongoing) - Daffodil International University Dhaka [2020-2024]
      </li>
      <li>Higher Secondary Certificate (H.S.C), Comilla Board [2018] - GPA: 5.00 (Out of 5.00)</li>
      <li>Secondary School Certificate (S.S.C), Comilla Board [2016] - GPA: 5.00 (Out of 5.00)</li>
    </ul>
  </div>

  <div className="mb-6">
    <p className="font-semibold text-lg">Skills:</p>
    <ul className="list-disc pl-8 mt-2">
      <li>Programming Languages: JavaScript, C++</li>
      <li>Web Development: React.js, HTML, Tailwind CSS (Front-end)</li>
      <li>Operating Systems: Windows, Linux</li>
      <li>
        Problem-solving -{' '}
        <a
          href="https://codeforces.com/profile/AliNayan"
          className="text-blue-800 hover:text-orange-700"
        >
          View On Codeforces
        </a>
        ,{' '}
        <a
          href="https://leetcode.com/nayan_/"
          className="text-blue-800 hover:text-orange-700"
        >
          View On LeetCode
        </a>
        ,{' '}
        <a
          href="https://www.beecrowd.com.br/judge/en/profile/461645"
          className="text-blue-800 hover:text-orange-700"
        >
          View On Beecrowd
        </a>
      </li>
      <li>Language: English, Bengali (Native)</li>
    </ul>
  </div>

  <div className="mb-6">
    <p className="font-semibold text-lg">Projects:</p>
    <ul className="list-disc pl-8 mt-2">
      <li>Modern Blog Platform</li>
      <li>E-Learning System</li>
      <li>Portfolio</li>
      <li>E-commerce site</li>
    </ul>
    <p className="mt-2">
      <span className="font-semibold">Technologies Used:</span> JavaScript, React.js, HTML, CSS, AppWrite
    </p>
  </div>

  <a
    href="https://drive.google.com/file/d/1_IqNy9ZOXrec5GV-jlCF0RDoS08CH58Q/view?usp=sharing"
    download
    className="block text-center text-xl text-blue-800 hover:text-orange-700"
  >
    Download CV
  </a>
</div>


  );
};

export default Resume;
