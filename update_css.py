import re

with open('c:/Etudes/DEMS/ophto-app/src/index.css', 'r', encoding='utf-8') as f:
    old_css = f.read()

with open('c:/Etudes/DEMS/ophto-app/src/extracted_styles.css', 'r', encoding='utf-8') as f:
    new_styles = f.read()

old_css = re.sub(r':root\s*\{[^}]*\}', '', old_css, flags=re.MULTILINE|re.DOTALL)
old_css = re.sub(r'body\.light-theme\s*\{[^}]*\}', '', old_css, flags=re.MULTILINE|re.DOTALL)

new_root = """
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

:root {
  --bg-primary: #f5f7f8;
  --bg-secondary: #ffffff;
  --bg-tertiary: #e9f1fa;
  --text-primary: #182338;
  --text-secondary: #465269;
  --text-tertiary: #465269;
  
  --accent-primary: #0d6e73; 
  --accent-primary-hover: #0b5c60;
  --accent-primary-transparent: #e6f3f3;
  
  --accent-secondary: #2f7a52; 
  --accent-warning: #95600a; 
  --accent-danger: #a13a32; 
  
  --border-color: #dde3e8;
  
  --glass-bg: rgba(255, 255, 255, 0.85);
  --glass-border: #dde3e8;
  --glass-shadow: 0 8px 24px -12px rgba(20,40,60,.18);
  
  --sidebar-width: 280px;
  --navbar-height: 70px;
  --radius-sm: 8px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-xl: 20px;
  
  --font-heading: 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, 'Times New Roman', serif;
  --font-body: 'Source Sans Pro', 'Segoe UI', Helvetica, Arial, sans-serif;

  --ink: #182338;
  --ink-soft: #465269;
  --paper: #f5f7f8;
  --paper-card: #ffffff;
  --line: #dde3e8;
  --teal: #0d6e73;
  --teal-bg: #e6f3f3;
  --blue: #2c5a8a;
  --blue-bg: #e9f1fa;
  --amber: #95600a;
  --amber-bg: #fdf0dc;
  --red: #a13a32;
  --red-bg: #fbe9e7;
  --green: #2f7a52;
  --green-bg: #e7f5ed;
  --purple: #5b4a8a;
  --purple-bg: #efeafb;
}

body.light-theme {
    /* Same as root */
}
"""

new_styles = re.sub(r':root\s*\{[^}]*\}', '', new_styles, flags=re.MULTILINE|re.DOTALL)
new_styles = re.sub(r'body\s*\{[^}]*\}', '', new_styles, flags=re.MULTILINE|re.DOTALL)
new_styles = re.sub(r'html\s*\{[^}]*\}', '', new_styles, flags=re.MULTILINE|re.DOTALL)
new_styles = re.sub(r'\*\{[^}]*\}', '', new_styles, flags=re.MULTILINE|re.DOTALL)

final_css = new_root + old_css + '\n/* NEW COURSE STYLES */\n' + new_styles

with open('c:/Etudes/DEMS/ophto-app/src/index.css', 'w', encoding='utf-8') as f:
    f.write(final_css)

print('Updated index.css')
