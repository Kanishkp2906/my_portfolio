import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const MIME: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif',
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ project: string; file: string }> },
) {
  const { project, file } = await params
  const safeProject = project.replace(/[^a-zA-Z0-9_-]/g, '').replace('..', '')
  const safeFile = file.replace(/[^a-zA-Z0-9._ -]/g, '').replace('..', '')
  const ext = safeFile.toLowerCase().split('.').pop() ?? ''

  const buf = await readFile(join(process.cwd(), 'pictures', safeProject, safeFile))

  return new Response(buf, {
    headers: {
      'Content-Type': MIME[ext] ?? 'application/octet-stream',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}