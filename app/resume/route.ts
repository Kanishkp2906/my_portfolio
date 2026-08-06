import { redirect } from 'next/navigation'

const RESUME_URL =
  'https://drive.google.com/file/d/1udR5rUdxdjIzi4q3TR4MP8sak-DzckWb/view?usp=sharing'

export async function GET() {
  redirect(RESUME_URL)
}
