# Blog 4: Automating Actions with Agent Flows - Content Outline

**Subtitle**: "Make Your Agent Do Real Work with Power Automate"

**Target Audience**: Business users (non-technical, low-code/no-code)
**Estimated Reading Time**: 20 minutes
**Hands-On Time**: 75 minutes
**Difficulty**: Intermediate
**Prerequisites**: Completed Blogs 1-3; Microsoft 365 license; Copilot Studio access; SharePoint site access

---

## I. Hero Section

### A. Opening Hook (Business Impact Focus)
**Scenario**: Meet Sarah, an IT manager at TechCorp who receives 50+ support tickets daily through emails, Teams messages, and desk visits. Her team spends hours manually logging tickets, categorizing issues, and sending notifications.

**The Problem**: Manual ticket entry is:
- Time-consuming (5-7 minutes per ticket)
- Error-prone (inconsistent data entry)
- Frustrating (employees wait for confirmation)
- Inefficient (IT team context-switches constantly)

**The Solution**: An AI agent that automatically:
- Collects issue details conversationally
- Creates SharePoint ticket records
- Sends Teams notifications to IT team
- Provides instant ticket confirmation to users

**ROI Preview**: TechCorp processes 250 tickets/week. At 6 minutes saved per ticket, that's 25 hours/week = 1,300 hours/year saved. At $35/hour, that's **$45,500 in annual savings** from one agent.

### B. Learning Objectives Checklist
By the end of this blog, you will:
- [ ] Understand what agent flows are and how they differ from topics
- [ ] Create your first Power Automate flow triggered by an agent
- [ ] Pass data from agent conversations into flows
- [ ] Use SharePoint connectors to create list items
- [ ] Send Teams notifications with formatted cards
- [ ] Handle errors gracefully and provide user feedback
- [ ] Test end-to-end automation workflows

### C. What You'll Build
**IT Support Agent** that automates ticket creation:
- **Conversational interface**: Natural language issue collection
- **Data validation**: Ensures all required fields captured
- **Automatic ticket creation**: SharePoint list integration
- **Team notification**: Real-time Teams messages
- **User confirmation**: Ticket number and next steps

**Success Criteria**:
- Agent collects all required information (issue type, description, priority, affected system)
- SharePoint ticket created with correct data
- IT team receives actionable Teams notification
- User gets ticket number within 30 seconds

---

## II. Key Concepts Explained (Business-Friendly)

### A. What Are Agent Flows?
**Non-Technical Explanation**:
Think of your agent as a helpful receptionist who greets customers and gathers information. The *agent* (receptionist) is great at conversation, but can't actually file paperwork or send notifications. That's where *flows* come in - they're like the back-office staff who take the information and do the actual work: creating records, sending emails, updating systems.

**Agent flows** are specialized Power Automate workflows designed to work seamlessly with Copilot agents. They receive data from conversations and execute business processes automatically.

**Visual Diagram Required**:
```
[Diagram 01: Agent + Flow Partnership]
- Left side: Agent conversation (speech bubbles)
- Arrow: "Collected data"
- Right side: Flow actions (connector icons)
- Show data flowing from conversation → flow → systems
```

### B. How Agent Flows Work: The Big Picture
**Step-by-step explanation**:
1. **User talks to agent**: "My laptop won't connect to WiFi"
2. **Agent asks clarifying questions**: Issue type, urgency, contact info
3. **Agent triggers flow**: Passes collected data to Power Automate
4. **Flow executes actions**: Creates SharePoint item, sends Teams message
5. **Flow returns results**: Ticket number sent back to agent
6. **Agent confirms to user**: "Your ticket #1234 has been created!"

**Business Analogy**: It's like calling a helpdesk where the phone agent (chatbot) collects your information, then hands it off to a specialist (flow) who files your ticket and notifies the right team - except it all happens in seconds, automatically.

**Visual Diagram Required**:
```
[Diagram 02: Agent Flow Lifecycle]
- Circular flow showing: Conversation → Data Collection → Flow Trigger → Actions → Results → Confirmation
- Annotate each step with real example from IT Support Agent
```

### C. Agent Flows vs. Regular Power Automate Flows
**Key Differences Table**:

| Aspect | Regular Flow | Agent Flow |
|--------|-------------|------------|
| **Trigger** | Event-based (email arrives, file uploaded) | Agent conversation (user provides input) |
| **Data Source** | External systems | Agent variables |
| **User Context** | No direct user interaction | Live conversation with user |
| **Output** | System updates, notifications | Returns data to agent for response |
| **Error Handling** | Logs, retries | Must inform user in conversation |

**When to Use Agent Flows**:
- ✅ User initiates action through conversation
- ✅ Need to capture specific information from user
- ✅ Action requires external system integration (SharePoint, Teams, CRM)
- ✅ Want to provide real-time confirmation to user

**When to Use Regular Flows**:
- ✅ Automated background processes (scheduled reports)
- ✅ Event-driven automation (new customer added → send welcome email)
- ✅ Multi-step approvals without conversational input

### D. Connectors: Pre-Built Integrations
**What Are Connectors?**
Connectors are like universal adapters that let your flows communicate with different business systems. Microsoft provides 1,000+ pre-built connectors for common services.

**Standard Connectors** (included with Copilot Studio):
- **Microsoft 365**: SharePoint, Teams, Outlook, OneDrive, Excel
- **Microsoft Services**: Dataverse, Planner, Forms, Power Apps
- **Basics**: HTTP requests, approvals, notifications

**Premium Connectors** (require Power Automate license):
- **CRM/Sales**: Salesforce, Dynamics 365, HubSpot
- **Help Desk**: ServiceNow, Zendesk, Jira
- **Communication**: Slack, Twilio, SendGrid
- **Business Apps**: SAP, DocuSign, Adobe Sign

**For This Blog**: We'll use only **standard connectors** (SharePoint, Teams) so anyone with Microsoft 365 can follow along.

**Screenshot Required**:
```
[Screenshot 01: Connector gallery in Power Automate]
- Show standard vs premium indicators
- Highlight SharePoint and Teams connectors
- Annotate: "Included with your license"
```

### E. Understanding Triggers vs. Actions
**Simple Definitions**:
- **Trigger**: What *starts* the flow (the "when this happens" part)
  - Example: "When agent calls this flow"
- **Actions**: What the flow *does* (the "do this" part)
  - Example: "Create SharePoint item", "Send Teams message"

**Visual Diagram Required**:
```
[Diagram 03: Trigger → Actions Chain]
- Show flow as a pipeline
- Trigger at start: "Agent provides ticket data"
- Actions in sequence: "Create ticket" → "Send notification" → "Return ticket number"
- Annotate data flowing through
```

---

## III. Prerequisites and Setup

### A. Required Access
**Checklist**:
- [ ] Microsoft 365 Business Standard or Premium license
- [ ] Copilot Studio environment access
- [ ] SharePoint site with Owner or Contributor permissions
- [ ] Microsoft Teams access (for notifications)
- [ ] Power Automate access (included with M365)

**How to Verify Access**:
1. Go to https://make.powerautomate.com
2. Sign in with your work account
3. Verify environment selector shows your organization
4. Click "New flow" - should see "Instant cloud flow" option

**Screenshot Required**:
```
[Screenshot 02: Power Automate home screen]
- Annotate: Environment selector
- Annotate: "New flow" button
- Show user has proper access
```

### B. SharePoint List Preparation
**What We're Building**: IT Support Tickets list

**Step 1: Create SharePoint List**
1. Navigate to your SharePoint site
2. Click "New" → "List"
3. Name: "IT Support Tickets"
4. Description: "IT helpdesk ticket tracking"
5. Click "Create"

**Screenshot Required**:
```
[Screenshot 03: Creating SharePoint list]
- Show "New" → "List" menu
- Annotate list name field
```

**Step 2: Add Custom Columns**
We need columns to store ticket data:

| Column Name | Type | Required | Description |
|-------------|------|----------|-------------|
| Title | Single line text | ✅ | Default - use for ticket subject |
| Issue Type | Choice | ✅ | Hardware, Software, Network, Access |
| Description | Multiple lines text | ✅ | Detailed issue description |
| Priority | Choice | ✅ | Low, Medium, High, Critical |
| Affected System | Single line text | ❌ | Computer name, printer ID, etc. |
| Requester Email | Single line text | ✅ | Who reported the issue |
| Status | Choice | ❌ | New, In Progress, Resolved, Closed |
| Ticket Number | Number | ❌ | Auto-generated ID |

**Step-by-Step Column Creation**:
1. Click "Add column" → Choose type
2. Enter column name
3. Configure settings (choices, required, etc.)
4. Click "Save"
5. Repeat for all columns

**Screenshots Required** (6 images):
```
[Screenshot 04: Adding "Issue Type" choice column]
- Show column name field
- Show choice options entry
- Annotate "Required" toggle

[Screenshot 05: Adding "Description" multi-line text column]
- Show "Multiple lines of text" selection
- Annotate "Plain text" vs "Rich text"

[Screenshot 06: Adding "Priority" choice column]
- Show all priority levels
- Annotate default value

[Screenshot 07: Completed list schema]
- Show all columns in list settings
- Annotate required vs optional columns
```

**Step 3: Create Sample Ticket (For Testing)**
1. Click "New" in the list
2. Fill in all fields
3. Click "Save"
4. Note the ticket ID (we'll reference this later)

**Screenshot Required**:
```
[Screenshot 08: Sample ticket creation]
- Show form with all fields populated
- Annotate where ticket ID appears
```

### C. Teams Channel Setup
**Prepare Notification Destination**:
1. Open Microsoft Teams
2. Navigate to your team (or create new team: "IT Support")
3. Create channel: "Support Tickets" (or use existing)
4. Copy channel URL (needed for flow configuration)

**How to Get Channel URL**:
1. Click "..." next to channel name
2. Select "Get link to channel"
3. Copy URL (looks like: https://teams.microsoft.com/l/channel/...)

**Screenshot Required**:
```
[Screenshot 09: Getting Teams channel link]
- Show "..." menu
- Annotate "Get link to channel" option
- Show copied URL
```

---

## IV. Building the IT Support Agent (Conversation Part)

### A. Create the Agent
**Step 1: New Agent**
1. Go to Copilot Studio (https://copilotstudio.microsoft.com)
2. Click "Create" → "New agent"
3. Name: "IT Support Agent"
4. Description: "Automated IT helpdesk ticket creation"
5. Instructions: "Help employees report IT issues and create support tickets automatically"
6. Click "Create"

**Screenshot Required**:
```
[Screenshot 10: Creating IT Support Agent]
- Show agent creation form
- Annotate name, description, instructions fields
```

### B. Design Conversation Flow (Topic: Create Ticket)
**Step 2: Create "Create Ticket" Topic**
1. Go to "Topics" tab
2. Click "Add a topic" → "From blank"
3. Name: "Create Support Ticket"
4. Trigger phrases:
   - "I need help with a computer issue"
   - "Create a ticket"
   - "Report a problem"
   - "Something isn't working"
   - "I need IT support"
5. Click "Save"

**Screenshot Required**:
```
[Screenshot 11: Creating topic with trigger phrases]
- Show topic name field
- Show all 5 trigger phrases entered
- Annotate "Save" button
```

**Step 3: Build Conversation Nodes**
We'll create a conversation that collects all required ticket information.

**Node 1: Greeting Message**
1. Click "+" → "Send a message"
2. Message text:
   ```
   I'm here to help! I'll create an IT support ticket for you.

   I just need a few details to get started. This will only take a minute.
   ```
3. Click "Save"

**Screenshot Required**:
```
[Screenshot 12: Greeting message node]
- Show message text editor
- Annotate message formatting options
```

**Node 2: Collect Issue Type**
1. Click "+" → "Ask a question"
2. Question: "What type of issue are you experiencing?"
3. Identify: "Multiple choice options"
4. Options:
   - Hardware (computer, printer, phone)
   - Software (application not working)
   - Network (WiFi, VPN, internet)
   - Access (password, permissions, account)
5. Save response to: Create new variable `IssueType`
6. Click "Save"

**Screenshot Required**:
```
[Screenshot 13: Issue type question node]
- Show question text
- Show all 4 choice options
- Annotate variable name field
- Annotate "User's entire response" vs "Multiple choice options"
```

**Node 3: Collect Issue Description**
1. Click "+" → "Ask a question"
2. Question: "Please describe the issue in detail. What exactly is happening?"
3. Identify: "User's entire response"
4. Save response to: Create new variable `IssueDescription`
5. Click "Save"

**Screenshot Required**:
```
[Screenshot 14: Description question node]
- Show open-ended question configuration
- Annotate "User's entire response" selection
- Show variable creation
```

**Node 4: Collect Priority**
1. Click "+" → "Ask a question"
2. Question: "How urgent is this issue?"
3. Identify: "Multiple choice options"
4. Options:
   - Low (Can wait a few days)
   - Medium (Needed within 24 hours)
   - High (Blocking my work)
   - Critical (Emergency - entire team affected)
5. Save response to: Create new variable `Priority`
6. Click "Save"

**Screenshot Required**:
```
[Screenshot 15: Priority question node]
- Show priority options with descriptions
- Annotate how descriptions help users choose
```

**Node 5: Collect Affected System (Optional)**
1. Click "+" → "Ask a question"
2. Question: "What device or system is affected? (For example: laptop name, printer ID, or application name)"
3. Identify: "User's entire response"
4. Save response to: Create new variable `AffectedSystem`
5. Click "Save"

**Screenshot Required**:
```
[Screenshot 16: Affected system question]
- Show example guidance in question text
- Annotate how examples improve data quality
```

**Node 6: Confirm Email Address**
1. Click "+" → "Ask a question"
2. Question: "What's the best email address to reach you?"
3. Identify: "Email"
4. Save response to: Create new variable `RequesterEmail`
5. Click "Save"

**Screenshot Required**:
```
[Screenshot 17: Email question with validation]
- Show "Email" entity type selected
- Annotate how entity validation works
- Show error message configuration
```

**Node 7: Confirmation Summary**
1. Click "+" → "Send a message"
2. Message text:
   ```
   Perfect! Let me confirm the details:

   - Issue Type: {x:IssueType}
   - Priority: {x:Priority}
   - Description: {x:IssueDescription}
   - Affected System: {x:AffectedSystem}
   - Your Email: {x:RequesterEmail}

   I'm creating your ticket now...
   ```
3. Click "Save"

**Screenshot Required**:
```
[Screenshot 18: Confirmation message with variables]
- Show variable insertion syntax {x:VariableName}
- Annotate how to insert variables (menu or autocomplete)
- Show preview of formatted message
```

**Visual Diagram Required**:
```
[Diagram 04: Complete conversation flow]
- Show all 7 nodes connected
- Label each node type (Message, Question)
- Show variables collected at each question node
- Annotate flow direction with arrows
```

### C. Test the Conversation (Before Adding Flow)
**Step 4: Test in Copilot Studio**
1. Click "Test" button (top-right)
2. Type trigger phrase: "I need help"
3. Walk through conversation:
   - Choose "Software"
   - Describe issue
   - Select "High" priority
   - Enter system name
   - Provide email
4. Verify all variables captured correctly

**Screenshot Required**:
```
[Screenshot 19: Testing conversation in test panel]
- Show test panel with conversation
- Annotate where variables appear
- Show confirmation message with all data
```

**Common Issues and Fixes**:
| Problem | Solution |
|---------|----------|
| Question not asked | Check trigger phrases matched |
| Variable not saved | Verify "Save response" configured |
| Validation fails | Check entity type (Email, Number, etc.) |
| Flow not reachable | Ensure all question nodes have responses |

---

## V. Building the Agent Flow (Automation Part)

### A. Create the Flow
**Step 1: Add Flow to Topic**
1. In the topic, click "+" after the confirmation message
2. Select "Call an action" → "Create a flow"
3. Power Automate opens in new tab
4. Template: "From blank"
5. Flow name: "Create IT Support Ticket"
6. Trigger: "When Copilot Studio calls a flow" (should be auto-selected)
7. Click "Create"

**Screenshot Required**:
```
[Screenshot 20: Creating flow from Copilot Studio]
- Show "Call an action" → "Create a flow" menu
- Annotate new tab opening to Power Automate
```

**Screenshot Required**:
```
[Screenshot 21: Power Automate flow trigger]
- Show "When Copilot Studio calls a flow" trigger
- Annotate trigger description
```

### B. Define Flow Inputs (Data from Agent)
**Step 2: Add Input Parameters**
These are the variables the agent will pass to the flow.

1. Click on trigger card
2. Click "Add an input" → "Text"
3. Input name: `IssueType`
4. Repeat for all variables:
   - `IssueDescription` (Text)
   - `Priority` (Text)
   - `AffectedSystem` (Text)
   - `RequesterEmail` (Text)

**Screenshot Required**:
```
[Screenshot 22: Adding flow inputs]
- Show "Add an input" menu
- Show all 5 inputs configured
- Annotate input names matching agent variables
```

**Best Practice Note**: Input names must **exactly match** agent variable names (case-sensitive).

### C. Create SharePoint List Item
**Step 3: Add SharePoint Action**
1. Click "+" → "Add an action"
2. Search for: "SharePoint"
3. Select: "Create item"
4. Configure connection:
   - Site Address: Choose your SharePoint site
   - List Name: "IT Support Tickets"

**Screenshot Required**:
```
[Screenshot 23: Adding SharePoint "Create item" action]
- Show action search
- Show SharePoint actions available
- Annotate "Create item" selection
```

**Screenshot Required**:
```
[Screenshot 24: Configuring SharePoint connection]
- Show site address dropdown
- Show list name selection
- Annotate connection authentication
```

**Step 4: Map Flow Inputs to SharePoint Columns**
For each SharePoint column, insert the corresponding flow input:

| SharePoint Column | Flow Input Variable | How to Insert |
|-------------------|---------------------|---------------|
| Title | `IssueType` + `RequesterEmail` | Click field → "Dynamic content" → Select `IssueType` |
| Issue Type | `IssueType` | Click field → Select `IssueType` |
| Description | `IssueDescription` | Click field → Select `IssueDescription` |
| Priority | `Priority` | Click field → Select `Priority` |
| Affected System | `AffectedSystem` | Click field → Select `AffectedSystem` |
| Requester Email | `RequesterEmail` | Click field → Select `RequesterEmail` |
| Status | Type: "New" | Hardcode default value |

**Screenshot Required**:
```
[Screenshot 25: Mapping flow inputs to SharePoint columns]
- Show "Create item" action expanded
- Show dynamic content selector
- Annotate how to pick flow input variables
- Show all fields mapped
```

**Pro Tip: Creating Ticket Titles**
For the "Title" field, combine multiple inputs for better readability:
1. Click in "Title" field
2. Type text: `[`
3. Select dynamic content: `Priority`
4. Type: `]`
5. Type: ` - `
6. Select dynamic content: `IssueType`
7. Type: ` from `
8. Select dynamic content: `RequesterEmail`
9. Result: `[High] - Software from user@company.com`

**Screenshot Required**:
```
[Screenshot 26: Composing ticket title from multiple inputs]
- Show expression builder
- Show combined text + variables
- Annotate final result preview
```

### D. Send Teams Notification
**Step 5: Add Teams Action**
1. Click "+" → "Add an action"
2. Search for: "Teams"
3. Select: "Post message in a chat or channel"
4. Configure:
   - Post as: "Flow bot"
   - Post in: "Channel"
   - Team: Select your team
   - Channel: Select "Support Tickets" channel

**Screenshot Required**:
```
[Screenshot 27: Adding Teams action]
- Show Teams actions search results
- Annotate "Post message in a chat or channel" selection
```

**Screenshot Required**:
```
[Screenshot 28: Configuring Teams notification]
- Show team/channel selectors
- Show "Flow bot" vs "User" option
- Annotate channel selection
```

**Step 6: Format Teams Message with Adaptive Card**
Use rich formatting to make notifications actionable:

1. Click "Message" field
2. Click "Show advanced options"
3. Scroll to "Adaptive Card"
4. Paste this JSON (replace with your variables):

```json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "TextBlock",
      "size": "Large",
      "weight": "Bolder",
      "text": "🎫 New IT Support Ticket",
      "color": "Accent"
    },
    {
      "type": "FactSet",
      "facts": [
        {
          "title": "Priority:",
          "value": "${Priority}"
        },
        {
          "title": "Issue Type:",
          "value": "${IssueType}"
        },
        {
          "title": "Requester:",
          "value": "${RequesterEmail}"
        },
        {
          "title": "Affected System:",
          "value": "${AffectedSystem}"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "**Description:**",
      "weight": "Bolder",
      "spacing": "Medium"
    },
    {
      "type": "TextBlock",
      "text": "${IssueDescription}",
      "wrap": true
    }
  ],
  "actions": [
    {
      "type": "Action.OpenUrl",
      "title": "View Ticket",
      "url": "YOUR_SHAREPOINT_LIST_URL"
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.3"
}
```

**How to Insert Dynamic Content in Adaptive Card**:
1. Use `${VariableName}` syntax
2. Replace `YOUR_SHAREPOINT_LIST_URL` with actual list URL
3. Click "Update card" to preview

**Screenshot Required**:
```
[Screenshot 29: Teams adaptive card configuration]
- Show JSON editor
- Show dynamic content insertions
- Show card preview
```

**Alternative: Simple Text Message**
If adaptive cards are too complex, use simple formatted text:

```
🎫 **New IT Support Ticket**

**Priority:** {Priority}
**Issue Type:** {IssueType}
**Requester:** {RequesterEmail}
**System:** {AffectedSystem}

**Description:**
{IssueDescription}

[View All Tickets](YOUR_SHAREPOINT_URL)
```

**Screenshot Required**:
```
[Screenshot 30: Simple text Teams message]
- Show message field with markdown formatting
- Show dynamic content insertions
- Annotate markdown syntax
```

### E. Return Ticket Number to Agent
**Step 7: Add Response to Agent**
1. Click "+" → "Add an action"
2. Select: "Respond to Copilot Studio" (should appear automatically)
3. Click "Add an output" → "Number"
4. Output name: `TicketNumber`
5. Value: Click field → Dynamic content → Select `ID` (from SharePoint "Create item")

**Screenshot Required**:
```
[Screenshot 31: Configuring flow response to agent]
- Show "Respond to Copilot Studio" action
- Show output configuration
- Annotate ID selection from SharePoint action
```

**Why Return the Ticket Number?**
The agent needs the ticket ID to tell the user their ticket number. The SharePoint "Create item" action automatically generates an ID field we can use.

**Visual Diagram Required**:
```
[Diagram 05: Complete flow architecture]
- Show all 4 actions in sequence:
  1. Trigger (receives agent data)
  2. Create SharePoint item
  3. Send Teams notification
  4. Return ticket number
- Annotate data flow between actions
- Show inputs and outputs
```

### F. Save and Test the Flow
**Step 8: Save and Test**
1. Click "Save" (top-right)
2. Click "Test" → "Manually"
3. Provide sample inputs:
   - IssueType: "Software"
   - IssueDescription: "Outlook keeps crashing when I try to send emails"
   - Priority: "High"
   - AffectedSystem: "Microsoft Outlook"
   - RequesterEmail: "test@company.com"
4. Click "Run flow"
5. Wait for completion (usually 5-10 seconds)

**Screenshot Required**:
```
[Screenshot 32: Testing flow manually]
- Show test inputs form
- Show sample data entered
- Annotate "Run flow" button
```

**Step 9: Verify Flow Execution**
1. Check flow run history (should show "Succeeded")
2. Go to SharePoint list → verify ticket created
3. Go to Teams channel → verify notification posted
4. Note the ticket ID from SharePoint

**Screenshot Required**:
```
[Screenshot 33: Flow run success]
- Show flow run history with "Succeeded" status
- Show execution time
- Show all actions completed (green checkmarks)
```

**Screenshot Required**:
```
[Screenshot 34: SharePoint ticket created by flow]
- Show new ticket in list
- Annotate all fields populated correctly
- Highlight ticket ID
```

**Screenshot Required**:
```
[Screenshot 35: Teams notification from flow]
- Show posted message in Teams
- Annotate rich formatting
- Show "View Ticket" button
```

---

## VI. Connecting Agent and Flow

### A. Add Flow to Agent Topic
**Step 1: Return to Copilot Studio**
1. Go back to Copilot Studio (topic editor tab)
2. After the confirmation message node, click "+"
3. Select "Call an action" → "Your flow name" (should appear)
4. If flow doesn't appear, click "Refresh"

**Screenshot Required**:
```
[Screenshot 36: Adding flow to agent topic]
- Show "Call an action" menu
- Show flow appearing in list
- Annotate "Refresh" option if flow missing
```

### B. Map Agent Variables to Flow Inputs
**Step 2: Configure Flow Inputs**
For each flow input, select the matching agent variable:

| Flow Input | Agent Variable |
|------------|----------------|
| IssueType | `Topic.IssueType` |
| IssueDescription | `Topic.IssueDescription` |
| Priority | `Topic.Priority` |
| AffectedSystem | `Topic.AffectedSystem` |
| RequesterEmail | `Topic.RequesterEmail` |

**Screenshot Required**:
```
[Screenshot 37: Mapping agent variables to flow inputs]
- Show flow action node in topic
- Show input mapping dropdown
- Annotate variable selection for each input
```

**Important**: Variable names are case-sensitive and must match exactly.

### C. Capture Flow Output
**Step 3: Save Flow Response**
1. The flow returns `TicketNumber`
2. Save to new variable: `FlowTicketNumber`
3. Click "Save"

**Screenshot Required**:
```
[Screenshot 38: Saving flow output to variable]
- Show flow output configuration
- Show new variable creation
- Annotate variable naming
```

### D. Provide User Confirmation
**Step 4: Final Confirmation Message**
1. Click "+" after flow action
2. Select "Send a message"
3. Message text:
   ```
   ✅ Great news! Your IT support ticket has been created.

   **Ticket Number:** #{x:FlowTicketNumber}

   Our IT team has been notified and will respond within 4 business hours.
   You'll receive updates at: {x:RequesterEmail}

   **What happens next?**
   - You'll get an email when your ticket is assigned
   - The IT team will contact you if they need more information
   - You can check ticket status anytime by asking me for "ticket #{x:FlowTicketNumber}"

   Is there anything else I can help you with today?
   ```
4. Click "Save"

**Screenshot Required**:
```
[Screenshot 39: Final confirmation message]
- Show message with ticket number variable
- Annotate user experience improvements
- Show formatting options
```

**Visual Diagram Required**:
```
[Diagram 06: Complete agent + flow integration]
- Show entire topic flow from trigger to confirmation
- Highlight flow action node
- Show data passing from agent → flow → back to agent
- Annotate user experience at each step
```

---

## VII. End-to-End Testing

### A. Publish the Agent
**Step 1: Save and Publish**
1. Click "Save" (top-right of topic)
2. Click "Publish" button
3. Select "Publish" (not "Save for later")
4. Wait for publish to complete (usually 30-60 seconds)
5. Verify "Published successfully" message

**Screenshot Required**:
```
[Screenshot 40: Publishing agent]
- Show "Publish" button
- Show publish confirmation dialog
- Show success message
```

### B. Test in Teams (Recommended)
**Step 2: Deploy to Teams for Testing**
1. Go to "Channels" in Copilot Studio
2. Click "Microsoft Teams"
3. Click "Turn on Teams"
4. Click "Add to Teams" → "Add"
5. Teams opens with your agent

**Screenshot Required**:
```
[Screenshot 41: Adding agent to Teams]
- Show Channels configuration
- Show "Turn on Teams" toggle
- Show "Add to Teams" button
```

**Screenshot Required**:
```
[Screenshot 42: Agent in Teams chat]
- Show agent conversation in Teams
- Annotate where agent appears in Teams interface
```

### C. Complete Test Scenario
**Step 3: Full Workflow Test**
Run through complete conversation:

1. **Start conversation**: "I need help with a problem"
2. **Issue type**: Select "Hardware"
3. **Description**: "My monitor keeps flickering and going black"
4. **Priority**: Select "High"
5. **System**: "Dell UltraSharp U2720Q"
6. **Email**: Your actual email address
7. **Wait for confirmation**: Should receive ticket number

**Step 4: Verify All Outcomes**
- [ ] Agent provided ticket number
- [ ] SharePoint ticket created with correct data
- [ ] Teams notification posted to correct channel
- [ ] User confirmation message was clear and helpful
- [ ] Entire process took < 60 seconds

**Screenshot Required**:
```
[Screenshot 43: End-to-end test in Teams]
- Show complete conversation
- Show ticket number confirmation
- Annotate timing (fast response)
```

**Screenshot Required**:
```
[Screenshot 44: Verifying SharePoint ticket]
- Show ticket in SharePoint with all data
- Annotate data accuracy
- Highlight ticket ID matches agent confirmation
```

**Screenshot Required**:
```
[Screenshot 45: Verifying Teams notification]
- Show notification in Teams
- Annotate real-time delivery
- Show actionable information
```

---

## VIII. Error Handling and Troubleshooting

### A. Common Flow Errors
**Error 1: "Failed to create item in SharePoint"**

**Symptoms**:
- Flow fails at SharePoint action
- Error message: "Access denied" or "List not found"

**Causes**:
- SharePoint site URL incorrect
- User doesn't have permissions
- List name changed
- Column name mismatch

**Solutions**:
1. Verify SharePoint connection:
   - Click SharePoint action → "..." → "Connection"
   - Reconnect if needed
2. Check permissions:
   - Must be Owner or Contributor on SharePoint site
   - Test by manually creating list item
3. Verify column names exactly match (case-sensitive)
4. Re-select list from dropdown (forces refresh)

**Screenshot Required**:
```
[Screenshot 46: SharePoint connection error]
- Show error in flow run history
- Show how to reconnect
- Annotate troubleshooting steps
```

**Error 2: "Teams notification not sent"**

**Symptoms**:
- Flow succeeds but no Teams message appears
- Error message: "Channel not found"

**Causes**:
- Teams channel URL changed
- Flow bot not added to team
- Channel deleted or archived

**Solutions**:
1. Verify Teams connection:
   - Click Teams action → "..." → "Connection"
   - Sign in again if needed
2. Re-select team and channel from dropdowns
3. Test by manually sending message to channel
4. Check channel isn't private (flow bot needs access)

**Screenshot Required**:
```
[Screenshot 47: Teams notification troubleshooting]
- Show Teams action configuration
- Show connection settings
- Annotate channel selection
```

**Error 3: "Flow not found when calling from agent"**

**Symptoms**:
- Agent shows "Flow action failed"
- Error message: "Could not find flow"

**Causes**:
- Flow not saved in same environment as agent
- Flow disabled or deleted
- Flow permissions incorrect

**Solutions**:
1. Verify environment:
   - Copilot Studio and Power Automate must use same environment
   - Check environment selector (top-right)
2. Check flow status:
   - Go to Power Automate → My flows
   - Verify flow is "On" (not suspended)
3. Re-add flow to topic:
   - Remove flow action from topic
   - Click "+" → "Call an action" → Re-select flow
4. Test flow manually first to confirm it works

**Screenshot Required**:
```
[Screenshot 48: Environment mismatch troubleshooting]
- Show environment selector in Copilot Studio
- Show environment selector in Power Automate
- Annotate how to verify they match
```

### B. Agent Conversation Issues
**Issue 1: "Variables not captured correctly"**

**Symptoms**:
- Flow receives empty or wrong data
- Confirmation message shows blank values

**Solutions**:
1. Verify variable names match exactly (case-sensitive)
2. Check question nodes are saving responses
3. Test conversation in Copilot Studio test pane
4. Review variable values in flow run history

**Screenshot Required**:
```
[Screenshot 49: Debugging variable mapping]
- Show flow run history with input values
- Show how to trace data from agent to flow
- Annotate variable inspection
```

**Issue 2: "Flow takes too long, conversation times out"**

**Symptoms**:
- User sees "Thinking..." for >30 seconds
- Eventually shows error message

**Solutions**:
1. Optimize flow:
   - Remove unnecessary actions
   - Use parallel branches for independent actions
2. Add user feedback:
   - Before flow: "Creating your ticket, this will take a moment..."
   - Show progress if possible
3. Check flow run history for slow actions
4. Consider async pattern for very slow operations

### C. Testing Checklist
**Before Going Live**:
- [ ] Flow runs successfully with manual test
- [ ] SharePoint ticket created with all data
- [ ] Teams notification formatted correctly
- [ ] Agent receives ticket number from flow
- [ ] User sees confirmation message
- [ ] Error messages are user-friendly
- [ ] Tested with multiple issue types
- [ ] Tested with different priorities
- [ ] Tested with optional fields empty
- [ ] End-to-end time < 60 seconds

---

## IX. Business Impact and ROI

### A. Calculating Time Savings
**Before Automation**:
1. Employee contacts IT (email/Teams) - 2 min
2. IT staff reads request - 1 min
3. IT staff creates ticket manually - 3 min
4. IT staff notifies employee - 1 min
**Total: 7 minutes per ticket**

**After Automation**:
1. Employee chats with agent - 1.5 min
2. Ticket created automatically - 0.5 min
3. IT notified automatically - instant
4. Employee confirmed automatically - instant
**Total: 2 minutes per ticket**

**Time Saved: 5 minutes per ticket**

### B. ROI Example: TechCorp (500 employees)
**Assumptions**:
- 250 tickets per week (0.5 tickets/employee/week)
- IT staff hourly rate: $35/hour
- Employee hourly rate: $25/hour

**Annual Calculations**:
- **Tickets per year**: 250 × 52 = 13,000 tickets
- **Time saved per ticket**: 5 minutes
- **Total time saved**: 13,000 × 5 = 65,000 minutes = 1,083 hours
- **IT staff savings**: 650 hours × $35 = $22,750
- **Employee productivity**: 433 hours × $25 = $10,825
- **Total annual savings**: **$33,575**

**Additional Benefits**:
- Faster ticket response (< 30 seconds vs. hours)
- Consistent data quality (no missing fields)
- 24/7 availability (after-hours support)
- Audit trail (all tickets logged)
- Reduced email clutter
- IT staff can focus on solving issues (not data entry)

**Visual Diagram Required**:
```
[Diagram 07: ROI breakdown]
- Before/after comparison visual
- Time savings per ticket
- Annual savings calculation
- Additional benefits listed
```

### C. Real-World Success Story
**Case Study: Contoso Manufacturing**
- **Company Size**: 1,200 employees across 3 locations
- **Challenge**: IT helpdesk overwhelmed with 400+ tickets/week
- **Solution**: IT Support Agent with flow automation
- **Results** (6 months):
  - **87% of tickets** created via agent (348/week)
  - **Average ticket creation time**: 2.3 minutes (vs. 8 minutes before)
  - **Time saved**: 5.7 minutes per ticket × 348 tickets/week × 26 weeks = 51,636 minutes = **860 hours**
  - **Cost savings**: 860 hours × $38 average hourly rate = **$32,680**
  - **User satisfaction**: 94% (up from 67%)
  - **Ticket data quality**: 99% (up from 78%)

**Quote**: "The agent has transformed our helpdesk. Employees love the instant response, and our IT team can focus on solving problems instead of data entry." - Maria Santos, IT Director

---

## X. Extending the Agent

### A. Adding Approval Workflow
**Next Level**: Route high-priority tickets to manager for approval

**How**:
1. Add condition in flow: "If Priority = Critical"
2. Add action: "Start and wait for an approval"
3. Approver: IT Manager email
4. If approved → Create ticket
5. If rejected → Send explanation to user

**Visual Diagram Required**:
```
[Diagram 08: Approval workflow]
- Show branching logic
- Show approval request email
- Show different outcomes
```

### B. Adding Status Updates
**Next Level**: User can ask agent for ticket status

**How**:
1. Create new topic: "Check Ticket Status"
2. Trigger: "What's my ticket status", "Check ticket #123"
3. Ask for ticket number
4. Create flow: "Get SharePoint item by ID"
5. Return status to user

**Benefits**:
- Reduces "what's my ticket status" emails
- 24/7 self-service
- Less interruption for IT team

### C. Adding Attachments
**Next Level**: User can upload screenshots with ticket

**How**:
1. Use Teams file upload in agent conversation
2. Flow saves file to SharePoint document library
3. Link file to ticket item

**Use Cases**:
- Error screenshots
- Hardware photos
- Log files

### D. Integrating with External Systems
**Next Level**: Create tickets in ServiceNow, Jira, or other ITSM tools

**How**:
1. Add premium connector (ServiceNow, Jira)
2. Replace SharePoint action with external system action
3. Map fields to external system

**When to Consider**:
- Already using external ITSM tool
- Need advanced ticket management
- Enterprise-wide standardization

---

## XI. Best Practices and Tips

### A. Conversation Design Best Practices
**Do's**:
- ✅ Start with clear expectations ("This will take 2 minutes")
- ✅ Ask one question at a time
- ✅ Provide examples in questions ("e.g., LAPTOP-001")
- ✅ Confirm data before submitting
- ✅ Provide next steps in confirmation
- ✅ Use friendly, conversational language
- ✅ Offer help after completion

**Don'ts**:
- ❌ Ask too many questions (max 5-7)
- ❌ Use technical jargon
- ❌ Make fields required if not essential
- ❌ Assume user knows ticket numbers, system names
- ❌ End abruptly without confirmation
- ❌ Ignore error scenarios

### B. Flow Design Best Practices
**Performance**:
- Use parallel branches for independent actions
- Minimize API calls
- Cache frequently accessed data
- Test with realistic data volumes

**Error Handling**:
- Add "Try-Catch" scopes for critical actions
- Provide user-friendly error messages
- Log errors for troubleshooting
- Include retry logic for transient failures

**Security**:
- Never hard-code credentials
- Use service accounts with minimal permissions
- Validate all user inputs
- Sanitize data before inserting (prevent injection)

**Maintainability**:
- Name actions descriptively ("Create Support Ticket" not "Create item")
- Add comments explaining complex logic
- Use consistent naming conventions
- Document flow purpose and owners

### C. Testing Best Practices
**Before Publishing**:
1. Test happy path (everything works)
2. Test error paths (missing data, invalid inputs)
3. Test edge cases (very long descriptions, special characters)
4. Test with different user accounts (permissions)
5. Test end-to-end timing (ensure < 60 seconds)
6. Review flow run history for warnings

**After Publishing**:
1. Monitor analytics (success rate, completion time)
2. Review user feedback
3. Check flow run history weekly
4. Update based on real usage patterns

---

## XII. Common Pitfalls and How to Avoid Them

### Pitfall 1: "Over-Collecting Data"
**Problem**: Asking for 15 fields when only 5 are essential

**Impact**: User abandonment, frustration, poor adoption

**Solution**:
- Only collect truly required fields
- Make optional fields actually optional
- Consider collecting additional data later (follow-up)
- Review every question: "Is this essential?"

### Pitfall 2: "Ignoring Error Scenarios"
**Problem**: Flow fails, user sees generic error

**Impact**: Loss of trust, user goes back to email/manual process

**Solution**:
- Wrap critical actions in try-catch
- Provide specific error messages ("SharePoint is unavailable, please try again")
- Always confirm to user (success or failure)
- Log errors for investigation

### Pitfall 3: "Not Testing with Real Users"
**Problem**: Works perfectly for you, fails for everyone else

**Impact**: Emergency fixes after launch, poor user experience

**Solution**:
- Beta test with 5-10 real users
- Different roles (different permissions)
- Different scenarios (different issue types)
- Collect feedback before launch

### Pitfall 4: "Forgetting Mobile Users"
**Problem**: Agent works on desktop, terrible on mobile

**Impact**: 40% of users can't use the agent

**Solution**:
- Test on mobile devices (Teams mobile app)
- Keep messages short and scannable
- Use buttons instead of typing when possible
- Test file uploads on mobile

### Pitfall 5: "No Measurement or Monitoring"
**Problem**: Agent deployed, no idea if it's working or valuable

**Impact**: Can't justify investment, can't improve

**Solution**:
- Track success metrics (tickets created, time saved)
- Monitor flow run history weekly
- Collect user satisfaction scores
- Review analytics monthly

---

## XIII. Resources and Next Steps

### A. Downloadable Resources
**Included with This Blog**:
1. **SharePoint List Template**: Pre-configured IT Support Tickets list
2. **Flow Template**: Complete "Create IT Support Ticket" flow (export)
3. **Agent Template**: Conversation topic export
4. **Testing Checklist**: Excel file with all test scenarios
5. **ROI Calculator**: Calculate time/cost savings for your organization

**Download Link**: [INSERT LINK]

### B. Official Microsoft Documentation
**Essential Reading**:
1. **Copilot Studio Flows**:
   https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-flow

2. **Power Automate Connectors**:
   https://learn.microsoft.com/en-us/connectors/

3. **SharePoint Connector Reference**:
   https://learn.microsoft.com/en-us/connectors/sharepointonline/

4. **Teams Connector Reference**:
   https://learn.microsoft.com/en-us/connectors/teams/

5. **Adaptive Cards for Teams**:
   https://adaptivecards.io/

### C. Video Walkthrough
**Companion Video** (18 minutes):
- Overview (2 min)
- SharePoint setup (3 min)
- Agent conversation design (4 min)
- Flow creation and configuration (6 min)
- Testing and troubleshooting (3 min)

**Watch Now**: [INSERT LINK]

### D. Community and Support
**Get Help**:
- **Microsoft Community**: https://powerusers.microsoft.com/
- **Stack Overflow**: Tag `microsoft-copilot-studio` or `power-automate`
- **Our Community**: [Teams Channel or Forum Link]

**Share Your Success**:
- Built an IT Support Agent? Share your results!
- Questions or improvements? Post in the community
- Want to showcase your agent? Contact us

### E. What's Next?
**Continue Your Learning Journey**:

**Blog 5: Integrating with Microsoft 365 Services** (Next)
- Connect to Outlook, Teams, SharePoint in one flow
- Build a Meeting Scheduler Agent
- Calendar integration and availability checking
- Multi-service orchestration patterns

**Blog 6: Working with External Systems and APIs** (Coming Soon)
- Connect to Salesforce, ServiceNow, SAP
- Custom connectors for proprietary systems
- Authentication and security best practices
- Build a Customer Lookup Agent

**Blog 7: Testing, Monitoring, and Quality Assurance**
- Comprehensive testing strategies
- Analytics and performance monitoring
- User feedback collection
- Continuous improvement

---

## XIV. Final Checklist

Before moving to the next blog, ensure you can:
- [ ] Explain what agent flows are and when to use them
- [ ] Create a SharePoint list with custom columns
- [ ] Design a conversational topic that collects structured data
- [ ] Create a Power Automate flow triggered by an agent
- [ ] Pass data from agent variables to flow inputs
- [ ] Use SharePoint connector to create list items
- [ ] Send formatted Teams notifications
- [ ] Return flow results back to agent
- [ ] Test end-to-end workflow
- [ ] Troubleshoot common flow errors
- [ ] Calculate ROI for your automation
- [ ] Publish agent to Teams for testing

**If you completed all checkboxes**: Congratulations! You're ready for Blog 5.

**If you're stuck**: Review troubleshooting section, watch video walkthrough, or ask in community.

---

## XV. Appendix: Quick Reference

### A. Key Terminology
| Term | Definition |
|------|------------|
| **Agent Flow** | Power Automate workflow triggered by agent conversation |
| **Connector** | Pre-built integration with external service |
| **Trigger** | What starts a flow (agent call, new email, schedule, etc.) |
| **Action** | What a flow does (create item, send message, etc.) |
| **Dynamic Content** | Variables passed between actions in a flow |
| **Adaptive Card** | Rich, formatted message in Teams |
| **Standard Connector** | Included with license (SharePoint, Teams, Outlook) |
| **Premium Connector** | Requires additional license (Salesforce, ServiceNow) |

### B. Common Flow Actions
| Action | Purpose | Connector |
|--------|---------|-----------|
| Create item | Add record to SharePoint list | SharePoint |
| Send an email | Email notification | Office 365 Outlook |
| Post message | Teams notification | Microsoft Teams |
| Create event | Calendar entry | Office 365 Outlook |
| Get items | Query SharePoint list | SharePoint |
| Start approval | Human approval workflow | Approvals |
| Compose | Format text/data | Data Operations |
| Condition | If-then logic | Control |

### C. Troubleshooting Quick Fixes
| Symptom | Quick Fix |
|---------|-----------|
| Flow not found in agent | Verify same environment |
| SharePoint access denied | Reconnect connector |
| Teams notification not sent | Re-select team/channel |
| Variables empty in flow | Check naming (case-sensitive) |
| Flow timeout | Optimize or use async pattern |
| Error messages unclear | Add try-catch scope |

---

**Estimated Total Content Length**: ~4,200 words
**Screenshot Requirements**: 49 high-quality annotated screenshots
**Diagram Requirements**: 8 conceptual/architectural diagrams
**Hands-On Project Completion Time**: 75 minutes for new users

---

**END OF BLOG 4 OUTLINE**
