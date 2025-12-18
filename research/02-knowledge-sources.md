# Microsoft Copilot Studio - Knowledge Sources Research

**Research Date:** December 18, 2024
**Target Audience:** Business users, no-code/low-code builders
**Official Documentation:** [Knowledge Sources Summary](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-summary)

---

## Table of Contents

1. [Overview](#overview)
2. [What Are Knowledge Sources?](#what-are-knowledge-sources)
3. [SharePoint Integration](#sharepoint-integration)
4. [OneDrive Integration](#onedrive-integration)
5. [Public Website Integration](#public-website-integration)
6. [Uploaded Files (Dataverse)](#uploaded-files-dataverse)
7. [Azure AI Search](#azure-ai-search)
8. [Generative Answers Node](#generative-answers-node)
9. [Real-Time Knowledge Connectors](#real-time-knowledge-connectors)
10. [Business Use Cases](#business-use-cases)

---

## Overview

**Knowledge Sources** are the places where your Copilot Studio agent finds information to answer user questions. Instead of programming every possible answer, you connect your agent to your existing documents, websites, and data sources. The AI then searches and summarizes this information in natural conversations.

**Key Benefit:** Turn your documentation, policies, and knowledge bases into conversational answers—without manual programming.

**Official Reference:** [Knowledge Sources Summary](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-summary)

---

## What Are Knowledge Sources?

### How They Work

```
User Question → AI Searches Knowledge Sources → AI Summarizes Findings → Natural Response
```

**Example:**
- **User:** "What is your return policy?"
- **Agent:** Searches company policy document in SharePoint
- **Agent:** Summarizes findings in conversational format
- **Response:** "You can return items within 30 days with receipt. Refunds are processed within 5-7 business days..."

### Types of Knowledge Sources

| Source Type | What It Is | Best For |
|-------------|-----------|----------|
| **SharePoint** | Microsoft document libraries | Company policies, internal docs |
| **OneDrive** | Personal/team file storage | Team knowledge bases |
| **Public Websites** | External websites | Product info, public FAQs |
| **Uploaded Files** | Files stored in Dataverse | Standalone documents |
| **Azure AI Search** | Indexed data | Large-scale enterprise search |
| **Real-Time Connectors** | Live data (ServiceNow, Zendesk) | Current ticket/case data |
| **Custom Data** | Power Automate flows, APIs | Dynamic, real-time information |

**Citation:** [Use Generative Answers in a Topic](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node)

---

## SharePoint Integration

### What Is It?

Connect your agent to **SharePoint sites** or **document libraries** so it can search and answer questions from your company's existing documentation.

**Business Value:** Your policies, procedures, and knowledge bases become instantly conversational—no need to rewrite content.

### Setup Process (Business User Friendly)

1. **Navigate to Knowledge** in Copilot Studio
2. **Add Knowledge → SharePoint**
3. **Provide SharePoint URL** or select from list
4. **Select Document Libraries** to include
5. **Configure Permissions** (user authentication)
6. **Test** to verify access

**Citation:** [Add SharePoint as a Knowledge Source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint)

### What SharePoint Content Works?

**Supported File Formats:**
- Word documents (.docx)
- PDF files (.pdf)
- PowerPoint (.pptx)
- Text files (.txt)
- HTML files (.html)

**What Gets Indexed:**
- Document content
- Metadata (titles, descriptions)
- File properties

**Not Supported:**
- Excel files (requires special handling)
- Images without text
- Video/audio files

**Citation:** [Use SharePoint Content for Generative Answers](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-generative-answers-sharepoint-onedrive)

### Authentication Options

**User Authentication (Recommended):**
- Agent accesses SharePoint using the **end user's credentials**
- Respects SharePoint permissions
- Users only see content they're authorized to access

**Agent Authentication:**
- Agent uses **author's credentials** to access SharePoint
- All users see same content (regardless of their permissions)
- Use with caution for sensitive information

**Citation:** [Use SharePoint Content for Generative Answers](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-generative-answers-sharepoint-onedrive)

### Business Example

**Scenario:** HR agent answering policy questions

**Setup:**
- Connect to SharePoint HR site
- Include: Employee Handbook, Benefits Guide, Leave Policies
- Use user authentication (respects HR permissions)

**User Experience:**
- Employee: "How many sick days do I get?"
- Agent: Searches HR SharePoint library
- Agent: "According to the employee handbook, you receive 10 sick days per year..."

---

## OneDrive Integration

### What Is It?

Similar to SharePoint, but connects to **OneDrive for Business** folders instead of team sites.

**Business Value:** Personal knowledge bases and team folders become searchable through conversation.

### Key Differences from SharePoint

| Feature | SharePoint | OneDrive |
|---------|-----------|----------|
| **Scope** | Team sites, large libraries | Personal/small team folders |
| **Permissions** | Site-level permissions | File/folder level permissions |
| **Best For** | Organizational knowledge | Individual/small team docs |
| **Scale** | Hundreds/thousands of docs | Dozens of files |

**Setup:** Same process as SharePoint (authenticate, select folders, configure)

**Citation:** [Add Unstructured Data as a Knowledge Source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data)

---

## Public Website Integration

### What Is It?

Point your agent to **public websites** so it can answer questions based on publicly available information.

**Use Cases:**
- Product documentation sites
- Public FAQ pages
- Company marketing websites
- Help centers

### How It Works (Powered by Bing)

When you add a public website:
1. **Bing crawls** the website (using Bingbot)
2. **Content is indexed** in Bing's search index
3. **Agent searches** using Bing when users ask questions
4. **AI summarizes** relevant findings

**Important:** You don't control what's indexed—Bing determines what to crawl and index.

**Citation:** [Add a Public Website as a Knowledge Source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website)

### URL Domain Structure

**How URLs Work:**

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

**Business Impact:** Be specific with URLs to control scope of knowledge.

**Citation:** [Add a Public Website - URL Considerations](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website)

### Bing Crawling Frequency

**How Often Is Content Updated?**

Bing's algorithm determines crawl frequency based on:
- Website importance/popularity
- Update frequency
- Crawl efficiency

**Typical Timeline:**
- New content: Days to weeks before indexed
- Updated content: May take time to reflect in Bing index

**Business Implication:** Public website knowledge sources are **not real-time**. For current information, use direct API integrations.

**Citation:** [Generative Answers Based on Public Websites - Bing Crawling](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/generative-ai-public-websites)

### Best Practices for Website Indexing

To improve Bing indexing of your website:

1. **Create and submit sitemaps** to Bing Webmaster Tools
2. **Use IndexNow API** for instant updates
3. **Link pages** to each other (internal linking)
4. **Limit page count** (focused content)
5. **Use proper redirects** (301 redirects)
6. **Dynamic rendering** for JavaScript-heavy sites

**Citation:** [Best Practices to Improve Bing Index Creation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/generative-ai-public-websites)

---

## Uploaded Files (Dataverse)

### What Is It?

Upload files **directly into Copilot Studio** to use as knowledge sources. Files are stored in Microsoft Dataverse (Power Platform's database).

**Business Value:** Quick setup for standalone documents without needing SharePoint or other infrastructure.

### Supported File Types

- Word documents (.docx)
- PDF files (.pdf)
- PowerPoint (.pptx)
- Text files (.txt)
- HTML files (.html)

**File Size Limits:**
- Individual file: Check current Dataverse limits
- Total storage: Based on Copilot Studio plan

**Citation:** [Upload Files as a Knowledge Source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-upload-files)

### Setup Process

1. **Go to Knowledge** page in Copilot Studio
2. **Select "Upload files"**
3. **Choose files** from your computer
4. **Optional:** Organize into **file groups**
5. **Agent automatically indexes** content

**File Groups:**
- Organize related files together
- Example: "HR Policies", "Product Manuals", "Training Materials"
- Can be selected individually in Generative Answers nodes

**Citation:** [Use Uploaded Documents with Generative Answers](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-documents)

### When to Use Uploaded Files

**Best For:**
- Small document sets (< 50 files)
- Quick prototypes and testing
- Standalone knowledge bases

**Not Recommended For:**
- Large document libraries (use SharePoint)
- Frequently updated content (use SharePoint/OneDrive)
- Content requiring permissions management (use SharePoint)

---

## Azure AI Search

### What Is It?

**Azure AI Search** (formerly Azure Cognitive Search) is an enterprise-grade search service. Use it when you need:
- Search across **massive data volumes**
- Custom indexing and search logic
- Integration with multiple data sources
- Advanced search features (facets, filters)

**Business Value:** Enterprise-scale search with full control over indexing and relevance.

### When to Use It

**Use Azure AI Search When:**
- You have **thousands of documents** across multiple sources
- You need **custom search ranking**
- You want to **index databases** alongside documents
- You require **advanced filtering** and faceted search

**Skip Azure AI Search When:**
- Small document set (< 1000 files) → Use uploaded files
- All content in SharePoint → Use SharePoint integration
- Simple Q&A scenarios → Use other knowledge sources

**Citation:** [Add Azure AI Search as a Knowledge Source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-azure-ai-search)

### Setup Requirements

**Prerequisites:**
1. Azure subscription
2. Azure AI Search service deployed
3. Search index created and populated
4. API keys for authentication

**Connection Process:**
1. Provide Azure AI Search **endpoint URL**
2. Provide **API key** or configure authentication
3. Select **search index** to use
4. Configure **query parameters** (optional)

**Citation:** [Azure AI Search Index as Knowledge Source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-azure-ai-search)

---

## Generative Answers Node

### What Is It?

The **Generative Answers node** is a special node type that searches knowledge sources and generates AI-powered answers.

**How It's Different:**
- **Regular nodes:** You write the response
- **Generative Answers node:** AI generates the response from knowledge sources

### How to Add Generative Answers

**In a Topic:**
1. **Add node** (+) in conversation flow
2. **Select "Generative answers"**
3. **Configure knowledge sources** (or use agent-level defaults)
4. **Customize instructions** (optional)
5. **Test** to verify answers

**Citation:** [Add a Generative Answers Node](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node)

### Knowledge Source Priority

**Agent-Level vs. Node-Level Sources:**

```
Generative Answers Node Sources (Specific)
  ↓ Takes Priority Over ↓
Agent-Level Knowledge Sources (Fallback)
```

**Best Practice:** Configure specific sources in nodes for targeted, relevant answers.

**Example:**
- **Agent Level:** Company-wide policies (general fallback)
- **HR Topic Node:** HR SharePoint only (specific HR answers)
- **IT Support Node:** IT knowledge base only (specific IT answers)

**Citation:** [Generative Answers Knowledge Sources](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node)

### Available Data Sources in Generative Answers

**All Options:**
1. **AI General Knowledge** (ChatGPT-style general knowledge)
2. **Bing Web Search** (real-time web search, no config required)
3. **Bing Custom Search** (requires external Bing Custom Search setup)
4. **Azure OpenAI on Your Data** (requires Azure OpenAI service)
5. **Uploaded Documents** (files in Dataverse)
6. **SharePoint** (authenticated SharePoint content)
7. **Custom Data** (Power Automate flow, API, Skill)

**Citation:** [Generative Answers Knowledge Sources](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node)

### Disabling Document Search in Nodes

**Scenario:** Agent has uploaded files, but one specific node shouldn't use them.

**Solution:** Add YAML code to node:

```yaml
fileSearchDataSource:
    searchFilesMode:
       kind: DoNotSearchFiles
```

**Use Case:** Prevent cross-contamination (e.g., HR topic shouldn't use Product docs).

**Citation:** [Disable Document Search in Generative Answers Node](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-documents)

---

## Real-Time Knowledge Connectors

### What Is It?

**Real-time connectors** fetch **live data** from external systems during conversations. Unlike indexed documents, data is always current.

**Available Real-Time Connectors:**
- **ServiceNow** (support tickets, knowledge articles)
- **Zendesk** (customer support data)
- **Salesforce** (CRM data)
- **Microsoft Dataverse** (Power Platform data)
- **Microsoft Dynamics 365** (business applications)

**Business Value:** Answers reflect current system state (e.g., "Your ticket status is...").

**Citation:** [Add Real-Time Knowledge with Connectors](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-real-time-connectors)

### Setup Process

1. **Add Knowledge → Real-time connector**
2. **Select connector** (e.g., ServiceNow)
3. **Sign in** with credentials
4. **Select tables** to use as knowledge
5. **Add synonyms/glossary** (ServiceNow, Zendesk only)
6. **Test** connection

**Synonyms & Glossary:**
- Define business-specific terms
- Example: "VIP customer" = "Priority level 1"
- Improves AI understanding of domain-specific language

**Citation:** [Add Real-Time Knowledge with Connectors](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-real-time-connectors)

### Real-Time vs. Indexed Knowledge

| Feature | Real-Time Connectors | Indexed Sources (SharePoint, Files) |
|---------|---------------------|-------------------------------------|
| **Data Freshness** | Live, current data | Periodic indexing (delays possible) |
| **Performance** | Slower (API calls) | Faster (pre-indexed) |
| **Use Case** | Current status, live data | Static documentation |
| **Examples** | Ticket status, inventory | Policies, procedures |

**Business Decision:** Use real-time for dynamic data, indexed for static documentation.

---

## Business Use Cases

### 1. **HR Policy Agent**

**Knowledge Sources:**
- SharePoint: Employee Handbook, Benefits Guides
- Uploaded Files: Leave Request Form Templates
- Public Website: Company benefits portal

**User Questions:**
- "How many vacation days do I get?"
- "What's the maternity leave policy?"
- "How do I request time off?"

**Business Value:** 24/7 HR support without staff involvement.

---

### 2. **Customer Support Agent**

**Knowledge Sources:**
- Public Website: Product documentation, FAQs
- SharePoint: Internal troubleshooting guides
- ServiceNow (Real-Time): Current ticket status

**User Questions:**
- "How do I reset my password?"
- "What's the status of ticket #12345?"
- "How do I install the product?"

**Business Value:** Reduce support ticket volume, faster resolutions.

---

### 3. **Sales Assistant Agent**

**Knowledge Sources:**
- SharePoint: Product specifications, pricing
- Azure AI Search: Large product catalog
- Salesforce (Real-Time): Customer account data

**User Questions:**
- "What are the features of Product X?"
- "What's the price for enterprise plan?"
- "Show me my recent orders"

**Business Value:** Empower sales teams with instant product knowledge.

---

### 4. **IT Help Desk Agent**

**Knowledge Sources:**
- SharePoint: IT policies, setup guides
- Uploaded Files: Common issue resolutions
- Azure AI Search: Enterprise knowledge base

**User Questions:**
- "How do I connect to VPN?"
- "My email isn't working"
- "What's the software request process?"

**Business Value:** Reduce IT ticket backlog, self-service support.

---

## Testing Knowledge Sources

### Built-In Testing

**How to Test:**
1. **Go to Knowledge page** in Copilot Studio
2. **Select "Test" button**
3. **Ask sample questions**
4. **Verify sources** used in answers
5. **Check answer quality**

**What to Test:**
- Do answers match document content?
- Are citations/sources shown?
- Is irrelevant content excluded?
- Are permissions respected (SharePoint)?

**Citation:** [Test Your Agent's Knowledge Sources](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-test)

### Troubleshooting

**Problem:** Generative Answers Returns No Results

**Common Causes:**
1. **SharePoint permissions:** User lacks access to source documents
2. **Indexing delay:** New documents not yet indexed
3. **File format:** Unsupported file type
4. **Content mismatch:** Question doesn't relate to knowledge sources

**Solutions:**
- Verify SharePoint permissions
- Wait for indexing (can take hours)
- Convert files to supported formats
- Add more relevant knowledge sources

**Citation:** [Generative Answers Pointing to SharePoint Sources Don't Return Results](https://learn.microsoft.com/en-us/microsoft-copilot-studio/troubleshoot-sharepoint-knowledge-source)

---

## Best Practices

### 1. **Start Specific, Not General**
- ❌ Add entire SharePoint site
- ✅ Add specific document libraries

### 2. **Layer Knowledge Sources**
- Agent level: General company knowledge
- Topic/Node level: Specific domain knowledge

### 3. **Use Authentication Wisely**
- User authentication: Respects permissions (secure)
- Agent authentication: Convenient but exposes all content

### 4. **Monitor and Refine**
- Review analytics to see which sources are used
- Remove unused or low-quality sources
- Add missing sources based on unanswered questions

### 5. **Combine Static and Dynamic**
- Indexed sources (SharePoint): Policies, procedures
- Real-time connectors: Current data, live status

---

## Quick Reference

### Decision Tree: Which Knowledge Source?

```
Need company policies/documentation? → SharePoint
Need small file set? → Upload Files
Need public information? → Public Website
Need enterprise search? → Azure AI Search
Need live, current data? → Real-Time Connectors
Need custom logic? → Custom Data (Power Automate)
```

---

## Additional Resources

### Official Documentation
- [Knowledge Sources Summary](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-sources-summary)
- [Add SharePoint as Knowledge Source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint)
- [Add Public Website](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website)
- [Upload Files](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-upload-files)
- [Generative Answers Node](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node)
- [Real-Time Connectors](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-real-time-connectors)

---

## Summary

Knowledge sources transform Microsoft Copilot Studio from a simple chatbot into an **intelligent knowledge assistant**. By connecting to SharePoint, OneDrive, websites, and live systems, your agent can answer thousands of questions without manual programming—all while maintaining security, permissions, and data freshness.

**Key Takeaway:** Your existing documentation and data become conversational AI—no rewriting required.

---

**Document Version:** 1.0
**Last Updated:** December 18, 2024
**Research Methodology:** Official Microsoft Learn documentation analysis via Context7
