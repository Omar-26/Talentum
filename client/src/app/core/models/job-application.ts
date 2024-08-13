export interface JobApplication {
  id: number;
  userId: number;
  jobId: number;
  reasonOfHire: string;
  linkedInLink: string;
  githubLink: string;
  qualification: string;
  status: string;
  availableStartDate: Date;
  appliedAt: Date;
}
