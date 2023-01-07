import { GradientText } from "./UI";

interface ResumeProps {
  company: string;
  companyLink?: string;
  position: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
}

const ResumeItem: React.FC<ResumeProps> = ({
  company,
  companyLink,
  position,
  startDate,
  endDate,
  descriptions,
}) => {
  return (
    <div>
      {companyLink ? (
        <a
          href={companyLink}
          target="_blank"
          className="transition-colors text-3xl hover:text-blue-500 font-bold"
          rel="noreferrer"
        >
          {company}
        </a>
      ) : (
        <h2 className="text-3xl font-bold">{company}</h2>
      )}
      <div className="text-gray-500 dark:text-white flex flex-col lg:flex-row justify-between">
        <h3 className="text-xl font-semibold">{position}</h3>
        <p className="text-lg">
          {startDate}-{endDate}
        </p>
      </div>
      <ul className="list-disc pl-4 md:pl-10 mt-2 text-lg text-gray-500 dark:text-white">
        {descriptions.map((description, index) => (
          <li key={`${company}-description-${index}`}>{description}</li>
        ))}
      </ul>
    </div>
  );
};

const jobList: ResumeProps[] = [
  {
    company: "Neighbor",
    companyLink: "https://neighbor.com",
    position: "Software Engineer",
    startDate: "Jan 2022",
    endDate: "Present",
    descriptions: [
      "Designed, developed, tested, and supported code in React, Ruby On Rails, and Go",
      "Built an in-browser photo editor that saves our company 20+ hours a week in work",
      "Optimized areas of our code base to deliver content to users three times as fast",
      "Collaborated efficiently with a team of engineers and product managers",
    ],
  },
  {
    company: "Naccato Leadership Center",
    companyLink: "https://rpchiro.com/",
    position: "Information Technology Specialist",
    startDate: "Dec 2020",
    endDate: "Dec 2021",
    descriptions: [
      "Managed a database of more than 30,000 clients and enhanced weekly email deliverability to each client",
      "Scripted in Python, C++, and Java to automate tasks for team members and increase daily productivity",
      "Worked with non-technical team members to design user interfaces for the company website",
    ],
  },
  {
    company: "Brigham Young University",
    companyLink: "https://byu.edu",
    position: "Teacher's Assistant",
    startDate: "Sept 2020",
    endDate: "Dec 2020",
    descriptions: [
      "Mentored and taught students in CS 142, which covers the fundamentals of computer programming",
      "Spent one-on-one time with students helping them solve issues with their code and debugging software issues on their computers",
    ],
  },
];

const Resume: React.FC = () => {
  return (
    <div>
      <GradientText className="mb-10" size="4xl">
        Experience
      </GradientText>
      <div className="space-y-10">
        {jobList.map((job, index) => (
          <ResumeItem
            key={`${job.company}-${index}`}
            company={job.company}
            companyLink={job.companyLink}
            position={job.position}
            startDate={job.startDate}
            endDate={job.endDate}
            descriptions={job.descriptions}
          />
        ))}
      </div>
    </div>
  );
};

export default Resume;
