import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margin = 50;
  let y = height - margin;
  const lineHeight = 16;
  const sectionGap = 24;

  const drawText = (text: string, x: number, y: number, size = 11, fontRef = font, color = rgb(0, 0, 0)) => {
    page.drawText(text, { x, y, size, font: fontRef, color });
  };

  const drawSection = (title: string, x: number, y: number) => {
    drawText(title, x, y, 14, fontBold, rgb(0.2, 0.3, 0.5));
    return y - lineHeight;
  };

  const drawBullet = (text: string, x: number, y: number, size = 11) => {
    drawText('\u2022 ' + text, x, y, size);
    return y - lineHeight;
  };

  const drawWrappedText = (text: string, x: number, y: number, maxWidth: number, size = 11) => {
    const words = text.split(' ');
    let line = '';
    for (const word of words) {
      const testLine = line + word + ' ';
      const textWidth = font.widthOfTextAtSize(testLine, size);
      if (textWidth > maxWidth && line !== '') {
        drawText(line, x, y, size);
        y -= lineHeight;
        line = word + ' ';
      } else {
        line = testLine;
      }
    }
    if (line) {
      drawText(line, x, y, size);
      y -= lineHeight;
    }
    return y;
  };

  // Header
  drawText('DEVESH VIJAY PATIL', margin, y, 24, fontBold, rgb(0.2, 0.3, 0.5));
  y -= lineHeight * 1.5;
  drawText('Full-Stack Developer | Software Developer | AI Enthusiast', margin, y, 12, font, rgb(0.4, 0.4, 0.4));
  y -= lineHeight;
  drawText('Mumbai, Maharashtra, India', margin, y, 11, font, rgb(0.4, 0.4, 0.4));
  y -= lineHeight;
  drawText('patildevesh677@gmail.com  |  +91 9833142939', margin, y, 11, font, rgb(0.4, 0.4, 0.4));
  y -= lineHeight;
  drawText('GitHub: github.com/DeveshPatill  |  LinkedIn: linkedin.com/in/devp21/', margin, y, 11, font, rgb(0.4, 0.4, 0.4));
  y -= sectionGap;

  // Professional Summary
  y = drawSection('PROFESSIONAL SUMMARY', margin, y);
  y = drawWrappedText(
    'Software Developer with an M.Sc. in Information Technology (AI Specialization) and experience developing web applications using Python, Django, Flask, React.js, SQL, MongoDB, and REST APIs. Skilled in full-stack development, database management, authentication systems, API integration, and building scalable software solutions. Passionate about full-stack development, artificial intelligence, and building practical technology solutions.',
    margin, y, width - 2 * margin
  );
  y -= sectionGap;

  // Education
  y = drawSection('EDUCATION', margin, y);
  
  drawText('Master of Science in Information Technology', margin, y, 12, fontBold);
  y -= lineHeight;
  drawText('Mumbai University \u2013 UDIT, Mumbai, Maharashtra', margin, y, 11, font);
  y -= lineHeight;
  drawText('Specialization: Artificial Intelligence | August 2024 \u2013 April 2026', margin, y, 11, font);
  y -= lineHeight * 1.5;

  drawText("Bachelor of Science in Information Technology", margin, y, 12, fontBold);
  y -= lineHeight;
  drawText("St. Rock's Degree College of Commerce and Science, Mumbai, Maharashtra", margin, y, 11, font);
  y -= lineHeight;
  drawText('July 2021 \u2013 May 2024', margin, y, 11, font);
  y -= lineHeight * 1.5;

  drawText('Master in Data Science & Analytics with Artificial Intelligence', margin, y, 12, fontBold);
  y -= lineHeight;
  drawText('IT Vedant Institute, Mumbai', margin, y, 11, font);
  y -= lineHeight;
  drawText('July 2024 \u2013 May 2025', margin, y, 11, font);
  y -= lineHeight * 1.5;

  drawText('Fullstack Developer Course (Currently Pursuing)', margin, y, 12, fontBold);
  y -= lineHeight;
  drawText('DADE, Mumbai', margin, y, 11, font);
  y -= sectionGap;

  // Experience
  y = drawSection('EXPERIENCE', margin, y);

  drawText('Backend Intern (Django) \u2013 Perpex', margin, y, 12, fontBold);
  y -= lineHeight;
  drawText('Remote, Mumbai, Maharashtra | July 2025 \u2013 October 2025', margin, y, 11, font);
  y -= lineHeight;
  y = drawWrappedText('Developed backend modules and APIs using Django for SaaS-based applications. Collaborated in an Agile environment, implementing features and improving application functionality.', margin + 10, y, width - 2 * margin - 10);
  y -= lineHeight;

  drawText('Backend Developer Intern \u2013 AI Chef Master', margin, y, 12, fontBold);
  y -= lineHeight;
  drawText('Remote, Mumbai, Maharashtra | April 2025 \u2013 July 2025', margin, y, 11, font);
  y -= lineHeight;
  y = drawWrappedText('Developed and maintained REST APIs using Flask and MongoDB for AI-powered web applications. Collaborated with frontend and backend teams to build scalable, high-performance solutions.', margin + 10, y, width - 2 * margin - 10);
  y -= sectionGap;

  // Projects
  y = drawSection('PROJECTS', margin, y);

  drawText('SaaS AI Agent Platform', margin, y, 12, fontBold);
  y -= lineHeight;
  drawText('Technologies: Next.js, React.js, PostgreSQL, tRPC, OAuth, OpenAI, WebRTC, Stream SDK', margin, y, 11, font);
  y -= lineHeight;
  y = drawWrappedText('Developed a full-stack SaaS AI agent platform using Next.js, React, and PostgreSQL with OAuth-based authentication and scalable APIs. Integrated AI features including transcription, summarization, and real-time video calling using OpenAI and Stream SDK.', margin + 10, y, width - 2 * margin - 10);
  y -= lineHeight * 1.5;

  drawText('E-Commerce Website', margin, y, 12, fontBold);
  y -= lineHeight;
  drawText('Technologies: React.js, Tailwind CSS, JavaScript, Local Storage', margin, y, 11, font);
  y -= lineHeight;
  y = drawWrappedText('Built a responsive e-commerce application using React.js and Tailwind CSS. Implemented product filtering, wishlist, shopping cart, and Local Storage functionality. Developed reusable components and optimized user experience across devices.', margin + 10, y, width - 2 * margin - 10);
  y -= lineHeight * 1.5;

  drawText('Student Study Portal', margin, y, 12, fontBold);
  y -= lineHeight;
  drawText('Technologies: Python, Django', margin, y, 11, font);
  y -= lineHeight;
  y = drawWrappedText('Built a Django-based Student Study Portal with notes, to-do, homework, and book management features. Integrated APIs such as Wikipedia and Dictionary APIs and unit conversion tools for enhanced learning support.', margin + 10, y, width - 2 * margin - 10);
  y -= sectionGap;

  // Technical Skills
  y = drawSection('TECHNICAL SKILLS', margin, y);

  const skills = [
    'Languages: C, Python, Java (Basics), JavaScript/ES6+',
    'Frontend: HTML5, CSS3, React.js, Bootstrap, Tailwind CSS',
    'Backend: Django, Flask, Node.js, Express.js, Next.js, REST APIs, JWT Authentication',
    'Databases: MySQL, MongoDB, PostgreSQL, SQL',
    'Data & Visualization: Power BI, Tableau, Advanced Excel',
    'Tools & Cloud: Git, GitHub, Postman, CI/CD, Cloudinary, VS Code, Vercel, Render',
    'AI/ML: Artificial Intelligence, Machine Learning Theory, OpenAI, Claude AI',
  ];

  for (const skill of skills) {
    y = drawBullet(skill, margin + 10, y);
  }
  y -= sectionGap;

  // Certifications
  y = drawSection('CERTIFICATIONS', margin, y);

  const certs = [
    'SQL (HackerRank)',
    'SQL Basic (HackerRank)',
    'SQL Basic (Udemy)',
    'Python',
    'Data Fundamentals',
    'Machine Learning Essentials',
    'Data Science & AI Mastery',
    'Research Methodology',
  ];

  for (const cert of certs) {
    y = drawBullet(cert, margin + 10, y);
  }

  const pdfBytes = await pdfDoc.save();

  const outputPath = path.join(process.cwd(), 'public', 'resume', 'Devesh-Patil-Resume.pdf');
  fs.writeFileSync(outputPath, Buffer.from(pdfBytes));
  console.log('Resume PDF generated at:', outputPath);
  console.log('File size:', pdfBytes.length, 'bytes');
}

generateResume().catch(console.error);