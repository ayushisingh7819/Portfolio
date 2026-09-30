import fs from 'fs';
import path from 'path';

// Generate a valid minimal PDF file with Ayushi Singh's resume text
const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 750 >>
stream
BT
/F1 20 Tf
50 730 Td
(AYUSHI SINGH - RESUME) Tj
0 -30 Td
/F1 12 Tf
(AI/ML & Full-Stack Developer) Tj
0 -20 Td
(Email: ayushisingh7819@gmail.com | Phone: +91 9335247487) Tj
0 -15 Td
(GitHub: https://github.com/ayushisingh7819 | LinkedIn: https://www.linkedin.com/in/ayushi-singh-792969343/) Tj
0 -30 Td
/F1 14 Tf
(EDUCATION) Tj
0 -20 Td
/F1 11 Tf
(B.Tech CSE \(AI-ML\) - Lovely Professional University \(2025-2029\) | CGPA: 8.3) Tj
0 -15 Td
(Class XII - Sant Atulanand Convent School, Varanasi \(89%\)) Tj
0 -15 Td
(Class X - Sant Atulanand Convent School, Varanasi \(79%\)) Tj
0 -30 Td
/F1 14 Tf
(FEATURED PROJECTS) Tj
0 -20 Td
/F1 11 Tf
(Zenora - AI-Powered Student Platform \(React.js, Gemini API, Firebase, Netlify\)) Tj
0 -15 Td
(GramSetu - AI-Powered Farmer-to-Market Platform \(React, Node, Express, MongoDB, OpenAI API\)) Tj
0 -30 Td
/F1 14 Tf
(ACHIEVEMENTS & CERTIFICATIONS) Tj
0 -20 Td
/F1 11 Tf
(3rd Position - Code-A-Thon 24-Hour Hackathon \(LPU, Sep 2025\)) Tj
0 -15 Td
(Top 7 Finalist - HACK AI Season 2 \(LPU, Apr 2026\)) Tj
0 -15 Td
(Microsoft Certification: Manage Secrets in Java Applications \(Jan 2026\)) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000001046 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
1115
%%EOF`;

const destPath = path.resolve('public', 'Ayushi_Singh_Resume.pdf');
fs.writeFileSync(destPath, pdfContent);
console.log('Generated Ayushi_Singh_Resume.pdf successfully at:', destPath);
