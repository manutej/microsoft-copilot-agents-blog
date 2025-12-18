---
title: "Building Knowledge-Powered Agents"
subtitle: "Make Your Agent an Expert Using Existing Documents"
series: "Microsoft Copilot Agents for Business"
blogNumber: 3
readingTime: 14
handsOnTime: 50
difficulty: Beginner to Intermediate
prerequisites:
  - "Completed Blog 2: Building Your First Conversational Agent"
  - "Employee Onboarding Agent from Blog 2"
  - "Access to SharePoint site or OneDrive"
  - "Company policy documents (employee handbook, benefits guide)"
builds_on: "02-first-conversational-agent"
keywords: ["knowledge sources", "SharePoint integration", "generative AI", "document indexing", "policy automation"]
date: 2024-12-18
---

# Building Knowledge-Powered Agents

## What if your agent could answer any question about company policies—without you programming every response?

Your Employee Onboarding Agent from Blog 2 is powerful. It collects employee information, provides department-specific checklists, and sends automated notifications. But here's the limitation: **it only knows what you explicitly taught it** through topics and message nodes.

**The Challenge:**
- Your employee handbook: 50+ pages of policies
- Benefits documentation: 30+ pages covering health insurance, 401k, PTO
- Company policies: Dozens of documents (remote work, expense reimbursement, code of conduct)
- **Creating FAQ topics for everything = weeks of work + constant maintenance**

Every time a policy changes, you need to find and update multiple topics. Every new policy requires new topics. Every unique employee question needs a new trigger phrase. **This doesn't scale.**

**There's a transformative solution: Knowledge Sources + Generative AI.**

Instead of programming every possible answer, you **point your agent to your existing documents**. The AI reads, understands, and answers questions automatically—citing sources for transparency. When documents update, your agent's knowledge updates automatically. **No manual topic creation required.**

---

## The Business Impact

**Knowledge-enhanced agents in production demonstrate:**
- **10,000+ unique questions answered** from just 5 document sources
- **85-90% answer accuracy** from well-structured documents
- **95% reduction in topic creation time** compared to manual FAQ building
- **Automatic updates** when source documents change—no agent maintenance needed

**ROI Example:**
```
Traditional Approach:
- 100 policy questions to program as FAQ topics
- 5 minutes per topic × 100 = 500 minutes (8.3 hours)
- Quarterly updates: 2 hours per quarter = 8 hours/year
- Annual effort: 16.3 hours at $50/hour = $815

Knowledge Source Approach:
- Upload employee handbook: 10 minutes
- Configure knowledge source: 15 minutes
- Automatic indexing and updates
- Annual effort: 25 minutes at $50/hour = $21

Time Savings: 95% reduction (15.9 hours/year)
Cost Savings: $794/year per knowledge source
```

*With typical organizations using 5-10 knowledge sources: $3,975-$7,950 annual savings*

**Citation:** [Knowledge Sources Summary - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-summary) "Last accessed: December 18, 2024"

---

## Learning Objectives

By completing this blog, you will:

- [ ] Connect SharePoint document libraries as knowledge sources to your agent
- [ ] Enable generative AI to automatically answer questions from company content with citations
- [ ] Configure boosted conversations to intelligently balance structured topics and AI-generated responses
- [ ] Upload standalone files as knowledge sources when SharePoint isn't available
- [ ] Add public websites as knowledge sources for external reference materials
- [ ] Monitor answer quality using analytics and conversation transcripts
- [ ] Enhance the Employee Onboarding Agent with policy Q&A capabilities

---

## Section 1: Understanding Knowledge Sources

### 1.1 What Are Knowledge Sources?

**Knowledge sources are the places where your agent finds information to answer user questions.** Instead of programming responses, you connect your agent to documents, websites, and data sources. The AI then searches and summarizes this information in natural conversations.

**How It Works:**
```
1. You connect document source (SharePoint, OneDrive, uploaded files, website)
2. AI indexes the content (creates searchable understanding)
3. User asks question: "What's the PTO policy?"
4. AI searches knowledge sources for relevant information
5. AI generates natural language answer with citations
6. User receives: "According to the Employee Handbook, you receive 15 days of PTO per year..."
```

**Citation:** [Use Generative Answers in a Topic - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node) "Last accessed: December 18, 2024"

**Knowledge Sources = Agent's Reference Library**

Imagine hiring a smart assistant:
- **Manual topics** = Memorizing specific Q&A flashcards (rigid, limited to what you programmed)
- **Knowledge sources** = Reading your entire company library (flexible, comprehensive, adaptive)

The assistant can answer questions you never explicitly taught because they've read the source materials.

#### Key Differences from FAQ Topics

| Aspect | FAQ Topics (Blogs 1-2) | Knowledge Sources (Blog 3) |
|--------|------------------------|---------------------------|
| **Content Creation** | Manual (you write every response) | Automatic (AI reads documents) |
| **Question Coverage** | Limited to trigger phrases | Open-ended, natural language |
| **Maintenance** | Update topics manually when policies change | Update documents, AI adapts automatically |
| **Answer Style** | Fixed responses you authored | AI-generated, conversational responses |
| **Citations** | Not included | Automatic source links for verification |
| **Best For** | Structured processes, workflows | General knowledge, policy Q&A, information lookup |

**When to Use Each Approach:**
- **Topics:** Onboarding workflows, support ticket creation, data collection, specific processes
- **Knowledge Sources:** Policy questions, how-to guides, general information lookup, document references

**Citation:** [Knowledge Sources Summary - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-summary) "Last accessed: December 18, 2024"

---

### 1.2 Types of Knowledge Sources Available

Microsoft Copilot Studio supports six types of knowledge sources, each optimized for different scenarios:

#### 1. SharePoint Sites and Document Libraries
**Most common for enterprise** - Your company likely already has documents here.

**What the agent can read:**
- Word documents (.docx)
- PDF files (.pdf)
- Excel files (.xlsx)
- PowerPoint presentations (.pptx)
- HTML files (.html)
- Text files (.txt)

**Example:** HR SharePoint site with employee handbook, benefits guides, policy documents

**Authentication Options:**
- **User authentication (recommended):** Agent accesses SharePoint using end user's credentials, respecting SharePoint permissions
- **Agent authentication:** Agent uses author's credentials (all users see same content)

**Citation:** [Add SharePoint as a Knowledge Source - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint) "Last accessed: December 18, 2024"

---

#### 2. OneDrive for Business Folders
**Best for:** Personal or team-managed content not in SharePoint team sites.

**Key differences from SharePoint:**
- Scope: Personal/small team folders vs. organizational sites
- Permissions: File/folder level vs. site-level
- Scale: Dozens of files vs. hundreds/thousands
- Best for: Individual knowledge bases vs. organizational knowledge

**Example:** Manager's OneDrive with team procedures, project documentation

**Citation:** [Add Unstructured Data as a Knowledge Source - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data) "Last accessed: December 18, 2024"

---

#### 3. Uploaded Files (Dataverse Storage)
**Best for:** Standalone documents without SharePoint infrastructure.

**Supported formats:** PDF, Word (.docx), PowerPoint (.pptx), text files (.txt), HTML files (.html)

**Limitations:**
- Maximum 10 files per agent (use SharePoint for larger document sets)
- No automatic updates (must re-upload manually when documents change)
- No folder structure (flat file storage)

**Example:** Upload employee handbook PDF directly to agent

**When to use:**
- Prototyping and testing
- Small document sets
- Organizations without SharePoint

**Citation:** [Upload Files as a Knowledge Source - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-upload-files) "Last accessed: December 18, 2024"

---

#### 4. Public Websites
**Best for:** External reference materials, product documentation, public FAQs.

**How it works (powered by Bing):**
1. Bing crawls the website (using Bingbot)
2. Content is indexed in Bing's search index
3. Agent searches using Bing when users ask questions
4. AI summarizes relevant findings

**URL Domain Structure:**
```
Example: Add "https://www.fabrikam.com/rotary"

What's Included:
✅ www.fabrikam.com/rotary (exact URL)
✅ www.fabrikam.com/rotary/products (subdirectories)
✅ rotary.fabrikam.com (subdomains under rotary)

What's NOT Included:
❌ www.fabrikam.com (parent domain)
❌ www.fabrikam.com/tools (different subdirectory)
```

**Important:** Bing determines what to crawl and index—you don't control indexing. Content is **not real-time** (days to weeks for new content to be indexed).

**Citation:** [Add a Public Website as a Knowledge Source - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website) "Last accessed: December 18, 2024"

---

#### 5. Azure AI Search (Enterprise Scale)
**Best for:** Massive data volumes requiring custom indexing and advanced search logic.

**When to use:**
- Thousands of documents across multiple sources
- Custom search ranking and relevance tuning
- Database content alongside documents
- Advanced filtering and faceted search

**When to skip:** Small document sets (<1,000 files) where SharePoint or uploaded files suffice

**Citation:** [Add Azure AI Search as a Knowledge Source - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-azure-ai-search) "Last accessed: December 18, 2024"

---

#### 6. Real-Time Knowledge Connectors (Live Data)
**Best for:** Current system data that changes frequently.

**Available connectors:**
- ServiceNow (support tickets, knowledge articles)
- Zendesk (customer support data)
- Salesforce (CRM data)
- Microsoft Dataverse (Power Platform data)
- Microsoft Dynamics 365 (business applications)

**Key difference:** Real-time connectors fetch **live data** during conversations. Unlike indexed documents, data is always current (e.g., "Your ticket status is: In Progress").

**Citation:** [Add Real-Time Knowledge with Connectors - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-real-time-connectors) "Last accessed: December 18, 2024"

---

### Knowledge Source Selection Guide

| Your Scenario | Best Knowledge Source | Why |
|--------------|----------------------|-----|
| Existing SharePoint intranet with policies | SharePoint site | Already organized, automatic updates, permissions management |
| No SharePoint, have PDF handbooks | Upload files | Quick setup, good for prototyping |
| Team-managed procedures in OneDrive | OneDrive folder | Personal/team ownership, flexible permissions |
| Public product documentation | Public website | External content, no document management needed |
| Large enterprise knowledge base (1,000+ docs) | Azure AI Search | Custom indexing, advanced search, scalable |
| Live support ticket data | Real-time connector (ServiceNow/Zendesk) | Current status, always up-to-date |

---

### 1.3 How Generative AI Creates Answers

**The 5-Step Process (Business-Friendly Explanation):**

**Step 1: Indexing (Happens Once)**
- Agent reads all content in knowledge source
- Creates searchable index of information (understands context, topics, relationships)
- Time: 5 minutes to several hours depending on document volume
- Re-indexes on schedule (daily/weekly) or manually

**Step 2: Question Interpretation (Each Conversation)**
- User asks question in natural language: "How much vacation do I get?"
- AI identifies intent (PTO policy) and key concepts (accrual amount)
- Understands variations ("vacation," "PTO," "time off," "days off" → same intent)

**Step 3: Content Retrieval**
- AI searches index for relevant passages
- Ranks by relevance to user question
- Retrieves top 3-5 most relevant sections from documents

**Step 4: Answer Generation**
- AI synthesizes information from retrieved passages
- Generates conversational answer (not copy-paste)
- Includes citations to source documents for verification
- Filters out irrelevant details

**Step 5: Content Moderation**
- Checks answer appropriateness
- Ensures alignment with source content (prevents hallucinations)
- Blocks inappropriate responses

**Key Principle:** AI generates answers, doesn't copy-paste. The agent **understands content and creates natural responses**, not just quoting documents verbatim. This makes answers more conversational and useful.

**Citation:** [Generative AI in Copilot Studio - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview) "Last accessed: December 18, 2024"

---

## Section 2: Hands-On Project - Policy Document Agent

### Project Overview

**What You'll Build:** Enhanced Employee Onboarding Agent with Knowledge-Based Q&A

**New Capabilities:**
- ✅ Answers open-ended questions about company policies from SharePoint
- ✅ References employee handbook automatically with citations
- ✅ Provides benefits information from uploaded documents
- ✅ Balances structured onboarding flow (Blog 2) with flexible Q&A (Blog 3)
- ✅ Handles unknown questions gracefully

**Knowledge Sources We'll Add:**
1. Employee handbook (uploaded file or SharePoint)
2. Benefits documentation (SharePoint library)
3. Company policies website (optional)

**Time Required:** 50 minutes

**Business Value:** One unified agent handles both **structured onboarding** AND **policy questions**—no more separate FAQ bots.

---

### 2.1 Preparing Your Knowledge Sources

Before connecting knowledge sources, ensure your documents are optimized for AI understanding.

**Document Preparation Checklist:**

**✅ Clear Structure**
- Use H1, H2, H3 headings (helps AI understand sections)
- Include table of contents
- Add page numbers for specific citations
- Use metadata (title, author, last updated date)

**✅ Content Quality**
- Text-based PDFs (not scanned images—use OCR if needed)
- Simple tables (avoid complex multi-column layouts)
- Clear language (avoid excessive jargon)
- Include FAQ sections in documents

**✅ Accessibility**
- Supported format: PDF, Word, Excel, PowerPoint, HTML, TXT
- Not password-protected or encrypted
- Current and accurate (verify review dates)
- Appropriately scoped (public vs. confidential)

**Permission Considerations:**
> **Critical:** Only include documents all employees should access. If a document is confidential (executive compensation, HR investigations), **DO NOT** add it as a knowledge source. The agent will reference it for all users. For role-based access, use separate agents per audience (covered in Blog 8: Security & Governance).

**For This Tutorial:**
If you don't have SharePoint set up, download sample documents:
- Sample Employee Handbook (optimized for AI): [Download template]
- Benefits Guide Template: [Download template]

**Citation:** [Prepare Knowledge Sources Best Practices - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-prepare) "Last accessed: December 18, 2024"

---

### 2.2 Adding SharePoint as Knowledge Source

**Step 1: Open Your Agent**
1. Navigate to Copilot Studio (https://copilotstudio.microsoft.com)
2. Open **Employee Onboarding Agent** (from Blog 2)
3. Click **Knowledge** tab in left navigation
4. You'll see an empty knowledge sources page

**Step 2: Add SharePoint Knowledge Source**
1. Click **+ Add knowledge** button
2. Select **SharePoint**
3. Choose scope:
   - **Specific site:** Single SharePoint site (recommended for most scenarios)
   - **Multiple sites:** Multiple SharePoint sites (enterprise deployments)
   - **Specific document library:** Precise folder control (best practice for scoped content)

**For this tutorial:** Select **Specific site**

**Step 3: Configure SharePoint Connection**

**SharePoint Site URL:**
- Example: `https://contoso.sharepoint.com/sites/HR`
- How to find: Open SharePoint site in browser, copy URL from address bar
- Paste in "Site URL" field

**Select Content:**
- **Option A:** "All content in this site" (includes all libraries and pages)
- **Option B:** "Specific document library" (more control)

**Recommendation:** Choose **"Specific document library"** → Select **"HR Policies"** library

**Step 4: Configure Indexing Settings**

**Content to include:**
- ☑ Documents (Word, PDF, Excel, PowerPoint)
- ☑ Pages (SharePoint pages)
- ☐ Lists (typically not needed for knowledge Q&A)

**Refresh schedule:**
- **Daily:** Recommended for frequently updated content
- **Weekly:** For stable policies
- **Manual:** For static content

**Step 5: Authenticate and Connect**
1. Click **Add**
2. Sign in with SharePoint credentials (if prompted)
3. Grant Copilot Studio permission to access SharePoint
4. Wait for "Connection successful" message

**Step 6: Monitor Initial Indexing**
- Status shows: "Indexing in progress..."
- Small library: 5-10 minutes
- Large library (100+ docs): 30-60 minutes
- **You can continue with other steps** (indexing doesn't block work)

**Troubleshooting Common Issues:**

**Problem:** "Access denied" error
- **Solution:** Verify you have read permission on SharePoint site
- **Check:** Site settings → Permissions → Your user has at least "Read" access

**Problem:** "Site not found"
- **Solution:** Check URL spelling, ensure site exists
- **Verify:** Open URL in browser to confirm site loads

**Problem:** "Indexing failed"
- **Solution:** Check document formats (unsupported types cause failures)
- **Action:** Remove password-protected files, verify file formats

**Problem:** Slow indexing (>1 hour for small library)
- **Solution:** Large libraries take time; be patient
- **Check:** Status page shows progress percentage

**Citation:** [Add SharePoint Knowledge Sources - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-sharepoint) "Last accessed: December 18, 2024"

---

### 2.3 Uploading Files as Knowledge Source (Alternative)

If you don't have SharePoint, upload files directly to the agent.

**Step 7: Add Uploaded Files**
1. Click **+ Add knowledge**
2. Select **Files**
3. Click **Upload files**

**Step 8: Upload Documents**
- Select up to 10 files
- Supported: PDF (.pdf), Word (.docx), PowerPoint (.pptx), text (.txt), HTML (.html)
- Max size: 10 MB per file (check current Dataverse limits)

**Example uploads:**
- Employee_Handbook_2024.pdf
- Benefits_Guide.pdf
- Remote_Work_Policy.docx
- PTO_Policy.pdf

**Step 9: Confirm Upload**
- Files appear in knowledge sources list
- Status: "Processing"
- Wait 3-5 minutes for indexing
- Status changes to "Ready"

**Limitations of File Upload vs. SharePoint:**
- Max 10 files (SharePoint: unlimited)
- No automatic updates (SharePoint: syncs on schedule)
- No folder structure (SharePoint: maintains organization)
- Manual re-upload needed for updates (SharePoint: automatic)

**Recommendation:** Use file upload for **prototyping**; migrate to SharePoint for **production**.

**Citation:** [Upload Files as Knowledge Source - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-upload-files) "Last accessed: December 18, 2024"

---

### 2.4 Adding Website as Knowledge Source (Optional)

If your company has a public knowledge base or intranet accessible via URL:

**Step 10: Add Website**
1. Click **+ Add knowledge**
2. Select **Website**
3. Enter URL: `https://help.company.com` or `https://company.com/policies`

**Step 11: Configure Crawling**

**Crawl depth:** How many link levels to follow
- **1 level:** Just pages linked from main page
- **2 levels:** Pages linked from those pages too (recommended starting point)
- **3+ levels:** Broader crawl (increase cautiously—can include irrelevant pages)

**Pages to include:** Specify URL patterns (optional)
- Example: `https://help.company.com/hr/*` (only HR section)
- Benefit: Avoids indexing irrelevant content

**Step 12: Start Indexing**
1. Click **Add**
2. Indexing begins (can take 30+ minutes for large sites)
3. Status updates in knowledge sources list
4. **Note:** Bing crawl frequency is automatic—new content may take days/weeks to appear

**Best Practices for Website Indexing:**
To improve Bing indexing speed and accuracy:
1. Submit sitemaps to Bing Webmaster Tools
2. Use IndexNow API for instant content updates
3. Ensure proper internal linking (pages link to each other)
4. Limit page count (focused content indexes faster)
5. Use 301 redirects (not 302)
6. Implement dynamic rendering for JavaScript-heavy sites

**Citation:** [Best Practices to Improve Bing Index Creation - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/generative-ai-public-websites) "Last accessed: December 18, 2024"

---

### 2.5 Testing Knowledge Source Q&A

**Step 13: Open Test Panel**
1. Ensure at least one knowledge source shows **"Ready"** status
2. Click **Test your agent** (top right corner)
3. Test panel slides in from right side

**Step 14: Ask Knowledge-Based Questions**

Run these test scenarios to validate AI-generated answers:

**Test 1: Direct Policy Question**
```
You: "What's the PTO policy?"

Expected Response:
- AI generates answer from employee handbook
- Includes citation link to source document
- Answer is conversational (not copy-paste)

Example: "According to the Employee Handbook, full-time employees receive 15 days of PTO per year. PTO accrues monthly and can be carried over up to 5 days. [Source: Employee Handbook, page 12]"
```

**Test 2: Specific Detail Question**
```
You: "How many days of vacation do employees with 3 years get?"

Expected Response:
- AI extracts specific information from accrual table
- Accurate answer matching document content
- Citation to exact section

Example: "Employees with 2-5 years of tenure receive 20 days of PTO per year. This increases from the initial 15 days provided during years 0-2. [Source: Employee Handbook - PTO Accrual Table]"
```

**Test 3: Multi-Document Question**
```
You: "What health insurance options do we have?"

Expected Response:
- AI synthesizes answer from benefits guide
- Lists options clearly
- Provides relevant details

Example: "We offer three health insurance options: 1) PPO Plan with nationwide coverage, 2) HMO Plan with local network, 3) High-Deductible Health Plan with HSA. All plans include dental and vision coverage. [Source: Benefits Guide 2024]"
```

**Test 4: Follow-Up Question (Context Awareness)**
```
Initial: "What's the PTO policy?"
[Agent responds with PTO information]

Follow-up: "What about sick leave?"

Expected Response:
- AI understands context (still discussing time-off policies)
- Provides sick leave policy information
- Maintains conversation continuity

Example: "In addition to PTO, employees receive 10 sick days per year for illness or medical appointments. Sick days are separate from PTO and do not roll over. [Source: Employee Handbook - Sick Leave Policy]"
```

**Test 5: Unknown Question (Graceful Fallback)**
```
You: "What's the CEO's favorite color?"

Expected Response:
- "I don't have that information in my knowledge sources. Is there something else I can help with?"
- NO fabricated answer
- Graceful acknowledgment of limitation
- Offer to help with something else
```

**Quality Checklist:**
- [ ] Answers are accurate (match source documents)
- [ ] Citations provided for all answers (with document name/page)
- [ ] Tone is conversational (not robotic or copy-paste)
- [ ] Unknown questions handled appropriately (no hallucinations)
- [ ] Follow-up questions maintain context
- [ ] Multi-document answers synthesize information correctly

**Citation:** [Test Your Agent's Knowledge Sources - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-test) "Last accessed: December 18, 2024"

---

### 2.6 Configuring Boosted Conversations

**What Are Boosted Conversations?**

AI automatically decides whether to:
1. **Use a specific topic** you created (structured flow from Blog 2)
2. **Generate answer from knowledge sources** (flexible Q&A from Blog 3)
3. **Combination of both** (hybrid approach)

**Why This Matters:**

User asks: "What's the onboarding process?"
- Could trigger **Employee Onboarding topic** (conversational flow with data collection)
- OR AI could answer from **handbook** (generative response)

Boosting optimizes which approach to use based on context.

**Step 15: Enable Boosted Conversations**
1. Navigate to **Settings** → **AI capabilities**
2. Find "Boosted conversations" section
3. Toggle: **ON**

**Step 16: Configure Boosting Behavior**

**Options:**
- **Generative:** Prefer AI-generated answers from knowledge sources
- **Balanced:** AI chooses best approach based on context (**RECOMMENDED**)
- **Classical:** Prefer predefined topics, use generative as fallback

**For This Agent:** Select **"Balanced"**

**What Happens Now:**
- Employee asks **onboarding question** → Structured topic triggers (better UX for data collection workflow)
- Employee asks **policy question** → Generative answer from knowledge sources
- Employee asks **complex question** → AI combines both approaches seamlessly

**Example Conversation with Balanced Boosting:**
```
User: "I'm a new employee"
→ Triggers Employee Onboarding topic (structured flow)

[During onboarding flow]
User: "By the way, what's the dress code?"
→ AI generates answer from handbook (knowledge source)
→ Returns to onboarding flow afterward

[After onboarding complete]
User: "How do I enroll in benefits?"
→ AI generates answer from benefits guide (knowledge source)
```

**Citation:** [Boosted Conversations Overview - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-conversations) "Last accessed: December 18, 2024"

---

## Section 3: Balancing Topics and Knowledge Sources

### 3.1 When to Use Topics vs. Knowledge

**Decision Framework:**

| Use Predefined Topic | Use Knowledge Source |
|---------------------|---------------------|
| Structured process (onboarding, ticket creation) | Open-ended information lookup |
| Requires data collection (forms, surveys) | General knowledge questions |
| Specific action needed (send email, create record) | Policy explanations |
| Multi-step workflow | Single-answer questions |
| High accuracy required (legal, compliance) | Conversational reference |
| Consistent response needed | Adaptive, nuanced responses |

**Real-World Examples:**

**Scenario 1: Requesting Time Off**
- **Best Approach:** Topic (structured workflow)
- **Why:** Need to collect start date, end date, PTO type, send approval request
- **Knowledge Role:** Can reference PTO policy within topic for user information

**Scenario 2: Understanding PTO Accrual**
- **Best Approach:** Knowledge source (generative)
- **Why:** Information lookup only, no action required
- **Topic Role:** None needed

**Scenario 3: Benefits Enrollment**
- **Best Approach:** Hybrid (topic + knowledge)
- **Topic:** Collect enrollment choices, deadline confirmation
- **Knowledge:** Answer specific benefits questions ("Is my spouse covered?" "What's the deductible?")

**Best Practice:**
> **Start with Knowledge, Add Topics for Workflows**
>
> 1. Connect knowledge sources (covers 80% of questions automatically)
> 2. Identify gaps where structured process needed (data collection, actions)
> 3. Create topics for those specific workflows
> 4. Reference knowledge within topics for context
>
> **Result:** Agent handles everything without over-building topics

---

### 3.2 Hybrid Example - Onboarding with Knowledge

Enhance Blog 2's Employee Onboarding Agent with knowledge awareness:

**Step 17: Add Knowledge Reference in Topic**

Edit Employee Onboarding topic:
1. Navigate to **Topics** → **Employee Onboarding**
2. After collecting start date
3. Before showing department-specific checklist
4. Add **Message node**:

```
By the way, I can also answer questions about company policies! 📚

For example, you can ask me:
- "What's the dress code?"
- "How do I enroll in benefits?"
- "What's the remote work policy?"
- "How much PTO do I get?"

Feel free to ask anything—I have access to our employee handbook and company policies.
```

**Step 18: Test Hybrid Interaction**

**Test Script:**
1. Trigger onboarding topic: "I'm a new employee"
2. Complete structured flow (name, department, start date, equipment)
3. See knowledge prompt in message
4. Ask: "What's the dress code?"
5. Receive AI-generated answer from handbook (with citation)
6. Onboarding flow continues seamlessly
7. Complete remaining onboarding steps

**Expected Behavior:**
- Structured topic flow continues without interruption
- Knowledge Q&A embedded naturally within topic conversation
- User gets **best of both worlds**: workflow automation + flexible information access
- No "let me transfer you to the policy bot"

**Business Value:**
- **One unified agent** handles both onboarding process AND policy questions
- **Seamless user experience** (no context switching between bots)
- **Reduced agent sprawl** (don't need separate FAQ agents)

---

### 3.3 Creating Fallback to Knowledge

**Step 19: Update Fallback Topic**

When agent doesn't understand user question:
- Instead of generic "I don't understand"
- **Try searching knowledge sources first**

**How to Configure:**
1. Navigate to **System Topics** → **Fallback**
2. Edit the default message node
3. Change to: "Let me search our company knowledge base for that..."
4. Agent will **automatically check knowledge sources**
5. If found: Provide answer with citation
6. If not found: "I don't have information about that in my knowledge base. Would you like to speak with HR?"

**Impact:** Increases question coverage dramatically without creating more manual topics.

**Enhanced Fallback Example:**
```
User: "What's the parking policy?"
[Agent doesn't have specific parking topic]

Old Fallback:
"I don't understand. Please rephrase your question."

New Fallback (with knowledge):
"Let me search our company policies...
According to the Facilities Guide, employees can park in Lots A-C with their employee badge. Visitor parking is available in Lot D. Parking is free for all employees. [Source: Facilities Guide, page 8]"
```

---

## Section 4: Monitoring and Improving Answer Quality

### 4.1 Using Analytics to Assess Knowledge Performance

**Step 20: Access Knowledge Analytics**
1. Navigate to **Analytics** tab
2. Filter by date range (last 7 days for initial testing, expand to 30 days for trends)
3. Review key metrics:

**Metric 1: Knowledge Answer Coverage**
- **Definition:** % of questions answered from knowledge sources
- **Target:** 60-80% (balanced with structured topics)
- **Low percentage action:** Add more knowledge sources or improve document indexing

**Metric 2: Answer Satisfaction**
- **Definition:** User ratings (thumbs up/down, satisfaction survey)
- **Target:** 80%+ positive
- **Low satisfaction action:** Content quality issue, hallucinations, or irrelevant sources

**Metric 3: Citation Click-Through**
- **Definition:** % of users clicking source citations to verify information
- **Indicates:** Trust and verification behavior
- **High CTR:** Users validating answers (positive—shows transparency working)

**Metric 4: Unanswered Questions**
- **Definition:** Questions AI couldn't answer from knowledge sources
- **Gold mine:** Content gaps and missing documents
- **Action:** Add missing documents or create topics for these specific questions

**Analyzing Unanswered Questions:**
1. Export list of questions AI couldn't answer
2. Look for common patterns
3. Examples:
   - Many "parking" questions → **Action:** Add parking policy document
   - Many "travel reimbursement" questions → **Action:** Add travel & expense guide
   - Many "tuition reimbursement" questions → **Action:** Add professional development policy

**Action Plan Template:**
```
Week 1: Deploy agent with initial knowledge sources
Week 2: Review analytics, identify gaps (unanswered questions)
Week 3: Add missing documents to knowledge sources
Week 4: Re-analyze metrics, measure improvement
```

**Citation:** [Analytics for Generative Answers - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-topic-details) "Last accessed: December 18, 2024"

---

### 4.2 Reviewing Conversation Transcripts

**Step 21: Analyze Actual Conversations**
1. Navigate to **Analytics** → **Sessions**
2. Click on individual conversation
3. Review full transcript with timestamps

**What to Look For:**

**Red Flags (Indicates Problems):**
- ❌ AI fabricating information not in documents (**hallucination**)
- ❌ Answer contradicts source material (**misinterpretation**)
- ❌ Irrelevant answers (**poor search retrieval**)
- ❌ Generic responses when specific answer exists in documents
- ❌ No citation provided when answer came from knowledge source
- ❌ Citation link broken or points to wrong document

**Green Flags (Quality Indicators):**
- ✅ Accurate answer matching source content
- ✅ Citation link provided and functional
- ✅ Conversational, helpful tone (not robotic)
- ✅ Follow-up questions handled well (context maintained)
- ✅ User expressed satisfaction (positive feedback)
- ✅ Graceful handling of questions outside knowledge scope

**Taking Action on Issues:**

**Issue:** Hallucinations detected (AI making up information)
- **Action 1:** Improve content moderation settings (Settings → AI capabilities → Content moderation)
- **Action 2:** Add more authoritative sources (reduce ambiguity)
- **Action 3:** Create specific topic for this question (override generative with programmed response)
- **Action 4:** Add explicit instruction: "Only answer from knowledge sources, never fabricate"

**Issue:** Poor answer quality (inaccurate or incomplete)
- **Action 1:** Improve source document clarity (add FAQ sections, clearer headings)
- **Action 2:** Add missing information to documents
- **Action 3:** Increase knowledge source refresh frequency (daily vs. weekly)
- **Action 4:** Verify document indexing completed successfully

**Issue:** Irrelevant sources cited
- **Action 1:** Scope knowledge sources more narrowly (specific folders vs. entire site)
- **Action 2:** Remove low-quality or outdated documents from knowledge sources
- **Action 3:** Improve document metadata (titles, descriptions help search relevance)

**Citation:** [Troubleshoot SharePoint Knowledge Sources - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/troubleshoot-sharepoint-knowledge-source) "Last accessed: December 18, 2024"

---

### 4.3 Improving Source Content for Better AI Answers

**Document Optimization Techniques:**

**1. Use Clear, Descriptive Headings**
```markdown
❌ Poor: "Important Info About Time Off"
✅ Good: "PTO Accrual Policy"

Why: AI uses headings to understand document structure and topic boundaries
```

**2. Structure with Q&A Sections**
Add "Frequently Asked Questions" section to documents:
```markdown
## Frequently Asked Questions

Q: How much PTO do I earn per year?
A: Full-time employees earn PTO based on tenure:
   - 0-2 years: 15 days per year
   - 2-5 years: 20 days per year
   - 5+ years: 25 days per year

Q: Can I carry over unused PTO?
A: Yes, up to 5 days of PTO can be carried over to the following year. Any amount beyond 5 days expires on December 31.
```

**Why:** Q&A format directly matches how users ask questions, improving AI retrieval accuracy

**3. Avoid Ambiguity**
```markdown
❌ Poor: "You can take time off when needed"
✅ Good: "Employees can request PTO with 2 weeks advance notice, subject to manager approval. Emergency requests may be approved with less notice at manager discretion."

Why: Specific, actionable information prevents AI from generating vague responses
```

**4. Include Definitions and Glossary**
Define acronyms, jargon, and company-specific terms:
```markdown
**PTO (Paid Time Off):** Vacation, sick leave, and personal days combined into one policy. Employees use PTO for any absence, whether vacation, illness, or personal appointments.

**Accrual:** PTO is earned gradually throughout the year rather than granted upfront. For example, 15 days per year = 1.25 days earned per month.
```

**5. Keep Documents Updated**
- Add "Last Updated: [Date]" to all documents
- Review quarterly (schedule recurring task)
- Archive outdated versions (don't keep old and new policies in same knowledge source)
- Use version numbers in filenames: `Employee_Handbook_2024_v2.pdf`

**Impact:** Well-structured documents → **20-30% improvement in answer quality** and user satisfaction

---

## Section 5: Advanced Knowledge Source Techniques

### 5.1 Using Citations for Transparency

**Why Citations Matter:**
- **Build user trust:** Users can verify information against source documents
- **Compliance:** Show source of answer for audit trails
- **Accountability:** Trace back to specific policy version if questions arise
- **Quality control:** Easy to identify wrong citations (indicates poor retrieval)

**How Citations Work:**
- AI automatically includes source link with answers
- Format: "According to [Employee Handbook, page 12]"
- Clickable link opens source document in SharePoint or download

**Step 22: Configure Citation Settings**
1. Navigate to **Settings** → **Generative AI**
2. Find "Citations" section
3. Options:
   - **Always show:** Every answer includes source (**RECOMMENDED**)
   - **Show when available:** Only if source found
   - **Never show:** Suppress citations (not recommended—reduces trust)

**For This Agent:** Select **"Always show"**

**User Experience:**
```
User: "What's the remote work policy?"

Agent Response:
"Employees may work remotely up to 3 days per week with manager approval. Remote work must be documented in advance. Equipment for remote work (laptop, monitor) can be requested through IT.

[Source: Remote Work Policy 2024, page 2]"

User clicks citation link → Opens Remote Work Policy PDF at page 2
User verifies information → Trust in agent increases
```

**Compliance Benefit:** Auditable trail of information sources for regulatory requirements, legal questions, and policy disputes

---

### 5.2 Filtering and Scoping Knowledge

**Problem:** Not all content in SharePoint should be accessible to all employees.

**Solution:** Scope knowledge sources carefully using these strategies:

**Strategy 1: Specific Folders (Recommended)**
- Instead of entire SharePoint site
- Select only **"Public Policies"** library
- Exclude **"HR Confidential"**, **"Executive Documents"**, **"Legal"**

**How to configure:**
1. When adding SharePoint knowledge source
2. Choose **"Specific document library"**
3. Select only public-facing libraries
4. Verify library permissions before adding

**Strategy 2: Metadata Filtering (Advanced)**
- Tag documents with "Public" vs. "Confidential" metadata in SharePoint
- Filter knowledge source by metadata tags
- Requires SharePoint admin configuration

**Strategy 3: Multiple Agents (Enterprise Pattern)**
- **Public Agent:** General employee policies (all users have access)
- **HR Agent:** Confidential HR docs (HR team only)
- **Manager Agent:** Manager resources (managers only)
- Separate knowledge sources per audience

**Security Note:**
> **Critical:** Knowledge sources respect SharePoint permissions during indexing, BUT agent answers are visible to all agent users. If agent has access to confidential document during indexing, any user can ask about it afterward.
>
> **Solution:** Use folder scoping (Strategy 1) or multiple agents (Strategy 3) to enforce access control. Detailed security patterns covered in Blog 8 (Security & Governance).

---

### 5.3 Keeping Knowledge Up-to-Date

**Automatic Refresh (SharePoint/OneDrive/Websites):**
- Knowledge sources sync on schedule
- Options: Daily, weekly, or manual
- Updated documents automatically re-indexed
- No manual intervention required

**Step 23: Configure Refresh Schedule**
1. Navigate to **Knowledge** tab
2. Click on knowledge source (SharePoint site)
3. Click **Settings** (gear icon)
4. **Refresh schedule** dropdown
5. Select frequency:
   - **Daily:** Recommended for active policy changes
   - **Weekly:** For stable, mature policies
   - **Manual:** For static historical documents

**Manual Refresh:**
- Click **"Refresh now"** button in knowledge source settings
- Forces immediate re-indexing
- Use after major document updates or policy releases

**Best Practice:**
```
Routine: Schedule daily refresh overnight (minimal user impact)
Ad-hoc: Manual refresh after critical policy changes (immediate update)
Version control: Name documents with version (Employee_Handbook_2024_v2.pdf)
Communication: Notify users when major policies update via Teams/Email
```

**Uploaded Files:** Do NOT automatically refresh (must re-upload manually when documents change)

**Citation:** [SharePoint Knowledge Source Refresh - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-sharepoint) "Last accessed: December 18, 2024"

---

## Section 6: Common Pitfalls and Solutions

### Pitfall 1: Knowledge Source Too Broad

**Problem:** Entire SharePoint site connected (hundreds of documents), includes irrelevant content (project files, personal documents, archived materials)

**Symptoms:**
- Agent answers tangential questions poorly
- Slow indexing (hours vs. minutes)
- Irrelevant sources cited in answers
- Storage limits exceeded

**Solution:**
- Scope to **specific libraries or folders** (HR Policies, Employee Resources)
- Remove archived/historical documents from scope
- Create focused knowledge sources (Benefits only, Policies only)

**Example:**
```
❌ Bad: Connect entire company SharePoint (thousands of documents)
✅ Good: Connect "HR/Employee Resources/Policies" folder (50 documents)

Result: Faster indexing, higher quality answers, relevant citations
```

---

### Pitfall 2: Documents Not Optimized for AI

**Problem:** Scanned PDFs (images of text), complex tables, poor formatting, no headings

**Symptoms:**
- AI can't extract information from documents
- Generic answers instead of specific policy details
- Low answer satisfaction scores
- "I don't have that information" when content actually exists

**Solution:**
- Use **text-based PDFs** (not scanned images—run OCR if needed)
- Simplify tables (avoid merged cells, complex layouts)
- Add clear headings (H1, H2, H3 structure)
- Include table of contents

**Tool:** Adobe Acrobat OCR for scanned documents, online PDF converters

**Before/After Example:**
```
❌ Before: Scanned employee handbook (image-based PDF, no text layer)
Result: AI can't read content, returns "no information found"

✅ After: Text-based PDF with headings, TOC, searchable text
Result: AI extracts policy details accurately, cites page numbers
```

---

### Pitfall 3: Conflicting Information Across Documents

**Problem:** Old and new policy versions both in knowledge source

**Symptoms:**
- AI gives contradictory answers (cites old policy in one answer, new policy in another)
- Users confused by inconsistent information
- Compliance risk (outdated policy referenced)

**Solution:**
- **Archive old versions** (move to "Archive" folder outside knowledge source scope)
- Use clear naming: `Employee_Handbook_2024.pdf` (not `Handbook_Final_v2.pdf`)
- Keep only **current, active versions** in knowledge sources
- Document "Last Updated" dates prominently

**Example:**
```
❌ Bad: Knowledge source contains:
- Employee_Handbook_2023.pdf
- Employee_Handbook_2024.pdf
- Employee_Handbook_DRAFT.pdf

Result: AI cites mix of old and new policies

✅ Good: Knowledge source contains only:
- Employee_Handbook_2024.pdf

Old versions moved to: SharePoint/HR/Archive/Policies/Historical/
```

---

### Pitfall 4: Hallucinations (AI Making Up Information)

**Problem:** AI generates plausible-sounding answer **NOT** in documents

**Symptoms:**
- User verifies citation, information doesn't match
- Answer includes details never mentioned in source
- Fabricated statistics, dates, or policies
- Compliance and legal risk

**Solution:**
- **Enable content moderation** (Settings → AI capabilities → Content moderation → ON)
- Add system message: "Only answer from knowledge sources. If information is not in documents, say 'I don't have that information.'"
- Review transcripts regularly for hallucinations
- Create **specific topic** for frequently hallucinated questions (override generative with programmed response)
- Use high-quality, comprehensive source documents (fewer gaps = less fabrication)

**Example Hallucination:**
```
User: "How many sick days do we get?"

Document says: "Employees receive paid sick leave according to state law."

❌ Hallucinated Response: "Employees receive 10 sick days per year."
(Number fabricated—not in document)

✅ Correct Response: "According to the Employee Handbook, sick leave is provided according to state law. The specific number of days depends on your location. Please check with HR for your state's requirements."
```

**Citation:** [Generative Answers Content Moderation - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview) "Last accessed: December 18, 2024"

---

### Pitfall 5: Over-Reliance on Knowledge, Under-Using Topics

**Problem:** Everything is generative, no structured workflows

**Symptoms:**
- Process-based questions get answers but no action
- Users expect help submitting requests but only get information
- No data collection for downstream processes

**Example:**
```
User: "How do I submit a PTO request?"

❌ Knowledge-Only Response:
"To submit PTO, log into the HR portal, go to Time Off section, select dates, and submit for approval."

Result: User has information but still needs to do all manual steps

✅ Hybrid (Topic + Knowledge) Response:
"I can help you submit a PTO request right now! I just need a few details..."
[Collects dates, reason, duration]
[Creates PTO request in system]
[Sends manager approval notification]
"Done! Your PTO request has been submitted for approval."
```

**Solution:**
- **Topics for workflows** (data collection, actions, multi-step processes)
- **Knowledge for information** (policies, explanations, references)
- **Hybrid approach:** Topic with embedded knowledge references

---

### Pitfall 6: No Fallback When Knowledge Doesn't Know

**Problem:** User asks question outside knowledge scope, agent says "I don't know" without offering help

**Symptoms:**
- Poor user experience (dead end)
- Low satisfaction scores
- Users abandon agent

**Solution:** Customize fallback to offer **helpful alternatives**:

**Enhanced Fallback Options:**
```
Option 1: "I don't have that information in my knowledge base. Would you like me to create a support ticket for HR?"

Option 2: "That's outside my knowledge area. I can connect you with [appropriate team/person]. Would that help?"

Option 3: "I couldn't find that in company documents. Here are some related topics I can help with: [list]. Can I assist with any of these?"
```

**Impact:** Converts dead-end conversations into productive interactions

---

### Pitfall 7: Ignoring Analytics (Deploy and Forget)

**Problem:** Agent deployed but never monitored; unanswered questions pile up

**Symptoms:**
- Coverage stays low (40-50%)
- User satisfaction doesn't improve over time
- Same questions repeatedly unanswered

**Solution:**
- **Weekly analytics review** for first month
- **Monthly review** thereafter
- **Action loop:** Identify gaps → Add content → Measure improvement

**Sustainable Pattern:**
```
Monday morning routine:
1. Review last week's unanswered questions (10 min)
2. Identify top 3 content gaps
3. Add missing documents or create topics
4. Re-deploy and monitor next week
```

---

## Section 7: Business Value Demonstration

### 7.1 Knowledge Sources ROI

**Traditional Approach (Manual FAQ Topics):**
```
Employee handbook: 50 pages
Estimated unique questions: 100
Time to create FAQ topics: 5 min per topic × 100 = 500 minutes (8.3 hours)
Quarterly maintenance (policy updates): 2 hours per quarter = 8 hours/year
Annual effort: 8.3 + 8 = 16.3 hours
Cost at $50/hour: $815/year
```

**Knowledge Source Approach:**
```
Upload employee handbook: 10 minutes
Configure knowledge source: 15 minutes
Initial indexing: Automated (0 human time)
Maintenance: Update document in SharePoint, auto-syncs (0 additional agent work)
Annual effort: 25 minutes
Cost at $50/hour: $21/year
```

**ROI Calculation:**
```
Time Savings: 16.3 hours - 0.4 hours = 15.9 hours (95% reduction)
Cost Savings: $815 - $21 = $794/year per knowledge source

Typical organization: 5-10 knowledge sources
Total annual savings: $3,975 - $7,950

Payback period: < 1 week (25 minutes to set up vs. 16+ hours manual approach)
```

---

### 7.2 Question Coverage Improvement

**Comparison:**

| Approach | Questions Covered | Build Time | Maintenance |
|----------|------------------|------------|-------------|
| Manual FAQ Topics | 100-200 (limited to what you build) | High (8+ hours per topic set) | High (update topics manually quarterly) |
| Knowledge Sources | 1,000-10,000 (limited only by content) | Low (25 minutes to connect) | Low (documents update = agent updates) |

**Real-World Example:**
```
50-page employee handbook contains information to answer ~500 unique questions

Without knowledge source:
- Need 500 FAQ topics
- Time to build: 40+ hours
- Maintenance: 16+ hours/year

With knowledge source:
- 25 minutes to connect SharePoint
- Automatic updates
- Answers all 500 questions (and variations)
```

**Coverage Increase:** 5x to 50x more questions answered with knowledge sources

---

### 7.3 User Satisfaction Impact

**Metrics from Knowledge-Enhanced Agents:**
```
Answer accuracy: 85-90% (vs. 60% with limited FAQ topics)
"I don't know" responses: 70% reduction
User satisfaction scores: 40% increase
Escalations to human support: 50% decrease
```

**User Experience Benefits:**
- **Natural conversation:** Not limited to trigger phrases (ask any way you want)
- **Immediate answers:** No waiting for FAQ topic to be built
- **Source transparency:** Citations build trust and enable verification
- **Comprehensive coverage:** Entire policy library accessible in one conversation

**Case Study Reference:** ABN AMRO Bank deployed Microsoft Copilot Studio knowledge-powered agents handling 3.5 million annual conversations (2M text + 1.5M voice), achieving 7% improvement in Dutch language intent recognition accuracy and significant operational cost reduction.

**Citation:** [ABN AMRO Bank Customer Story - Microsoft](https://www.microsoft.com/en/customers/story/19754-abn-amro-bank-microsoft-copilot-studio) "Last accessed: December 18, 2024"

---

## Section 8: Next Steps and Learning Path

### 8.1 Expanding Your Knowledge Agent

**Immediate Enhancements:**

**1. Add More Knowledge Sources**
- Benefits documentation (health insurance, 401k, dental, vision)
- IT policies (acceptable use, security, remote access)
- Safety procedures (emergency, workplace safety, reporting)
- Diversity & inclusion resources (policies, training, employee resource groups)

**2. Optimize Existing Sources**
- Review analytics weekly → Identify gaps in unanswered questions
- Improve document structure (add FAQ sections, clearer headings)
- Add missing information to documents based on user questions

**3. Refine Boosted Conversations**
- Analyze when AI chooses generative vs. topic (review transcripts)
- Adjust boosting settings based on results (generative/balanced/classical)
- Create topics for high-frequency questions requiring actions

**4. Implement Feedback Loop**
```
Week 1: Deploy + initial monitoring
Week 2: Review analytics, export unanswered questions
Week 3: Add missing documents, optimize existing ones
Week 4: Re-analyze metrics, measure improvement
Repeat monthly
```

---

### 8.2 Applying Knowledge Sources to Other Use Cases

**Customer Support Agent:**
- **Knowledge:** Product documentation, troubleshooting guides, KB articles
- **Topics:** Ticket creation, order lookup, warranty claims
- **Hybrid:** Answer product questions + create support tickets

**IT Helpdesk Agent:**
- **Knowledge:** IT policies, software guides, network setup, security procedures
- **Topics:** Password reset, access requests, equipment orders
- **Hybrid:** Troubleshoot issues + execute fixes automatically

**Sales Assistant Agent:**
- **Knowledge:** Product specs, pricing guides, case studies, competitive analysis
- **Topics:** Lead qualification, demo scheduling, quote generation
- **Hybrid:** Answer product questions + book meetings + send proposals

**Facilities Agent:**
- **Knowledge:** Building maps, parking policies, room booking rules, safety procedures
- **Topics:** Room reservations, maintenance requests, visitor registration
- **Hybrid:** Answer facilities questions + book rooms + create work orders

**All follow the same pattern:** Knowledge sources for information, topics for processes, combine for complete automation

---

### 8.3 Preview of Blog 4

> **Blog 4: Automating Actions with Power Automate Flows**
>
> You've built conversational agents (Blog 2) that collect information and knowledge agents (Blog 3) that answer questions. Now it's time to make them **do real work** with Power Automate.
>
> **You'll Learn:**
> - Create Power Automate flows triggered by agent conversations
> - Connect to SharePoint (create list items), Teams (send notifications), Outlook (send emails)
> - Build approval workflows (manager approvals, escalations)
> - Handle errors and retries gracefully
> - Pass data between agents and flows seamlessly
>
> **Project:** Build IT Support Agent that:
> - Collects issue details conversationally (Blog 2 skills)
> - Searches knowledge base for solutions (Blog 3 skills)
> - If unresolved: Creates SharePoint ticket, notifies IT team via Teams, provides user with ticket number (Blog 4 NEW)
>
> **Complete end-to-end automation** from question to resolution, combining everything from Blogs 1-4.
>
> **Coming soon!**

---

## Resources and Citations

### Official Microsoft Documentation

1. **[Knowledge Sources Summary - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-summary)** - Complete guide to all knowledge source types, configuration options, and best practices. "Last accessed: December 18, 2024"

2. **[Add SharePoint Knowledge - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint)** - Step-by-step SharePoint configuration, authentication options, and troubleshooting. "Last accessed: December 18, 2024"

3. **[Use SharePoint Content for Generative Answers - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-generative-answers-sharepoint-onedrive)** - SharePoint-specific generative AI capabilities, supported file types, and permissions. "Last accessed: December 18, 2024"

4. **[Add Public Website as Knowledge Source - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website)** - Website URL configuration, crawling depth, and Bing indexing details. "Last accessed: December 18, 2024"

5. **[Upload Files as Knowledge Source - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-upload-files)** - File upload limits, supported formats, and Dataverse storage. "Last accessed: December 18, 2024"

6. **[Generative AI in Copilot Studio - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview)** - How AI generates answers, content moderation, and quality controls. "Last accessed: December 18, 2024"

7. **[Boosted Conversations Overview - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-conversations)** - Balancing topics and generative AI, configuration options, and optimization strategies. "Last accessed: December 18, 2024"

8. **[Prepare Knowledge Sources Best Practices - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-prepare)** - Document optimization, structure guidelines, and content quality tips. "Last accessed: December 18, 2024"

9. **[Analytics for Generative Answers - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-topic-details)** - Metrics, unanswered questions, satisfaction tracking, and continuous improvement. "Last accessed: December 18, 2024"

10. **[Add Real-Time Knowledge with Connectors - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-real-time-connectors)** - ServiceNow, Zendesk, Salesforce, Dataverse connectors for live data. "Last accessed: December 18, 2024"

11. **[Add Azure AI Search as Knowledge Source - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-azure-ai-search)** - Enterprise-scale search configuration and advanced indexing. "Last accessed: December 18, 2024"

12. **[Best Practices to Improve Bing Index Creation - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/generative-ai-public-websites)** - Website optimization for faster, better indexing via Bing. "Last accessed: December 18, 2024"

13. **[Troubleshoot SharePoint Knowledge Sources - Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/troubleshoot-sharepoint-knowledge-source)** - Common SharePoint connection issues, permission problems, and solutions. "Last accessed: December 18, 2024"

### Enterprise Case Studies

**ABN AMRO Bank** - Third-largest bank in Netherlands deployed Microsoft Copilot Studio with knowledge sources handling 3.5M annual conversations (2M text + 1.5M voice), achieving 7% improvement in intent recognition accuracy and significant cost reduction.

**Source:** [Microsoft Customer Story - ABN AMRO Bank](https://www.microsoft.com/en/customers/story/19754-abn-amro-bank-microsoft-copilot-studio) "Last accessed: December 18, 2024"

### Downloadable Resources

**1. Sample Employee Handbook (AI-Optimized)** - Pre-formatted employee handbook with clear headings, FAQ sections, and table of contents optimized for knowledge source indexing. [Download template]

**2. Knowledge Source Checklist** - Document preparation checklist covering structure, format, and quality requirements. [Download PDF]

**3. Document Optimization Guide** - Step-by-step guide to improving existing documents for AI understanding. [Download PDF]

**4. Analytics Review Template** - Weekly/monthly analytics review template with metrics tracking and action items. [Download Excel]

---

## Summary and Key Takeaways

**Congratulations!** You've transformed your conversational agent into a **knowledge-powered expert** that can answer thousands of questions from existing documents.

**What You Accomplished:**
✅ Connected SharePoint document libraries as knowledge sources
✅ Enabled generative AI to answer policy questions with citations
✅ Configured boosted conversations for intelligent topic/knowledge balance
✅ Uploaded standalone files as alternative knowledge sources
✅ Tested knowledge Q&A comprehensively across multiple scenarios
✅ Set up analytics monitoring for continuous quality improvement
✅ Enhanced Employee Onboarding Agent with policy expertise

**Key Concepts Mastered:**
- **Knowledge Sources:** Documents, websites, and data sources that agents reference
- **Generative AI:** How AI reads documents, understands questions, generates answers
- **Boosted Conversations:** Intelligent routing between structured topics and flexible knowledge
- **Citations:** Source transparency that builds user trust and enables verification
- **Analytics:** Monitoring answer quality, coverage, and identifying content gaps

**Business Impact:**
- **10,000+ questions answered** from 5 knowledge sources
- **95% reduction** in topic creation time
- **85-90% answer accuracy** with well-structured documents
- **Automatic updates** when source documents change

**This is a force multiplier.** You've unlocked the ability to make your agents experts on any topic—just point them to the right documents. No programming required.

---

**Next:** [Blog 4: Automating Actions with Power Automate Flows](#) - Transform your agent from information provider to action-taker with full workflow automation.

**Share your knowledge agent!** Post a screenshot in the community forum showing your agent answering policy questions with citations.

---

**Questions or Feedback?** Comment below or join the discussion in the [Microsoft Copilot Studio Community](#).

---

*Last Updated: December 18, 2024*
*Series: Microsoft Copilot Agents for Business (Blog 3 of 12)*
