# Microsoft Copilot Agents - Ready-to-Use Templates

Welcome! This folder contains **practical, business-ready templates** you can download and use immediately to build Microsoft Copilot agents.

## 📦 What's Included

| Template | Format | Purpose | Difficulty |
|----------|--------|---------|------------|
| **FAQ Agent Template** | JSON | Answer common company policy questions | Beginner |
| **Onboarding Agent Template** | JSON | Collect new employee information | Intermediate |
| **ROI Calculator** | CSV | Calculate agent business value and savings | All Levels |
| **Test Plan Template** | Markdown | Comprehensive testing checklist | All Levels |

---

## 🚀 Quick Start Guide

### 1. Download Templates

Click on any template file above and download it to your computer.

### 2. Choose Your Template

**Start with FAQ Agent if:**
- This is your first agent
- You want to answer questions (not collect information)
- You need something working in under 1 hour

**Use Onboarding Agent if:**
- You've built an FAQ agent before
- You need to collect information from users
- You want to send email notifications
- You need branching logic (different responses based on user input)

**Use ROI Calculator if:**
- You need to justify agent investment to leadership
- You want to calculate time/cost savings
- You're planning a business case

**Use Test Plan if:**
- Your agent is ready for testing
- You need structured quality assurance
- You're preparing for production deployment

---

## 📋 Template Details

### 1. FAQ Agent Template (`faq-agent-template.json`)

**What it does:**
- Answers 10 common company policy questions
- Provides structured responses with formatting
- Handles follow-up questions
- Includes fallback for unknown topics

**What you'll need:**
- Microsoft Copilot Studio access
- Your company policy information
- 30-45 minutes for setup

**How to use:**

1. **Open the template** in a text editor (Notepad, VS Code, etc.)

2. **Search for `[YOUR_`** to find all placeholders

3. **Replace placeholders** with your information:
   ```
   [YOUR_COMPANY_NAME] → Acme Corporation
   [YOUR_HR_EMAIL] → hr@acme.com
   [YOUR_PTO_DAYS_NEW] → 15
   ```

4. **Review the 10 FAQ topics:**
   - PTO Policy
   - Benefits Enrollment
   - Work From Home Policy
   - Expense Reimbursement
   - IT Support Contact
   - Company Holidays
   - Parking and Facilities
   - Training and Development
   - Performance Reviews
   - Dress Code

5. **Customize responses** to match your actual policies

6. **Add/remove topics** based on your needs:
   - Copy an existing topic structure
   - Update trigger phrases and content
   - Keep the same JSON format

7. **Import to Copilot Studio:**
   - Create new agent
   - Manually create topics using template as guide
   - (Note: Direct JSON import requires Power Platform solutions knowledge)

**Common Customizations:**

- **Add more trigger phrases:** Users ask the same question many ways
- **Update contact information:** HR email, phone, portal URLs
- **Adjust response tone:** Make it more formal or casual
- **Add links:** Include URLs to policy documents
- **Remove irrelevant topics:** Delete entire topic blocks you don't need

**Testing Checklist:**
- [ ] Test each topic with multiple trigger phrase variations
- [ ] Verify all [YOUR_...] placeholders replaced
- [ ] Check that contact information is correct
- [ ] Test fallback topic (ask something unrelated)
- [ ] Review responses for accuracy and tone

---

### 2. Onboarding Agent Template (`onboarding-agent-template.json`)

**What it does:**
- Greets new employee by name
- Collects: Name, Department, Job Title, Start Date, Equipment needs
- Shows department-specific onboarding checklist
- Sends summary email to HR
- Provides personalized confirmation

**What you'll need:**
- Completed FAQ agent (recommended prerequisite)
- Understanding of your onboarding process
- Access to configure email actions in Copilot Studio
- 60-90 minutes for setup

**How to use:**

1. **Review conversation flow:**
   - The template includes 14+ nodes (messages, questions, conditions, actions)
   - Follow the `conversationFlow` section to understand the structure

2. **Customize departments:**
   - Find `collectDepartment` node
   - Add/remove/rename departments to match your organization
   - Example: Add "Product Management" department

3. **Update department checklists:**
   - Each department has a customized checklist
   - Find nodes: `engineeringChecklist`, `salesChecklist`, etc.
   - Replace placeholder steps with your actual onboarding process
   - Use the same formatting (emojis and checkboxes ✅)

4. **Configure equipment options:**
   - Find `collectEquipment` node
   - Update options to match what your company provides
   - Add new options or remove unavailable ones

5. **Set up email notification:**
   - Find `sendHREmail` action node
   - Replace `[YOUR_HR_ONBOARDING_EMAIL]` with actual email
   - Test with your personal email first!
   - Customize email subject and body as needed

6. **Replace all placeholders:**
   - Search for `[YOUR_` in the file
   - Update company name, system names, contact information
   - Verify all placeholders are replaced

7. **Build in Copilot Studio:**
   - Create new topic "Employee Onboarding"
   - Add trigger phrases from template
   - Build nodes following the conversation flow structure
   - Use template as your blueprint

**Variables Explained:**

The template uses these variables to personalize the conversation:

| Variable | Stores | Example |
|----------|--------|---------|
| `EmployeeName` | Full name | "Sarah Martinez" |
| `Department` | Selected department | "Engineering" |
| `JobTitle` | Job title (free text) | "Senior Software Engineer" |
| `StartDate` | Official start date | "January 15, 2025" |
| `Equipment` | Equipment selections | "Laptop (Mac), Monitor (27\")" |

**Variables are used in messages like this:**
```
"Great to meet you, {EmployeeName}!"
"I've noted you're joining our {Department} team."
```

**Branching Logic Explained:**

The template uses conditional branching to show different checklists:

```
IF Department = "Engineering"
  → Show Engineering Checklist
ELSE IF Department = "Sales"
  → Show Sales Checklist
ELSE IF Department = "Marketing"
  → Show Marketing Checklist
...
ELSE (all other departments)
  → Show General Checklist
```

**Common Pitfalls:**

❌ **Forgetting to test email action** → Always send to yourself first
❌ **Not updating all department checklists** → Some employees get wrong info
❌ **Using production email in testing** → HR gets test notifications
❌ **Typos in department names** → Branching logic breaks
❌ **Too many questions** → Users abandon conversation

**Testing Checklist:**
- [ ] Test conversation with EACH department
- [ ] Verify correct checklist appears for each department
- [ ] Confirm email arrives with accurate information
- [ ] Test multi-select equipment (select 0, 1, 3+ items)
- [ ] Verify all variables display correctly (no {VariableName} placeholders)
- [ ] Test date input in different formats
- [ ] Get feedback from 2-3 pilot users before company-wide launch

---

### 3. ROI Calculator (`roi-calculator.csv`)

**What it does:**
- Calculates time savings, cost avoidance, and ROI
- Projects benefits over 5 years
- Provides sensitivity analysis (best/worst/likely scenarios)
- Includes monthly tracking for actual results
- Generates executive-ready metrics

**What you'll need:**
- Microsoft Excel or Google Sheets
- Basic information about current process (time spent, number of users)
- Hourly rates for affected employees
- 20-30 minutes to gather and enter data

**How to use:**

1. **Open in Excel/Sheets:**
   - Download the CSV file
   - Open in Microsoft Excel or Google Sheets
   - Enable editing if prompted

2. **Enter your values in the INPUT SECTION:**

   **Current State:**
   - Number of users: How many people affected? (e.g., 100 sales reps)
   - Time spent per week: Hours per person on task being automated (e.g., 4 hours)
   - Hourly rate: Use the calculation guide in the spreadsheet (salary + benefits + overhead)
   - Error rate: What percentage of work contains errors? (typical: 3-5%)
   - Cost per error: Average cost to fix mistakes (typical: $500-$2,000)

   **External Interactions (if applicable):**
   - Annual interactions: Customer calls, support tickets (0 if not applicable)
   - Cost per interaction: What you pay per call/email (typical: $12-$15)

   **Implementation:**
   - Implementation cost: Setup, customization, integration (typical: $50K-$100K)
   - Training cost: Training development and delivery (typical: $25K-$50K)
   - Annual licensing: Copilot Studio licenses (use Microsoft pricing)
   - Annual support: Ongoing monitoring and optimization (typical: $30K-$50K)

   **Performance Assumptions:**
   - Productivity recapture: Default 50% (conservative, recommended)
   - Deflection rate: Default 70% for customer service agents
   - Resolution rate: Default 82% for successfully resolved interactions

3. **Review calculated results:**
   - The spreadsheet automatically calculates ROI
   - Year 1 ROI typically ranges from 300% to 8,000%+ depending on use case
   - Payback period usually <6 months

4. **Check sensitivity analysis:**
   - Best case (75th percentile): Higher adoption, better performance
   - Worst case (25th percentile): Lower adoption, conservative estimates
   - Use the range to show stakeholders realistic outcomes

5. **Track monthly actuals:**
   - After deployment, fill in the "Monthly Tracking" section
   - Compare actual results to projections
   - Adjust future estimates based on real data

**Interpreting Results:**

**Good ROI:** 200%+ (for every $1 spent, you gain $3+)
**Great ROI:** 500%+ (for every $1 spent, you gain $6+)
**Exceptional ROI:** 1,000%+ (for every $1 spent, you gain $11+)

**Typical Payback Periods:**
- FAQ Agent: 1-3 months
- Conversational Agent: 3-6 months
- Complex Integration: 6-12 months

**Red Flags:**
- ROI <100%: Review assumptions, may not be good use case
- Payback >18 months: Consider simpler alternatives first
- Benefits rely 100% on soft savings: Add hard cost metrics

**Common Customizations:**

- **Multiple user groups:** Create separate tabs for each team
- **Quarterly projections:** Change annual to quarterly (divide by 4)
- **Risk adjustment:** Apply 15-25% discount to benefits for conservative estimates
- **Industry-specific metrics:** Add rows for your unique KPIs

**Pro Tips:**

✅ **Be conservative:** Use 50% productivity recapture, not 100%
✅ **Include hidden costs:** Training, change management, ongoing support
✅ **Validate with Finance:** Have finance team review before presenting
✅ **Track actuals:** Update monthly to show real results vs. projections
✅ **Use ranges:** Show best/worst/likely scenarios for credibility

**For Executive Presentations:**

1. Lead with Year 1 ROI percentage
2. Show payback period in months (or days if <1 month)
3. Highlight 5-year NPV for long-term value
4. Include sensitivity analysis to demonstrate due diligence
5. Add monthly tracking to show you'll measure results

---

### 4. Test Plan Template (`test-plan-template.md`)

**What it does:**
- Provides structured testing framework
- Covers all critical test scenarios
- Includes bug tracking and documentation
- Ensures production readiness
- Guides user acceptance testing (UAT)

**What you'll need:**
- Working agent (draft or published to test environment)
- Access to Copilot Studio test panel
- 2-4 hours for comprehensive testing
- 2-3 pilot users for UAT

**How to use:**

1. **Open in any Markdown viewer:**
   - GitHub, VS Code, Notion, Obsidian, etc.
   - Or open in any text editor

2. **Fill in header information:**
   - Agent name, version, test date, your name
   - Check which environment (dev/test/prod)

3. **Work through sections sequentially:**

   **Section 1: Pre-Testing Checklist**
   - Verify agent is ready to test
   - Gather test data
   - Set up test environment

   **Section 2: Trigger Phrase Testing**
   - Test all trigger phrases (exact matches)
   - Test variations and typos
   - Ensure agent activates correctly

   **Section 3: Conversation Flow Testing**
   - Test happy path (ideal scenario)
   - Test all branches (e.g., each department)
   - Verify variable personalization

   **Section 4: Data Input Testing**
   - Test different name formats
   - Test date input variations
   - Test multi-select options

   **Section 5: Email Notification Testing**
   - Verify email delivery
   - Check content accuracy
   - Confirm formatting

   **Section 6: Error Handling**
   - Test invalid inputs
   - Test conversation abandonment
   - Test escalation requests

   **Section 7: Fallback Testing**
   - Test unrecognized questions
   - Verify helpful fallback messages

   **Section 8: Multi-Turn Conversations**
   - Test topic switching
   - Test follow-up questions

   **Section 9: Performance Testing**
   - Measure response times
   - Track conversation length

   **Section 10: User Acceptance Testing**
   - Get feedback from pilot users
   - Document satisfaction scores

4. **Document bugs:**
   - Use the bug report template
   - Assign severity (Critical/High/Medium/Low)
   - Track resolution

5. **Complete summary:**
   - Calculate pass rate
   - Provide recommendation (approve, fix bugs, rework)
   - Get sign-off

**Testing Priority:**

**Must Test (Critical):**
- ✅ Happy path completes successfully
- ✅ All branches work (e.g., each department gets correct checklist)
- ✅ Email sends with accurate information
- ✅ No {VariableName} placeholders remain
- ✅ Fallback provides helpful message

**Should Test (High Priority):**
- Date format variations
- Multi-select combinations
- Name format variations
- Response times acceptable
- Error handling graceful

**Nice to Test (Medium Priority):**
- Typos in trigger phrases
- Special characters in input
- Conversation abandonment
- Very long inputs

**Time Estimates:**

| Testing Phase | Time Required |
|---------------|---------------|
| Pre-testing setup | 15-30 minutes |
| Core functionality (Sections 2-5) | 1-2 hours |
| Edge cases and errors (Section 6-7) | 30-60 minutes |
| Performance and UAT (Sections 8-10) | 1-2 hours |
| Bug fixing and re-testing | Varies |
| **Total** | **3-5 hours** |

**When to Stop Testing:**

✅ **Ready for production when:**
- All critical tests pass (100%)
- No critical or high-severity bugs
- UAT feedback positive (4.0+ satisfaction)
- Email delivery working reliably
- All stakeholders signed off

❌ **NOT ready for production if:**
- Happy path fails
- Email doesn't send or has wrong information
- Major branches don't work (e.g., department checklists)
- High abandonment rate in UAT
- Critical bugs unresolved

**After Testing:**

1. **Fix all critical bugs** before deployment
2. **Re-test** after fixes (regression testing)
3. **Get sign-off** from stakeholders
4. **Deploy to production** using deployment checklist
5. **Monitor first week** closely
6. **Iterate** based on real user feedback

---

## 💡 Usage Tips

### General Best Practices

**Before You Start:**
- [ ] Review relevant blog post (FAQ Agent → Blog 1, Onboarding → Blog 2)
- [ ] Have your company information ready (policies, contact info, etc.)
- [ ] Set aside uninterrupted time (1-2 hours)
- [ ] Use a test environment first (not production)

**During Customization:**
- [ ] Search for ALL placeholders (`[YOUR_...`) - don't miss any
- [ ] Keep a copy of the original template (don't overwrite)
- [ ] Save frequently
- [ ] Test after each major change
- [ ] Use realistic test data

**After Deployment:**
- [ ] Monitor first 24 hours closely
- [ ] Collect user feedback actively
- [ ] Track analytics (conversations, satisfaction, completion rate)
- [ ] Iterate based on data
- [ ] Update templates quarterly

---

## 🔧 Customization Guide

### Finding and Replacing Placeholders

All templates use placeholders in this format: `[YOUR_SOMETHING]`

**Method 1: Manual Search**
1. Open template in text editor
2. Search for `[YOUR_`
3. Replace with your information
4. Repeat until no matches found

**Method 2: Find & Replace All (Faster)**
1. Create a list of all placeholders and your values
2. Use Find & Replace for each:
   ```
   Find: [YOUR_COMPANY_NAME]
   Replace: Acme Corporation
   ```
3. Double-check critical fields (emails, URLs)

**Common Placeholder Categories:**

| Category | Examples |
|----------|----------|
| **Company Info** | `[YOUR_COMPANY_NAME]`, `[YOUR_INDUSTRY]` |
| **Contact Info** | `[YOUR_HR_EMAIL]`, `[YOUR_IT_PHONE]` |
| **Systems** | `[YOUR_EXPENSE_SYSTEM]`, `[YOUR_CRM]` |
| **Policies** | `[YOUR_PTO_DAYS]`, `[YOUR_WFH_POLICY]` |
| **Processes** | `[YOUR_APPROVAL_WORKFLOW]`, `[YOUR_ONBOARDING_STEPS]` |

---

## 🎯 Use Case Recommendations

### Start Here: FAQ Agent
**Best for:**
- First-time agent builders
- HR, IT, Finance FAQ
- Company policy questions
- Quick wins (deploy in days)

**Time to Deploy:** 2-3 days
**Difficulty:** ⭐ Beginner
**ROI:** High (300-800%)

### Next Step: Onboarding Agent
**Best for:**
- Employee onboarding
- Customer onboarding
- Event registration
- Any info-collection workflow

**Time to Deploy:** 1-2 weeks
**Difficulty:** ⭐⭐ Intermediate
**ROI:** Very High (500-1,500%)

### Beyond These Templates

Once you're comfortable:
- **Add knowledge sources** (Blog 3) - Connect to SharePoint, websites
- **Create Power Automate flows** (Blog 4) - More complex actions
- **Integrate with other systems** (Blog 5) - CRM, HRIS, ticketing

---

## 📞 Getting Help

### Common Issues

**Issue: "I can't find where to import JSON"**
- **Solution:** These templates are guides, not direct imports. You'll build the agent in Copilot Studio using the template as your blueprint. Copy the structure, trigger phrases, and content.

**Issue: "Email action isn't working"**
- **Solution:**
  1. Verify you've granted email permissions
  2. Check recipient email address (use your email for testing)
  3. Confirm all variables have values (check test panel)
  4. Look for error messages in test panel

**Issue: "Variables showing as {VariableName}"**
- **Solution:**
  1. Verify variable was created when asking the question
  2. Check variable name matches exactly (case-sensitive)
  3. Ensure "Save user response" is enabled on question node
  4. Re-publish agent after fixing

**Issue: "Agent isn't triggered by my phrases"**
- **Solution:**
  1. Add more trigger phrase variations (need 5-10+)
  2. Test exact phrases from template first
  3. Check topic is active (toggle switch on)
  4. Save and republish agent

**Issue: "ROI numbers seem too high"**
- **Solution:**
  1. Verify you're using 50% productivity recapture (not 100%)
  2. Double-check hourly rate calculation
  3. Use sensitivity analysis to show range
  4. Apply 15-25% risk adjustment for conservative estimates

### Where to Learn More

- **Blog Series:** Read the full Microsoft Copilot Agents blog series
  - Blog 1: FAQ Agents (foundation)
  - Blog 2: Conversational Agents (this level)
  - Blog 3: Knowledge Sources (advanced)
  - Blog 4: Workflows and Actions (advanced)
  - Blog 5: Enterprise Integration (expert)

- **Official Microsoft Docs:**
  - [Copilot Studio Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
  - [Creating Topics](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-edit-topics)
  - [Using Variables](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables)
  - [Email Actions](https://learn.microsoft.com/en-us/connectors/office365/)

- **Community:**
  - [Power Platform Community Forum](https://powerusers.microsoft.com/t5/Microsoft-Copilot-Studio/bd-p/PVACommunity)
  - [Microsoft Copilot Studio YouTube](https://www.youtube.com/c/MicrosoftPowerPlatform)

---

## ✅ Pre-Launch Checklist

Before deploying any agent to production:

**Content Review:**
- [ ] All placeholders replaced with accurate information
- [ ] Contact information current (emails, phones, URLs)
- [ ] Policy information accurate and up-to-date
- [ ] Tone and language appropriate for your company culture
- [ ] No typos or grammatical errors

**Functional Testing:**
- [ ] All trigger phrases tested
- [ ] Happy path works end-to-end
- [ ] All branches tested (e.g., each department)
- [ ] Variables populate correctly
- [ ] Email sends with accurate information
- [ ] Fallback provides helpful message
- [ ] Test plan completed with 90%+ pass rate

**User Acceptance:**
- [ ] 3+ pilot users tested successfully
- [ ] Feedback collected and incorporated
- [ ] Average satisfaction 4.0+ (out of 5)
- [ ] No critical usability issues

**Operational Readiness:**
- [ ] Analytics configured
- [ ] Support team briefed
- [ ] Escalation path documented
- [ ] Rollback plan ready
- [ ] Announcement prepared

**Approvals:**
- [ ] Stakeholder sign-off
- [ ] IT security review (if required)
- [ ] Compliance review (if handling sensitive data)
- [ ] Manager approval

---

## 📊 Success Metrics

Track these metrics after deployment:

**Adoption Metrics:**
- Total conversations
- Unique users
- Conversations per user
- Growth trend

**Quality Metrics:**
- Completion rate (target: 80%+)
- Satisfaction score (target: 4.0+)
- Resolution rate (target: 75%+)
- Escalation rate (target: <20%)

**Business Impact:**
- Time saved (hours/week)
- Cost avoided ($)
- Errors reduced (#)
- Deflection rate (%)

**Operational Metrics:**
- Response time (target: <3 seconds)
- Email delivery success (target: 99%+)
- System uptime (target: 99.9%+)

---

## 🔄 Maintenance Schedule

**Weekly (First Month):**
- Review conversation transcripts
- Monitor analytics dashboard
- Address user feedback
- Fix any bugs discovered

**Monthly:**
- Update content if policies change
- Review and optimize trigger phrases
- Analyze drop-off points
- Refresh test plan and re-test

**Quarterly:**
- Comprehensive content review
- Add new topics based on user requests
- Review ROI and update projections with actuals
- Stakeholder report on performance

**Annually:**
- Complete rebuild/refresh if major changes
- Benchmark against industry standards
- Strategic planning for enhancements
- Licensing and cost review

---

## 🙋 FAQ

**Q: Can I use these templates without Copilot Studio?**
A: No, these are specifically designed for Microsoft Copilot Studio. However, the concepts (conversation design, testing, ROI calculation) apply to other platforms.

**Q: Are these templates free to use?**
A: Yes! Use them for your organization. Attribution appreciated but not required.

**Q: Can I share these templates with colleagues?**
A: Absolutely! Share the whole folder or individual templates.

**Q: Do I need coding skills?**
A: No. These templates are designed for business users. You'll need basic text editing skills (find/replace) and familiarity with Copilot Studio interface.

**Q: How long until I see ROI?**
A: Typical payback period is 3-6 months. FAQ agents often show value in weeks.

**Q: Can I modify the templates?**
A: Yes! Customize freely. These are starting points, not rigid requirements.

**Q: What if my use case isn't covered?**
A: Use the closest template as a starting point. The structure and patterns still apply.

**Q: How do I handle multiple languages?**
A: Create separate agents for each language, or use Copilot Studio's translation features (covered in advanced topics).

---

## 📝 Version History

**v1.0** (December 2024)
- Initial release
- 4 templates: FAQ Agent, Onboarding Agent, ROI Calculator, Test Plan
- Based on Blog Series 1 & 2 content

---

## 🤝 Contributing

Found an issue or have suggestions? We'd love to hear:
- **Contact:** [Your contact information]
- **Feedback:** Share what worked and what didn't
- **Success Stories:** Tell us your ROI results!

---

## 📄 License

These templates are provided as-is for educational and business use. No warranty expressed or implied. Always test thoroughly before production deployment.

---

**Thank you for using these templates! We're excited to see what you build. 🚀**

*Questions? Refer to the blog series or Microsoft documentation linked above.*
