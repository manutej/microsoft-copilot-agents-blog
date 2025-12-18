# Microsoft Copilot Studio - Agent Flows & Power Automate Integration Research

**Research Date:** December 18, 2024
**Target Audience:** Business users, no-code/low-code builders
**Official Documentation:** [Agent Flows Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview)

---

## Table of Contents

1. [Overview](#overview)
2. [What Are Agent Flows?](#what-are-agent-flows)
3. [Power Automate Integration](#power-automate-integration)
4. [Trigger Types](#trigger-types)
5. [Flow Actions and Connectors](#flow-actions-and-connectors)
6. [Creating Flows for Copilot Studio](#creating-flows-for-copilot-studio)
7. [Calling Flows from Topics](#calling-flows-from-topics)
8. [Passing Data Between Agent and Flow](#passing-data-between-agent-and-flow)
9. [Error Handling](#error-handling)
10. [Business Use Cases](#business-use-cases)

---

## Overview

**Agent Flows** are automated workflows that extend your Copilot Studio agent's capabilities beyond conversation. They enable your agent to perform actions like sending emails, creating records, calling APIs, and integrating with hundreds of business systems—all without writing code.

**Key Concept:** While topics handle **conversation**, flows handle **automation**.

**Official Reference:** [Agent Flows Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview)

---

## What Are Agent Flows?

### Definition

**Agent flows** are Power Automate workflows that:
- Are triggered by your Copilot Studio agent
- Receive input data from conversations
- Perform automated actions (send email, create records, call APIs)
- Return results back to the agent
- Continue the conversation with flow outputs

**Business Value:** Your agent becomes a **do-er**, not just a **talker**.

### How Flows Differ from Topics

| Feature | Topics | Agent Flows |
|---------|--------|-------------|
| **Purpose** | Handle conversation | Perform actions |
| **Built With** | Copilot Studio | Power Automate |
| **Capabilities** | Messages, questions, conditions | Automation, integration, data processing |
| **When Used** | Understand user, respond | Execute business logic |
| **Example** | "What's your email?" | "Send email to user@example.com" |

**Citation:** [What is an Agent Flow?](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-power-virtual-agents)

---

## Power Automate Integration

### What Is Power Automate?

**Microsoft Power Automate** (formerly Flow) is a low-code automation platform that connects apps and services. Think of it as "If This, Then That" (IFTTT) for business.

**Key Features:**
- **700+ connectors** to apps and services
- **Visual workflow builder** (drag-and-drop)
- **Triggers** (when something happens)
- **Actions** (do something)
- **Conditions** (if/then logic)

**Official Reference:** [Power Automate Overview](https://learn.microsoft.com/en-us/power-automate/)

### How Copilot Studio Uses Power Automate

**Integration Flow:**

```
User Question (Copilot Studio)
    ↓
Topic Processes Question
    ↓
Call Agent Flow (Power Automate)
    ↓
Flow Executes Actions (Email, Database, API)
    ↓
Flow Returns Results
    ↓
Topic Uses Results in Response
    ↓
User Sees Answer
```

**Example:**
- **User:** "Send me a copy of my invoice"
- **Topic:** Asks for invoice number
- **Flow:** Retrieves invoice from SharePoint, sends email
- **Topic:** "I've emailed your invoice to your registered email address"

**Citation:** [Agent Flows Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview)

---

## Trigger Types

### 1. Manual Trigger (Agent-Invoked)

**Most Common for Copilot Studio**

Your agent explicitly calls the flow from a topic using a "Call an action" node.

**When to Use:**
- Agent needs to perform action based on user request
- Flow requires input from conversation
- Results needed to continue conversation

**Setup:**
- Create flow with **"When Copilot Studio calls a flow"** trigger
- Define input parameters
- Define output parameters
- Save and publish

**Citation:** [Flows Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview)

---

### 2. Event Trigger (Automated)

Flow runs automatically when an event occurs (without user asking).

**Event Types:**
- **Message received:** Every time user sends a message
- **Conversation starts:** When chat begins
- **Conversation ends:** When chat closes
- **Topic triggered:** When specific topic activates
- **Custom events:** Agent sends custom event

**Business Examples:**
- **Conversation starts:** Log chat session in CRM
- **Conversation ends:** Send transcript to manager
- **VIP topic triggered:** Alert sales team

**Citation:** [Event Trigger Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers-about)

---

### 3. Scheduled Trigger

Flow runs on a schedule (not directly related to conversations).

**Use Cases:**
- Daily report generation
- Nightly data synchronization
- Weekly maintenance tasks

**Note:** Scheduled flows don't interact with agent conversations directly—they're standalone automations.

---

## Flow Actions and Connectors

### What Are Actions?

**Actions** are the individual steps in a Power Automate flow. Each action does one thing (send email, create record, call API).

**Common Action Categories:**
1. **Data Operations:** Create, update, delete records
2. **Communication:** Send emails, SMS, notifications
3. **File Management:** Create, copy, move files
4. **Approval:** Request approvals, route decisions
5. **AI/ML:** Call AI services, analyze data

### What Are Connectors?

**Connectors** are pre-built integrations to specific services. Each connector provides multiple actions.

**Example: SharePoint Connector**
- **Actions:**
  - Create file
  - Get file content
  - Update file
  - Delete file
  - List items in library
  - Create list item

**Over 700 Connectors Available** (Microsoft + third-party + custom)

**Citation:** [Use Connectors in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)

---

## Creating Flows for Copilot Studio

### Method 1: Create from Copilot Studio (Recommended)

**Steps:**
1. **In a topic**, add node (+)
2. **Select "Call an action"**
3. **Select "Create a flow"**
4. **Power Automate opens** with Copilot Studio template
5. **Build your flow:**
   - Add input parameters (data from agent)
   - Add actions (what to do)
   - Add output parameters (data back to agent)
6. **Save flow**
7. **Return to Copilot Studio** (flow auto-appears)

**Business Benefit:** Flow is automatically configured for Copilot Studio integration.

---

### Method 2: Create from Power Automate

**Steps:**
1. **Go to Power Automate** (make.powerautomate.com)
2. **Create new flow**
3. **Choose trigger:** "When Copilot Studio calls a flow"
4. **Build flow** (inputs → actions → outputs)
5. **Save flow**
6. **Return to Copilot Studio** to use it

**When to Use:** Creating multiple flows, advanced Power Automate features needed.

---

### Input Parameters (Agent → Flow)

**What They Are:** Data the agent sends to the flow.

**Example: Invoice Retrieval Flow**
```
Input Parameters:
- invoiceNumber (text)
- userEmail (text)
```

**In Topic:**
- User provides invoice number → stored in variable
- Topic calls flow, passes variable as input

**In Flow:**
- Receives invoiceNumber
- Uses it to search SharePoint

**Citation:** [Advanced Managing Topic Inputs/Outputs](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-managing-topic-inputs-outputs)

---

### Output Parameters (Flow → Agent)

**What They Are:** Data the flow sends back to the agent.

**Example: Invoice Retrieval Flow**
```
Output Parameters:
- invoiceTotal (number)
- invoiceStatus (text)
- invoiceDate (date)
```

**In Flow:**
- Retrieves invoice from SharePoint
- Sets output variables with invoice data

**In Topic:**
- Receives flow outputs as variables
- Uses variables in message: "Your invoice total is ${invoiceTotal}"

**Citation:** [Advanced Managing Topic Inputs/Outputs](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-managing-topic-inputs-outputs)

---

## Calling Flows from Topics

### Using "Call an Action" Node

**Steps:**
1. **Add node** (+) in topic
2. **Select "Call an action"**
3. **Choose your flow** from list
4. **Map inputs:**
   - Flow expects: invoiceNumber
   - Provide: Topic.invoiceNumber variable
5. **Map outputs:**
   - Flow returns: invoiceTotal, invoiceStatus
   - Store in: New variables or existing variables
6. **Continue conversation** using output variables

**Visual Example:**

```
[Question Node] "What's your invoice number?"
    ↓ Store answer in: Topic.invoiceNumber
[Call Flow] "Get Invoice Details"
    ↓ Input: Topic.invoiceNumber
    ↓ Output: Topic.invoiceTotal, Topic.invoiceStatus
[Message Node] "Your invoice #{Topic.invoiceNumber} is {Topic.invoiceStatus}.
                Total: ${Topic.invoiceTotal}"
```

---

## Passing Data Between Agent and Flow

### Simple Data Types

**Supported Types:**
- **Text:** strings, descriptions
- **Number:** integers, decimals
- **Boolean:** true/false
- **Date:** dates and timestamps

**Example Flow Call:**
```
Input:
  customerName: Topic.customerName (text)
  orderQuantity: Topic.quantity (number)
  isPriority: Topic.vipCustomer (boolean)

Output:
  orderNumber: "ORD-12345" (text)
  totalCost: 299.99 (number)
  shipDate: 2024-12-20 (date)
```

---

### Complex Data Types (Files, Lists)

**Passing Files:**

Files can be passed as **base64-encoded strings** or **file metadata**.

**Example: User Uploads File**
1. **Question node** accepts file upload
2. **Store file** in variable (contains file metadata)
3. **Pass to flow** using Power Fx formula
4. **Flow processes file** (upload to SharePoint, analyze, etc.)

**Citation:** [Pass Files to Agent Flows](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/pass-files-to-connectors)

**Passing Lists:**

Use **JSON format** for arrays/collections.

**Example: Multiple Items**
```json
{
  "orderItems": [
    {"productId": "P123", "quantity": 2},
    {"productId": "P456", "quantity": 1}
  ]
}
```

---

## Error Handling

### Flow Failure Scenarios

**Common Errors:**
1. **Connector authentication failed:** User not signed in
2. **API timeout:** External service slow/down
3. **Invalid data:** User provided bad input
4. **Permission denied:** User lacks access to resource

### Handling Errors in Flows

**Power Automate Error Handling:**

1. **Configure action settings:**
   - Timeout duration
   - Retry policy
   - "Run after" conditions (on failure, on success)

2. **Add condition after action:**
   ```
   IF action failed:
     THEN: Set error output variable
     ELSE: Set success output variable
   ```

3. **Return error info to agent:**
   ```
   Outputs:
     success: false
     errorMessage: "Unable to retrieve invoice"
   ```

**Citation:** [Flows Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview)

### Handling Errors in Topics

**After calling flow, check outputs:**

```
[Call Flow] "Get Invoice"
    ↓
[Condition] IF Topic.success = false
    THEN:
      [Message] "I'm sorry, I couldn't retrieve your invoice.
                 Error: {Topic.errorMessage}"
      [Transfer to Agent] (escalate to human)
    ELSE:
      [Message] "Your invoice total is ${Topic.invoiceTotal}"
```

**Business Value:** Graceful degradation—agent handles errors without crashing.

---

### Troubleshooting Connector Issues

**Problem:** Agent fails to call connector repeatedly.

**Solution:** Create a Power Automate flow instead of direct connector call.

**Why It Works:**
- Power Automate has better retry logic
- More error handling options
- Can implement fallbacks

**Citation:** [Event Trigger Overview - Troubleshooting](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers-about)

---

## Business Use Cases

### 1. **Email Automation**

**Scenario:** Send order confirmation emails

**Flow Steps:**
1. **Trigger:** Agent calls flow
2. **Input:** Customer email, order details
3. **Action:** Send email via Office 365 connector
4. **Output:** Success/failure status

**Topic Flow:**
```
User: "I'd like to place an order"
Agent: Collects order info
Agent: Calls "Send Order Confirmation" flow
Flow: Sends email
Agent: "Confirmation email sent to your inbox!"
```

---

### 2. **CRM Integration**

**Scenario:** Create support ticket in Dynamics 365

**Flow Steps:**
1. **Trigger:** Agent calls flow
2. **Input:** Customer name, issue description, priority
3. **Action:** Create case in Dynamics 365
4. **Output:** Case number

**Topic Flow:**
```
User: "I need help with my account"
Agent: Asks for details
Agent: Calls "Create Support Ticket" flow
Flow: Creates Dynamics 365 case
Agent: "I've created ticket #12345 for you"
```

---

### 3. **Document Generation**

**Scenario:** Generate and share PDF report

**Flow Steps:**
1. **Trigger:** Agent calls flow
2. **Input:** Report parameters (date range, customer ID)
3. **Actions:**
   - Query data from SQL database
   - Generate PDF using OneDrive/Word template
   - Upload to SharePoint
   - Send link via email
4. **Output:** SharePoint file URL

**Topic Flow:**
```
User: "I need my monthly sales report"
Agent: Asks for month
Agent: Calls "Generate Sales Report" flow
Flow: Creates PDF, uploads to SharePoint
Agent: "Your report is ready: [link]"
```

---

### 4. **Approval Workflows**

**Scenario:** Request manager approval for expense

**Flow Steps:**
1. **Trigger:** Agent calls flow
2. **Input:** Employee name, expense amount, description
3. **Action:** Start approval workflow (notify manager)
4. **Output:** Approval request ID

**Later (separate flow):**
- **Trigger:** Approval completed
- **Action:** Notify employee via proactive message

**Topic Flow:**
```
User: "I need to submit an expense for $500"
Agent: Collects expense details
Agent: Calls "Submit Expense" flow
Flow: Sends approval request to manager
Agent: "Your request has been sent to your manager"
```

---

### 5. **Data Lookup**

**Scenario:** Check inventory availability

**Flow Steps:**
1. **Trigger:** Agent calls flow
2. **Input:** Product SKU
3. **Action:** Query inventory database via connector
4. **Output:** Stock quantity, warehouse location

**Topic Flow:**
```
User: "Do you have SKU-12345 in stock?"
Agent: Calls "Check Inventory" flow
Flow: Queries database
Agent: "Yes, we have 42 units in our Seattle warehouse"
```

---

## Authentication in Flows

### User Authentication vs. Agent Authentication

**User Authentication (Default):**
- Flow runs with **end user's credentials**
- User must sign in to connector (e.g., SharePoint, Dynamics)
- Respects user's permissions
- **Best for:** Secure scenarios, user-specific data

**Agent Authentication:**
- Flow runs with **agent author's credentials**
- All users share same permissions
- No user sign-in required
- **Best for:** Public data, shared resources

**Citation:** [Configure User Authentication for Tools](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication)

### Setting Authentication Mode

**In Flow Configuration:**
1. **Go to flow properties**
2. **Under "End user authentication":**
   - Select **"User authentication"** (default)
   - Or select **"Agent author authentication"**
3. **Publish**

**Security Warning:** Using agent authentication can expose data to all users. Use with caution.

**Citation:** [Control Maker-Provided Credentials](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-no-maker-authentication)

---

## Capacity and Licensing

### Agent Flow Consumption

**Important:** Agent flows consume **Copilot Studio capacity** for each action executed.

**Billing Model:**
- Each flow **action** counts toward capacity
- Example: Flow with 5 actions = 5 capacity units

**Citation:** [Flows Overview - Capacity](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview)

### Licensing Requirements

**Copilot Studio License:**
- Includes basic flow execution
- Standard connectors included

**Power Automate Premium License:**
- Required for premium connectors (SQL, Salesforce, etc.)
- Check connector licensing before building flows

**Citation:** [Use Connectors in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)

---

## Best Practices

### 1. **Design for Failure**
Always handle errors gracefully:
- Return success/failure status
- Include error messages
- Implement retry logic in flows
- Provide fallback paths in topics

### 2. **Keep Flows Focused**
- One flow = one business function
- Don't create mega-flows
- Easier to test, maintain, and reuse

### 3. **Use Descriptive Names**
- Flow: "Send Order Confirmation Email"
- Not: "Flow1" or "Email Flow"
- Helps with discovery and maintenance

### 4. **Test with Real Data**
- Use production-like test data
- Test error scenarios
- Verify permissions work correctly

### 5. **Document Inputs/Outputs**
- Add descriptions to parameters
- Helps other authors understand usage
- Reduces troubleshooting time

### 6. **Optimize Performance**
- Minimize API calls
- Use parallel branches when possible
- Cache repeated lookups

---

## Quick Reference

### When to Use Flows

**Use Agent Flows When You Need To:**
- ✅ Send emails or notifications
- ✅ Create/update records in databases
- ✅ Call external APIs
- ✅ Generate documents
- ✅ Integrate with third-party systems
- ✅ Process files
- ✅ Perform calculations
- ✅ Request approvals

**Don't Use Flows For:**
- ❌ Simple conversations (use topics)
- ❌ Displaying messages (use message nodes)
- ❌ Asking questions (use question nodes)
- ❌ Branching logic (use condition nodes)

---

## Additional Resources

### Official Documentation
- [Agent Flows Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview)
- [What is an Agent Flow?](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-power-virtual-agents)
- [Use Connectors](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors)
- [Event Triggers](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers-about)
- [Pass Files to Flows](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/pass-files-to-connectors)
- [Power Automate Documentation](https://learn.microsoft.com/en-us/power-automate/)

### Learning Path
1. **Beginner:** Create simple email flow
2. **Intermediate:** Add inputs/outputs, error handling
3. **Advanced:** Multi-connector flows, custom APIs

---

## Summary

**Agent Flows** transform Microsoft Copilot Studio from a conversational agent into a **complete automation platform**. By integrating with Power Automate's 700+ connectors, your agent can perform real business actions—sending emails, creating records, generating documents, and integrating with any system your business uses.

**Key Takeaway:** Topics handle **conversation**, Flows handle **action**—together they create a powerful do-everything agent.

---

**Document Version:** 1.0
**Last Updated:** December 18, 2024
**Research Methodology:** Official Microsoft Learn documentation analysis via Context7
