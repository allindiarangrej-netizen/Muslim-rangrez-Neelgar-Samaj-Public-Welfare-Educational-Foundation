import re

files = [
    'src/components/HallOfExcellenceView.tsx',
    'src/components/ExcellenceAdminPanel.tsx',
    'src/components/HomeView.tsx'
]

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    if "import { getText }" not in content:
        # Insert after the first import line
        content = re.sub(r'^(import .*?;)', r'\1\nimport { getText } from \'../utils/i18nHelpers\';', content, count=1, flags=re.MULTILINE)
        
        with open(file, 'w') as f:
            f.write(content)

