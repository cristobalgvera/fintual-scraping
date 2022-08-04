import { Page } from 'playwright';
import { experienceWords, expertiseWords, jobWords } from '../constants';
import type { Job, Jobs, JobTitle } from '../types';

async function getAllJobs(page: Page): Promise<Jobs> {
  return await page.$$eval(
    '.posting-title',
    (jobTags: HTMLAnchorElement[]): Jobs =>
      jobTags.map(
        (jobTag): Job => ({
          title: jobTag.querySelector('h5')?.innerText ?? '',
          url: jobTag.href,
        }),
      ),
  );
}

function filterInterestingJobs(jobs: Jobs): Jobs {
  return jobs.reduce((groupedJobs, job) => {
    const isInteresting = checkInterest(job.title);

    if (isInteresting) groupedJobs.push(job);

    return groupedJobs;
  }, [] as Jobs);
}

function checkInterest(jobTitle: JobTitle): boolean {
  const checkJob = (words: string[]) =>
    checkWordInclusion(words, jobTitle.toLocaleLowerCase());

  const isJobInteresting = checkJob(jobWords);
  const isExperienceInteresting = checkJob(experienceWords);
  const isExpertiseInteresting = checkJob(expertiseWords);

  return isJobInteresting && isExpertiseInteresting && isExperienceInteresting;
}

function checkWordInclusion(words: string[], jobTitle: JobTitle): boolean {
  return words
    .map((word) => word.toLocaleLowerCase())
    .some((word) => jobTitle.includes(word));
}

export const JobsService = {
  getAllJobs,
  filterInterestingJobs,
};
