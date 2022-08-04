import { FINTUAL_PAGE_URL } from './constants';
import { JobsService, BrowserService } from './services';

const browser = await BrowserService.openBrowser();
const page = await BrowserService.navigateTo(browser, FINTUAL_PAGE_URL);

const jobs = await JobsService.getAllJobs(page);

console.log(`Total jobs: ${jobs.length}`);

const interestingJobs = JobsService.filterInterestingJobs(jobs);

console.log({ interestingJobs });

await BrowserService.closeBrowser(browser);
