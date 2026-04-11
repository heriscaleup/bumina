import { redirect } from 'next/navigation';

// Halaman ini sudah dipindahkan ke halaman utama (/)
export default function LandingRedirect() {
  redirect('/');
}
