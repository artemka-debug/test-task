import { config } from 'dotenv';
config();

export const gitlabToken = process.env.GITLAB_TOKEN || '';
