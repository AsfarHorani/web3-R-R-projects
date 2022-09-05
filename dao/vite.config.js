import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  define:{
    global:{},
    process:{
      'env':{}
    }
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})
const mySecret = process.env.PRIVATE_KEY
const mySecret2 = process.env.WALLET_ADDRESS

console.log(mySecret,mySecret2)