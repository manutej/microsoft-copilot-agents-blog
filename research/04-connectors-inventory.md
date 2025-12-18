# Microsoft Copilot Studio - Connectors Inventory Research

**Research Date:** December 18, 2024
**Target Audience:** Business users, no-code/low-code builders
**Official Documentation:** [Use Connectors in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)

---

## Table of Contents

1. [Overview](#overview)
2. [What Are Connectors?](#what-are-connectors)
3. [Connector Categories](#connector-categories)
4. [Standard Connectors (Included)](#standard-connectors-included)
5. [Premium Connectors (License Required)](#premium-connectors-license-required)
6. [Custom Connectors](#custom-connectors)
7. [MCP Connectors (Modern Integration)](#mcp-connectors-modern-integration)
8. [Authentication Types](#authentication-types)
9. [Connection Management](#connection-management)
10. [Business Decision Guide](#business-decision-guide)

---

## Overview

**Connectors** are the bridges that link your Copilot Studio agent to other applications and services. Think of them as "plugins" that give your agent superpowers—the ability to read emails, create CRM records, query databases, and interact with hundreds of business systems.

**Key Concept:** Connectors are **pre-built integrations** — you don't write API code, you just configure them.

**Official Reference:** [Use Connectors in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)

---

## What Are Connectors?

### Definition

**Connectors** are proxies or "wrappers" around APIs that allow:
- **Microsoft Copilot Studio** (your agents)
- **Microsoft Power Automate** (workflows)
- **Microsoft Power Apps** (custom applications)
- **Azure Logic Apps** (enterprise integration)

...to communicate with other applications and services without writing code.

**Business Value:** Integrate with any system your business uses—Microsoft or third-party—through simple configuration.

### How Connectors Work

```
Your Agent (Copilot Studio)
    ↓
Connector (SharePoint, Salesforce, etc.)
    ↓
External Service API
    ↓
Action Performed (Get data, Create record, Send email)
    ↓
Response Returned to Agent
```

**Example:**
- **User:** "What's the status of my support ticket?"
- **Agent:** Calls Dynamics 365 connector
- **Connector:** Queries Dynamics 365 API
- **Response:** "Your ticket #12345 is in progress, assigned to John Smith"

**Citation:** [Use Connectors in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)

---

## Connector Categories

Microsoft provides **over 700 connectors** across three categories:

| Category | Description | Licensing | Examples |
|----------|-------------|-----------|----------|
| **Standard** | Common Microsoft services | Included in all plans | SharePoint, Office 365, Teams |
| **Premium** | Advanced/third-party services | Requires premium license | SQL Server, Salesforce, SAP |
| **Custom** | Your own APIs/services | Requires premium license | Internal APIs, legacy systems |

**Citation:** [Use Connectors in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)

---

## Standard Connectors (Included)

**Standard connectors** are included with all Copilot Studio licenses at no additional cost.

### Microsoft 365 & Productivity

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **SharePoint** | Document management, lists | Access company policies, create documents |
| **Office 365 Outlook** | Email, calendar, contacts | Send notifications, schedule meetings |
| **Office 365 Users** | User profiles, presence | Look up employee information |
| **OneDrive for Business** | File storage | Retrieve/share files |
| **Microsoft Teams** | Chat, channels, meetings | Send Teams messages, manage channels |
| **OneNote** | Note-taking | Create/read notes |
| **Microsoft To-Do** | Task management | Create tasks, manage lists |

**Citation:** [Copilot Studio MCP Catalog](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-microsoft-mcp-servers)

---

### Microsoft Power Platform

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Dataverse** | Power Platform database | Store/retrieve business data |
| **Power Apps** | Custom applications | Launch Power Apps, pass data |
| **Power Automate** | Workflow automation | Trigger flows, get flow status |
| **Power BI** | Business intelligence | Query datasets, refresh reports |

**Citation:** [Extend Agent Capabilities](https://learn.microsoft.com/en-us/microsoft-copilot-studio/copilot-connectors-in-copilot-studio)

---

### Microsoft Dynamics 365

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Dynamics 365 Sales** | CRM for sales | Create leads, update opportunities |
| **Dynamics 365 Customer Service** | Support case management | Create cases, check ticket status |
| **Dynamics 365 Finance** | Financial operations | Query invoices, check balances |
| **Dynamics 365 Supply Chain** | SCM operations | Check inventory, track shipments |
| **Dynamics 365 Business Central** | ERP for SMB | Query business data |

**Citation:** [Copilot Studio MCP Catalog](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-microsoft-mcp-servers)

---

### Communication & Collaboration

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Approvals** | Request approvals | Expense approvals, time-off requests |
| **Microsoft Forms** | Surveys and forms | Collect feedback, create surveys |
| **Planner** | Task management | Create tasks, assign work |
| **Yammer** | Enterprise social | Post updates, read feeds |

---

### Content & Documents

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Word Online** | Document creation | Generate reports, fill templates |
| **Excel Online** | Spreadsheet operations | Read/write data, create reports |
| **PDF** | PDF generation | Create invoices, contracts |

---

### Notification Services

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Notification** | Send push notifications | Alert users, send reminders |
| **Mail** | SMTP email | Send emails (simple) |
| **RSS** | RSS feed reading | Monitor news feeds |

---

## Premium Connectors (License Required)

**Premium connectors** require a **Power Automate Premium license** or **Copilot Studio premium capacity**.

### Databases & Data Services

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **SQL Server** | Microsoft SQL databases | Query business data, create records |
| **Oracle Database** | Oracle databases | Enterprise data integration |
| **MySQL** | MySQL databases | Web app data access |
| **PostgreSQL** | PostgreSQL databases | Modern app data |
| **Azure SQL Data Warehouse** | Data warehousing | Analytics, reporting |
| **Azure Cosmos DB** | NoSQL database | Global distributed data |
| **Azure Blob Storage** | File storage | Large file handling |

---

### CRM & Sales

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Salesforce** | CRM platform | Leads, opportunities, accounts |
| **HubSpot** | Marketing & CRM | Contact management, campaigns |
| **Zendesk** | Customer support | Ticket management, knowledge base |
| **ServiceNow** | IT service management | Incidents, change requests |
| **Freshdesk** | Help desk | Support tickets, customer queries |

---

### ERP & Business Systems

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **SAP** | Enterprise resource planning | Financial, HR, supply chain data |
| **Oracle EBS** | Oracle ERP | Enterprise business operations |
| **NetSuite** | Cloud ERP | Financials, CRM, e-commerce |

---

### File & Content Management

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Box** | Cloud file storage | Document management |
| **Dropbox** | File sync/storage | File sharing |
| **Google Drive** | Cloud storage | Document collaboration |
| **Egnyte** | Content services | Secure file access |

---

### Communication Platforms

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Twilio** | SMS, voice | Send text messages, make calls |
| **SendGrid** | Email delivery | Transactional emails |
| **Slack** | Team collaboration | Send messages, manage channels |
| **WhatsApp** | Messaging | Customer notifications |
| **Telegram** | Messaging | Bot interactions |

---

### Social Media

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Twitter** | Social media | Post tweets, monitor mentions |
| **LinkedIn** | Professional network | Share content, manage posts |
| **Facebook** | Social media | Post updates, read messages |
| **Instagram** | Photo sharing | Manage business accounts |
| **YouTube** | Video platform | Upload videos, manage channels |

---

### Analytics & AI

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Azure OpenAI** | AI services | GPT models, embeddings |
| **Azure Cognitive Services** | AI/ML services | Text analytics, vision, speech |
| **Google Analytics** | Web analytics | Track website metrics |
| **Power BI** | Business intelligence | Query reports, visualizations |

---

### E-commerce & Payments

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Shopify** | E-commerce platform | Orders, products, customers |
| **WooCommerce** | WordPress e-commerce | Online store management |
| **Square** | Payment processing | Transactions, inventory |
| **Stripe** | Payment platform | Process payments, subscriptions |
| **PayPal** | Payment service | Payment processing |

---

### Project Management

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Asana** | Project management | Tasks, projects, teams |
| **Trello** | Visual project boards | Cards, lists, boards |
| **Monday.com** | Work OS | Projects, workflows |
| **Jira** | Issue tracking | Software development tracking |
| **Azure DevOps** | DevOps platform | Work items, repos, pipelines |

---

### Marketing Automation

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Mailchimp** | Email marketing | Campaigns, lists, subscribers |
| **Marketo** | Marketing automation | Lead nurturing, campaigns |
| **Adobe Marketing Cloud** | Marketing suite | Campaign management |

---

### Productivity & Utilities

| Connector | What It Does | Business Use Cases |
|-----------|--------------|-------------------|
| **Google Calendar** | Calendar management | Schedule events |
| **DocuSign** | E-signature | Sign documents, track status |
| **Adobe Sign** | E-signature | Document signing |
| **Calendly** | Scheduling | Book appointments |
| **Survey Monkey** | Surveys | Collect feedback |

---

## Custom Connectors

### What Are Custom Connectors?

**Custom connectors** let you integrate with **any API** not covered by standard or premium connectors.

**Use Cases:**
- Internal company APIs
- Legacy systems
- Proprietary software
- Partner systems
- Custom web services

**Business Value:** No system is off-limits—if it has an API, you can connect to it.

**Citation:** [Use Connectors - Custom Connectors](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)

---

### Creating Custom Connectors

**Requirements:**
1. **API endpoint** (RESTful API preferred)
2. **API documentation** (endpoints, methods, parameters)
3. **Authentication method** (API key, OAuth, etc.)
4. **Premium license** (custom connectors require premium)

**Creation Methods:**
1. **From OpenAPI definition:** Upload Swagger/OpenAPI JSON
2. **From Postman collection:** Import Postman collection
3. **From scratch:** Manually define endpoints

**Business Impact:** Technical expertise recommended, but can be done without programming.

**Citation:** [Advanced Connectors](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)

---

## MCP Connectors (Modern Integration)

### What Are MCP Connectors?

**Model Context Protocol (MCP)** connectors are a modern integration standard designed for AI agents. They provide enhanced capabilities for Copilot Studio.

**Available MCP Connectors:**
- Dataverse
- Dynamics 365 (Sales, Finance, Supply Chain, Service, ERP, Contact Center)
- Microsoft Fabric
- Office 365 Outlook (Contact, Email, Meeting Management)
- Kusto Query
- GitHub
- Learn MCP (Microsoft documentation)
- Box.com
- Gieni (answer fetching)

**Citation:** [Copilot Studio MCP Catalog](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-microsoft-mcp-servers)

---

## Authentication Types

Connectors support various authentication methods:

### 1. **No Authentication**
- **What:** Public APIs, no credentials required
- **Use Case:** Public data, open APIs
- **Security:** Low (anyone can access)

---

### 2. **API Key**
- **What:** Simple token-based authentication
- **How:** Provide API key in connector configuration
- **Use Case:** Service-to-service APIs
- **Security:** Medium (protect the key)

---

### 3. **OAuth 2.0**
- **What:** Industry-standard authorization
- **How:** User signs in via service (e.g., "Sign in with Google")
- **Use Case:** User-specific data, cloud services
- **Security:** High (delegated permissions)

**Most Common for Business Services**

---

### 4. **Basic Authentication**
- **What:** Username and password
- **How:** Provide credentials in connector configuration
- **Use Case:** Legacy systems, simple APIs
- **Security:** Low-Medium (credentials stored)

---

### 5. **Windows Authentication**
- **What:** Active Directory/Windows credentials
- **How:** Use AD account
- **Use Case:** On-premises systems, internal APIs
- **Security:** High (AD-integrated)

---

### 6. **Certificate-Based**
- **What:** Digital certificates for authentication
- **How:** Upload certificate
- **Use Case:** High-security enterprise systems
- **Security:** Very High

**Citation:** [Configure User Authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication)

---

## Connection Management

### What Is a Connection?

A **connection** is a stored set of credentials for a specific connector.

**Example:**
- **Connector:** SharePoint
- **Connection:** "SharePoint Production Site" (credentials for SharePoint.contoso.com)

**Key Concept:** One connector can have multiple connections (e.g., dev, test, production SharePoint sites).

**Citation:** [Conversational Language Understanding - Connections](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-clu-integration)

---

### User Authentication vs. Agent Author Authentication

**User Authentication (Default):**
- Each **end user** provides their own credentials
- Agent acts on behalf of the user
- Respects user permissions
- **Best for:** Secure scenarios, user-specific data

**Example:**
- User asks: "Show my SharePoint files"
- Agent uses **user's** SharePoint credentials
- User sees only files they have access to

---

**Agent Author Authentication:**
- Agent uses **creator's** credentials for all users
- All users share same permissions
- No user sign-in required
- **Best for:** Public data, shared resources

**Example:**
- User asks: "What's the company holiday calendar?"
- Agent uses **author's** SharePoint credentials
- All users see same calendar (author's access level)

**Security Warning:** Agent author authentication can expose sensitive data. Use with caution.

**Citation:** [Use Connectors with Agent Author Credentials](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)

---

### Creating and Managing Connections

**Create Connection:**
1. **Add connector** to agent or flow
2. **Select "Create new connection"**
3. **Provide credentials** (sign in, API key, etc.)
4. **Test connection**
5. **Save**

**Manage Connections:**
- View all connections in Power Platform admin center
- Edit credentials
- Delete unused connections
- Share connections (with caution)

**Citation:** [Advanced CLU Integration - Connections](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-clu-integration)

---

## Business Decision Guide

### How to Choose Connectors

**Step 1: Identify Requirements**
- What systems do you need to integrate?
- What actions do you need to perform?
- Who needs access (users, agent)?

**Step 2: Check Connector Availability**
- Search Power Platform connector catalog
- Standard or premium?
- Does it support required actions?

**Step 3: Evaluate Licensing**
- Standard connectors: Included
- Premium connectors: License required
- Custom connectors: Premium license required

**Step 4: Security Assessment**
- What authentication is supported?
- User auth or agent auth?
- Compliance requirements?

---

### Standard vs. Premium Decision Matrix

| Scenario | Standard | Premium |
|----------|----------|---------|
| **Microsoft 365 integration** | ✅ Use standard connectors | |
| **SharePoint, Outlook, Teams** | ✅ Included | |
| **SQL database access** | | ✅ Requires premium |
| **Salesforce, SAP integration** | | ✅ Requires premium |
| **Custom internal API** | | ✅ Requires premium |
| **Budget constraints** | ✅ No additional cost | ❌ License fees apply |

---

### Licensing Quick Reference

**Copilot Studio License Includes:**
- All standard connectors
- Basic capacity for flows

**Power Automate Premium License Adds:**
- All premium connectors
- Unlimited flow capacity
- Custom connectors

**Recommendation:** Start with standard connectors, upgrade to premium when needed.

---

## Troubleshooting Connectors

### Common Issues

**Problem:** "Connection failed"
- **Cause:** Invalid credentials, expired auth
- **Solution:** Recreate connection, verify credentials

**Problem:** "Permission denied"
- **Cause:** User lacks access to resource
- **Solution:** Grant permissions, use agent auth (if appropriate)

**Problem:** "Connector timeout"
- **Cause:** API slow/unresponsive
- **Solution:** Increase timeout, use Power Automate flow instead

**Problem:** "Connector action repeatedly fails"
- **Cause:** Agent direct connector calls unstable
- **Solution:** Create Power Automate flow with retry logic

**Citation:** [Event Trigger Overview - Troubleshooting Connector Issues](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers-about)

---

## Best Practices

### 1. **Use Standard Connectors First**
- Included in license
- Well-supported
- Upgrade to premium only when necessary

### 2. **Secure Authentication**
- Prefer OAuth over basic auth
- Use user authentication for sensitive data
- Regularly review and rotate credentials

### 3. **Connection Naming**
- Use descriptive names: "SharePoint HR Site"
- Not: "Connection 1" or "SP"
- Helps with maintenance and troubleshooting

### 4. **Test Thoroughly**
- Test with real user credentials
- Verify permissions work correctly
- Test error scenarios (denied access, timeout)

### 5. **Monitor Usage**
- Track which connectors are used
- Remove unused connections
- Audit for security compliance

### 6. **Document Dependencies**
- List all connectors used by agent
- Document authentication methods
- Note any special configurations

---

## Quick Reference

### Connector Decision Tree

```
Need Microsoft 365 integration? → Standard connectors (SharePoint, Outlook, Teams)
Need database access? → Premium connectors (SQL Server, Oracle)
Need CRM integration? → Premium connectors (Salesforce, Dynamics 365)
Need custom API? → Custom connector (requires premium license)
Need AI services? → Azure Cognitive Services (premium)
```

---

### Top 10 Most Used Connectors

**Based on Common Business Scenarios:**

1. **SharePoint** - Document management, policies
2. **Office 365 Outlook** - Email notifications
3. **Dataverse** - Business data storage
4. **Dynamics 365** - CRM/ERP data
5. **SQL Server** - Database queries
6. **Approvals** - Workflow approvals
7. **Microsoft Teams** - Team notifications
8. **Salesforce** - External CRM
9. **ServiceNow** - IT service management
10. **Twilio** - SMS notifications

---

## Additional Resources

### Official Documentation
- [Use Connectors in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)
- [Copilot Studio MCP Catalog](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-microsoft-mcp-servers)
- [Extend Agent Capabilities](https://learn.microsoft.com/en-us/microsoft-copilot-studio/copilot-connectors-in-copilot-studio)
- [Power Platform Connectors Reference](https://learn.microsoft.com/en-us/connectors/)
- [Configure User Authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication)

### External Resources
- **Power Platform Connector Catalog:** [connectors.microsoft.com](https://learn.microsoft.com/en-us/connectors/)
- **Power Automate Licensing:** Check Microsoft licensing documentation

---

## Summary

Microsoft Copilot Studio provides access to **over 700 connectors** spanning Microsoft services, third-party platforms, and custom APIs. **Standard connectors** (SharePoint, Office 365, Teams) are included in all licenses, while **premium connectors** (SQL, Salesforce, SAP) require additional licensing. **Custom connectors** enable integration with any RESTful API.

**Key Takeaway:** Connectors transform your agent from a chatbot into a powerful automation platform that integrates with your entire business ecosystem—all through visual configuration, no coding required.

---

**Document Version:** 1.0
**Last Updated:** December 18, 2024
**Research Methodology:** Official Microsoft Learn documentation analysis via Context7
**Note:** Connector availability and licensing are subject to change. Always verify current Microsoft licensing terms.
