# Blog 3: Adding Intelligence with Knowledge Sources - Content Outline

**Subtitle**: "Make Your Agent an Expert Using Existing Documents"

**Word Count Target**: 3,300-3,800 words

**Reading Time**: 16 minutes

**Hands-On Time**: 50 minutes

**Difficulty**: Intermediate

---

## Learning Objectives

By completing this blog, readers will:

1. **Connect** SharePoint documents and websites as knowledge sources to agents
2. **Enable** generative AI to answer questions from company content automatically
3. **Balance** conversational topics (structured) with AI-generated responses (unstructured)
4. **Configure** boosted conversations for intelligent topic triggering
5. **Monitor** and improve answer quality using analytics and citations
6. **Enhance** the Employee Onboarding Agent from Blog 2 with knowledge-based Q&A

---

## Prerequisites

### Required
- Completed Blog 1 (Introduction) and Blog 2 (Conversational Agent)
- Employee Onboarding Agent built in Blog 2
- Access to SharePoint site or OneDrive
- Company policy documents (employee handbook, benefits guide, etc.)

### Recommended
- SharePoint document library administrator access
- Sample policy documents to upload (if no existing SharePoint library)
- Understanding of your organization's knowledge management practices

### Optional
- Company intranet website (for website knowledge source)
- Multiple document formats (PDF, Word, Excel)

---

## Section-by-Section Breakdown

### Hero Section (250 words)

**Content**:
- **Opening Hook**: "What if your agent could answer any question about company policies - without you programming every response?"
- **Current Limitation**: Blog 1-2 agents only know what you explicitly teach them (FAQ topics, conversational flows)
- **The Problem**:
  - Employee handbook: 50+ pages
  - Benefits documentation: 30+ pages
  - Company policies: dozens of documents
  - Creating FAQ topics for everything = weeks of work + constant updates
- **The Solution**: Knowledge sources + generative AI
  - Point agent to your existing documents
  - AI reads, understands, and answers questions automatically
  - No topic creation needed for every question
  - Documents update = agent knowledge updates automatically

**Visual**: Before/After comparison
- Before: Agent builder manually creating 100+ FAQ topics
- After: Agent builder connecting 3 document libraries → AI answers thousands of questions

**Real-World Impact Box**:
> **Knowledge-Enhanced Agents in Production**:
> - Answer 10,000+ unique questions from just 5 document sources
> - 85-90% answer accuracy (vs. 40% for manual FAQ topics)
> - 95% reduction in topic creation time
> - Automatic updates when documents change
>
> Source: [Microsoft Copilot Studio case studies - cite if available]

**Tone**: Empowering, transformative, emphasizing leverage (small input, massive output)

---

### Section 1: Understanding Knowledge Sources (700 words)

**Subsection 1.1: What Are Knowledge Sources? (250 words)**

**Content**:
- **Definition**: Documents, websites, or databases that agents can read and reference to answer questions
- **How it works**:
  1. You connect document source (SharePoint, website, uploaded files)
  2. AI indexes the content (creates searchable understanding)
  3. User asks question
  4. AI searches knowledge sources for relevant information
  5. AI generates natural language answer with citations

**Analogy Box**:
> **Knowledge Sources = Agent's Reference Library**
>
> Imagine hiring a smart assistant:
> - **Manual topics** = Memorizing specific Q&A flashcards (rigid, limited)
> - **Knowledge sources** = Reading your entire company library (flexible, comprehensive)
>
> The assistant can answer questions you never explicitly taught because they've read the source materials.

**Key Difference from FAQ Topics**:

| Aspect | FAQ Topics (Blogs 1-2) | Knowledge Sources (Blog 3) |
|--------|----------------------|---------------------------|
| **Content Creation** | Manual (you write responses) | Automatic (AI reads documents) |
| **Question Coverage** | Limited to trigger phrases | Open-ended, natural language |
| **Maintenance** | Update topics manually | Update documents, AI adapts |
| **Answer Style** | Fixed responses you authored | AI-generated, conversational |
| **Citations** | Not included | Automatic source links |
| **Best For** | Structured processes, specific flows | General knowledge, policy Q&A |

**Visual**: Side-by-side conversation examples
- FAQ topic: Exact trigger needed, fixed response
- Knowledge source: Any related question, generated answer with citation

**When to Use Each Approach**:
- **Topics**: Onboarding workflows, support ticket creation, specific processes
- **Knowledge**: Policy questions, how-to guides, general information lookup

**Screenshot**: Agent answering question from knowledge source with citation visible

**Citation Needed**:
- Microsoft Copilot Studio knowledge sources overview
- Link: https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-overview

---

**Subsection 1.2: Types of Knowledge Sources (250 words)**

**Content**:

**1. SharePoint Sites and Document Libraries**
- **Most common for enterprise**: Already have company documents here
- **What agent can read**: Word docs, PDFs, Excel files, PowerPoint presentations
- **Example**: HR SharePoint site with employee handbook, policies, forms

**2. OneDrive Folders**
- **Best for**: Personal or team-managed content
- **Scope**: Specific folders or entire OneDrive
- **Example**: Manager's OneDrive with team procedures

**3. Uploaded Files**
- **Best for**: Standalone documents without SharePoint
- **Formats**: PDF, Word (.docx), text files
- **Limit**: 10 files maximum (per agent)
- **Example**: Upload employee handbook PDF directly

**4. Public Websites**
- **Best for**: External reference materials, product documentation
- **Configuration**: Specify URL, AI crawls pages
- **Example**: Company public knowledge base, help center

**5. Dataverse Tables** (Advanced)
- **Best for**: Structured data (customer records, inventory)
- **Covered in**: Blog 4 (Agent Flows and Data Integration)

**6. Custom Connectors** (Advanced)
- **Best for**: Proprietary systems, APIs
- **Covered in**: Blog 6 (External Systems)

**Recommendation Table**:

| Your Scenario | Best Knowledge Source |
|--------------|----------------------|
| Existing SharePoint intranet | SharePoint site |
| No SharePoint, have PDFs | Upload files |
| Team-managed content | OneDrive folder |
| Public documentation | Website URL |
| Structured database | Dataverse (Blog 4) |

**Screenshot**: Knowledge sources configuration screen showing all types

**Citation Needed**:
- Supported knowledge source types
- Link: https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-add

---

**Subsection 1.3: How Generative AI Creates Answers (200 words)**

**Content**:

**The Process (Business-Friendly Explanation)**:

**Step 1: Indexing (Happens Once)**
- Agent reads all content in knowledge source
- Creates searchable index of information
- Understands context, relationships, topics
- Time: 5 minutes to several hours (depending on volume)

**Step 2: Question Interpretation (Each Conversation)**
- User asks question in natural language
- AI identifies intent and key concepts
- Example: "How much vacation do I get?" → Intent: PTO policy, Focus: Accrual amount

**Step 3: Content Retrieval**
- AI searches index for relevant passages
- Ranks by relevance
- Retrieves top 3-5 most relevant sections

**Step 4: Answer Generation**
- AI synthesizes information from retrieved passages
- Generates conversational answer
- Includes citations to source documents
- Filters out irrelevant details

**Step 5: Content Moderation**
- Checks answer appropriateness
- Ensures alignment with content
- Blocks inappropriate responses

**Visual**: Flowchart showing 5-step process with examples at each stage

**Key Principle Box**:
> **AI generates answers, doesn't copy-paste**: The agent understands content and creates natural responses, not just quoting documents verbatim. This makes answers more conversational and useful.

**Screenshot**: Example showing source passage vs. AI-generated answer (demonstrates synthesis)

**Citation Needed**:
- Generative AI in Copilot Studio
- Link: https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview

---

### Section 2: Hands-On Project - Enhance HR Agent with Knowledge (1,400 words)

**Project Overview Box**:
> **What You'll Build**: Enhanced Employee Onboarding Agent
>
> **New Capabilities**:
> - Answers open-ended questions about company policies
> - References employee handbook automatically
> - Provides benefits information from SharePoint
> - Cites source documents for transparency
> - Balances structured onboarding flow with flexible Q&A
>
> **Knowledge Sources**:
> 1. Employee handbook (PDF or Word)
> 2. Benefits documentation (SharePoint library)
> 3. Company policies website (optional)
>
> **Time Required**: 50 minutes
>
> **Business Value**: One agent handles both structured onboarding AND policy questions (no more separate FAQ bot)

---

**Subsection 2.1: Preparing Your Knowledge Sources (250 words)**

**Before You Start - Content Audit**:

**Step 1: Identify Knowledge Documents**

Create list of documents employees frequently ask about:
- [ ] Employee handbook
- [ ] Benefits guide (health, dental, 401k, PTO)
- [ ] Remote work policy
- [ ] Expense reimbursement policy
- [ ] IT acceptable use policy
- [ ] Code of conduct
- [ ] Diversity & inclusion statement
- [ ] Safety procedures

**Step 2: Verify Document Accessibility**

Ensure documents are:
- [ ] In supported format (PDF, Word, Excel, PowerPoint)
- [ ] Stored in SharePoint or OneDrive (or ready to upload)
- [ ] Not password-protected or encrypted
- [ ] Current and accurate (review dates)
- [ ] Appropriately scoped (public vs. confidential)

**Document Preparation Checklist**:
- [ ] **Clear headings**: Use H1, H2 structure (helps AI understand sections)
- [ ] **Table of contents**: Improves navigation and context
- [ ] **Page numbers**: Enables specific citations
- [ ] **Metadata**: Add title, author, last updated date
- [ ] **Clean formatting**: Avoid images with text (use actual text)

**Screenshot**: SharePoint document library with HR policy documents

**Permission Considerations Box**:
> **Important**: Only include documents all employees should access. If a document is confidential (executive compensation, HR investigations), DO NOT add it as a knowledge source. The agent will reference it for all users.
>
> For role-based access, see Blog 8 (Security & Governance).

**For This Tutorial**:
If you don't have SharePoint set up, download sample employee handbook and benefits guide:
- [Link to downloadable sample documents from blog]
- Upload as files in next step

**Citation Needed**:
- Document preparation best practices
- Link: https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-prepare

---

**Subsection 2.2: Adding SharePoint as Knowledge Source (300 words)**

**Step 3: Open Your Agent**
- Navigate to Copilot Studio
- Open Employee Onboarding Agent (from Blog 2)
- Click "Knowledge" tab in left navigation

**Screenshot**: Knowledge tab in Copilot Studio (empty state)

**Step 4: Add SharePoint Knowledge Source**
- Click "+ Add knowledge"
- Select "SharePoint"
- You'll see three options:
  - **Specific site**: Single SharePoint site
  - **Multiple sites**: Multiple SharePoint sites (enterprise)
  - **Specific document library**: Precise folder control

**For This Tutorial**: Select "Specific site"

**Screenshot**: Knowledge source type selection dialog

**Step 5: Configure SharePoint Connection**

**SharePoint Site URL**:
- Example: `https://contoso.sharepoint.com/sites/HR`
- How to find: Open SharePoint site in browser, copy URL
- Paste in "Site URL" field

**Select Content**:
- Option A: "All content in this site" (includes all libraries and pages)
- Option B: "Specific document library" (more control)

**Recommendation**: Choose "Specific document library" → Select "HR Policies"

**Screenshot**: SharePoint site configuration with URL and library selection

**Step 6: Configure Indexing Settings**

**Content to include**:
- [x] Documents (Word, PDF)
- [x] Pages (SharePoint pages)
- [ ] Lists (typically not needed for knowledge Q&A)

**Refresh schedule**:
- Daily (recommended for frequently updated content)
- Weekly (for stable policies)
- Manual (for static content)

**Screenshot**: Indexing settings configuration

**Step 7: Authenticate and Connect**
- Click "Add"
- Sign in with SharePoint credentials (if prompted)
- Grant Copilot Studio permission to access SharePoint
- Wait for "Connection successful" message

**Step 8: Wait for Initial Indexing**
- Status shows "Indexing in progress..."
- Small library: 5-10 minutes
- Large library: 30-60 minutes
- You can continue with other steps (doesn't block)

**Screenshot**: Knowledge source status showing indexing progress

**Troubleshooting Box**:
> **Common Issues**:
> - **"Access denied"**: Verify you have read permission on SharePoint site
> - **"Site not found"**: Check URL spelling, ensure site exists
> - **"Indexing failed"**: Check document formats, remove password-protected files
> - **Slow indexing**: Large libraries take time; be patient

**Citation Needed**:
- Adding SharePoint knowledge sources
- Link: https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-sharepoint

---

**Subsection 2.3: Uploading Files as Knowledge Source (200 words)**

**Alternative to SharePoint**: If you don't have SharePoint, upload files directly.

**Step 9: Add Uploaded Files**
- Click "+ Add knowledge"
- Select "Files"
- Click "Upload files"

**Step 10: Upload Documents**
- Select up to 10 files
- Supported: PDF, .docx, .txt
- Max size: 10 MB per file
- Example uploads:
  - Employee_Handbook_2024.pdf
  - Benefits_Guide.pdf
  - Remote_Work_Policy.docx
  - PTO_Policy.pdf

**Screenshot**: File upload dialog with multiple documents selected

**Step 11: Confirm Upload**
- Files appear in knowledge sources list
- Status: "Processing"
- Wait 3-5 minutes for indexing
- Status changes to "Ready"

**Screenshot**: Uploaded files with "Ready" status

**Limitations of File Upload vs. SharePoint**:
- Max 10 files (SharePoint: unlimited)
- No automatic updates (SharePoint: syncs on schedule)
- No folder structure (SharePoint: maintains organization)
- Manual re-upload needed for updates

**Recommendation**: Use file upload for prototyping; migrate to SharePoint for production

---

**Subsection 2.4: Adding Website as Knowledge Source (150 words)**

**Optional**: If your company has public knowledge base or intranet.

**Step 12: Add Website**
- Click "+ Add knowledge"
- Select "Website"
- Enter URL: `https://help.company.com`

**Step 13: Configure Crawling**
- **Crawl depth**: How many link levels to follow
  - 1 level: Just pages linked from main page
  - 2 levels: Pages linked from those pages too
  - Recommendation: Start with 2, increase if needed

- **Pages to include**: Specify URL patterns
  - Example: `https://help.company.com/hr/*` (only HR section)

**Screenshot**: Website knowledge source configuration

**Step 14: Start Indexing**
- Click "Add"
- Indexing begins (can take 30+ minutes for large sites)
- Status updates in knowledge sources list

**Use Case**: Public documentation, help centers, product guides

---

**Subsection 2.5: Testing Knowledge Source Q&A (250 words)**

**Step 15: Open Test Panel**
- Ensure at least one knowledge source shows "Ready" status
- Click "Test your agent"

**Step 16: Ask Knowledge-Based Questions**

Test these question types:

**Test 1: Direct Policy Question**
- Type: "What's the PTO policy?"
- Expected: AI generates answer from employee handbook
- Look for: Citation link to source document

**Screenshot**: Test panel showing AI-generated answer with citation

**Test 2: Specific Detail Question**
- Type: "How many days of vacation do employees with 3 years get?"
- Expected: AI extracts specific information from accrual table
- Look for: Accurate answer matching document content

**Test 3: Multi-Document Question**
- Type: "What health insurance options do we have?"
- Expected: AI synthesizes answer from benefits guide
- Look for: Comprehensive response citing benefits documentation

**Test 4: Follow-Up Question**
- After PTO question, type: "What about sick leave?"
- Expected: AI understands context and provides sick leave policy
- Look for: Conversation continuity

**Test 5: Unknown Question**
- Type: "What's the CEO's favorite color?"
- Expected: "I don't have that information in my knowledge sources. Is there something else I can help with?"
- Look for: Graceful fallback, not fabricated answer

**Screenshot**: Example of graceful fallback when information not found

**Quality Check**:
- [ ] Answers are accurate (match source documents)
- [ ] Citations provided for all answers
- [ ] Tone is conversational (not robotic)
- [ ] Unknown questions handled appropriately
- [ ] No hallucinations (made-up information)

---

**Subsection 2.6: Configuring Boosted Conversations (200 words)**

**What Are Boosted Conversations?**
- AI automatically decides whether to:
  1. Use a specific topic you created (structured flow)
  2. Generate answer from knowledge sources (flexible Q&A)
  3. Combination of both

**Why This Matters**:
- User asks "What's the onboarding process?"
  - Could trigger Employee Onboarding topic (conversational flow)
  - OR AI could answer from handbook (generative)
- Boosting optimizes which approach to use

**Step 17: Enable Boosted Conversations**
- Navigate to "Settings" → "AI capabilities"
- Find "Boosted conversations" section
- Toggle: **ON**

**Screenshot**: Boosted conversations toggle in settings

**Step 18: Configure Boosting Behavior**

**Options**:
- **Generative**: Prefer AI-generated answers from knowledge
- **Balanced**: AI chooses best approach (RECOMMENDED)
- **Classical**: Prefer predefined topics, use generative as fallback

**For This Agent**: Select "Balanced"

**What Happens Now**:
- Employee asks onboarding question → Structured topic triggers (better UX for workflow)
- Employee asks policy question → Generative answer from knowledge
- Employee asks complex question → AI combines both approaches

**Screenshot**: Boosted conversations configuration options

**Citation Needed**:
- Boosted conversations overview
- Link: https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-conversations

---

### Section 3: Balancing Topics and Knowledge Sources (500 words)

**Subsection 3.1: When to Use Topics vs. Knowledge (200 words)**

**Decision Framework**:

| Use Predefined Topic | Use Knowledge Source |
|---------------------|---------------------|
| Structured process (onboarding, ticket creation) | Open-ended information lookup |
| Requires data collection (forms, surveys) | General knowledge questions |
| Specific action needed (send email, create record) | Policy explanations |
| Multi-step workflow | Single-answer questions |
| High accuracy required (legal, compliance) | Conversational reference |
| Consistent response needed | Adaptive, nuanced responses |

**Examples**:

**Scenario 1: Requesting Time Off**
- **Best Approach**: Topic (structured workflow)
- **Why**: Need to collect start date, end date, type, send approval
- **Knowledge Role**: Can reference PTO policy within topic

**Scenario 2: Understanding PTO Accrual**
- **Best Approach**: Knowledge source (generative)
- **Why**: Information lookup, no action required
- **Topic Role**: None needed

**Scenario 3: Benefits Enrollment**
- **Best Approach**: Hybrid (topic + knowledge)
- **Topic**: Collect enrollment choices, deadline
- **Knowledge**: Answer specific benefits questions ("Is spouse covered?")

**Visual**: Decision tree for choosing approach

**Best Practice Box**:
> **Start with Knowledge, Add Topics for Workflows**
>
> 1. Connect knowledge sources (covers 80% of questions)
> 2. Identify gaps where structured process needed
> 3. Create topics for those specific workflows
> 4. Reference knowledge within topics for context
>
> Result: Agent handles everything without over-building topics

---

**Subsection 3.2: Hybrid Example - Onboarding with Knowledge (200 words)**

**Enhancing Blog 2's Onboarding Agent**:

**Step 19: Add Knowledge Reference in Topic**

Edit Employee Onboarding topic:
- After collecting start date
- Before showing checklist
- Add message node:

```
By the way, I can also answer questions about company policies!

For example, you can ask me:
- "What's the dress code?"
- "How do I enroll in benefits?"
- "What's the remote work policy?"
- "How much PTO do I get?"

Feel free to ask anything - I have access to our employee handbook and policies.
```

**Screenshot**: Enhanced onboarding topic with knowledge prompt

**Step 20: Test Hybrid Interaction**

**Test Script**:
1. Trigger onboarding topic: "I'm a new employee"
2. Complete structured flow (name, department, etc.)
3. See knowledge prompt
4. Ask: "What's the dress code?"
5. Receive AI-generated answer from handbook
6. Continue with onboarding flow

**Expected Behavior**:
- Structured topic continues seamlessly
- Knowledge Q&A embedded within topic
- User gets best of both: workflow + information

**Screenshot**: Test panel showing topic flow interrupted by knowledge question, then resuming

**Business Value**:
- One agent handles both onboarding process AND policy questions
- No need to say "let me transfer you to the policy bot"
- Seamless user experience

---

**Subsection 3.3: Creating Fallback to Knowledge (100 words)**

**Step 21: Update Fallback Topic**

When agent doesn't understand user question:
- Instead of generic "I don't understand"
- Try searching knowledge sources first

Navigate to "Fallback" system topic:
- Edit message node
- Change to: "Let me search our company knowledge base for that..."
- Agent will automatically check knowledge sources
- If found: Provide answer
- If not found: "I don't have information about that. Would you like to speak with someone?"

**Screenshot**: Enhanced fallback topic with knowledge search

**Impact**: Increases question coverage without creating more topics

---

### Section 4: Monitoring and Improving Answer Quality (600 words)

**Subsection 4.1: Using Analytics to Assess Knowledge Performance (250 words)**

**Step 22: Access Knowledge Analytics**
- Navigate to "Analytics" tab
- Filter by date range (last 7 days for initial testing)
- Review key metrics:

**Metric 1: Knowledge Answer Coverage**
- % of questions answered from knowledge sources
- Target: 60-80% (balanced with topics)
- Low percentage: Add more knowledge sources or improve indexing

**Metric 2: Answer Satisfaction**
- User ratings (thumbs up/down)
- Target: 80%+ positive
- Low satisfaction: Content quality issue or hallucinations

**Metric 3: Citation Click-Through**
- % of users clicking source citations
- Indicates trust and verification behavior
- High CTR: Users validating answers (good)

**Metric 4: Unanswered Questions**
- Questions AI couldn't answer from knowledge
- Gold mine for content gaps
- Action: Add missing documents or create topics

**Screenshot**: Analytics dashboard showing knowledge metrics

**Analyzing Unanswered Questions**:
- Export list of questions AI couldn't answer
- Common patterns indicate missing content
- Examples:
  - Many "parking" questions → Add parking policy document
  - Many "travel" questions → Add travel & expense guide

**Action Plan Template**:
```
Week 1: Deploy agent with initial knowledge sources
Week 2: Review analytics, identify gaps
Week 3: Add missing documents
Week 4: Re-analyze, measure improvement
```

**Citation Needed**:
- Analytics for generative answers
- Link: https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-topic-details

---

**Subsection 4.2: Reviewing Conversation Transcripts (200 words)**

**Step 23: Analyze Actual Conversations**
- Navigate to "Analytics" → "Sessions"
- Click on individual conversation
- Review full transcript

**What to Look For**:

**Red Flags** (Indicates Problems):
- ❌ AI fabricating information not in documents (hallucination)
- ❌ Answer contradicts source material (misinterpretation)
- ❌ Irrelevant answers (poor search retrieval)
- ❌ Generic responses when specific answer exists
- ❌ No citation provided when answer came from knowledge

**Green Flags** (Quality Indicators):
- ✅ Accurate answer matching source content
- ✅ Citation link provided
- ✅ Conversational, helpful tone
- ✅ Follow-up questions handled well
- ✅ User expressed satisfaction

**Screenshot**: Conversation transcript with annotations highlighting quality indicators

**Taking Action on Issues**:

**Issue**: Hallucinations detected
- **Action**: Improve content moderation settings
- **Action**: Add more authoritative sources
- **Action**: Create topic for this question (override generative)

**Issue**: Poor answer quality
- **Action**: Improve source document clarity
- **Action**: Add FAQs to documents for common questions
- **Action**: Increase knowledge source refresh frequency

---

**Subsection 4.3: Improving Source Content for Better AI Answers (150 words)**

**Document Optimization Tips**:

**1. Use Clear Headings**
```markdown
❌ Poor: "Important Info About Time Off"
✅ Good: "PTO Accrual Policy"
```

**2. Structure with Q&A Sections**
Add "Frequently Asked Questions" section to documents:
```
Q: How much PTO do I earn per year?
A: Accrual is based on tenure:
   - 0-2 years: 15 days
   - 2-5 years: 20 days
   - 5+ years: 25 days
```

**3. Avoid Ambiguity**
```markdown
❌ Poor: "You can take time off when needed"
✅ Good: "Employees can request PTO with 2 weeks advance notice, subject to manager approval"
```

**4. Include Definitions**
Define acronyms and jargon:
```
PTO (Paid Time Off): Vacation, sick leave, and personal days combined into one policy
```

**5. Keep Updated**
- Add "Last Updated" date to all documents
- Review quarterly
- Archive outdated versions

**Impact**: Well-structured documents → 20-30% improvement in answer quality

---

### Section 5: Advanced Knowledge Source Techniques (400 words)

**Subsection 5.1: Using Citations for Transparency (150 words)**

**Why Citations Matter**:
- Build user trust (can verify information)
- Compliance (show source of answer)
- Accountability (trace back to policy version)

**How Citations Work**:
- AI automatically includes source link with answers
- Format: "According to [Employee Handbook, page 12]"
- Clickable link opens source document

**Step 24: Configure Citation Settings**
- Navigate to "Settings" → "Generative AI"
- Find "Citations" section
- Options:
  - **Always show**: Every answer includes source (RECOMMENDED)
  - **Show when available**: Only if source found
  - **Never show**: Suppress citations (not recommended)

**For This Agent**: Select "Always show"

**Screenshot**: Citation configuration settings

**User Experience**:
- User asks policy question
- Agent answers
- Citation appears: "Source: Employee Handbook v2024"
- User can click to verify
- Increases confidence in answer accuracy

**Compliance Benefit**: Auditable trail of information sources

---

**Subsection 5.2: Filtering and Scoping Knowledge (150 words)**

**Problem**: Not all content in SharePoint should be accessible to all employees.

**Solution**: Scope knowledge sources carefully.

**Scoping Strategies**:

**Strategy 1: Specific Folders**
- Instead of entire SharePoint site
- Select only "Public Policies" library
- Exclude "HR Confidential" library

**Strategy 2: Metadata Filtering** (Advanced)
- Tag documents with "Public" vs. "Confidential"
- Filter knowledge source by metadata
- Requires SharePoint admin configuration

**Strategy 3: Multiple Agents**
- Public Agent: General employee policies (all users)
- HR Agent: Confidential HR docs (HR team only)
- Separate knowledge sources per audience

**For Now**: Use folder scoping (easiest)

**Screenshot**: SharePoint library selection showing specific folders

**Security Note Box**:
> **Critical**: Knowledge sources respect SharePoint permissions, BUT agent answers are visible to all agent users. If agent has access to confidential document, any user can ask about it.
>
> Solution: Create separate agents with different knowledge scopes per audience.
>
> Detailed security covered in Blog 8 (Security & Governance)

---

**Subsection 5.3: Keeping Knowledge Up-to-Date (100 words)**

**Automatic Refresh**:
- SharePoint knowledge sources sync on schedule
- Daily, weekly, or manual options
- Updated documents automatically re-indexed

**Step 25: Configure Refresh Schedule**
- Navigate to "Knowledge" tab
- Click on knowledge source
- Settings → "Refresh schedule"
- Recommended: Daily (for active policy changes)

**Screenshot**: Refresh schedule configuration

**Manual Refresh**:
- Click "Refresh now" button
- Forces immediate re-indexing
- Use after major document updates

**Best Practice**:
- Schedule daily refresh overnight
- Manual refresh after critical policy changes
- Version documents (Employee_Handbook_2024_v2.pdf)

---

### Section 6: Common Pitfalls and Solutions (450 words)

**Pitfall 1: Knowledge Source Too Broad**
- **Problem**: Entire SharePoint site connected, includes irrelevant content
- **Symptom**: Agent answers tangential questions poorly, slow indexing
- **Solution**: Scope to specific libraries or folders
- **Example**: HR Policies folder only, not entire company SharePoint

**Pitfall 2: Documents Not Optimized for AI**
- **Problem**: Scanned PDFs (images of text), complex tables, poor formatting
- **Symptom**: AI can't extract information, answers are generic
- **Solution**: Use text-based PDFs, simplify tables, add clear headings
- **Tool**: Adobe Acrobat OCR for scanned documents

**Pitfall 3: Conflicting Information Across Documents**
- **Problem**: Old and new policy versions both in knowledge source
- **Symptom**: AI gives contradictory answers or cites outdated policy
- **Solution**: Archive old versions, use clear naming (Policy_2024.pdf), keep only current versions

**Pitfall 4: Hallucinations (AI Making Up Information)**
- **Problem**: AI generates plausible-sounding answer not in documents
- **Symptom**: User verifies citation, information doesn't match
- **Solution**:
  - Enable content moderation (Settings → AI capabilities)
  - Add "Answer only from knowledge sources" instruction
  - Review transcripts regularly for hallucinations
  - Create topic for frequently hallucinated questions (override generative)

**Pitfall 5: Over-Reliance on Knowledge, Under-Using Topics**
- **Problem**: Everything generative, no structured workflows
- **Symptom**: Process-based questions get answers but no action
- **Example**: "How do I submit PTO?" → Agent explains process but doesn't help submit
- **Solution**: Topics for workflows, knowledge for information
- **Hybrid Approach**: Topic with embedded knowledge references

**Pitfall 6: No Fallback When Knowledge Doesn't Know**
- **Problem**: User asks question outside knowledge scope, agent says "I don't know" without offering help
- **Symptom**: Poor user experience, low satisfaction
- **Solution**: Customize fallback to offer:
  - "I don't have that information. Would you like me to create a support ticket?"
  - "That's outside my knowledge area. I can connect you with [appropriate team]."
  - "I couldn't find that in company documents. Can I help with something else?"

**Screenshot**: Enhanced fallback topic with helpful alternatives

**Pitfall 7: Ignoring Analytics**
- **Problem**: Deploy and forget, don't monitor unanswered questions
- **Symptom**: Coverage stays low, user satisfaction doesn't improve
- **Solution**: Weekly analytics review for first month, monthly thereafter
- **Action Loop**: Identify gaps → Add content → Measure improvement

---

### Section 7: Business Value Demonstration (300 words)

**Subsection 7.1: Knowledge Sources ROI**

**Traditional Approach** (Creating FAQ Topics for Everything):
- Employee handbook: 50 pages
- Estimate: 100 unique questions
- Time to create FAQ topics: 5 min per topic × 100 = 500 minutes (8.3 hours)
- Maintenance: Update topics when policies change (2 hours/quarter)
- Annual effort: 8.3 + 8 = 16.3 hours

**Knowledge Source Approach**:
- Upload employee handbook: 10 minutes
- Configure knowledge source: 15 minutes
- Initial indexing: Automated (0 human time)
- Maintenance: Update document, auto-syncs (0 additional agent work)
- Annual effort: 25 minutes

**Time Savings**: 16.3 hours - 0.4 hours = 15.9 hours (95% reduction)

**Monetary ROI**:
```
Agent builder hourly rate: $50/hour
Savings: 15.9 hours × $50 = $795/year per knowledge source

Typical organization: 5-10 knowledge sources
Total annual savings: $3,975 - $7,950
```

---

**Subsection 7.2: Question Coverage Improvement**

**Comparison**:

| Approach | Questions Covered | Build Time | Maintenance |
|----------|------------------|------------|-------------|
| Manual FAQ Topics | 100-200 (limited to what you build) | High (hours per topic set) | High (update topics manually) |
| Knowledge Sources | 1,000-10,000 (limited only by content) | Low (minutes to connect) | Low (documents update = agent updates) |

**Real-World Example**:
- 50-page employee handbook
- Generates answers for ~500 unique questions
- Without knowledge source: Would need 500 FAQ topics
- Time to build: 40+ hours
- With knowledge source: 25 minutes

**Coverage Increase**: 5x to 50x more questions answered

---

**Subsection 7.3: User Satisfaction Impact**

**Metrics from Knowledge-Enhanced Agents**:
- 85-90% answer accuracy (vs. 60% with limited FAQ topics)
- 70% reduction in "I don't know" responses
- 40% increase in user satisfaction scores
- 50% decrease in escalations to human support

**User Experience Benefits**:
- Natural conversation (not limited to trigger phrases)
- Immediate answers (no waiting for FAQ topic to be built)
- Source transparency (citations build trust)
- Comprehensive coverage (entire policy library accessible)

---

### Section 8: Next Steps and Learning Path (250 words)

**Subsection 8.1: Expanding Your Knowledge Agent**

**Immediate Enhancements**:
1. **Add More Knowledge Sources**
   - Benefits documentation
   - IT policies
   - Safety procedures
   - Diversity & inclusion resources

2. **Optimize Existing Sources**
   - Review analytics, identify gaps
   - Improve document structure
   - Add FAQ sections to documents

3. **Refine Boosted Conversations**
   - Analyze when AI chooses generative vs. topic
   - Adjust boosting settings based on results

4. **Implement Feedback Loop**
   - Weekly analytics review
   - Update documents based on unanswered questions
   - A/B test document improvements

---

**Subsection 8.2: Applying Knowledge Sources to Other Use Cases**

**Customer Support Agent**:
- Knowledge: Product documentation, troubleshooting guides
- Topics: Ticket creation, order lookup
- Hybrid: Answer product questions + create support tickets

**IT Helpdesk Agent**:
- Knowledge: IT policies, software guides, network setup
- Topics: Password reset, access requests
- Hybrid: Troubleshoot issues + execute fixes

**Sales Agent**:
- Knowledge: Product specs, pricing, case studies
- Topics: Lead qualification, demo scheduling
- Hybrid: Answer product questions + book meetings

---

**Subsection 8.3: Preview of Blog 4**

> **Blog 4: Automating Actions with Agent Flows**
>
> You've built conversational agents that collect information and answer questions. Now it's time to make them **do real work**.
>
> **You'll Learn**:
> - Create Power Automate flows triggered by agents
> - Connect to SharePoint, Teams, Outlook, Excel
> - Build approval workflows
> - Handle errors and retries
> - Pass data between agents and flows
>
> **Project**: Build IT Support Agent that:
> - Collects issue details (conversational)
> - Searches knowledge base for solutions (generative)
> - If unresolved: Creates SharePoint ticket, notifies IT team, provides user with ticket number
>
> **Complete automation** from question to resolution, combining everything from Blogs 1-4.
>
> **Coming next!**

---

### Section 9: Resources and Citations (200 words)

**Official Microsoft Documentation**:
1. [Knowledge Sources Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-overview) - Complete knowledge source guide
2. [Add SharePoint Knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-sharepoint) - SharePoint configuration
3. [Generative AI Capabilities](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview) - How AI generates answers
4. [Boosted Conversations](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-conversations) - Balancing topics and generative AI
5. [Prepare Knowledge Sources](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-prepare) - Document optimization

**Video Resources**:
- Full tutorial: Adding knowledge sources (embedded)
- Quick tips: Optimizing documents for AI
- Quick tips: Interpreting knowledge analytics
- Quick tips: Troubleshooting hallucinations

**Downloadable Resources**:
- Sample Employee Handbook (optimized for AI)
- Knowledge Source Checklist
- Document Optimization Guide
- Analytics Review Template

**Community**:
- Share your knowledge-enhanced agent
- Knowledge source configuration examples
- Document optimization tips

---

## Screenshot Requirements

### Critical Screenshots (Must-Have) - 20 total

1. **Knowledge tab overview** - Empty state before adding sources
2. **Knowledge source type selection** - SharePoint, Files, Website options
3. **SharePoint configuration** - URL entry, library selection
4. **Indexing progress** - Status showing "Indexing in progress"
5. **Knowledge source ready** - Status showing "Ready"
6. **File upload interface** - Multiple documents being uploaded
7. **Website knowledge source** - URL and crawl depth configuration
8. **Test panel - Knowledge Q&A** - AI-generated answer with citation
9. **Citation example** - Source link visible in answer
10. **Boosted conversations settings** - Toggle and behavior options
11. **Analytics - Knowledge metrics** - Answer coverage, satisfaction
12. **Unanswered questions report** - List of questions AI couldn't answer
13. **Conversation transcript** - Full conversation showing knowledge answers
14. **Hallucination example** - Incorrect answer with annotation (for pitfalls section)
15. **Enhanced fallback topic** - Fallback checking knowledge sources
16. **Hybrid conversation** - Topic flow with embedded knowledge Q&A
17. **Refresh schedule configuration** - Daily/weekly options
18. **Content moderation settings** - AI safety features
19. **SharePoint document library** - Properly organized policy documents
20. **Before/After answer quality** - Poor document structure vs. optimized

### Supplementary Screenshots - 5 total

21. Document metadata (for optimization)
22. Multiple knowledge sources list
23. Citation click-through analytics
24. Knowledge source scoping (specific folders)
25. Manual refresh button

---

## Diagram Requirements

### Diagram 1: Knowledge Source Processing Flow

**Purpose**: Visualize how AI processes documents and generates answers

**Content**:
- Step 1: Documents added (SharePoint/Files/Website)
- Step 2: Indexing (AI reads and structures content)
- Step 3: User asks question
- Step 4: Search index for relevant passages
- Step 5: Generate answer from passages
- Step 6: Add citation
- Step 7: Deliver answer to user

**Style**: Process flow with icons for each step

**File**: `diagram-07-knowledge-processing.svg`

---

### Diagram 2: Topics vs. Knowledge Decision Tree

**Purpose**: Help users decide when to use each approach

**Content**:
- Start: "What type of interaction?"
- Branch 1: "Need to collect data?" → Yes → Topic
- Branch 2: "Need to take action?" → Yes → Topic
- Branch 3: "Information lookup only?" → Yes → Knowledge
- Branch 4: "Complex workflow?" → Yes → Topic + Knowledge

**Style**: Decision tree flowchart

**File**: `diagram-08-topic-vs-knowledge.svg`

---

### Diagram 3: Hybrid Agent Architecture

**Purpose**: Show how topics and knowledge sources work together

**Content**:
- User question enters agent
- Boosted conversation layer decides:
  - Route to Topic (structured flow)
  - Route to Knowledge (generative answer)
  - Hybrid (topic with knowledge references)
- Both connect to action layer (flows, emails)

**Style**: System architecture diagram

**File**: `diagram-09-hybrid-architecture.svg`

---

## Video Walkthrough Requirements

### Main Tutorial Video (14 minutes)

**[0:00-1:00] Introduction**
- Show agent answering complex policy question from knowledge
- Compare to manual topic creation
- Preview what we'll build

**[1:00-3:00] Preparing Knowledge Sources**
- Review SharePoint document library
- Show document optimization (headings, structure)
- Explain permission considerations

**[3:00-6:00] Adding SharePoint Knowledge Source**
- Navigate to Knowledge tab
- Configure SharePoint connection
- Set indexing schedule
- Wait for indexing (time-lapse)

**[6:00-8:00] Testing Knowledge Q&A**
- Ask policy questions in test panel
- Show AI-generated answers with citations
- Demonstrate follow-up questions
- Show graceful fallback for unknown questions

**[8:00-10:00] Configuring Boosted Conversations**
- Enable boosted conversations
- Test hybrid interaction (topic + knowledge)
- Show AI choosing appropriate approach

**[10:00-12:00] Monitoring with Analytics**
- Review knowledge metrics
- Analyze unanswered questions
- Export conversation transcripts
- Identify content gaps

**[12:00-13:30] Enhancing Onboarding Agent**
- Add knowledge prompt to existing topic
- Test hybrid onboarding + policy Q&A
- Show seamless integration

**[13:30-14:00] Wrap-Up**
- Review business value (coverage, time savings)
- Preview Blog 4 (actions and flows)
- Call to action

**Video File**: `blog-03-tutorial-full.mp4`

---

### Quick Tips Videos (5 videos × 3 minutes)

**Tip 1: "Optimizing Documents for AI Understanding"**
- Use clear headings
- Add Q&A sections
- Avoid scanned images
- Structure tables simply

**Tip 2: "Troubleshooting Hallucinations"**
- Identify hallucinations in transcripts
- Enable content moderation
- Create topics for problematic questions
- Improve source content clarity

**Tip 3: "Using Analytics to Improve Coverage"**
- Review unanswered questions
- Identify content gaps
- Add missing documents
- Measure improvement

**Tip 4: "Scoping Knowledge Sources Appropriately"**
- Folder-level scoping
- Avoiding over-broad sources
- Security considerations
- Multiple agents for different audiences

**Tip 5: "Balancing Topics and Knowledge Sources"**
- When to use each approach
- Hybrid patterns
- Boosted conversation tuning
- Workflow + information together

---

## Success Criteria Checklist

### Functional Requirements
- [ ] Knowledge source connected (SharePoint, Files, or Website)
- [ ] Indexing completed successfully
- [ ] Agent answers questions from knowledge with citations
- [ ] Boosted conversations enabled
- [ ] Hybrid interaction works (topic + knowledge)
- [ ] Fallback enhanced with knowledge search
- [ ] Analytics tracking knowledge performance

### Content Quality
- [ ] All technical claims cited to Microsoft docs
- [ ] Screenshots current (December 2024)
- [ ] No fabricated features
- [ ] Documents optimized for AI (headings, structure)
- [ ] Business user can follow without help

### User Experience
- [ ] Knowledge answers feel conversational
- [ ] Citations build trust
- [ ] Graceful handling of unknown questions
- [ ] Seamless integration with existing topics
- [ ] No hallucinations detected in testing

### Business Value
- [ ] 10x+ question coverage vs. manual topics
- [ ] 95%+ time savings on content creation
- [ ] 80%+ answer satisfaction
- [ ] Measurable improvement in analytics

---

## FAQ Section

**Q1: How many knowledge sources can I add?**
- No hard limit for SharePoint/websites
- File upload: Maximum 10 files
- Recommendation: 3-5 well-organized sources better than 20 scattered ones

**Q2: What if my documents are confidential?**
- Knowledge sources respect SharePoint permissions
- BUT: All agent users can ask questions about any connected content
- Solution: Separate agents for different audience (public vs. internal)
- Detailed security in Blog 8

**Q3: How accurate are AI-generated answers?**
- 85-90% accuracy when documents are well-structured
- Always provide citations for verification
- Monitor transcripts for hallucinations
- Create topics for critical compliance questions

**Q4: Can I use non-English documents?**
- Yes, Copilot Studio supports 50+ languages
- Best practice: Match agent language to document language
- Multi-language support covered in advanced blogs

**Q5: What happens when documents are updated?**
- SharePoint: Automatic re-indexing on schedule (daily/weekly)
- Files: Must re-upload manually
- Website: Re-crawls on schedule
- Agent answers update automatically after re-index

**Q6: How do I prevent hallucinations?**
- Enable content moderation in settings
- Use high-quality, well-structured source documents
- Add "Answer only from knowledge sources" system message
- Monitor transcripts, create topics for problematic questions
- Keep knowledge sources focused (not too broad)

---

## Internal Notes for Content Writer

### Tone Progression
- Blog 1: "Agents can automate FAQs"
- Blog 2: "Agents can collect data and personalize"
- Blog 3: "Agents can understand and reference entire knowledge libraries"
- Emphasize leverage: Small effort (connect documents) → Massive value (10,000+ questions)

### Key Concepts to Emphasize
- **Leverage**: 1 knowledge source = 1,000+ answered questions
- **Automation**: Documents update = agent updates (no manual topic maintenance)
- **Trust**: Citations build user confidence
- **Balance**: Topics for workflows, knowledge for information

### Complexity Management
- More abstract than Blogs 1-2 (AI generation vs. explicit programming)
- Use concrete examples throughout
- Show test results frequently (proof it works)
- Address "magic" skepticism (explain how AI reads documents)

### Visual Strategy
- Before/After comparisons (manual topics vs. knowledge)
- Show AI-generated answers with citations prominently
- Analytics screenshots to demonstrate value
- Hybrid conversation examples (topic + knowledge)

---

**END OF OUTLINE**

**Total Outline Length**: ~8,200 words (comprehensive implementation guide)

**Foundation Arc Complete**: Blogs 1-3 outlines ready for content development
