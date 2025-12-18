# Blog 6: Working with External Systems and APIs - Content Outline

**Subtitle**: "Connect Your Agent to Any Business System"

**Target Audience**: Business users (non-technical, low-code/no-code)
**Estimated Reading Time**: 24 minutes
**Hands-On Time**: 90 minutes
**Difficulty**: Advanced
**Prerequisites**: Completed Blogs 1-5; Microsoft 365 + Power Automate license; Access to external system (Salesforce trial or similar)

---

## I. Hero Section

### A. Opening Hook (Breaking Out of the Microsoft Ecosystem)
**Scenario**: Meet Maria, a customer success manager at RetailCorp. She uses Microsoft Teams for communication, but all customer data lives in Salesforce CRM. Her daily workflow:

1. Customer messages her in Teams: "What's my order status?"
2. Maria switches to Salesforce
3. Searches for customer by name or email
4. Finds customer record
5. Checks order history, support tickets, account details
6. Switches back to Teams
7. Manually types response

**Time: 5-8 minutes per inquiry × 40 inquiries/day = 3-5 hours/day context-switching**

**The Problem**:
- Data lives in external systems (Salesforce, ServiceNow, SAP)
- Microsoft 365 agents can't access it natively
- Manual lookups are slow and error-prone
- Context switching kills productivity
- Customer waits for simple answers

**The Solution**: A Customer Lookup Agent that:
- Connects Teams to Salesforce CRM
- Searches customers by name, email, or ID
- Displays full customer profile in Teams
- Shows order history, support tickets, account status
- Updates customer records when needed
- **All without leaving Teams**

**ROI Preview**: Maria saves 4 hours/day × $35/hour × 250 work days = **$35,000/year**. Plus improved customer response time from 6 minutes to 30 seconds.

### B. Learning Objectives Checklist
By the end of this blog, you will:
- [ ] Understand premium connectors vs standard connectors
- [ ] Know when to use custom connectors
- [ ] Create a custom connector for any REST API
- [ ] Implement OAuth 2.0 authentication for external systems
- [ ] Use API keys and service principal authentication
- [ ] Map external system data to agent conversations
- [ ] Handle API rate limits and quotas
- [ ] Implement error handling for external API failures
- [ ] Secure sensitive data in external integrations
- [ ] Build a production-ready Customer Lookup Agent

### C. What You'll Build
**Customer Lookup Agent** integrating Salesforce CRM:

**Capabilities**:
1. **Search customers**: By name, email, phone, or account ID
2. **Display customer profile**: Company, contact info, account status
3. **Show order history**: Recent purchases, order values, dates
4. **View support tickets**: Open cases, recent issues, resolutions
5. **Update customer records**: Change contact info, add notes
6. **Create new leads**: Capture new customer information

**Architecture**:
- **Agent**: Conversational interface in Teams
- **Custom Connector**: Bridge to Salesforce API
- **Salesforce CRM**: External data source
- **OAuth**: Secure authentication

**Success Criteria**:
- Successfully authenticate to Salesforce
- Search and retrieve customer data
- Display formatted results in conversation
- Update records without errors
- Handle API errors gracefully (rate limits, network failures)
- Entire lookup < 5 seconds

---

## II. Key Concepts Explained (Business-Friendly)

### A. Standard vs Premium vs Custom Connectors
**The Connector Hierarchy**:

**1. Standard Connectors** (Included with M365):
- Pre-built by Microsoft
- No extra cost
- Microsoft services: SharePoint, Teams, Outlook
- Basic third-party: Twitter, YouTube, RSS
- **Limitation**: Can't connect to most business systems

**2. Premium Connectors** (Require Power Automate License):
- Pre-built by Microsoft or partners
- Additional license required (~$15/user/month)
- Popular business systems: Salesforce, ServiceNow, Dynamics 365, SAP, DocuSign
- Enterprise apps: Jira, Zendesk, HubSpot, Marketo
- **Advantage**: Professionally maintained, frequent updates
- **Limitation**: Only for systems Microsoft has built connectors for

**3. Custom Connectors** (Require Power Automate License):
- **You build it** (or IT builds it)
- Connect to ANY system with a REST API
- Internal systems (proprietary CRM, ERP, databases)
- Niche third-party tools
- **Advantage**: Unlimited flexibility
- **Limitation**: You maintain it

**Visual Diagram Required**:
```
[Diagram 01: Connector Hierarchy]
- Pyramid with 3 layers:
  - Bottom (Standard): Wide base, many connectors, free
  - Middle (Premium): Common business apps, paid license
  - Top (Custom): Any API, build yourself, paid license
- Annotate costs and flexibility at each level
```

**When to Use Each**:
| Scenario | Connector Type | Why |
|----------|----------------|-----|
| Connect to SharePoint | Standard | Included, no extra cost |
| Connect to Salesforce | Premium | Pre-built, maintained by Microsoft |
| Connect to proprietary internal CRM | Custom | No pre-built option exists |
| Connect to niche industry tool | Custom | Not popular enough for premium connector |

### B. What Is a REST API?
**Non-Technical Explanation**:
An API (Application Programming Interface) is like a menu at a restaurant. The menu tells you what dishes (data) you can order and how to order them. The kitchen (external system) prepares your order and serves it back to you.

**REST API** is the most common type - it uses simple web requests (like your browser) to:
- **GET** data (read): "Show me customer #12345"
- **POST** data (create): "Add new customer"
- **PUT/PATCH** data (update): "Change email address to..."
- **DELETE** data (remove): "Delete this record"

**Example: Salesforce API**:
- **GET** /services/data/v58.0/query?q=SELECT+Name+FROM+Account
  - Means: "Give me a list of all account names"
- **POST** /services/data/v58.0/sobjects/Contact
  - Means: "Create a new contact with this data"

**Visual Diagram Required**:
```
[Diagram 02: REST API Request/Response]
- Left: Your flow sends request (HTTP verb + URL + data)
- Middle: API processes (external system)
- Right: API sends response (data in JSON format)
- Show example: GET customer → JSON customer data
```

**Why This Matters**:
Custom connectors translate these technical API calls into simple actions you can use in flows, like "Get Salesforce Account" or "Create ServiceNow Ticket".

### C. Authentication: How Systems Trust Each Other
**The Problem**:
External systems need to know:
1. **Who** is making the request? (authentication)
2. **Are they allowed** to access this data? (authorization)

**Common Authentication Methods**:

**1. API Key** (Simplest):
- Like a password you include with every request
- Example: `X-API-Key: abc123xyz789`
- **Pros**: Simple to implement
- **Cons**: If key leaks, anyone can access your data
- **Use case**: Internal systems, dev/test environments

**2. OAuth 2.0** (Most Secure):
- Industry standard for secure access
- User logs in directly to external system (Salesforce, Google)
- System gives temporary token (expires after time)
- Agent uses token to access data
- **Pros**: Very secure, user controls access
- **Cons**: More complex setup
- **Use case**: Production systems with user data

**3. Service Principal / Client Credentials**:
- System-to-system authentication (no user login)
- Application has its own identity
- **Pros**: No user interaction needed
- **Cons**: Requires admin setup
- **Use case**: Background automation, scheduled jobs

**Visual Diagram Required**:
```
[Diagram 03: OAuth 2.0 Flow]
- Step 1: User clicks "Connect to Salesforce"
- Step 2: Redirected to Salesforce login page
- Step 3: User logs in with Salesforce credentials
- Step 4: Salesforce asks: "Allow this app to access your data?"
- Step 5: User approves
- Step 6: Salesforce gives token to app
- Step 7: App uses token for all future requests
- Annotate: User never gives password to app
```

**For This Blog**: We'll implement **OAuth 2.0** with Salesforce (enterprise best practice).

### D. Understanding JSON: The Language of APIs
**What Is JSON?**
JSON (JavaScript Object Notation) is how APIs send data back and forth. Think of it as a structured way to organize information, like filling out a form.

**Example - Customer Data in JSON**:
```json
{
  "Id": "0012345678",
  "Name": "Acme Corporation",
  "Email": "contact@acme.com",
  "Phone": "(555) 123-4567",
  "AccountStatus": "Active",
  "AnnualRevenue": 5000000,
  "Industry": "Technology"
}
```

**How to Read JSON**:
- **{ }** = An object (like a customer record)
- **"Name"** = Field name (like a column in a spreadsheet)
- **"Acme Corporation"** = Field value (the actual data)
- **[ ]** = A list of objects (like multiple customer records)

**Why This Matters**:
When you create a custom connector, you'll see API responses in JSON. Understanding the structure helps you extract the right data for your agent.

**Visual Diagram Required**:
```
[Diagram 04: JSON Structure]
- Show JSON object mapped to visual representation
- Left: JSON code
- Right: Visual form/table with same data
- Annotate field names and values
```

### E. Rate Limits and Quotas
**What Are Rate Limits?**
External APIs limit how many requests you can make to prevent overload:
- **Salesforce**: 15,000 API calls/day (typical license)
- **ServiceNow**: 5,000 calls/hour
- **Google APIs**: 10,000 calls/day

**What Happens When You Hit Limit?**
- API returns error: "429 Too Many Requests"
- Flow fails
- User sees error message

**How to Avoid Rate Limit Issues**:
1. **Cache data**: Store frequently accessed data temporarily (don't fetch every time)
2. **Batch operations**: Update multiple records in one call
3. **Use webhooks**: Let external system notify you of changes (instead of polling)
4. **Monitor usage**: Track API calls, set alerts
5. **Implement retry logic**: Wait and retry if rate limit hit

**Visual Diagram Required**:
```
[Diagram 05: Rate Limit Handling]
- Show flow attempting API call
- Show rate limit error
- Show retry logic (wait, then retry)
- Show success on retry
- Annotate exponential backoff strategy
```

---

## III. Prerequisites and Setup

### A. Required Licenses and Access
**Checklist**:
- [ ] Microsoft 365 Business Standard or Premium
- [ ] **Power Automate Premium license** (required for custom connectors)
  - ~$15/user/month
  - Or Power Apps per-user license
- [ ] Copilot Studio access
- [ ] **Salesforce account** (we'll use Salesforce for this tutorial)
  - Option 1: Your company's Salesforce instance (need admin help)
  - Option 2: Salesforce Developer Edition (free trial)

**Power Automate Premium - How to Get**:
1. Go to https://make.powerautomate.com
2. Click "Start free trial" (Power Automate Premium)
3. 90-day free trial (no credit card required)

**Screenshot Required**:
```
[Screenshot 01: Power Automate Premium trial]
- Show trial signup page
- Annotate "Start free trial" button
- Show trial duration
```

### B. Salesforce Developer Account Setup (Free)
If you don't have corporate Salesforce access, create free developer account:

**Step 1: Sign Up for Salesforce Developer Edition**
1. Go to https://developer.salesforce.com/signup
2. Fill in form:
   - First/Last Name
   - Email (use work email)
   - Username (must be unique, like email format)
   - Role: Developer
   - Company: Your company name
3. Check spam folder for confirmation email
4. Set password when prompted
5. Log in to Salesforce

**Screenshot Required**:
```
[Screenshot 02: Salesforce Developer Edition signup]
- Show signup form
- Annotate free tier
- Show confirmation email
```

**Step 2: Get Salesforce API Credentials**
1. Log in to Salesforce
2. Click gear icon (top-right) → Setup
3. In Quick Find box, type "App Manager"
4. Click "New Connected App"
5. Fill in:
   - Connected App Name: "Power Automate Integration"
   - API Name: PowerAutomateIntegration
   - Contact Email: Your email
6. Enable OAuth Settings: ✅ Check box
7. Callback URL: `https://global.consent.azure-apim.net/redirect`
8. Selected OAuth Scopes:
   - Full access (full)
   - Perform requests at any time (refresh_token, offline_access)
9. Click "Save"
10. Click "Continue"
11. Copy **Consumer Key** (Client ID)
12. Click "Click to reveal" → Copy **Consumer Secret**
13. **Save these somewhere safe** (you'll need them shortly)

**Screenshot Required**:
```
[Screenshot 03: Creating Salesforce Connected App]
- Show Connected App creation form
- Annotate OAuth settings
- Highlight callback URL
```

**Screenshot Required**:
```
[Screenshot 04: Salesforce Consumer Key and Secret]
- Show Consumer Key (redacted)
- Show "Click to reveal" for secret
- Annotate: "Save these securely"
```

**Step 3: Create Sample Data in Salesforce**
We need some customer data to test with:

1. In Salesforce, click "Accounts" tab
2. Click "New" button
3. Create 3 sample accounts:
   - **Account 1**: Acme Corporation, acme@example.com, (555) 111-2222
   - **Account 2**: GlobalTech Industries, info@globaltech.com, (555) 333-4444
   - **Account 3**: Contoso Ltd, contact@contoso.com, (555) 555-6666
4. Click "Contacts" tab
5. Create contacts for each account (at least 1 per account)

**Screenshot Required**:
```
[Screenshot 05: Sample Salesforce accounts]
- Show Account list view
- Show 3 sample accounts
- Annotate data fields
```

---

## IV. Building the Custom Connector

### A. Create Custom Connector in Power Automate
**Step 1: Start Custom Connector Creation**
1. Go to https://make.powerautomate.com
2. Click "Data" (left nav) → "Custom Connectors"
3. Click "New custom connector" → "Create from blank"
4. Connector name: "Salesforce Customer Lookup"
5. Click "Continue"

**Screenshot Required**:
```
[Screenshot 06: Creating custom connector]
- Show "Custom Connectors" page
- Show "Create from blank" option
- Annotate connector name field
```

### B. Configure General Settings
**Step 2: General Tab**
1. **Host**: `yourdomain.my.salesforce.com`
   - Replace `yourdomain` with your Salesforce domain
   - Find your domain: Look at Salesforce URL when logged in
   - Example: If URL is `https://resilient-wolf-abc123.lightning.force.com`, domain is `resilient-wolf-abc123.my.salesforce.com`
2. **Base URL**: `/services/data/v58.0`
   - This is the Salesforce REST API version
3. **Description**: "Search and retrieve customer data from Salesforce CRM"
4. **Scheme**: HTTPS (secure)
5. Upload icon (optional): Salesforce logo

**Screenshot Required**:
```
[Screenshot 07: Custom connector general settings]
- Show Host field with Salesforce domain
- Show Base URL
- Annotate HTTPS scheme
```

**How to Find Your Salesforce Domain**:
1. Log in to Salesforce
2. Look at browser URL bar
3. Extract domain from URL
4. Convert to API format:
   - Lightning URL: `https://resilient-wolf-abc123.lightning.force.com`
   - API Host: `resilient-wolf-abc123.my.salesforce.com`

**Screenshot Required**:
```
[Screenshot 08: Finding Salesforce domain]
- Show Salesforce URL in browser
- Annotate domain extraction
- Show conversion to API format
```

### C. Configure OAuth 2.0 Authentication
**Step 3: Security Tab**
1. Click "Security" tab
2. Authentication type: **OAuth 2.0**
3. Identity Provider: **Generic OAuth 2**
4. OAuth flow: **Authorization Code**
5. **Authorization URL**:
   ```
   https://yourdomain.my.salesforce.com/services/oauth2/authorize
   ```
   (Replace `yourdomain` with your Salesforce domain)
6. **Token URL**:
   ```
   https://yourdomain.my.salesforce.com/services/oauth2/token
   ```
7. **Client ID**: Paste Consumer Key from Salesforce Connected App
8. **Client Secret**: Paste Consumer Secret from Salesforce
9. **Scope**: `full refresh_token offline_access`
10. **Refresh URL**: Same as Token URL
11. Click "Create connector" (top-right)

**Screenshot Required**:
```
[Screenshot 09: OAuth 2.0 configuration]
- Show all OAuth fields populated
- Annotate Client ID/Secret (redacted)
- Show scope configuration
```

**Understanding OAuth Scope**:
- `full`: Access all data user can access
- `refresh_token`: Get new tokens automatically
- `offline_access`: Work even when user offline

**Important Security Note**: Client Secret should never be shared publicly or committed to source control. It's like a master password.

### D. Define API Actions (Operations)
**Step 4: Definition Tab - Create "Search Accounts" Action**
1. Click "Definition" tab
2. Click "New action"
3. **Summary**: Search Salesforce Accounts
4. **Description**: Search for customer accounts by name, email, or ID
5. **Operation ID**: SearchAccounts (no spaces, camelCase)
6. **Visibility**: important (shows in flow action picker)

**Screenshot Required**:
```
[Screenshot 10: Creating Search Accounts action]
- Show action configuration form
- Annotate Summary, Description, Operation ID
- Show Visibility dropdown
```

**Step 5: Define Request (What We Send to API)**
1. Under "Request", click "Import from sample"
2. **Verb**: GET
3. **URL**:
   ```
   https://yourdomain.my.salesforce.com/services/data/v58.0/query?q=SELECT Id, Name, Phone, BillingCity, Industry FROM Account WHERE Name LIKE '%{searchTerm}%' LIMIT 10
   ```
4. Click "Import"
5. This creates a parameter: `searchTerm`
6. Edit `searchTerm` parameter:
   - Summary: "Search term"
   - Description: "Customer name or keyword to search"
   - Required: Yes
   - Visibility: important

**Screenshot Required**:
```
[Screenshot 11: Importing request from sample]
- Show import dialog
- Show URL with SOQL query
- Annotate {searchTerm} parameter
```

**Understanding SOQL** (Salesforce Object Query Language):
- `SELECT Id, Name, Phone...`: Which fields to return
- `FROM Account`: Which object (table) to query
- `WHERE Name LIKE '%term%'`: Filter condition
- `LIMIT 10`: Max results

**Step 6: Define Response (What We Get Back from API)**
1. Under "Response", click "Add default response"
2. Paste sample JSON response:
   ```json
   {
     "totalSize": 2,
     "done": true,
     "records": [
       {
         "attributes": {
           "type": "Account",
           "url": "/services/data/v58.0/sobjects/Account/0012345678"
         },
         "Id": "0012345678",
         "Name": "Acme Corporation",
         "Phone": "(555) 111-2222",
         "BillingCity": "San Francisco",
         "Industry": "Technology"
       }
     ]
   }
   ```
3. Click "Import"
4. This tells Power Automate what data structure to expect

**Screenshot Required**:
```
[Screenshot 12: Defining response schema]
- Show response import dialog
- Show sample JSON
- Annotate schema generation
```

**Step 7: Create "Get Account Details" Action**
Repeat steps 4-6 for a second action:
1. Click "New action"
2. **Summary**: Get Salesforce Account Details
3. **Operation ID**: GetAccountDetails
4. **Request**:
   - Verb: GET
   - URL: `https://yourdomain.my.salesforce.com/services/data/v58.0/sobjects/Account/{accountId}`
   - Parameter: `accountId` (required)
5. **Response**: Sample JSON with full account details

**Screenshot Required**:
```
[Screenshot 13: Get Account Details action]
- Show second action configuration
- Show accountId parameter
- Annotate different endpoint
```

**Step 8: Create "Update Account" Action**
For updating customer records:
1. Click "New action"
2. **Summary**: Update Salesforce Account
3. **Operation ID**: UpdateAccount
4. **Request**:
   - Verb: PATCH
   - URL: `https://yourdomain.my.salesforce.com/services/data/v58.0/sobjects/Account/{accountId}`
   - Body:
     ```json
     {
       "Phone": "{phone}",
       "BillingCity": "{city}",
       "Description": "{notes}"
     }
     ```
   - This creates parameters: accountId, phone, city, notes
5. **Response**: 204 No Content (successful update returns empty)

**Screenshot Required**:
```
[Screenshot 14: Update Account action]
- Show PATCH verb
- Show request body with parameters
- Annotate update vs read operations
```

**Visual Diagram Required**:
```
[Diagram 06: Custom Connector Actions]
- Show 3 actions defined:
  1. SearchAccounts (GET with query)
  2. GetAccountDetails (GET by ID)
  3. UpdateAccount (PATCH with body)
- Annotate HTTP verbs and parameters
- Show request/response for each
```

### E. Test the Connector
**Step 9: Test Tab - Create Connection**
1. Click "Test" tab
2. Click "New connection"
3. Browser opens to Salesforce login
4. Log in with your Salesforce credentials
5. Click "Allow" to authorize access
6. Returns to Power Automate
7. Connection created successfully

**Screenshot Required**:
```
[Screenshot 15: Testing custom connector]
- Show Test tab
- Show "New connection" button
- Show connection success
```

**Step 10: Test "Search Accounts" Action**
1. Select connection from dropdown
2. Operation: "Search Salesforce Accounts"
3. searchTerm: "Acme"
4. Click "Test operation"
5. Should return JSON with Acme Corporation account
6. Verify data looks correct

**Screenshot Required**:
```
[Screenshot 16: Testing Search Accounts]
- Show test parameters
- Show successful response
- Annotate JSON data returned
```

**Step 11: Save and Close Connector**
1. Click "Update connector" (top-right)
2. Wait for save confirmation
3. Close custom connector editor
4. Connector now available in flows!

**Screenshot Required**:
```
[Screenshot 17: Connector saved successfully]
- Show save confirmation
- Show connector in Custom Connectors list
```

---

## V. Building the Customer Lookup Agent

### A. Create the Agent
**Step 1: New Agent in Copilot Studio**
1. Go to Copilot Studio
2. Click "Create" → "New agent"
3. Name: "Customer Lookup Agent"
4. Description: "Search and retrieve customer information from Salesforce CRM"
5. Instructions: "Help users find customer accounts, view details, and update records using conversational interface"
6. Click "Create"

**Screenshot Required**:
```
[Screenshot 18: Creating Customer Lookup Agent]
- Show agent creation
- Annotate name and description
```

### B. Design Conversation Flow
**Step 2: Create "Search Customer" Topic**
1. Go to "Topics" tab
2. Click "Add a topic" → "From blank"
3. Name: "Search Customer"
4. Trigger phrases:
   - "Find a customer"
   - "Look up account"
   - "Search for customer"
   - "Who is the customer"
   - "Get customer information"
5. Click "Save"

**Screenshot Required**:
```
[Screenshot 19: Creating Search Customer topic]
- Show topic creation
- Show all trigger phrases
```

**Step 3: Build Conversation Nodes**

**Node 1: Greeting**
1. Click "+" → "Send a message"
2. Message:
   ```
   I'll help you find customer information from Salesforce!

   How would you like to search?
   - Customer name
   - Email address
   - Account ID
   ```

**Node 2: Collect Search Term**
1. Click "+" → "Ask a question"
2. Question: "What's the customer name, email, or account ID you're looking for?"
3. Identify: "User's entire response"
4. Save to variable: `SearchTerm`

**Screenshot Required**:
```
[Screenshot 20: Search term question]
- Show question configuration
- Show variable creation
```

**Node 3: Searching Message**
1. Click "+" → "Send a message"
2. Message: "🔍 Searching Salesforce for '{x:SearchTerm}'... One moment."

**Screenshot Required**:
```
[Screenshot 21: Loading message]
- Show message with variable
- Annotate user experience improvement
```

### C. Add Custom Connector to Flow
**Step 4: Create Flow with Custom Connector**
1. After searching message, click "+"
2. Select "Call an action" → "Create a flow"
3. Flow name: "Search Salesforce Customer"
4. Trigger: "When Copilot Studio calls a flow"
5. Click "Create"

**Step 5: Add Flow Input**
1. In trigger, add input:
   - Type: Text
   - Name: `SearchTerm`

**Screenshot Required**:
```
[Screenshot 22: Flow input for search term]
- Show trigger with input
- Annotate parameter name
```

**Step 6: Add Custom Connector Action**
1. Click "+" → "Add an action"
2. Search for: "Salesforce Customer Lookup" (your custom connector)
3. Select: "Search Salesforce Accounts"
4. **searchTerm**: `@{triggerBody()?['SearchTerm']}`
5. This calls your custom connector with the search term!

**Screenshot Required**:
```
[Screenshot 23: Using custom connector in flow]
- Show custom connector action
- Show searchTerm parameter mapped
- Annotate custom connector appears in action picker
```

**Step 7: Parse Search Results**
Salesforce returns array of accounts. Extract useful info:

1. Add action: "Compose"
2. Rename: "Parse Account Results"
3. Inputs (Expression):
   ```
   @{if(equals(body('Search_Salesforce_Accounts')?['totalSize'], 0),
       'No customers found',
       concat(
         'Found ', body('Search_Salesforce_Accounts')?['totalSize'], ' customer(s):\n\n',
         join(
           body('Search_Salesforce_Accounts')?['records'],
           '\n\n'
         )
       )
   )}
   ```

**Simpler Alternative** (Recommended for beginners):
Use "Select" action to format results:
1. Add action: "Select" (Data Operations)
2. From: `@{body('Search_Salesforce_Accounts')?['records']}`
3. Map:
   - Output: Name → `@{item()?['Name']}`
   - Output: Phone → `@{item()?['Phone']}`
   - Output: City → `@{item()?['BillingCity']}`
   - Output: ID → `@{item()?['Id']}`

**Screenshot Required**:
```
[Screenshot 24: Parsing Salesforce results]
- Show Select action
- Show field mapping
- Annotate array transformation
```

**Step 8: Return Results to Agent**
1. Add action: "Respond to Copilot Studio"
2. Add output:
   - Type: Text
   - Name: `CustomerResults`
   - Value: `@{outputs('Parse_Account_Results')}`
3. Save flow

**Screenshot Required**:
```
[Screenshot 25: Returning results to agent]
- Show response configuration
- Show output mapping
```

**Step 9: Test Flow Manually**
1. Click "Test" → "Manually"
2. SearchTerm: "Acme"
3. Click "Run flow"
4. Verify returns customer data
5. Check JSON structure

**Screenshot Required**:
```
[Screenshot 26: Testing Salesforce flow]
- Show test inputs
- Show successful response with customer data
- Annotate JSON structure
```

### D. Connect Flow to Agent
**Step 10: Add Flow to Topic**
1. Return to Copilot Studio
2. After searching message, click "+"
3. "Call an action" → Select "Search Salesforce Customer" flow
4. Map: `Topic.SearchTerm` → `SearchTerm` input
5. Save output to variable: `FlowCustomerResults`

**Screenshot Required**:
```
[Screenshot 27: Adding Salesforce flow to topic]
- Show flow action in topic
- Show variable mapping
```

**Step 11: Display Results to User**
1. Click "+" → "Send a message"
2. Message:
   ```
   Here's what I found:

   {x:FlowCustomerResults}

   Would you like to:
   - View detailed information for a customer
   - Update a customer record
   - Search again
   ```

**Screenshot Required**:
```
[Screenshot 28: Displaying results to user]
- Show message with variable
- Show next action options
```

**Visual Diagram Required**:
```
[Diagram 07: Complete Agent + Custom Connector Flow]
- User asks question → Agent collects search term
- Agent calls flow → Flow calls custom connector
- Custom connector calls Salesforce API
- Salesforce returns data → Connector parses
- Flow returns to agent → Agent displays to user
- Annotate authentication flow (OAuth token)
```

---

## VI. Advanced: View Details and Update Records

### A. Add "View Details" Functionality
**Step 1: Create "View Customer Details" Topic**
1. New topic: "View Customer Details"
2. Trigger phrases:
   - "Show me details for account [ID]"
   - "View customer [ID]"
   - "Get full information"
3. Ask for Account ID if not provided
4. Create flow using "Get Account Details" custom connector action
5. Display full customer profile

**Step 2: Format Customer Details Nicely**
Instead of raw JSON, format for readability:
```
📋 Customer Profile

Company: {Name}
Industry: {Industry}
Phone: {Phone}
Email: {Email}
Address: {BillingStreet}, {BillingCity}, {BillingState}
Annual Revenue: ${AnnualRevenue}
Status: {AccountStatus}
Account Owner: {Owner.Name}

📊 Quick Stats:
- Total Opportunities: {TotalOpportunities}
- Open Cases: {OpenCases}
- Last Activity: {LastActivityDate}
```

**Screenshot Required**:
```
[Screenshot 29: Formatted customer details]
- Show nicely formatted output
- Annotate field mappings
- Show readability improvement
```

### B. Add "Update Customer" Functionality
**Step 1: Create "Update Customer" Topic**
1. New topic: "Update Customer Record"
2. Collect Account ID
3. Ask what to update (Phone, City, Notes)
4. Collect new value
5. Create flow using "Update Account" custom connector action
6. Confirm update successful

**Step 2: Implement Update Flow**
1. Flow inputs: AccountId, Phone, City, Notes
2. Use "Update Salesforce Account" connector action
3. Handle success/failure
4. Return confirmation message

**Screenshot Required**:
```
[Screenshot 30: Update customer flow]
- Show update action with parameters
- Show success/failure handling
```

**Step 3: Confirmation Message**
```
✅ Customer record updated successfully!

Account: {AccountName}
Updated fields:
- Phone: {NewPhone}
- City: {NewCity}
- Notes: {NewNotes}

The changes are now saved in Salesforce.
```

**Screenshot Required**:
```
[Screenshot 31: Update confirmation]
- Show confirmation message
- Show updated fields highlighted
```

---

## VII. Error Handling and Security

### A. Handle API Errors Gracefully
**Common Errors and Solutions**:

**Error 1: "401 Unauthorized"**
**Cause**: OAuth token expired or invalid

**Solution in Flow**:
1. Add "Scope" → "Try"
2. Place connector action inside Try
3. Add "Scope" → "Catch"
4. In Catch, add response: "I'm having trouble connecting to Salesforce. Please refresh your connection."

**Screenshot Required**:
```
[Screenshot 32: Try-Catch error handling]
- Show Try scope with connector action
- Show Catch scope with error message
- Annotate error flow path
```

**Error 2: "429 Too Many Requests" (Rate Limit)**
**Cause**: Too many API calls in short time

**Solution**:
1. Add condition: Check if error code = 429
2. If yes, add "Delay" action (wait 60 seconds)
3. Retry request
4. If still fails, tell user: "Salesforce is busy, please try again in a minute"

**Screenshot Required**:
```
[Screenshot 33: Rate limit handling]
- Show condition checking error code
- Show delay action
- Show retry logic
```

**Error 3: "No Results Found"**
**Cause**: Search term doesn't match any customers

**Solution**:
1. Check if `totalSize` = 0
2. Friendly message: "I couldn't find any customers matching '{SearchTerm}'. Try different search terms or check spelling."

### B. Security Best Practices
**1. Never Log Sensitive Data**
- Don't log API keys, tokens, or passwords in flow history
- Don't display full customer SSN, credit cards
- Redact sensitive fields in agent responses

**2. Use Environment Variables for Secrets**
- Store Client ID/Secret in environment variables
- Reference variables in connector config
- Don't hardcode credentials

**3. Implement Role-Based Access**
- Not all users should see all customer data
- Use Salesforce profile permissions
- OAuth respects user's Salesforce access level

**4. Audit and Monitor**
- Log all customer record access
- Track who searched what
- Alert on suspicious activity (100 searches in 1 minute)

**Visual Diagram Required**:
```
[Diagram 08: Security Layers]
- Layer 1: OAuth authentication (user identity)
- Layer 2: Salesforce permissions (data access)
- Layer 3: Agent authorization (who can use agent)
- Layer 4: Audit logging (who accessed what)
- Annotate defense in depth strategy
```

### C. Rate Limit Management
**Monitoring API Usage**:
1. Salesforce provides API usage reports
2. Check: Setup → System Overview → API Usage
3. Set alerts when usage > 80% of limit

**Optimization Strategies**:
1. **Cache frequent queries**: Store top 100 customers in Dataverse, refresh hourly
2. **Batch updates**: Update 10 records in one call instead of 10 separate calls
3. **Use webhooks**: Let Salesforce notify you of changes (instead of polling)
4. **Optimize queries**: Only SELECT fields you need (not SELECT *)

**Screenshot Required**:
```
[Screenshot 34: Salesforce API usage dashboard]
- Show API usage metrics
- Annotate remaining calls
- Show usage trends
```

---

## VIII. Testing and Validation

### A. Test Scenarios
**Comprehensive Test Plan**:

**Scenario 1: Successful Search**
- Input: "Acme"
- Expected: Returns Acme Corporation with details
- Verify: All fields populated correctly

**Scenario 2: No Results**
- Input: "NonexistentCompany12345"
- Expected: "No customers found" message
- Verify: No error, graceful handling

**Scenario 3: Multiple Results**
- Input: "Tech" (matches multiple companies)
- Expected: List of all matching companies
- Verify: Results formatted clearly

**Scenario 4: Authentication Failure**
- Simulate: Revoke OAuth token
- Expected: Error message + prompt to reconnect
- Verify: User can reconnect without IT help

**Scenario 5: API Rate Limit**
- Simulate: Make 100 requests rapidly
- Expected: Delay and retry message
- Verify: Eventually succeeds or clear error

**Screenshot Required**:
```
[Screenshot 35: Test results summary]
- Show all 5 scenarios
- Show pass/fail status
- Annotate edge cases covered
```

### B. User Acceptance Testing
**UAT with Real Users**:
1. Recruit 5 users who regularly search customers
2. Give them access to agent in Teams
3. Tasks:
   - Find a customer by name
   - View customer details
   - Update a phone number
   - Search for non-existent customer
4. Collect feedback:
   - Was it faster than manual process?
   - Was data accurate?
   - Were error messages clear?
   - Would you use this daily?

**Screenshot Required**:
```
[Screenshot 36: UAT feedback survey]
- Show survey questions
- Show results summary
- Annotate improvement areas
```

---

## IX. Business Impact and ROI

### A. Time Savings Calculation
**Before Automation**:
- Switch to Salesforce: 10 sec
- Search customer: 15 sec
- Find record: 10 sec
- Copy data: 10 sec
- Switch back to Teams: 10 sec
- Type response: 15 sec
**Total: 70 seconds per lookup**

**After Automation**:
- Ask agent: 5 sec
- Agent returns data: 3 sec
- Copy to response: 5 sec
**Total: 13 seconds per lookup**

**Time Saved: 57 seconds per lookup**

### B. ROI Example: RetailCorp (Maria, Customer Success)
**Assumptions**:
- 40 customer lookups per day
- 250 work days per year
- Hourly rate: $35/hour

**Annual Calculations**:
- **Lookups per year**: 40 × 250 = 10,000 lookups
- **Time saved per lookup**: 57 seconds
- **Total time saved**: 10,000 × 57 sec = 570,000 sec = 158 hours
- **Dollar value**: 158 hours × $35 = **$5,530/year per user**

**If 20 customer success reps use agent**: $5,530 × 20 = **$110,600/year**

**Additional Benefits**:
- Faster customer response (13 sec vs 70 sec = 81% faster)
- Zero context switching (stay in Teams)
- Fewer errors (no manual copy-paste)
- Consistent data format
- After-hours access (agent works 24/7)
- Reduced Salesforce licenses needed (some users only need read access via agent)

**Visual Diagram Required**:
```
[Diagram 09: ROI breakdown for Customer Lookup]
- Before/after comparison
- Per-lookup time savings
- Annual impact per user
- Team-wide impact
- Additional benefits
```

### C. Real-World Success Story
**Case Study: FinanceCorp (Customer Support Team)**
- **Team Size**: 35 support agents
- **Challenge**: Agents spending 30% of time looking up customer data across Salesforce, ServiceNow, internal CRM
- **Solution**: Multi-system lookup agent with 3 custom connectors
- **Results** (6 months):
  - **87,500 lookups** via agent
  - **Average lookup time**: 8 seconds (vs. 90 seconds before)
  - **Time saved**: 82 sec × 87,500 = 2,003 hours
  - **Value**: 2,003 hours × $32 = **$64,096**
  - **Customer wait time**: Reduced 73% (6 min → 1.5 min average)
  - **CSAT score**: Improved from 78% to 93%
  - **Agent satisfaction**: 96% daily active usage

**Quote**: "The agent has transformed how we support customers. Information that used to take multiple system searches now appears instantly in Teams. Our agents can focus on solving problems instead of finding data." - Jennifer Lee, Director of Customer Support

---

## X. Advanced Topics

### A. Connecting to Other Systems
**ServiceNow Example**:
- Similar process to Salesforce
- Create custom connector with ServiceNow REST API
- OAuth 2.0 or Basic Auth
- Common actions: Get incident, Create ticket, Update status

**SAP Example**:
- More complex (SAP OData API)
- Requires SAP Gateway
- Premium connector available (SAP ERP connector)
- Consider using premium connector instead of custom

**Internal Database Example**:
- Requires API layer (can't connect directly to database)
- Options:
  1. Azure API Management + Azure SQL
  2. Custom ASP.NET API
  3. Azure Functions with HTTP trigger
- Then create custom connector to your API

**Visual Diagram Required**:
```
[Diagram 10: Multi-System Integration Architecture]
- Agent in center
- Connected to: Salesforce, ServiceNow, SAP, Internal DB
- Show custom connector for each
- Annotate different auth methods
```

### B. Webhook Integration
**What Are Webhooks?**
Push notifications from external system when data changes:
- Salesforce: Outbound message when account updated
- ServiceNow: Business rule triggers webhook
- Advantage: Real-time updates without polling

**How to Implement**:
1. Create Power Automate flow with "When HTTP request received" trigger
2. Copy webhook URL
3. Configure in external system (Salesforce outbound message)
4. Flow triggers when data changes
5. Update Dataverse cache or notify user

**Use Case**: Agent shows real-time customer data without delay

**Screenshot Required**:
```
[Screenshot 37: Webhook flow configuration]
- Show HTTP trigger
- Show webhook URL
- Show Salesforce outbound message config
```

### C. Caching Strategy
**Problem**: Every search hits Salesforce API (uses quota)

**Solution**: Cache frequently accessed data
1. **Dataverse table**: Store top 500 customers
2. **Refresh schedule**: Every 6 hours
3. **Flow logic**:
   - First, search Dataverse cache
   - If not found, search Salesforce API
   - Add to cache
4. **Result**: 70% of searches served from cache (no API call)

**Visual Diagram Required**:
```
[Diagram 11: Caching Architecture]
- Show search request
- Show cache check (Dataverse)
- Show cache hit vs cache miss paths
- Show cache refresh schedule
- Annotate API call savings
```

---

## XI. Common Pitfalls and How to Avoid Them

### Pitfall 1: "Hardcoding API Credentials"
**Problem**: Client ID/Secret in flow visible to everyone

**Impact**: Security breach, credentials exposed

**Solution**: Use environment variables or Azure Key Vault

### Pitfall 2: "Not Handling Token Expiration"
**Problem**: OAuth token expires, flow fails permanently

**Impact**: Agent stops working, requires manual reconnection

**Solution**: Implement refresh token logic, monitor connection health

### Pitfall 3: "Ignoring Rate Limits"
**Problem**: Agent used heavily, hits API limit, all users see errors

**Impact**: Agent unusable for hours

**Solution**: Implement caching, batching, and rate limit monitoring

### Pitfall 4: "Poorly Formatted JSON Parsing"
**Problem**: API response structure changes, flow breaks

**Impact**: Agent returns errors or incomplete data

**Solution**: Use try-catch, validate JSON structure, handle null values

### Pitfall 5: "No Error Messages for Users"
**Problem**: API fails, user sees "Something went wrong"

**Impact**: User frustration, IT support tickets

**Solution**: Provide specific, actionable error messages

---

## XII. Resources and Next Steps

### A. Downloadable Resources
**Included with This Blog**:
1. **Custom Connector Template**: Salesforce Customer Lookup connector (export)
2. **Complete Flow Templates**: Search, View, Update flows
3. **Agent Topic Exports**: All conversation topics
4. **Testing Checklist**: 30+ test scenarios
5. **Security Audit Checklist**: Verify secure implementation
6. **ROI Calculator**: Calculate savings for your organization

**Download Link**: [INSERT LINK]

### B. Official Microsoft Documentation
**Essential Reading**:
1. **Custom Connectors**:
   https://learn.microsoft.com/en-us/connectors/custom-connectors/

2. **OAuth 2.0 in Power Platform**:
   https://learn.microsoft.com/en-us/connectors/custom-connectors/create-custom-connector-oauth

3. **Salesforce REST API**:
   https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/

4. **Premium Connectors List**:
   https://learn.microsoft.com/en-us/connectors/connector-reference/connector-reference-premium-connectors

5. **API Security Best Practices**:
   https://learn.microsoft.com/en-us/power-platform/admin/security/

### C. Video Walkthrough
**Companion Video** (22 minutes):
- Overview and use case (2 min)
- Salesforce setup and Connected App (5 min)
- Building custom connector (7 min)
- Agent and flow creation (6 min)
- Testing and error handling (2 min)

**Watch Now**: [INSERT LINK]

### D. Community and Support
**Get Help**:
- **Microsoft Community**: https://powerusers.microsoft.com/
- **Stack Overflow**: Tags `power-automate`, `custom-connectors`, `salesforce-api`
- **Our Community**: [Teams Channel or Forum Link]

**Share Your Success**:
- Built a custom connector? Share the template!
- Integrated with unique system? Document your approach
- Want to showcase your agent? Contact us

### E. What's Next?
**Continue Your Learning Journey**:

**Blog 7: Testing, Monitoring, and Quality Assurance** (Next)
- Comprehensive testing for complex integrations
- Monitoring external API health
- Analytics for multi-system workflows
- Debugging API integration issues

**Blog 8: Security, Compliance, and Governance**
- Enterprise security for external integrations
- Data residency and compliance (GDPR, HIPAA)
- Audit logging across systems
- Governance policies for custom connectors

**Blog 9: Deploying to Multiple Channels**
- Deploy customer lookup to Teams, web, mobile
- Channel-specific optimizations
- Managing connections across channels

---

## XIII. Final Checklist

Before moving to the next blog, ensure you can:
- [ ] Explain standard vs premium vs custom connectors
- [ ] Understand when to build custom connectors
- [ ] Create a Salesforce Developer Edition account
- [ ] Configure OAuth 2.0 Connected App in Salesforce
- [ ] Build a custom connector from scratch
- [ ] Define API actions (GET, POST, PATCH)
- [ ] Implement OAuth 2.0 authentication in connector
- [ ] Test custom connector with real API
- [ ] Create flows using custom connector actions
- [ ] Parse JSON responses from external APIs
- [ ] Handle API errors gracefully (401, 429, 500)
- [ ] Implement retry logic for failed requests
- [ ] Secure API credentials (environment variables)
- [ ] Calculate ROI for external integrations
- [ ] Deploy agent with custom connector to production

**If you completed all checkboxes**: Congratulations! You're ready for Blog 7.

**If you're stuck**: Review troubleshooting section, watch video walkthrough, or ask in community.

---

## XIV. Appendix: Quick Reference

### A. Key Terminology
| Term | Definition |
|------|------------|
| **REST API** | Web service that uses HTTP requests to access and manipulate data |
| **JSON** | Data format used by most APIs (JavaScript Object Notation) |
| **OAuth 2.0** | Industry-standard protocol for secure authorization |
| **Custom Connector** | User-built integration to any REST API |
| **Premium Connector** | Microsoft-built integration requiring paid license |
| **Rate Limit** | Maximum API requests allowed in time period |
| **SOQL** | Salesforce Object Query Language (like SQL for Salesforce) |
| **Access Token** | Temporary credential for API access (from OAuth) |
| **Refresh Token** | Long-lived credential to get new access tokens |
| **Webhook** | Push notification from external system when data changes |

### B. HTTP Verbs (API Operations)
| Verb | Purpose | Example |
|------|---------|---------|
| **GET** | Retrieve data | Get customer by ID |
| **POST** | Create new data | Create new customer |
| **PUT** | Replace entire record | Update all customer fields |
| **PATCH** | Update specific fields | Update customer phone only |
| **DELETE** | Remove data | Delete customer record |

### C. Common API Error Codes
| Code | Meaning | Solution |
|------|---------|----------|
| **200** | Success | No action needed |
| **401** | Unauthorized (bad credentials) | Refresh OAuth token |
| **403** | Forbidden (no permission) | Check user permissions |
| **404** | Not found | Verify ID or endpoint URL |
| **429** | Too many requests (rate limit) | Implement delay and retry |
| **500** | Server error | Retry, contact API support |

### D. Troubleshooting Quick Fixes
| Symptom | Quick Fix |
|---------|-----------|
| Connector not found in flows | Refresh connector list |
| OAuth fails with redirect error | Verify callback URL exact match |
| API returns 401 | Reconnect (create new connection) |
| API returns empty results | Check SOQL query syntax |
| Flow timeout | Reduce data returned (add LIMIT) |
| JSON parse error | Validate response schema |
| Rate limit hit | Implement caching, reduce calls |

---

**Estimated Total Content Length**: ~5,000 words
**Screenshot Requirements**: 37 high-quality annotated screenshots
**Diagram Requirements**: 11 conceptual/architectural diagrams
**Hands-On Project Completion Time**: 90 minutes for new users

---

**END OF BLOG 6 OUTLINE**
