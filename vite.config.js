import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/test8/', // تأكد من استخدام اسم المستودع هنا
  build: {
    outDir: 'build',
  },
});
