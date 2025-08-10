import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = process.env.GITHUB_REPOSITORY?.includes('satyamrathod45/onepiece');

export default defineConfig({
  base: isGitHubPages ? '/onepiece/' : '/',
  plugins: [react()],
});
