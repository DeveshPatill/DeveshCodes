import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'resume', 'Devesh-Patil-Resume.pdf');
  
  try {
    const fileBuffer = fs.readFileSync(filePath);
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Devesh-Patil-Resume.pdf"',
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch {
    return new NextResponse('Resume not found', { status: 404 });
  }
}