with open('src/components/HomeView.tsx', 'r') as f:
    content = f.read()

if "import { getText }" not in content:
    content = content.replace("import React, { useState, useEffect } from 'react';", "import React, { useState, useEffect } from 'react';\nimport { getText } from '../utils/i18nHelpers';")
    # also try other variations just in case
    content = content.replace("import React from 'react';", "import React from 'react';\nimport { getText } from '../utils/i18nHelpers';")
    
with open('src/components/HomeView.tsx', 'w') as f:
    f.write(content)
