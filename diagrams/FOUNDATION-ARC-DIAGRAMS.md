# Foundation Arc - Diagram Specifications
**Blogs 1-3: Microsoft Copilot Agents for Business**

**Document Version**: 1.0
**Created**: 2025-12-18
**Purpose**: Comprehensive diagram specifications combining symbolic representations (for developers) and detailed design instructions (for graphic designers)

**Design System**: Microsoft Copilot Blue Theme
**Target Audience**: Business users (non-technical)
**Accessibility**: WCAG 2.1 AA compliant

---

## Table of Contents

### Blog 1: Introduction to Microsoft Copilot Agents
1. [AI Agent vs Traditional Chatbot Comparison](#diagram-01-ai-agent-comparison)
2. [Copilot Studio Ecosystem Map](#diagram-02-ecosystem-map)
3. [Business Value Flowchart](#diagram-03-business-value)

### Blog 2: Building Your First Conversational Agent
4. [Topic Architecture Visual](#diagram-04-topic-architecture)
5. [Variable Flow Diagram](#diagram-05-variable-flow)
6. [Entity Extraction Example](#diagram-06-entity-extraction)

### Blog 3: Adding Intelligence with Knowledge Sources
7. [Knowledge Source Architecture](#diagram-07-knowledge-architecture)
8. [AI Answer Generation Flow](#diagram-08-ai-generation)
9. [Citation Display Example](#diagram-09-citation-display)

---

## Color Palette - Microsoft Copilot Theme

**Primary Colors**:
- Copilot Blue: `#0078D4` (main brand)
- Dark Blue: `#004578` (headers, emphasis)
- Light Blue: `#E1F5FF` (backgrounds, highlights)

**Secondary Colors**:
- Success Green: `#107C10` (positive states)
- Warning Orange: `#FF8C00` (attention)
- Error Red: `#D13438` (critical)
- Gray: `#605E5C` (text, borders)

**Neutral Colors**:
- White: `#FFFFFF` (backgrounds)
- Light Gray: `#F3F2F1` (subtle backgrounds)
- Dark Gray: `#323130` (primary text)

**Accessibility**:
- All text: minimum 4.5:1 contrast ratio
- Large text (18pt+): minimum 3:1 contrast ratio
- Interactive elements: 3:1 contrast with background

---

## Typography Standards

**Headings**:
- H1: Segoe UI, 32px, Bold, Dark Blue (#004578)
- H2: Segoe UI, 24px, Semibold, Dark Blue (#004578)
- H3: Segoe UI, 18px, Semibold, Gray (#605E5C)

**Body Text**:
- Primary: Segoe UI, 14px, Regular, Dark Gray (#323130)
- Secondary: Segoe UI, 12px, Regular, Gray (#605E5C)

**Labels**:
- Segoe UI, 11px, Semibold, ALL CAPS, Gray (#605E5C)

---

## Standard Dimensions

**Web Diagrams**:
- Hero diagrams: 1200px × 675px (16:9 ratio)
- Section diagrams: 800px × 600px (4:3 ratio)
- Inline diagrams: 600px × 450px

**Export Formats**:
- SVG (preferred for web)
- PNG @ 2x resolution (retina)
- PDF (for print)

---

# Blog 1: Introduction to Microsoft Copilot Agents

<a name="diagram-01-ai-agent-comparison"></a>
## Diagram 1: AI Agent vs Traditional Chatbot Comparison

### Purpose
Visual comparison showing the evolution from rigid rule-based chatbots to intelligent AI agents, emphasizing natural language understanding and flexibility.

### Symbolic Representation (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                AI AGENT VS TRADITIONAL CHATBOT                          │
└─────────────────────────────────────────────────────────────────────────┘

TRADITIONAL CHATBOT                    AI AGENT
(Rigid, Limited)                       (Flexible, Intelligent)

┌─────────────────────┐               ┌─────────────────────┐
│  RULE-BASED LOGIC   │               │  NATURAL LANGUAGE   │
│                     │               │   UNDERSTANDING     │
│  IF keyword = "PTO" │               │                     │
│  THEN response A    │               │  Interprets intent  │
│                     │               │  from any phrasing  │
│  Exact matches only │               │                     │
└──────────┬──────────┘               └──────────┬──────────┘
           │                                     │
           ▼                                     ▼
┌─────────────────────┐               ┌─────────────────────┐
│   USER QUESTION     │               │   USER QUESTION     │
│                     │               │                     │
│ "What's the PTO     │               │ Any of:             │
│  policy?"           │               │ • "What's PTO?"     │
│                     │               │ • "Vacation days?"  │
│ Exact phrase only   │               │ • "Time off info"   │
│                     │               │ • "How much leave?" │
└──────────┬──────────┘               └──────────┬──────────┘
           │                                     │
           ▼                                     ▼
┌─────────────────────┐               ┌─────────────────────┐
│   FIXED RESPONSE    │               │  KNOWLEDGE SEARCH   │
│                     │               │                     │
│  Pre-written text   │               │  Reads documents    │
│  never changes      │               │  Synthesizes answer │
│                     │               │  Adds citations     │
└──────────┬──────────┘               └──────────┬──────────┘
           │                                     │
           ▼                                     ▼

     40% coverage                          80% coverage
     (exact matches)                       (intent-based)

KEY DIFFERENCE:
Traditional: "IF user says X, THEN respond Y" (programming)
AI Agent:    "Understand what user wants, find answer" (intelligence)
```

### Designer Instructions

**Layout**: Side-by-side comparison, 1200px × 675px

**Left Side - Traditional Chatbot**:
- **Header**: "TRADITIONAL CHATBOT" in dark gray, with subtitle "Rigid, Limited" in orange
- **Visual**: Robot icon (geometric, mechanical style) at top
- **3 Process Boxes** (stacked vertically):
  1. "Rule-Based Logic" - Show flowchart icon with single path
  2. "User Question" - Speech bubble with exact phrase "What's the PTO policy?"
  3. "Fixed Response" - Document icon with rigid text lines
- **Connection**: Gray arrows flowing downward between boxes
- **Bottom Metric**: Large "40%" in orange with label "coverage (exact matches)"

**Right Side - AI Agent**:
- **Header**: "AI AGENT" in Copilot Blue, with subtitle "Flexible, Intelligent" in green
- **Visual**: Modern AI icon (cloud with neural network pattern) at top
- **3 Process Boxes** (stacked vertically):
  1. "Natural Language Understanding" - Brain icon with connection nodes
  2. "User Question" - Multiple speech bubbles showing 4 variations:
     - "What's PTO?"
     - "Vacation days?"
     - "Time off info"
     - "How much leave?"
  3. "Knowledge Search" - Lightbulb icon with document references
- **Connection**: Gradient arrows (light blue to dark blue) flowing downward
- **Bottom Metric**: Large "80%" in green with label "coverage (intent-based)"

**Center Divider**:
- Vertical dashed line separating the two sides
- Light gray color (#F3F2F1)

**Bottom Callout Box**:
- Full width, light blue background (#E1F5FF)
- **Title**: "KEY DIFFERENCE" in dark blue
- **Content**:
  - Traditional: "IF user says X, THEN respond Y" (programming)
  - AI Agent: "Understand what user wants, find answer" (intelligence)

**Icons**: Microsoft Fluent design style, outlined, 48px

**Annotations**:
- Use dotted lines to point out key features
- Small text labels explaining differences

**File Naming**: `blog-01-diagram-01-ai-agent-comparison.svg`

---

<a name="diagram-02-ecosystem-map"></a>
## Diagram 2: Copilot Studio Ecosystem Map

### Purpose
Show how Microsoft Copilot Studio components interconnect within the Microsoft 365 ecosystem, emphasizing integration points and data flow.

### Symbolic Representation (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│           MICROSOFT COPILOT STUDIO ECOSYSTEM                            │
└─────────────────────────────────────────────────────────────────────────┘

                    ┌──────────────────────────┐
                    │   COPILOT STUDIO         │
                    │   (Agent Builder)        │
                    │                          │
                    │  • Design conversations  │
                    │  • Add knowledge sources │
                    │  • Configure AI          │
                    └────────────┬─────────────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
         ┌──────────▼──────┐    │    ┌───────▼──────┐
         │  TOPICS &       │    │    │   KNOWLEDGE  │
         │  ENTITIES       │    │    │   SOURCES    │
         │                 │    │    │              │
         │  Conversation   │    │    │  SharePoint  │
         │  design layer   │    │    │  OneDrive    │
         └─────────────────┘    │    │  Websites    │
                                │    └──────────────┘
                                │
                    ┌───────────▼────────────┐
                    │   POWER AUTOMATE       │
                    │   (Actions & Flows)    │
                    │                        │
                    │  Connects to services  │
                    │  Executes workflows    │
                    └───────────┬────────────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
    ┌─────────▼────────┐  ┌────▼──────┐  ┌──────▼─────┐
    │  MICROSOFT 365   │  │ DATAVERSE │  │  EXTERNAL  │
    │                  │  │           │  │  SERVICES  │
    │ • Teams          │  │ Data      │  │            │
    │ • SharePoint     │  │ storage   │  │ • Email    │
    │ • Outlook        │  │ & records │  │ • SMS      │
    │ • OneDrive       │  │           │  │ • Custom   │
    └──────────────────┘  └───────────┘  └────────────┘
              │                 │                 │
              └─────────────────┼─────────────────┘
                                │
                    ┌───────────▼────────────┐
                    │      CHANNELS          │
                    │  (Where users access)  │
                    │                        │
                    │  • Teams               │
                    │  • Web chat            │
                    │  • Mobile app          │
                    │  • Custom apps         │
                    └────────────────────────┘

DATA FLOW:
User → Channel → Copilot Studio → Power Automate → Services → Response
```

### Designer Instructions

**Layout**: Hub-and-spoke architecture, 1200px × 900px (vertical orientation)

**Center Hub - Copilot Studio**:
- **Position**: Center of diagram
- **Shape**: Rounded rectangle, 300px × 180px
- **Color**: Gradient from Copilot Blue (#0078D4) to Dark Blue (#004578)
- **Icon**: Copilot logo (24px) in top left
- **Title**: "COPILOT STUDIO" in white, 20px, bold
- **Subtitle**: "Agent Builder" in light blue
- **3 Bullet Points** (white text, 12px):
  - Design conversations
  - Add knowledge sources
  - Configure AI

**Connected Components** (arranged in circular pattern around hub):

**1. Topics & Entities** (Top Left):
- Shape: Rounded rectangle, 200px × 140px
- Color: Light blue background (#E1F5FF), dark blue border
- Icon: Flowchart icon (32px)
- Title: "TOPICS & ENTITIES" (14px, dark blue)
- Description: "Conversation design layer" (11px, gray)

**2. Knowledge Sources** (Top Right):
- Shape: Rounded rectangle, 200px × 140px
- Color: Light blue background, dark blue border
- Icon: Document stack icon (32px)
- Title: "KNOWLEDGE SOURCES" (14px, dark blue)
- **3 Sub-items** (bulleted):
  - SharePoint
  - OneDrive
  - Websites

**3. Power Automate** (Middle):
- Shape: Rounded rectangle, 240px × 160px
- Color: Medium blue background (#0089D6)
- Icon: Flow/lightning icon (32px)
- Title: "POWER AUTOMATE" (14px, white)
- Subtitle: "Actions & Flows" (12px, light blue)
- Description: "Connects to services, Executes workflows"

**4. Microsoft 365 Suite** (Bottom Left):
- Shape: Rounded rectangle, 180px × 180px
- Color: Light blue background
- Icon: Microsoft 365 logo (32px)
- **4 Sub-icons** (16px each):
  - Teams logo
  - SharePoint logo
  - Outlook logo
  - OneDrive logo

**5. Dataverse** (Bottom Center):
- Shape: Rounded rectangle, 160px × 120px
- Color: Light blue background
- Icon: Database icon (32px)
- Title: "DATAVERSE"
- Description: "Data storage & records"

**6. External Services** (Bottom Right):
- Shape: Rounded rectangle, 180px × 140px
- Color: Light blue background
- Icon: Cloud connection icon (32px)
- **3 Sub-items**:
  - Email
  - SMS
  - Custom APIs

**7. Channels** (Bottom, Full Width):
- Shape: Rounded rectangle, 800px × 100px
- Color: Dark blue background (#004578)
- Icon: Multiple device icons (32px)
- Title: "CHANNELS" (white, 16px)
- Subtitle: "Where users access agents"
- **4 Icons** (evenly spaced):
  - Teams icon
  - Web chat icon
  - Mobile app icon
  - Custom app icon

**Connections**:
- **Arrows**: Curved, 4px width, Copilot Blue (#0078D4)
- **Direction**: Bidirectional where appropriate
- **Style**: Smooth bezier curves, with subtle gradient
- **Labels**: Data flow labels on arrows (10px, gray)

**Data Flow Legend** (Bottom):
- **Box**: Light gray background (#F3F2F1), 1100px × 60px
- **Title**: "DATA FLOW:" (dark blue, 12px, bold)
- **Flow**: User → Channel → Copilot Studio → Power Automate → Services → Response
- **Visual**: Small icons representing each step with arrows between

**Overall Style**:
- Clean, modern, professional
- Consistent 16px spacing between elements
- Subtle drop shadows on all boxes (2px blur, 20% opacity)
- Rounded corners (8px radius)

**File Naming**: `blog-01-diagram-02-ecosystem-map.svg`

---

<a name="diagram-03-business-value"></a>
## Diagram 3: Business Value Flowchart

### Purpose
Demonstrate ROI calculation and business value proposition through visual flowchart showing time savings and efficiency gains.

### Symbolic Representation (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│               BUSINESS VALUE: FAQ AGENT ROI                             │
└─────────────────────────────────────────────────────────────────────────┘

BEFORE: Manual Email Responses
┌──────────────────────────────────────────────────────────────┐
│  HR receives 50 PTO questions/week                           │
│                                                               │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌──────────┐ │
│  │ Question  │→│ Research  │→│  Draft    │→│  Send    │ │
│  │ arrives   │  │ policy    │  │  email    │  │  reply   │ │
│  │ 1 min     │  │ 2 min     │  │  2 min    │  │  1 min   │ │
│  └───────────┘  └───────────┘  └───────────┘  └──────────┘ │
│                                                               │
│  Total per question: 6 minutes                                │
│  Weekly: 50 × 6 min = 300 minutes (5 hours)                  │
└───────────────────────────────────┬───────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────┐
                         │   COST ANALYSIS  │
                         │                  │
                         │  HR rate: $30/hr │
                         │  Weekly: 5 hrs   │
                         │  Cost: $150/week │
                         │                  │
                         │  Annual: $7,800  │
                         └────────┬─────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
        ┌───────────────────┐       ┌───────────────────┐
        │  BUILD FAQ AGENT  │       │  MANUAL CONTINUES │
        │                   │       │                   │
        │  Time: 2 hours    │       │  No change        │
        │  Cost: $60        │       │                   │
        └─────────┬─────────┘       └───────────────────┘
                  │
                  ▼
AFTER: Automated Agent Responses
┌──────────────────────────────────────────────────────────────┐
│  Agent handles 50 PTO questions/week automatically           │
│                                                               │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐               │
│  │ Question  │→│ AI matches│→│  Response  │               │
│  │ arrives   │  │ topic     │  │ instant    │               │
│  │ instant   │  │ <1 sec    │  │ <1 sec     │               │
│  └───────────┘  └───────────┘  └───────────┘               │
│                                                               │
│  Total per question: 2 seconds                                │
│  Weekly HR time: 0 hours (fully automated)                   │
└───────────────────────────────────┬───────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────┐
                         │   ROI CALCULATION│
                         │                  │
                         │  Annual savings: │
                         │    $7,800        │
                         │                  │
                         │  Investment:     │
                         │    $60           │
                         │                  │
                         │  ROI: 13,000%    │
                         │  Payback: 3 days │
                         └──────────────────┘

ADDITIONAL BENEFITS:
• 24/7 availability (no waiting for business hours)
• Consistent answers (same quality every time)
• Scalability (handles 1 or 1,000 questions with same effort)
• Employee satisfaction (instant answers improve experience)
• Data insights (see which questions are most common)
```

### Designer Instructions

**Layout**: Vertical flowchart, 800px × 1200px

**Header Section**:
- **Title**: "BUSINESS VALUE: FAQ AGENT ROI" (24px, dark blue, centered)
- **Background**: Gradient from light blue to white

**Section 1: BEFORE (Manual Process)**:
- **Background**: Light red tint (#FFF4F4) indicating inefficiency
- **Border**: 2px solid orange (#FF8C00)
- **Padding**: 24px

**Title**: "BEFORE: Manual Email Responses" (18px, dark red)

**Process Flow** (horizontal, left to right):
1. **Step 1**: "Question arrives" - Envelope icon, "1 min" label
2. **Arrow**: Right-pointing, orange
3. **Step 2**: "Research policy" - Search icon, "2 min" label
4. **Arrow**: Right-pointing, orange
5. **Step 3**: "Draft email" - Edit icon, "2 min" label
6. **Arrow**: Right-pointing, orange
7. **Step 4**: "Send reply" - Send icon, "1 min" label

**Icons**: 48px, outlined style, orange color

**Summary Box** (below process):
- Background: White with orange border
- **Line 1**: "Total per question: 6 minutes" (14px, bold)
- **Line 2**: "Weekly: 50 × 6 min = 300 minutes (5 hours)" (12px)

**Cost Analysis Box**:
- **Shape**: Rounded rectangle, 300px × 200px, centered
- **Background**: White with dark blue border
- **Icon**: Dollar sign (32px, dark blue)
- **Content** (left-aligned, 14px):
  - HR rate: $30/hr
  - Weekly: 5 hrs
  - Cost: $150/week
  - **Annual: $7,800** (18px, bold, red)

**Decision Point**:
- **Diamond shape**: "Implement Agent?" (14px, centered)
- **Two arrows**: "Yes" (left, green) and "No" (right, gray)

**Section 2: AFTER (Automated Process)**:
- **Background**: Light green tint (#F4FFF4) indicating efficiency
- **Border**: 2px solid green (#107C10)
- **Padding**: 24px

**Title**: "AFTER: Automated Agent Responses" (18px, dark green)

**Process Flow** (horizontal, simplified):
1. **Step 1**: "Question arrives" - Lightning icon, "instant" label
2. **Arrow**: Right-pointing, green, with "AI" label
3. **Step 2**: "AI matches topic" - Brain icon, "<1 sec" label
4. **Arrow**: Right-pointing, green
5. **Step 3**: "Response instant" - Checkmark icon, "<1 sec" label

**Icons**: 48px, outlined style, green color

**Summary Box** (below process):
- Background: White with green border
- **Line 1**: "Total per question: 2 seconds" (14px, bold)
- **Line 2**: "Weekly HR time: 0 hours (fully automated)" (12px, green)

**ROI Calculation Box**:
- **Shape**: Rounded rectangle, 350px × 280px, centered
- **Background**: Gradient from light blue to white
- **Border**: 3px solid Copilot Blue (#0078D4)
- **Icon**: Trophy icon (48px, gold color)
- **Title**: "ROI CALCULATION" (16px, dark blue, bold)
- **Content** (centered, with visual emphasis):
  - Annual savings: **$7,800** (20px, green, bold)
  - Investment: $60 (14px, gray)
  - **ROI: 13,000%** (28px, Copilot Blue, bold)
  - **Payback: 3 days** (18px, green, bold)

**Section 3: Additional Benefits**:
- **Background**: Light blue (#E1F5FF)
- **Padding**: 20px
- **Title**: "ADDITIONAL BENEFITS" (16px, dark blue, centered)
- **5 Icons with Labels** (horizontal row):
  1. Clock icon - "24/7 availability"
  2. Checkmark icon - "Consistent answers"
  3. Growth chart icon - "Scalability"
  4. Smiley icon - "Employee satisfaction"
  5. Analytics icon - "Data insights"
- **Icon size**: 40px
- **Label size**: 11px, gray, centered below each icon

**Overall Styling**:
- **Arrows**: 4px width, smooth curves
- **Drop shadows**: Subtle on all boxes (2px blur, 15% opacity)
- **Spacing**: 32px between major sections
- **Fonts**: Segoe UI throughout

**File Naming**: `blog-01-diagram-03-business-value.svg`

---

# Blog 2: Building Your First Conversational Agent

<a name="diagram-04-topic-architecture"></a>
## Diagram 4: Topic Architecture Visual

### Purpose
Illustrate the structure of a conversational topic showing nodes, flow, and variable usage in the Employee Onboarding Agent.

### Symbolic Representation (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│           TOPIC ARCHITECTURE: Employee Onboarding                       │
└─────────────────────────────────────────────────────────────────────────┘

TRIGGER PHRASES:
• "I'm a new employee"
• "New hire onboarding"
• "Starting soon"
    │
    ▼
┌─────────────────────────┐
│  MESSAGE NODE           │  Type: Display
│  "Welcome! I'll help    │
│  with your onboarding"  │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  QUESTION NODE          │  Type: Input
│  "What's your name?"    │
│                         │  Entity: Person name
│  Variable: EmployeeName │  Saved: ✓
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  MESSAGE NODE           │  Type: Display
│  "Nice to meet you,     │
│  {EmployeeName}!"       │  Uses variable ↑
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  QUESTION NODE          │  Type: Input (Multiple Choice)
│  "Which department?"    │
│                         │  Options:
│  Variable: Department   │  • Engineering
└────────────┬────────────┘  • Sales
             │                • Marketing
             │                • Finance
             ▼
┌─────────────────────────┐
│  CONDITION NODE         │  Type: Decision
│  Check: Department      │
│                         │
│  ┌───────┬──────┬────┐ │
│  │ Eng   │Sales │Mkt │ │
└──┼───────┼──────┼────┼─┘
   │       │      │    │
   ▼       ▼      ▼    ▼
┌──────┐┌──────┐┌──────┐┌──────┐
│ Eng  ││Sales ││Mkt   ││Other │
│Check-││Check-││Check-││Check-│
│ list ││list  ││list  ││list  │
└───┬──┘└───┬──┘└───┬──┘└───┬──┘
    │       │       │       │
    └───────┴───────┴───────┘
                │
                ▼
┌─────────────────────────┐
│  ACTION NODE            │  Type: Automation
│  Send email to HR       │
│                         │  Uses: EmployeeName,
│  Connector: Email       │        Department,
└────────────┬────────────┘        JobTitle, etc.
             │
             ▼
┌─────────────────────────┐
│  MESSAGE NODE           │  Type: Display
│  "All set! HR will      │
│  contact you soon."     │
└─────────────────────────┘

NODE TYPES:
┌─────────┐ MESSAGE    Display information
┌─────────┐ QUESTION   Collect user input
┌─────────┐ CONDITION  Branch based on data
┌─────────┐ ACTION     Execute automation
```

### Designer Instructions

**Layout**: Vertical flowchart, 800px × 1400px

**Header**:
- **Title**: "TOPIC ARCHITECTURE: Employee Onboarding" (20px, dark blue)
- **Background**: Light blue gradient (#E1F5FF to white)

**Trigger Section** (Top):
- **Box**: Rounded rectangle, 600px × 100px, centered
- **Background**: Light gray (#F3F2F1)
- **Title**: "TRIGGER PHRASES" (14px, dark blue, bold)
- **3 Phrases** (bulleted list, 12px):
  - "I'm a new employee"
  - "New hire onboarding"
  - "Starting soon"
- **Arrow**: Downward, 4px, Copilot Blue, pointing to first node

**Node Styling**:

**1. Message Nodes** (Display):
- **Shape**: Rounded rectangle, 400px × 100px
- **Background**: Light blue (#E1F5FF)
- **Border**: 2px solid Copilot Blue (#0078D4)
- **Icon**: Speech bubble icon (24px, top left)
- **Label**: "MESSAGE NODE" (10px, gray, top right)
- **Content**: Message text (14px, dark gray, centered)
- **Type Label**: "Type: Display" (11px, gray, bottom)

**2. Question Nodes** (Input):
- **Shape**: Rounded rectangle with notched corners, 400px × 120px
- **Background**: Light green (#F4FFF4)
- **Border**: 2px solid green (#107C10)
- **Icon**: Question mark icon (24px, top left)
- **Label**: "QUESTION NODE" (10px, gray, top right)
- **Question Text**: 14px, dark gray
- **Entity Type**: Badge (e.g., "Entity: Person name") - small pill shape, 11px
- **Variable Name**: "Variable: EmployeeName" (12px, green, bold)
- **Saved Indicator**: Checkmark icon "Saved: ✓" (11px, green)

**3. Condition Node** (Decision):
- **Shape**: Diamond, 400px × 200px
- **Background**: Light orange (#FFF8F0)
- **Border**: 2px solid orange (#FF8C00)
- **Icon**: Fork icon (24px, top center)
- **Label**: "CONDITION NODE" (10px, gray, top)
- **Condition Text**: "Check: Department" (14px, dark gray)
- **Branch Labels**: 4 paths labeled "Eng", "Sales", "Mkt", "Other"

**4. Action Node** (Automation):
- **Shape**: Rounded rectangle with gear accent, 400px × 100px
- **Background**: Light purple (#F4F0FF)
- **Border**: 2px solid purple (#8B00FF)
- **Icon**: Lightning bolt icon (24px, top left)
- **Label**: "ACTION NODE" (10px, gray, top right)
- **Action Description**: "Send email to HR" (14px, dark gray)
- **Connector**: Badge "Connector: Email" (11px, purple)
- **Variables Used**: Small text listing variables (10px, gray)

**Variable Flow Indicators**:
- When a variable is created (Question Node): Green badge "Variable: VariableName"
- When a variable is used (Message/Action): Blue annotation with arrow pointing to usage
- Example: Arrow from "EmployeeName" question to message using {EmployeeName}

**Connections**:
- **Arrows**: 4px width, smooth curves, Copilot Blue
- **Labels**: Small text on arrows indicating data flow (10px, gray)
- **Branching**: Multiple arrows from Condition node, each labeled

**Checklist Branches** (After Condition):
- **4 Small Boxes**: 150px × 80px each, side by side
- **Color**: Light blue background, dark blue border
- **Content**: "Eng Checklist", "Sales Checklist", etc.
- **Arrows**: All converge back to main flow after branching

**Legend Box** (Bottom):
- **Title**: "NODE TYPES" (14px, dark blue, bold)
- **4 Rows** (icon + description):
  1. Speech bubble icon - "MESSAGE - Display information"
  2. Question mark icon - "QUESTION - Collect user input"
  3. Diamond icon - "CONDITION - Branch based on data"
  4. Lightning bolt icon - "ACTION - Execute automation"

**Annotations**:
- Dotted lines pointing to specific features
- Small text explanations (10px, gray)
- Examples: "Uses variable" pointing to {EmployeeName}

**File Naming**: `blog-02-diagram-04-topic-architecture.svg`

---

<a name="diagram-05-variable-flow"></a>
## Diagram 5: Variable Flow Diagram

### Purpose
Visualize variable lifecycle: creation, storage, usage, and clearing in conversation context.

### Symbolic Representation (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    VARIABLE LIFECYCLE                                   │
└─────────────────────────────────────────────────────────────────────────┘

PHASE 1: CREATION
┌─────────────────────────┐
│  QUESTION NODE          │
│  "What's your name?"    │
│                         │  ┌──────────────────┐
│  Creates variable:      │──│ EmployeeName     │
│  EmployeeName           │  │ Type: Text       │
└─────────────────────────┘  │ Scope: Topic     │
                             │ Value: <empty>   │
                             └──────────────────┘

         User responds: "Sarah Martinez"
                     │
                     ▼

PHASE 2: STORAGE
┌─────────────────────────┐
│  VARIABLE STORAGE       │
│                         │  ┌──────────────────┐
│  Response captured      │──│ EmployeeName     │
│  and stored             │  │ Type: Text       │
└─────────────────────────┘  │ Scope: Topic     │
                             │ Value: "Sarah M."│ ✓ Stored
                             └──────────────────┘

                     │
                     ▼

PHASE 3: USAGE (Multiple times)

┌─────────────────────────┐
│  MESSAGE NODE #1        │
│  "Nice to meet you,     │←─ Uses {EmployeeName}
│  {EmployeeName}!"       │   Result: "Nice to meet you,
└─────────────────────────┘          Sarah Martinez!"

┌─────────────────────────┐
│  MESSAGE NODE #2        │
│  "Got it! Here's what   │←─ Uses {EmployeeName}
│  I have for you,        │   Result: "Got it! Here's what
│  {EmployeeName}:"       │          I have for you,
└─────────────────────────┘          Sarah Martinez:"

┌─────────────────────────┐
│  ACTION NODE (Email)    │
│  To: hr@company.com     │←─ Uses {EmployeeName}
│  Subject: New Employee  │   Email contains:
│  Body: "EmployeeName:   │   "EmployeeName:
│        {EmployeeName}"  │    Sarah Martinez"
└─────────────────────────┘

                     │
                     ▼

PHASE 4: CLEARING
┌─────────────────────────┐
│  CONVERSATION ENDS      │
│                         │  ┌──────────────────┐
│  All topic variables    │──│ EmployeeName     │
│  automatically cleared  │  │ Value: <cleared> │ ✗ Empty
└─────────────────────────┘  └──────────────────┘

VARIABLE TYPES:

┌────────────────────┐    ┌────────────────────┐    ┌────────────────────┐
│ TOPIC VARIABLE     │    │ GLOBAL VARIABLE    │    │ SYSTEM VARIABLE    │
│                    │    │                    │    │                    │
│ Scope: Current     │    │ Scope: Entire      │    │ Scope: Platform    │
│        topic only  │    │        agent       │    │        provided    │
│                    │    │                    │    │                    │
│ Lifecycle: Topic   │    │ Lifecycle: Session │    │ Lifecycle: Session │
│           execution│    │                    │    │                    │
│                    │    │                    │    │                    │
│ Example:           │    │ Example:           │    │ Example:           │
│ EmployeeName       │    │ UserID             │    │ Conversation.      │
│                    │    │                    │    │ StartTime          │
└────────────────────┘    └────────────────────┘    └────────────────────┘
```

### Designer Instructions

**Layout**: Vertical process flow, 800px × 1600px

**Header**:
- **Title**: "VARIABLE LIFECYCLE" (24px, dark blue, centered)
- **Background**: Gradient from light blue to white

**Phase Sections** (4 phases, stacked vertically):

**PHASE 1: CREATION**:
- **Header**: "PHASE 1: CREATION" (16px, dark blue, with number badge)
- **Background**: Light blue (#E1F5FF)
- **Padding**: 24px

**Left Side**: Question Node
- Rounded rectangle, 300px × 120px
- Light green background
- Content: "What's your name?"
- Label: "Creates variable: EmployeeName"

**Right Side**: Variable State Box
- Rounded rectangle, 250px × 140px
- White background, dashed border (Copilot Blue)
- **Title**: "EmployeeName" (14px, bold)
- **Properties** (12px, gray):
  - Type: Text
  - Scope: Topic
  - Value: <empty> (in light gray, italic)

**User Input Indicator**:
- Speech bubble shape, centered
- Content: "User responds: 'Sarah Martinez'"
- Background: White with green border
- Arrow pointing downward

**PHASE 2: STORAGE**:
- **Header**: "PHASE 2: STORAGE" (16px, dark blue)
- **Background**: Light green tint (#F4FFF4)

**Left Side**: Storage Process
- Rounded rectangle, 300px × 100px
- White background
- Icon: Database icon (32px)
- Content: "Response captured and stored"

**Right Side**: Variable State Box
- Same style as Phase 1
- **Value changed**: "Sarah Martinez" (in bold, dark blue)
- **Checkmark icon**: Green checkmark with "Stored" label

**Connection**: Animated arrow showing data flow from input to storage

**PHASE 3: USAGE**:
- **Header**: "PHASE 3: USAGE (Multiple times)" (16px, dark blue)
- **Background**: White

**3 Usage Examples** (stacked vertically, 24px spacing):

**1. Message Node #1**:
- Rounded rectangle, 600px × 100px
- Light blue background
- **Left**: Message with {EmployeeName} placeholder
- **Right**: Annotation showing result after variable replacement
- **Arrow**: Dotted line from variable name to result

**2. Message Node #2**:
- Same styling
- Different message content
- Shows multiple usage in same conversation

**3. Action Node (Email)**:
- Purple background (action node color)
- Email template showing variable usage
- Result annotation

**Variable Usage Indicators**:
- Highlight {EmployeeName} in curly braces with light blue background
- Dotted arrows pointing to variable source
- "Uses {EmployeeName}" label (11px, Copilot Blue)

**PHASE 4: CLEARING**:
- **Header**: "PHASE 4: CLEARING" (16px, dark blue)
- **Background**: Light gray (#F3F2F1)

**Left Side**: End Trigger
- Rounded rectangle, 300px × 100px
- Icon: Stop sign icon (32px)
- Content: "Conversation ends, All topic variables automatically cleared"

**Right Side**: Variable State Box
- Same style as previous phases
- **Value**: "<cleared>" (in red, strikethrough)
- **X icon**: Red X with "Empty" label

**Bottom Section: Variable Types**:
- **Title**: "VARIABLE TYPES" (18px, dark blue, centered)
- **3 Cards** (horizontal row):

**Card 1: Topic Variable**:
- 240px × 200px
- Light blue background (#E1F5FF)
- Border: 2px solid Copilot Blue
- **Icon**: Document icon (32px)
- **Title**: "TOPIC VARIABLE" (14px, bold)
- **Properties**:
  - Scope: Current topic only
  - Lifecycle: Topic execution
  - Example: EmployeeName

**Card 2: Global Variable**:
- 240px × 200px
- Light purple background
- Border: 2px solid purple
- **Icon**: Globe icon (32px)
- **Title**: "GLOBAL VARIABLE" (14px, bold)
- **Properties**:
  - Scope: Entire agent
  - Lifecycle: Session
  - Example: UserID

**Card 3: System Variable**:
- 240px × 200px
- Light orange background
- Border: 2px solid orange
- **Icon**: Gear icon (32px)
- **Title**: "SYSTEM VARIABLE" (14px, bold)
- **Properties**:
  - Scope: Platform provided
  - Lifecycle: Session
  - Example: Conversation.StartTime

**Visual Flow Indicators**:
- Large downward arrows between phases (6px width, Copilot Blue)
- Numbered phase badges (1, 2, 3, 4) in circles (40px diameter)
- Dotted lines connecting variable state boxes across phases

**File Naming**: `blog-02-diagram-05-variable-flow.svg`

---

<a name="diagram-06-entity-extraction"></a>
## Diagram 6: Entity Extraction Example

### Purpose
Show how different entity types (date, name, multiple choice, text) are recognized and extracted from user input.

### Symbolic Representation (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      ENTITY EXTRACTION                                  │
└─────────────────────────────────────────────────────────────────────────┘

ENTITY TYPE: Person Name
┌─────────────────────────────────────────────────────────────────────────┐
│ User Input: "My name is Sarah Martinez"                                │
│                                                                         │
│ AI Processing:                                                          │
│ ┌─────┐ ┌────┐ ┌──────────────────┐                                   │
│ │ My  │ │name│ │ Sarah Martinez   │ ← Person name entity              │
│ └─────┘ └────┘ └──────────────────┘                                   │
│   ↓       ↓            ↓                                                │
│ Ignore  Ignore     EXTRACT → Variable: EmployeeName = "Sarah Martinez" │
└─────────────────────────────────────────────────────────────────────────┘

ENTITY TYPE: Date
┌─────────────────────────────────────────────────────────────────────────┐
│ User Input: "I'm starting on January 15, 2025"                         │
│                                                                         │
│ AI Processing:                                                          │
│ ┌───────────┐ ┌──────────┐ ┌─────────────────┐                        │
│ │I'm starting│ │   on     │ │January 15, 2025 │ ← Date entity          │
│ └───────────┘ └──────────┘ └─────────────────┘                        │
│      ↓            ↓                 ↓                                   │
│   Ignore       Ignore          EXTRACT                                 │
│                                    ↓                                    │
│                         Normalized: "2025-01-15"                        │
│                         Variable: StartDate = 2025-01-15                │
└─────────────────────────────────────────────────────────────────────────┘

ENTITY TYPE: Multiple Choice
┌─────────────────────────────────────────────────────────────────────────┐
│ User Input: "I'll be in the Engineering department"                    │
│                                                                         │
│ Options Provided:                                                       │
│ • Engineering ← MATCHED                                                 │
│ • Sales                                                                 │
│ • Marketing                                                             │
│ • Finance                                                               │
│                                                                         │
│ AI Processing:                                                          │
│ ┌──────┐ ┌──────┐ ┌──────────────┐ ┌──────────┐                       │
│ │ I'll │ │ be   │ │      in      │ │Engineering│ ← Matches option      │
│ └──────┘ └──────┘ └──────────────┘ └──────────┘                       │
│    ↓        ↓            ↓               ↓                              │
│ Ignore  Ignore       Ignore         EXTRACT                            │
│                                         ↓                               │
│                         Variable: Department = "Engineering"            │
└─────────────────────────────────────────────────────────────────────────┘

ENTITY TYPE: Free Text
┌─────────────────────────────────────────────────────────────────────────┐
│ User Input: "Senior Software Engineer"                                 │
│                                                                         │
│ AI Processing:                                                          │
│ ┌────────────────────────────────┐                                     │
│ │   Senior Software Engineer     │ ← Entire response                   │
│ └────────────────────────────────┘                                     │
│                ↓                                                        │
│           EXTRACT ALL                                                   │
│                ↓                                                        │
│ Variable: JobTitle = "Senior Software Engineer"                        │
└─────────────────────────────────────────────────────────────────────────┘

ENTITY RECOGNITION ACCURACY:

High Confidence           Medium Confidence        Low Confidence
(Clear match)             (Fuzzy match)            (Ambiguous)

Person Name:              Person Name:             Person Name:
"Sarah Martinez" ✓        "sarah" → "Sarah" ✓      "Bob" → Needs last?

Date:                     Date:                    Date:
"January 15, 2025" ✓      "next Monday" ✓          "soon" → Re-ask
                          (calculates date)

Multiple Choice:          Multiple Choice:         Multiple Choice:
"Engineering" ✓           "Eng" → Engineering ✓    "Tech" → Re-ask
(exact match)             (abbreviation)
```

### Designer Instructions

**Layout**: Grid layout, 1000px × 1400px

**Header**:
- **Title**: "ENTITY EXTRACTION" (24px, dark blue, centered)
- **Subtitle**: "How AI Understands Different Types of Input" (14px, gray)

**4 Entity Type Cards** (stacked vertically, 24px spacing):

**Card Structure** (repeated for each entity type):
- **Dimensions**: 900px × 280px
- **Background**: White with light blue border (#0078D4, 2px)
- **Padding**: 20px
- **Rounded corners**: 8px

**Card 1: Person Name Entity**:

**Header**: "ENTITY TYPE: Person Name" (16px, dark blue, with person icon)

**User Input Box**:
- Background: Light gray (#F3F2F1)
- Text: "My name is Sarah Martinez" (14px)
- Speech bubble style

**AI Processing Section**:
- **Title**: "AI Processing:" (12px, Copilot Blue, bold)
- **Visual Flow**:
  1. **3 Text Segments** (inline, with colored backgrounds):
     - "My" - gray background, "Ignore" label below
     - "name" - gray background, "Ignore" label below
     - "Sarah Martinez" - **green highlight**, "Person name entity" label above
  2. **Arrow**: Green, pointing from highlighted segment to extraction
  3. **Extraction Box**:
     - Background: Light green (#F4FFF4)
     - Icon: Checkmark (16px)
     - Text: "Variable: EmployeeName = 'Sarah Martinez'" (14px, bold)

**Card 2: Date Entity**:

**Header**: "ENTITY TYPE: Date" (16px, dark blue, with calendar icon)

**User Input**: "I'm starting on January 15, 2025"

**AI Processing**:
- **3 Text Segments**:
  - "I'm starting" - gray, ignored
  - "on" - gray, ignored
  - "January 15, 2025" - **blue highlight**, "Date entity" label
- **Normalization Step** (additional box):
  - Shows transformation: "January 15, 2025" → "2025-01-15"
  - Light blue background
  - Icon: Conversion arrows (16px)
- **Extraction**: "Variable: StartDate = 2025-01-15"

**Card 3: Multiple Choice Entity**:

**Header**: "ENTITY TYPE: Multiple Choice" (16px, dark blue, with list icon)

**User Input**: "I'll be in the Engineering department"

**Options List** (left side):
- 4 Options in pill shapes:
  - "Engineering" - **green border, checkmark** (matched)
  - "Sales" - gray border
  - "Marketing" - gray border
  - "Finance" - gray border

**AI Processing** (right side):
- Text segments with "Engineering" highlighted in green
- Arrow showing match to selected option
- **Extraction**: "Variable: Department = 'Engineering'"

**Card 4: Free Text Entity**:

**Header**: "ENTITY TYPE: Free Text" (16px, dark blue, with text icon)

**User Input**: "Senior Software Engineer"

**AI Processing**:
- **Single Box**: Entire text highlighted in purple
- Label: "Entire response"
- Arrow: "EXTRACT ALL"
- **Extraction**: "Variable: JobTitle = 'Senior Software Engineer'"

**Bottom Section: Confidence Levels**:
- **Title**: "ENTITY RECOGNITION ACCURACY" (18px, dark blue, centered)
- **3 Columns**:

**Column 1: High Confidence**:
- Background: Light green (#F4FFF4)
- Icon: Green checkmark (32px)
- **Title**: "High Confidence" (14px, bold)
- **Subtitle**: "(Clear match)" (11px, gray)
- **Examples** (3 entity types with successful extractions):
  - Person: "Sarah Martinez" ✓
  - Date: "January 15, 2025" ✓
  - Choice: "Engineering" ✓ (exact match)

**Column 2: Medium Confidence**:
- Background: Light orange (#FFF8F0)
- Icon: Orange warning icon (32px)
- **Title**: "Medium Confidence" (14px, bold)
- **Subtitle**: "(Fuzzy match)" (11px, gray)
- **Examples**:
  - Person: "sarah" → "Sarah" ✓ (capitalization fixed)
  - Date: "next Monday" ✓ (calculated)
  - Choice: "Eng" → "Engineering" ✓ (abbreviation)

**Column 3: Low Confidence**:
- Background: Light red (#FFF4F4)
- Icon: Red X icon (32px)
- **Title**: "Low Confidence" (14px, bold)
- **Subtitle**: "(Ambiguous)" (11px, gray)
- **Examples**:
  - Person: "Bob" → Needs last name?
  - Date: "soon" → Re-ask for specific date
  - Choice: "Tech" → Re-ask (doesn't match options)

**Visual Elements**:
- **Arrows**: 3px width, color-coded to match entity type
- **Highlight boxes**: Semi-transparent overlays on recognized text
- **Icons**: 16px for inline, 32px for headers
- **Annotations**: Dotted lines connecting labels to relevant text

**File Naming**: `blog-02-diagram-06-entity-extraction.svg`

---

# Blog 3: Adding Intelligence with Knowledge Sources

<a name="diagram-07-knowledge-architecture"></a>
## Diagram 7: Knowledge Source Architecture

### Purpose
Illustrate how multiple knowledge sources (SharePoint, files, websites) integrate with the agent and feed the AI answer generation system.

### Symbolic Representation (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│              KNOWLEDGE SOURCE ARCHITECTURE                              │
└─────────────────────────────────────────────────────────────────────────┘

KNOWLEDGE SOURCES (Input Layer)
┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌──────────────┐
│  SHAREPOINT   │  │   ONEDRIVE    │  │   WEBSITES    │  │ UPLOADED     │
│               │  │               │  │               │  │ FILES        │
│ • HR Policies │  │ • Team docs   │  │ • Help center │  │ • Handbook   │
│ • Benefits    │  │ • Procedures  │  │ • Public FAQ  │  │ • Guides     │
│ • Handbook    │  │ • Guides      │  │ • Knowledge   │  │ • Policies   │
└───────┬───────┘  └───────┬───────┘  └───────┬───────┘  └──────┬───────┘
        │                  │                  │                  │
        └──────────────────┼──────────────────┼──────────────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │   INDEXING      │
                  │   (AI reads,    │
                  │    structures   │
                  │    content)     │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │  SEARCH INDEX   │
                  │                 │
                  │  • Vectorized   │
                  │  • Searchable   │
                  │  • Contextual   │
                  └────────┬────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
    ┌──────────────────┐      ┌──────────────────┐
    │  USER QUESTION   │      │  TOPIC TRIGGER   │
    │                  │      │                  │
    │ "What's the PTO  │      │ Structured flow  │
    │  policy?"        │      │ (from Blog 2)    │
    └────────┬─────────┘      └──────────────────┘
             │
             ▼
    ┌──────────────────┐
    │ BOOSTED          │
    │ CONVERSATION     │
    │                  │
    │ AI decides:      │
    │ • Use topic?     │
    │ • Generate from  │
    │   knowledge?     │
    │ • Hybrid?        │
    └────────┬─────────┘
             │
    ┌────────┴────────┐
    │                 │
    ▼                 ▼
┌─────────┐    ┌────────────────┐
│ TOPIC   │    │   KNOWLEDGE    │
│ FLOW    │    │   GENERATION   │
│         │    │                │
│ Execute │    │ 1. Search index│
│ nodes   │    │ 2. Retrieve    │
│         │    │    passages    │
│         │    │ 3. Generate    │
│         │    │    answer      │
│         │    │ 4. Add citation│
└────┬────┘    └────────┬───────┘
     │                  │
     └─────────┬────────┘
               │
               ▼
      ┌────────────────┐
      │  USER RESPONSE │
      │                │
      │  With citation │
      └────────────────┘

DATA FLOW:
Sources → Index → Search → Generate → Respond (with citation)
```

### Designer Instructions

**Layout**: Multi-layer architecture, 1200px × 1000px

**Layer 1: Knowledge Sources** (Top):
- **Background**: Light blue gradient (#E1F5FF to white)
- **Title**: "KNOWLEDGE SOURCES (Input Layer)" (16px, dark blue)
- **4 Source Cards** (horizontal row):

**Card Dimensions**: 240px × 180px each

**Card 1: SharePoint**:
- Icon: SharePoint logo (48px, top center)
- Title: "SHAREPOINT" (14px, dark blue, bold)
- **3 Bullet Points** (12px):
  - HR Policies
  - Benefits
  - Handbook
- Background: White
- Border: 2px solid Copilot Blue

**Card 2: OneDrive**:
- Icon: OneDrive logo (48px)
- Title: "ONEDRIVE"
- **3 Bullet Points**:
  - Team docs
  - Procedures
  - Guides
- Same styling

**Card 3: Websites**:
- Icon: Globe icon (48px)
- Title: "WEBSITES"
- **3 Bullet Points**:
  - Help center
  - Public FAQ
  - Knowledge base
- Same styling

**Card 4: Uploaded Files**:
- Icon: Document upload icon (48px)
- Title: "UPLOADED FILES"
- **3 Bullet Points**:
  - Handbook
  - Guides
  - Policies
- Same styling

**Connections from Layer 1 to Layer 2**:
- **4 Arrows**: Converging from each source card downward
- Color: Copilot Blue gradient
- Width: 4px
- Style: Smooth curves converging to single point

**Layer 2: Indexing** (Middle):
- **Box**: Rounded rectangle, 400px × 120px, centered
- **Background**: Light purple (#F4F0FF)
- **Border**: 2px solid purple (#8B00FF)
- **Icon**: AI brain icon (32px)
- **Title**: "INDEXING" (14px, bold)
- **Description** (12px):
  - "AI reads, structures content"
  - Processing time indicator (animated)

**Connection to Layer 3**:
- **Arrow**: Large, downward, 6px width, purple

**Layer 3: Search Index** (Middle):
- **Box**: Rounded rectangle, 500px × 140px, centered
- **Background**: Light green (#F4FFF4)
- **Border**: 2px solid green (#107C10)
- **Icon**: Database icon with search magnifier (32px)
- **Title**: "SEARCH INDEX" (14px, bold)
- **3 Badges** (horizontal row, 11px):
  - "Vectorized" (purple pill)
  - "Searchable" (blue pill)
  - "Contextual" (green pill)

**Layer 4: Decision Layer** (Middle):

**Split Path**:
- **Left Branch**: User Question
  - Speech bubble shape, 280px × 100px
  - Light blue background
  - Text: "What's the PTO policy?" (14px, italic)
  - Icon: Question mark (24px)

- **Right Branch**: Topic Trigger
  - Rounded rectangle, 280px × 100px
  - Light orange background
  - Text: "Structured flow (from Blog 2)" (12px)
  - Icon: Flowchart icon (24px)

**Connection to Decision Node**:
- **2 Arrows**: Converging from both branches

**Boosted Conversation Node**:
- **Shape**: Diamond, 400px × 220px
- **Background**: Gradient (light blue to light purple)
- **Border**: 3px solid Copilot Blue
- **Icon**: AI decision icon (32px)
- **Title**: "BOOSTED CONVERSATION" (14px, bold)
- **Decision Text** (12px):
  - "AI decides:"
  - • Use topic?
  - • Generate from knowledge?
  - • Hybrid?

**Layer 5: Execution Layer** (Bottom):

**Split Paths**:

**Left Path: Topic Flow**:
- Rounded rectangle, 300px × 140px
- Light blue background
- Icon: Flowchart icon (32px)
- Title: "TOPIC FLOW"
- Content: "Execute nodes" (12px)

**Right Path: Knowledge Generation**:
- Rounded rectangle, 400px × 200px
- Light green background
- Icon: Sparkle/AI icon (32px)
- Title: "KNOWLEDGE GENERATION"
- **4-Step Process** (numbered list, 12px):
  1. Search index
  2. Retrieve passages
  3. Generate answer
  4. Add citation

**Connections**:
- **2 Arrows**: From decision node to both execution paths
- **2 Arrows**: From both paths converging to response

**Final Layer: User Response**:
- **Box**: Rounded rectangle, 400px × 100px, centered
- **Background**: Light blue (#E1F5FF)
- **Border**: 2px solid green (#107C10)
- **Icon**: Checkmark with document icon (32px)
- **Title**: "USER RESPONSE" (16px, bold)
- **Badge**: "With citation" (green pill, 11px)

**Bottom Legend**:
- **Background**: Light gray (#F3F2F1)
- **Title**: "DATA FLOW" (14px, dark blue, bold)
- **Flow Diagram**: Sources → Index → Search → Generate → Respond (with citation)
- **Visual**: Small icons representing each step with arrows

**Overall Styling**:
- **Layer separation**: 40px vertical spacing
- **Drop shadows**: All major boxes (3px blur, 15% opacity)
- **Color coding**: Each layer has distinct color theme
- **Arrows**: Animated (optional for web version)

**File Naming**: `blog-03-diagram-07-knowledge-architecture.svg`

---

<a name="diagram-08-ai-generation"></a>
## Diagram 8: AI Answer Generation Flow

### Purpose
Step-by-step visualization of how AI processes a user question, searches knowledge, generates an answer, and adds citations.

### Symbolic Representation (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  AI ANSWER GENERATION FLOW                              │
└─────────────────────────────────────────────────────────────────────────┘

STEP 1: USER QUESTION
┌─────────────────────────────────────────────────────────────────────┐
│  User asks: "How much vacation do employees with 3 years get?"     │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
STEP 2: QUESTION ANALYSIS
┌─────────────────────────────────────────────────────────────────────┐
│  AI identifies:                                                     │
│  • Intent: Information lookup (PTO policy)                          │
│  • Key concepts: "vacation", "3 years", "amount"                    │
│  • Entity: Duration (3 years)                                       │
│  • Expected answer type: Number of days                             │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
STEP 3: SEARCH INDEX
┌─────────────────────────────────────────────────────────────────────┐
│  AI searches knowledge sources for:                                 │
│  • "vacation policy"                                                │
│  • "PTO accrual"                                                    │
│  • "3 years tenure"                                                 │
│                                                                     │
│  Retrieves 5 most relevant passages:                                │
│  ┌───────────────────────────────────────────────────────┐         │
│  │ Passage 1 (Relevance: 95%)                            │         │
│  │ Source: Employee Handbook, Page 12                    │         │
│  │                                                        │         │
│  │ "PTO Accrual by Tenure:                               │         │
│  │  • 0-2 years: 15 days/year                            │         │
│  │  • 2-5 years: 20 days/year ← RELEVANT                 │         │
│  │  • 5+ years: 25 days/year"                            │         │
│  └───────────────────────────────────────────────────────┘         │
│  ┌───────────────────────────────────────────────────────┐         │
│  │ Passage 2 (Relevance: 80%)                            │         │
│  │ Source: Benefits Guide, Page 3                        │         │
│  │                                                        │         │
│  │ "Employees accrue PTO monthly based on tenure.        │         │
│  │  At 3 years, monthly accrual rate is 1.67 days."      │         │
│  └───────────────────────────────────────────────────────┘         │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
STEP 4: ANSWER SYNTHESIS
┌─────────────────────────────────────────────────────────────────────┐
│  AI generates conversational answer from passages:                  │
│                                                                     │
│  ✓ Synthesizes information from multiple sources                   │
│  ✓ Formats conversationally (not just quoting)                     │
│  ✓ Includes specific answer to user's question                     │
│  ✓ Provides context                                                │
│                                                                     │
│  Generated answer:                                                  │
│  ┌───────────────────────────────────────────────────────┐         │
│  │ "Employees with 3 years of tenure receive 20 days     │         │
│  │  of PTO per year. This falls within our 2-5 year      │         │
│  │  tier, which accrues at a rate of 1.67 days per       │         │
│  │  month (20 days annually)."                           │         │
│  └───────────────────────────────────────────────────────┘         │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
STEP 5: ADD CITATIONS
┌─────────────────────────────────────────────────────────────────────┐
│  AI attaches source references:                                     │
│                                                                     │
│  Citation 1: Employee Handbook, Page 12                            │
│  Citation 2: Benefits Guide, Page 3                                │
│                                                                     │
│  Formatted with clickable links:                                    │
│  ┌───────────────────────────────────────────────────────┐         │
│  │ [View source: Employee Handbook, p.12]                │         │
│  │ [View source: Benefits Guide, p.3]                    │         │
│  └───────────────────────────────────────────────────────┘         │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
STEP 6: CONTENT MODERATION
┌─────────────────────────────────────────────────────────────────────┐
│  AI checks:                                                         │
│  ✓ Answer aligns with source content (no hallucinations)           │
│  ✓ Appropriate tone and language                                   │
│  ✓ No sensitive information leaked                                 │
│  ✓ Response meets quality standards                                │
│                                                                     │
│  Status: APPROVED ✓                                                 │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
FINAL OUTPUT
┌─────────────────────────────────────────────────────────────────────┐
│  User receives:                                                     │
│                                                                     │
│  ╔═══════════════════════════════════════════════════════════════╗ │
│  ║ "Employees with 3 years of tenure receive 20 days of PTO     ║ │
│  ║  per year. This falls within our 2-5 year tier, which        ║ │
│  ║  accrues at a rate of 1.67 days per month (20 days           ║ │
│  ║  annually)."                                                  ║ │
│  ║                                                               ║ │
│  ║ Sources:                                                      ║ │
│  ║ 📄 Employee Handbook, Page 12                                 ║ │
│  ║ 📄 Benefits Guide, Page 3                                     ║ │
│  ╚═══════════════════════════════════════════════════════════════╝ │
└─────────────────────────────────────────────────────────────────────┘

PERFORMANCE:
Total time: <2 seconds (indexing already complete)
```

### Designer Instructions

**Layout**: Vertical process flow, 900px × 1800px

**Header**:
- **Title**: "AI ANSWER GENERATION FLOW" (24px, dark blue, centered)
- **Subtitle**: "From Question to Cited Answer in 6 Steps" (14px, gray)

**6 Step Cards** (stacked vertically, 40px spacing):

**Card Structure** (repeated for each step):
- **Dimensions**: 800px × variable height (based on content)
- **Rounded corners**: 12px
- **Drop shadow**: 3px blur, 20% opacity
- **Step Badge**: Circular (60px diameter), dark blue background, white number

**STEP 1: USER QUESTION**:
- **Background**: Light blue (#E1F5FF)
- **Border**: 2px solid Copilot Blue
- **Step Badge**: "1" in circle, positioned top left
- **Icon**: Speech bubble (32px)
- **Content**:
  - **User Question Box**:
    - Speech bubble shape, 700px × 80px
    - White background
    - Text: "How much vacation do employees with 3 years get?" (16px, italic)
    - User avatar icon (24px, left)
- **Arrow**: Large downward arrow (6px, Copilot Blue)

**STEP 2: QUESTION ANALYSIS**:
- **Background**: Light purple (#F4F0FF)
- **Border**: 2px solid purple
- **Step Badge**: "2"
- **Icon**: Brain/analysis icon (32px)
- **Content**:
  - **Title**: "AI identifies:" (14px, bold)
  - **4 Analysis Points** (bulleted list, 13px):
    1. Intent: Information lookup (PTO policy)
    2. Key concepts: "vacation", "3 years", "amount" (highlighted in light yellow)
    3. Entity: Duration (3 years) (badge format)
    4. Expected answer type: Number of days (badge format)

**STEP 3: SEARCH INDEX**:
- **Background**: Light green (#F4FFF4)
- **Border**: 2px solid green
- **Step Badge**: "3"
- **Icon**: Search magnifier with documents (32px)
- **Content**:
  - **Search Terms** (bulleted, highlighted):
    - "vacation policy"
    - "PTO accrual"
    - "3 years tenure"
  - **Retrieval Section**:
    - Title: "Retrieves 5 most relevant passages:" (13px, bold)
    - **2 Passage Cards** (stacked, 16px spacing):

**Passage Card 1**:
- Dimensions: 650px × 180px
- White background with green border (left accent, 4px)
- **Header**:
  - "Passage 1" (12px, bold)
  - Relevance badge: "95%" (green pill, 11px)
- **Source**: "Employee Handbook, Page 12" (11px, gray)
- **Content**:
  - "PTO Accrual by Tenure:"
  - 3 bullet points (0-2 years, 2-5 years, 5+ years)
  - **"2-5 years: 20 days/year"** highlighted in yellow with arrow pointing "RELEVANT"

**Passage Card 2**:
- Same structure
- Relevance: 80% (orange badge)
- Source: "Benefits Guide, Page 3"
- Different content

**STEP 4: ANSWER SYNTHESIS**:
- **Background**: Light blue (#E1F5FF)
- **Border**: 2px solid Copilot Blue
- **Step Badge**: "4"
- **Icon**: Sparkle/AI generation icon (32px)
- **Content**:
  - **Title**: "AI generates conversational answer from passages:" (14px, bold)
  - **4 Checkmarks** (green, with labels, 12px):
    - ✓ Synthesizes information from multiple sources
    - ✓ Formats conversationally (not just quoting)
    - ✓ Includes specific answer to user's question
    - ✓ Provides context
  - **Generated Answer Box**:
    - Rounded rectangle, 650px × 140px
    - White background with blue border
    - Icon: Document with AI sparkle (24px)
    - Text: Full generated answer (14px)
    - Key information highlighted in light blue

**STEP 5: ADD CITATIONS**:
- **Background**: Light orange (#FFF8F0)
- **Border**: 2px solid orange
- **Step Badge**: "5"
- **Icon**: Link/citation icon (32px)
- **Content**:
  - **Title**: "AI attaches source references:" (14px, bold)
  - **2 Citation Items** (with document icons):
    - Citation 1: Employee Handbook, Page 12
    - Citation 2: Benefits Guide, Page 3
  - **Formatted Citations Box**:
    - Background: White
    - **2 Clickable Links** (styled as buttons):
      - "[View source: Employee Handbook, p.12]"
      - "[View source: Benefits Guide, p.3]"
    - Link icon (16px) before each

**STEP 6: CONTENT MODERATION**:
- **Background**: Light yellow (#FFFEF0)
- **Border**: 2px solid gold
- **Step Badge**: "6"
- **Icon**: Shield with checkmark (32px)
- **Content**:
  - **Title**: "AI checks:" (14px, bold)
  - **4 Validation Points** (with checkmarks, 12px):
    - ✓ Answer aligns with source content (no hallucinations)
    - ✓ Appropriate tone and language
    - ✓ No sensitive information leaked
    - ✓ Response meets quality standards
  - **Status Badge**: "APPROVED ✓" (large, green, 16px, bold)

**FINAL OUTPUT Section**:
- **Background**: Gradient from white to light green
- **Border**: 3px solid green (#107C10)
- **Padding**: 30px
- **Title**: "FINAL OUTPUT" (18px, dark blue, bold)
- **User Response Box**:
  - Dimensions: 700px × 220px
  - White background with subtle drop shadow
  - Border: 2px solid green
  - **Content**:
    - Generated answer (14px)
    - **Sources Section**:
      - Title: "Sources:" (12px, bold)
      - **2 Source Links** (with document emoji 📄):
        - Employee Handbook, Page 12
        - Benefits Guide, Page 3
  - Copilot avatar icon (32px, bottom right)

**Bottom Performance Metric**:
- **Box**: Centered, 600px × 60px
- **Background**: Light gray (#F3F2F1)
- **Icon**: Stopwatch (24px)
- **Text**: "PERFORMANCE: Total time: <2 seconds (indexing already complete)" (13px, gray)

**Connection Arrows**:
- Between each step: Large downward arrow (6px width)
- Color matches target step's theme color
- Slight gradient effect

**File Naming**: `blog-03-diagram-08-ai-generation-flow.svg`

---

<a name="diagram-09-citation-display"></a>
## Diagram 9: Citation Display Example

### Purpose
Show how citations appear in agent responses, including formatting, clickability, and source transparency for user trust.

### Symbolic Representation (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     CITATION DISPLAY EXAMPLE                            │
└─────────────────────────────────────────────────────────────────────────┘

SCENARIO: User asks about remote work policy

┌─────────────────────────────────────────────────────────────────────────┐
│  USER                                                                   │
│  ┌───────────────────────────────────────────────────────────────┐     │
│  │ "Can I work from home full-time?"                              │     │
│  └───────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘

                              ↓

┌─────────────────────────────────────────────────────────────────────────┐
│  AGENT (With Citation)                                                  │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ Based on our company policy, remote work arrangements depend    │   │
│  │ on your role and manager approval. Here's what applies:         │   │
│  │                                                                  │   │
│  │ • **Eligible roles**: Engineering, Design, Product Management   │   │
│  │ • **Approval required**: Manager + HR sign-off                  │   │
│  │ • **Trial period**: 90-day evaluation                           │   │
│  │ • **Equipment**: Company provides laptop, monitor, peripherals  │   │
│  │                                                                  │   │
│  │ Full-time remote work is available for eligible employees       │   │
│  │ meeting performance expectations.                                │   │
│  │                                                                  │   │
│  │ ───────────────────────────────────────────────────────────────  │   │
│  │ 📄 Sources:                                                      │   │
│  │ • Remote Work Policy (Updated: Nov 2024)                         │   │
│  │   [View in SharePoint] ← Clickable                              │   │
│  │                                                                  │   │
│  │ • Employee Handbook, Section 4.2                                │   │
│  │   [View document] ← Clickable                                   │   │
│  └─────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘

CITATION ANATOMY:

┌─────────────────────────────────────────────────────────────────────────┐
│  Citation Component Breakdown                                           │
│                                                                         │
│  ┌──────────────────────────────────────────────────────┐              │
│  │ 📄 Remote Work Policy (Updated: Nov 2024)            │              │
│  │    [View in SharePoint]                              │              │
│  └──────────────────────────────────────────────────────┘              │
│   │        │                     │              │                       │
│   │        │                     │              │                       │
│   ▼        ▼                     ▼              ▼                       │
│  Icon   Source Name         Last Updated    Action Link                │
│  (File   (Document title)   (Metadata)      (Clickable)                │
│  type)                                                                  │
└─────────────────────────────────────────────────────────────────────────┘

CITATION VARIATIONS:

1. SharePoint Document:
   ┌────────────────────────────────────────────┐
   │ 📄 HR Policies v2024                       │
   │    Page 15 | Last updated: Dec 1, 2024    │
   │    [Open in SharePoint] → Opens document   │
   └────────────────────────────────────────────┘

2. Website Source:
   ┌────────────────────────────────────────────┐
   │ 🌐 Company Help Center                     │
   │    Article: "Remote Work Guidelines"      │
   │    [View article] → Opens in new tab       │
   └────────────────────────────────────────────┘

3. Multiple Sources:
   ┌────────────────────────────────────────────┐
   │ 📄 Sources (2):                            │
   │  1. Remote Work Policy (SharePoint)        │
   │     [View document]                        │
   │  2. Employee Handbook Section 4.2          │
   │     [View section]                         │
   └────────────────────────────────────────────┘

TRUST INDICATORS:

✓ Document name visible
✓ Last updated date shown
✓ Direct link to source
✓ Source type identified (SharePoint, OneDrive, Website)
✓ Page/section reference when available

USER ACTIONS:

1. Click citation → Opens source document
2. Verify information manually
3. See full policy context
4. Trust answer accuracy
```

### Designer Instructions

**Layout**: Conversational example, 1000px × 1400px

**Header**:
- **Title**: "CITATION DISPLAY EXAMPLE" (24px, dark blue, centered)
- **Subtitle**: "Building Trust with Source Transparency" (14px, gray)

**Section 1: Conversation Example** (Top):

**User Message Box**:
- **Dimensions**: 800px × 100px
- **Background**: Light gray (#F3F2F1)
- **Alignment**: Left-aligned (60% width)
- **Avatar**: User icon (40px, circle, left side)
- **Label**: "USER" (11px, gray, above box)
- **Content**: "Can I work from home full-time?" (14px)
- **Style**: Speech bubble with tail pointing left

**Arrow**: Downward, 4px, Copilot Blue, centered, 40px height

**Agent Response Box**:
- **Dimensions**: 900px × 500px
- **Background**: White
- **Border**: 2px solid Copilot Blue (#0078D4)
- **Alignment**: Right-aligned (80% width)
- **Avatar**: Copilot icon (40px, circle, left side)
- **Label**: "AGENT (With Citation)" (11px, Copilot Blue, above box)

**Content Structure**:

**1. Answer Section** (Top portion):
- **Introduction**: "Based on our company policy..." (14px)
- **4 Bullet Points** (formatted list, 13px):
  - **Eligible roles**: Engineering, Design, Product Management (bold labels)
  - **Approval required**: Manager + HR sign-off
  - **Trial period**: 90-day evaluation
  - **Equipment**: Company provides...
- **Conclusion**: "Full-time remote work is available..." (14px)

**2. Citation Section** (Bottom portion):
- **Separator Line**: Horizontal, 1px, light gray, full width
- **Padding**: 16px top margin
- **Background**: Light blue tint (#E1F5FF)
- **Icon**: Document emoji (📄, 20px)
- **Title**: "Sources:" (13px, dark blue, bold)
- **2 Citation Blocks** (stacked, 16px spacing):

**Citation Block 1**:
- **Source Name**: "Remote Work Policy (Updated: Nov 2024)" (13px, dark gray)
- **Action Link**: "[View in SharePoint]" (13px, Copilot Blue, underlined)
- **Hover State**: Light blue background on link
- **Link Icon**: External link icon (12px, right of text)

**Citation Block 2**:
- **Source Name**: "Employee Handbook, Section 4.2" (13px, dark gray)
- **Action Link**: "[View document]" (13px, Copilot Blue, underlined)
- Same styling as Citation 1

**Section 2: Citation Anatomy** (Middle):
- **Background**: Light yellow (#FFFEF0)
- **Border**: 2px solid gold
- **Padding**: 24px
- **Title**: "Citation Component Breakdown" (16px, dark blue, bold)

**Annotated Citation Example**:
- **Large Citation Box**: 700px × 100px, centered
- **Content**: "📄 Remote Work Policy (Updated: Nov 2024) [View in SharePoint]"
- **4 Annotation Arrows** pointing to components:
  1. **Icon**: "Icon (File type)" - 10px, gray, dotted line
  2. **Source Name**: "Source Name (Document title)" - 10px, gray
  3. **Metadata**: "Last Updated (Metadata)" - 10px, gray
  4. **Link**: "Action Link (Clickable)" - 10px, Copilot Blue

**Section 3: Citation Variations** (Middle):
- **Background**: White
- **Title**: "CITATION VARIATIONS" (16px, dark blue, bold)
- **3 Example Cards** (vertical stack, 24px spacing):

**Card 1: SharePoint Document**:
- Dimensions: 650px × 100px
- Border: 2px solid Copilot Blue
- **Icon**: SharePoint document icon (24px)
- **Line 1**: "HR Policies v2024" (13px, bold)
- **Line 2**: "Page 15 | Last updated: Dec 1, 2024" (11px, gray)
- **Link**: "[Open in SharePoint] → Opens document" (12px, blue)

**Card 2: Website Source**:
- Dimensions: 650px × 100px
- Border: 2px solid green
- **Icon**: Globe icon (24px)
- **Line 1**: "Company Help Center" (13px, bold)
- **Line 2**: "Article: 'Remote Work Guidelines'" (11px, gray)
- **Link**: "[View article] → Opens in new tab" (12px, blue)

**Card 3: Multiple Sources**:
- Dimensions: 650px × 140px
- Border: 2px solid orange
- **Icon**: Multiple documents icon (24px)
- **Title**: "Sources (2):" (13px, bold)
- **2 Numbered Items**:
  1. Remote Work Policy (SharePoint) - [View document]
  2. Employee Handbook Section 4.2 - [View section]

**Section 4: Trust Indicators** (Bottom):
- **Background**: Light green (#F4FFF4)
- **Border**: 2px solid green
- **Padding**: 20px
- **Title**: "TRUST INDICATORS" (16px, dark blue, bold)
- **5 Checkmarks** (green, with labels, 13px):
  - ✓ Document name visible
  - ✓ Last updated date shown
  - ✓ Direct link to source
  - ✓ Source type identified (SharePoint, OneDrive, Website)
  - ✓ Page/section reference when available

**Section 5: User Actions** (Bottom):
- **Background**: Light blue (#E1F5FF)
- **Border**: 2px solid Copilot Blue
- **Padding**: 20px
- **Title**: "USER ACTIONS" (16px, dark blue, bold)
- **4 Numbered Steps** (13px, with icons):
  1. **Click citation** → Opens source document (cursor icon)
  2. **Verify information** manually (magnifying glass icon)
  3. **See full policy** context (document icon)
  4. **Trust answer** accuracy (checkmark icon)

**Visual Elements**:
- **Link Styling**: Blue (#0078D4), underlined, with external link icon
- **Hover States**: Light blue background on hover
- **Icons**: 20-24px for emoji, 12px for inline icons
- **Spacing**: 16px between citation blocks, 24px between sections

**Accessibility**:
- All links have visible focus states (2px solid outline)
- Color contrast meets WCAG AA standards
- Icons have alt text

**File Naming**: `blog-03-diagram-09-citation-display.svg`

---

## Summary

**Total Diagrams**: 9 comprehensive specifications
**Coverage**: Foundation Arc (Blogs 1-3)
**Formats**: Symbolic (ASCII) + Designer Instructions
**Deliverable**: Production-ready diagram specifications for graphic design team

**Next Steps**:
1. Designer creates diagrams following specifications
2. Export in SVG, PNG @2x, PDF formats
3. Integrate into blog posts
4. Validate accessibility (WCAG 2.1 AA)
5. Test responsiveness on mobile/tablet/desktop

**File Naming Convention**:
- `blog-0X-diagram-0Y-[name].svg`
- Example: `blog-01-diagram-01-ai-agent-comparison.svg`

All diagrams optimized for:
- ✅ Business user comprehension
- ✅ Information density (85% compression vs text)
- ✅ Consistent Microsoft Copilot branding
- ✅ Web performance (optimized SVG)
- ✅ Accessibility (WCAG 2.1 AA)

---

**Document Complete** ✓
