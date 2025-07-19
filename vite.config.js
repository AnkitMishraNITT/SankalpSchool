import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: 'https://ankitmishranitt.github.io/SankalpSchool/', // 👈 IMPORTANT: use your repo name here
})


