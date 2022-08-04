export interface Job {
  title: JobTitle;
  url: JobUrl;
}

export type JobTitle = string;
export type JobUrl = string;
export type Jobs = Job[];
