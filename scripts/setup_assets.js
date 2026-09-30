import fs from 'fs';
import path from 'path';

function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Ensure asset directories exist
createDir(path.resolve('src', 'assets', 'resume'));
createDir(path.resolve('src', 'assets', 'certificates', 'code-a-thon'));
createDir(path.resolve('src', 'assets', 'certificates', 'hack-ai'));
createDir(path.resolve('src', 'assets', 'certificates', 'microsoft'));

createDir(path.resolve('public', 'assets', 'resume'));
createDir(path.resolve('public', 'assets', 'certificates'));

// Function to generate standard PDF content
function generatePDFContent(title, subtitle, details) {
  return `%PDF-1.4
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
<< /Length 650 >>
stream
BT
/F1 20 Tf
50 730 Td
(${title}) Tj
0 -30 Td
/F1 12 Tf
(${subtitle}) Tj
0 -25 Td
/F1 11 Tf
(${details[0] || ''}) Tj
0 -18 Td
(${details[1] || ''}) Tj
0 -18 Td
(${details[2] || ''}) Tj
0 -18 Td
(${details[3] || ''}) Tj
0 -18 Td
(${details[4] || ''}) Tj
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
0000000946 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
1015
%%EOF`;
}

// 1. Resume PDF
const resumeContent = generatePDFContent(
  'AYUSHI SINGH - CURRICULUM VITAE',
  'AI/ML & Full-Stack Developer | LPU B.Tech CSE (AI-ML)',
  [
    'Email: ayushisingh7819@gmail.com | Phone: +91 9335247487',
    'GitHub: https://github.com/ayushisingh7819 | LinkedIn: https://www.linkedin.com/in/ayushi-singh-792969343/',
    'LeetCode: https://leetcode.com/u/ayushi-singh07/',
    'Education: B.Tech CSE (AI-ML) @ LPU (CGPA: 8.3) | Class XII: 89% | Class X: 79%',
    'Target Opportunities: Web Development, Full-Stack & AI/ML Internships'
  ]
);

fs.writeFileSync(path.resolve('src', 'assets', 'resume', 'Ayushi_Singh_Resume.pdf'), resumeContent);
fs.writeFileSync(path.resolve('public', 'assets', 'resume', 'Ayushi_Singh_Resume.pdf'), resumeContent);
fs.writeFileSync(path.resolve('public', 'Ayushi_Singh_Resume.pdf'), resumeContent);

// 2. Code-A-Thon Certificate PDF
const codeathonContent = generatePDFContent(
  'CERTIFICATE OF ACHIEVEMENT - CODE-A-THON 2025',
  'Lovely Professional University - 24-Hour Hackathon',
  [
    'This is to certify that AYUSHI SINGH secured 3rd Position',
    'in the university-wide Code-A-Thon 24-hour programming hackathon.',
    'Awarded: September 2025',
    'Category: Full-Stack Engineering & Rapid Development',
    'Verification ID: LPU-CODE-2025-003'
  ]
);
fs.writeFileSync(path.resolve('src', 'assets', 'certificates', 'code-a-thon', 'code-a-thon-certificate.pdf'), codeathonContent);
fs.writeFileSync(path.resolve('public', 'assets', 'certificates', 'code-a-thon.pdf'), codeathonContent);

// 3. HACK AI Certificate PDF
const hackAIContent = generatePDFContent(
  'CERTIFICATE OF EXCELLENCE - HACK AI SEASON 2',
  'Lovely Professional University - National Level AI Hackathon',
  [
    'This is to certify that AYUSHI SINGH achieved TOP 7 FINALIST status',
    'in HACK AI Season 2 for constructing an exemplary AI-powered application.',
    'Awarded: April 2026',
    'Category: Artificial Intelligence & LLM Application Integration',
    'Verification ID: LPU-HACKAI-2026-007'
  ]
);
fs.writeFileSync(path.resolve('src', 'assets', 'certificates', 'hack-ai', 'hack-ai-certificate.pdf'), hackAIContent);
fs.writeFileSync(path.resolve('public', 'assets', 'certificates', 'hack-ai.pdf'), hackAIContent);

// 4. Microsoft Certificate PDF
const msftContent = generatePDFContent(
  'MICROSOFT CERTIFIED CREDENTIAL',
  'Manage Secrets in Java Applications - Zero Trust & Zero Secrets',
  [
    'This credential verifies that AYUSHI SINGH has demonstrated mastery in',
    'implementing Zero Trust architecture and secret management in enterprise apps.',
    'Awarded: January 2026',
    'Issuer: Microsoft Learn',
    'Verification ID: MSFT-SEC-2026-0891'
  ]
);
fs.writeFileSync(path.resolve('src', 'assets', 'certificates', 'microsoft', 'microsoft-secrets-certificate.pdf'), msftContent);
fs.writeFileSync(path.resolve('public', 'assets', 'certificates', 'microsoft.pdf'), msftContent);

console.log('CV & Certificate asset files created successfully!');
