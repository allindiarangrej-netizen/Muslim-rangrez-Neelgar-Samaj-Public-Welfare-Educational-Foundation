import re

# Fix 1: detectPoliticalParty type
with open('src/data/politicalParties.ts', 'r') as f:
    content = f.read()
content = content.replace("designation?: string;", "designation?: any;")
content = content.replace("occupation?: string;", "occupation?: any;")
content = content.replace("organization?: string;", "organization?: any;")
with open('src/data/politicalParties.ts', 'w') as f:
    f.write(content)

# Fix 2: HallOfExcellenceView.tsx
with open('src/components/HallOfExcellenceView.tsx', 'r') as f:
    content = f.read()
if "import { getText }" not in content:
    content = content.replace("import React, { useState, useMemo } from 'react';", "import React, { useState, useMemo } from 'react';\nimport { getText } from '../utils/i18nHelpers';")
with open('src/components/HallOfExcellenceView.tsx', 'w') as f:
    f.write(content)

# Fix 3: ExcellenceAdminPanel.tsx
with open('src/components/ExcellenceAdminPanel.tsx', 'r') as f:
    content = f.read()
if "import { getText }" not in content:
    content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { getText } from '../utils/i18nHelpers';")
content = re.sub(r'a\.name\.toLowerCase\(\)', r"getText(a.name as any, 'en').toLowerCase()", content)
content = re.sub(r'a\.designation\.toLowerCase\(\)', r"getText(a.designation as any, 'en').toLowerCase()", content)
content = re.sub(r'a\.organization\.toLowerCase\(\)', r"getText(a.organization as any, 'en').toLowerCase()", content)
content = content.replace("{ach.name}", "{getText(ach.name as any, 'en')}")
content = content.replace("{ach.designation}", "{getText(ach.designation as any, 'en')}")
content = content.replace("{ach.organization}", "{getText(ach.organization as any, 'en')}")
content = content.replace("ach.name", "getText(ach.name as any, 'en')")
content = content.replace("ach.designation", "getText(ach.designation as any, 'en')")
content = content.replace("ach.organization", "getText(ach.organization as any, 'en')")
with open('src/components/ExcellenceAdminPanel.tsx', 'w') as f:
    f.write(content)

# Fix 4: ExcellenceMentorshipModal.tsx
with open('src/components/ExcellenceMentorshipModal.tsx', 'r') as f:
    content = f.read()
content = content.replace("recipientName: achiever.name,", "recipientName: getText(achiever.name as any, currentLanguage),")
with open('src/components/ExcellenceMentorshipModal.tsx', 'w') as f:
    f.write(content)

# Fix 5: HomeView.tsx
with open('src/components/HomeView.tsx', 'r') as f:
    content = f.read()
content = content.replace("name={ach.name}", "name={getText(ach.name as any, currentLanguage)}")
content = content.replace("designation={ach.designation}", "designation={getText(ach.designation as any, currentLanguage)}")
content = content.replace("organization={ach.organization}", "organization={getText(ach.organization as any, currentLanguage)}")
content = content.replace("{ach.name}", "{getText(ach.name as any, currentLanguage)}")
content = content.replace("{ach.designation}", "{getText(ach.designation as any, currentLanguage)}")
content = content.replace("{ach.organization}", "{getText(ach.organization as any, currentLanguage)}")
with open('src/components/HomeView.tsx', 'w') as f:
    f.write(content)

