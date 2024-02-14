const clientPrimary = (
  <span>
    <em>Headfield Solutions Pvt. Ltd. - Noida UP, India</em>&nbsp; (Virtual Assistant)
    <br /> <strong> Northwest Hardwoods Inc - HR Executive </strong>
  </span>
);
const clientSecondary = (
  <strong>
    PMI Serves - Operations Executive
  </strong>
);

export const resumeDetails = {
  resumeTitle: "Resume",
  resumeIntro: "This is just a basic overview of my resume. Please click on ",
  resumeSummary:
    "I have Overall, 5 years of experience in HR and Operations, I have honed a comprehensive skill set that spans various facets of organizational management. In HR, I have adeptly handled recruitment, onboarding, performance management, and employee relations, ensuring a cohesive and productive work environment. My proficiency in operations management has allowed me to optimize processes, streamline workflows, and enhance overall efficiency across departments.",
  education: "Education",
  masters: {
    mastersDegree: "Masters of Computers Application",
    mastersYear: "2022-2024",
    mastersCollege: "Dr. A.P.J Abdul Kalam Technical University, Lucknow, UP",
  },
  bachelors: {
    bachelorsDegree: "Bachelors in Business Administration",
    bachelorsYear: "2020-2023",
    bachelorsCollege: "CCS University, Meerut, UP",
  },
  certification: {
    certificationDegree: "Full Stack Development (MERN)",
    certificationYear: "2020-2021",
    certificationCollege: "CETPA InfoTech Pvt Ltd, Noida, UP ",
  },
  professionalExperienceTitle: "Recent Professional Experience",
  experience: [
    {
      experienceTitle: "HR | Operations Specialist | Virtual Assistant",
      year: "Nov 2022 - Oct 2023",
      role: [
        {
          location: clientPrimary,
          responsibilities: [
            {
              desc: "Responsible for tracking/monitoring 1200+ employee’s performance with the help of ‘Awardco’.",
            },
            {
              desc: "Responsible for maintaining and updating employee details for new and existing hires.",
            },
            {
              desc: "Created monthly reports & presentations for HRBP to represent every department’s current performance & area of improvement.",
            },
            {
              desc: "Created monthly reports for Head of Departments to show & help them understand current performance & area of improvements.",
            },
            {
              desc: "Assisted HR Manager in maintaining documents, recruitment & other things related to their work.",
            },
          ],
        },
        {
          location: clientSecondary
          ,
          responsibilities: [
            {
              desc: "Responsible for managing Airbnb regarding listings, calendar management & coordination with guests regarding their check-ins, check-out, queries/concerns, etc.",
            },
            {
              desc: "Managed cleaning team to make sure all the apartments/units are available for service.",
            },
            {
              desc: "Created a monthly cleaner’s report to monitor everyone’s performance.",
            },
            {
              desc: "Assisted my client in managing their emails & calendar.",
            },
            {
              desc: "Created posts in free time for their Facebook page with the help of Canva.",
            },
          ],
        },
      ],
    },
  ],
};
