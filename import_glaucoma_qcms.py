import re
import json
import glob
import os

brain_dir = r"C:\Users\medst\.gemini\antigravity\brain\a0ac7893-5a4e-4219-807d-12293a0927ce"
files = sorted(glob.glob(os.path.join(brain_dir, "QCM_*.md")))

qcms = []
qcm_markdown = ""

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    current_q = None
    current_opts = []
    
    corrections_text = content.split('## 🟢 CORRECTIONS DÉTAILLÉES')[1] if '## 🟢 CORRECTIONS DÉTAILLÉES' in content else ""
    ans_map = {}
    exp_map = {}
    q_num_for_exp = None
    for line in corrections_text.split('\n'):
        match = re.match(r'\*\*Q(\d+)\s*:\s*Réponse[s]?\s*(.*?)\*\*', line)
        if match:
            q_num = match.group(1)
            q_num_for_exp = q_num
            ans_str = match.group(2)
            ans_letters = re.findall(r'[A-E]', ans_str)
            ans_map[q_num] = ans_letters
        match_exp = re.match(r'\*Explication\*\s*:\s*(.*)', line)
        if match_exp and q_num_for_exp:
            exp_map[q_num_for_exp] = match_exp.group(1)
            
    q_num = None
    q_text = ""
    in_q = False
    
    for line in lines:
        if line.startswith('### Q'):
            if current_q:
                qcms.append({
                    "question": current_q,
                    "options": current_opts,
                    "correctAnswers": ans_map.get(q_num, []),
                    "explanation": exp_map.get(q_num, "")
                })
            match = re.match(r'### Q(\d+)\.(.*)', line)
            if match:
                q_num = match.group(1)
                q_text = match.group(2).strip()
            else:
                q_num = "X"
                q_text = line.replace('### ', '')
            current_q = q_text
            current_opts = []
            in_q = True
        elif in_q and line.startswith('- ☐') or line.startswith('- ☑') or line.startswith('- ['):
            opt_text = re.sub(r'^- (☐|☑|\[\s*\]|\[x\])\s*', '', line).strip()
            # Extract letter A, B, C, D
            opt_match = re.match(r'^([A-E])\.\s*(.*)', opt_text)
            if opt_match:
                current_opts.append({"id": opt_match.group(1), "text": opt_match.group(2)})
            else:
                # generate id if not found
                letter = chr(65 + len(current_opts))
                current_opts.append({"id": letter, "text": opt_text})
        elif line.startswith('---'):
            if current_q:
                qcms.append({
                    "question": current_q,
                    "options": current_opts,
                    "correctAnswers": ans_map.get(q_num, []),
                    "explanation": exp_map.get(q_num, "")
                })
                current_q = None
            in_q = False

if current_q:
    qcms.append({
        "question": current_q,
        "options": current_opts,
        "correctAnswers": ans_map.get(q_num, []),
        "explanation": exp_map.get(q_num, "")
    })

for idx, qcm in enumerate(qcms):
    qcm_markdown += f"### QCM {idx+1}\n**{qcm['question']}**\n"
    for opt in qcm['options']:
        qcm_markdown += f"- {opt['id']}. {opt['text']}\n"
    qcm_markdown += f"\n<details><summary><b>Réponse</b></summary>\nRéponse(s) correcte(s) : {', '.join(qcm['correctAnswers'])}\nExplication: {qcm['explanation']}\n</details>\n\n"

js_content = f"""
export const glaucomeQcmMarkdown = {json.dumps(qcm_markdown, ensure_ascii=False)};
export const glaucomeQcmData = {json.dumps(qcms, indent=2, ensure_ascii=False)};
"""

with open(os.path.join(r"C:\Etudes\DEMS\ophto-app\src\data\glaucomeCongenitalData.js"), 'w', encoding='utf-8') as f:
    f.write(js_content)
print(f"Generated {len(qcms)} QCMs for Glaucoma with proper format")
