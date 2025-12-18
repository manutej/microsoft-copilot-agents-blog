# Microsoft Copilot Agent Test Plan Template

**Agent Name:** [Your Agent Name]

**Version:** [Version Number]

**Test Date:** [Date]

**Tested By:** [Your Name]

**Environment:** ☐ Development  ☐ Test  ☐ Production

---

## Test Summary

| Metric | Value |
|--------|-------|
| Total Test Cases | [Number] |
| Passed | [Number] |
| Failed | [Number] |
| Blocked | [Number] |
| Pass Rate | [Percentage] |

---

## 1. Pre-Testing Checklist

Before you begin testing, ensure:

- [ ] Agent is published to test environment
- [ ] All trigger phrases are configured
- [ ] All variables are properly named and scoped
- [ ] Email actions/integrations are configured (use test email addresses)
- [ ] Test data prepared (sample names, dates, equipment selections, etc.)
- [ ] Access to test panel in Copilot Studio
- [ ] Documentation of expected behavior available

---

## 2. Trigger Phrase Testing

**Objective:** Verify the agent responds correctly to all trigger phrase variations

### Test Case T-001: Primary Trigger Phrases

| Trigger Phrase | Expected Topic | Result | Notes |
|----------------|----------------|--------|-------|
| [Primary phrase 1] | [Topic name] | ☐ Pass ☐ Fail | |
| [Primary phrase 2] | [Topic name] | ☐ Pass ☐ Fail | |
| [Primary phrase 3] | [Topic name] | ☐ Pass ☐ Fail | |

**Instructions:**
1. Open test panel
2. Type each trigger phrase exactly as listed
3. Verify correct topic is triggered
4. Mark Pass if correct topic loads, Fail if wrong topic or no response

**Pass Criteria:** All trigger phrases activate the correct topic

---

### Test Case T-002: Trigger Phrase Variations

| Variation Phrase | Expected Topic | Result | Notes |
|------------------|----------------|--------|-------|
| [Variation 1] | [Topic name] | ☐ Pass ☐ Fail | |
| [Variation 2] | [Topic name] | ☐ Pass ☐ Fail | |
| [Variation 3] | [Topic name] | ☐ Pass ☐ Fail | |

**Pass Criteria:** At least 80% of variations trigger correct topic

---

### Test Case T-003: Trigger Phrase with Typos

| Phrase with Typo | Expected Behavior | Result | Notes |
|------------------|-------------------|--------|-------|
| [Phrase with 1 typo] | Should still trigger OR ask for clarification | ☐ Pass ☐ Fail | |
| [Phrase with 2 typos] | Should still trigger OR ask for clarification | ☐ Pass ☐ Fail | |

**Pass Criteria:** Agent handles typos gracefully (triggers topic or asks for clarification, no error)

---

## 3. Conversation Flow Testing

### Test Case C-001: Happy Path (Ideal Scenario)

**Scenario:** User provides all correct information on first attempt

**Test Steps:**

1. Trigger agent with: [trigger phrase]
2. Provide name: [test name]
3. Select department: [test department]
4. Provide job title: [test title]
5. Provide start date: [test date]
6. Select equipment: [test equipment selections]
7. Complete conversation through to confirmation

**Expected Results:**

- [ ] Greeting message displays correctly
- [ ] All questions appear in correct order
- [ ] Variables are captured (verify in test panel variables view)
- [ ] Department-specific checklist displays
- [ ] Email notification sent (verify receipt)
- [ ] Confirmation message displays with correct variable values
- [ ] No error messages or unexpected behavior

**Pass Criteria:** All expected results achieved without errors

---

### Test Case C-002: Department Branching

**Objective:** Verify correct checklist displays for each department

| Department | Expected Checklist | Checklist Displays Correctly | Result |
|------------|-------------------|------------------------------|--------|
| Engineering | Engineering checklist | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Sales | Sales checklist | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Marketing | Marketing checklist | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Finance | Finance checklist | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| HR | HR checklist | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Operations | Operations checklist | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Customer Support | Support checklist | ☐ Yes ☐ No | ☐ Pass ☐ Fail |

**Test Steps:**
1. Complete conversation flow for each department
2. Verify correct checklist content displays
3. Note any missing or incorrect information

**Pass Criteria:** Correct checklist displays for 100% of departments

---

### Test Case C-003: Variable Personalization

**Objective:** Verify variables are used correctly throughout conversation

**Test Data:**
- Name: Jane Smith
- Department: Marketing
- Job Title: Senior Marketing Manager
- Start Date: January 15, 2025
- Equipment: Laptop (Mac), External Monitor (27")

**Variables to Verify:**

| Variable Usage Location | Expected Value | Actual Value | Result |
|------------------------|----------------|--------------|--------|
| Greeting confirmation | "Great to meet you, Jane Smith!" | | ☐ Pass ☐ Fail |
| Department confirmation | "joining our Marketing team" | | ☐ Pass ☐ Fail |
| Information summary | All 4 values displayed correctly | | ☐ Pass ☐ Fail |
| Equipment confirmation | "Laptop (Mac), External Monitor (27\")" | | ☐ Pass ☐ Fail |
| Final confirmation | "All set, Jane Smith!" and "Marketing team" | | ☐ Pass ☐ Fail |

**Pass Criteria:** All variable values display correctly (no {VariableName} placeholders remain)

---

## 4. Data Input Testing

### Test Case D-001: Name Input Variations

| Name Format | Example | Accepted | Result | Notes |
|-------------|---------|----------|--------|-------|
| First Last | John Smith | ☐ Yes ☐ No | ☐ Pass ☐ Fail | |
| First Middle Last | John Michael Smith | ☐ Yes ☐ No | ☐ Pass ☐ Fail | |
| Last, First | Smith, John | ☐ Yes ☐ No | ☐ Pass ☐ Fail | |
| Single name | Madonna | ☐ Yes ☐ No | ☐ Pass ☐ Fail | |
| Name with suffix | John Smith Jr. | ☐ Yes ☐ No | ☐ Pass ☐ Fail | |

**Pass Criteria:** Agent accepts all common name formats

---

### Test Case D-002: Date Input Variations

| Date Format | Example | Accepted | Parsed Correctly | Result |
|-------------|---------|----------|------------------|--------|
| MM/DD/YYYY | 01/15/2025 | ☐ Yes ☐ No | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Month DD, YYYY | January 15, 2025 | ☐ Yes ☐ No | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Next Monday | next Monday | ☐ Yes ☐ No | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Tomorrow | tomorrow | ☐ Yes ☐ No | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| In 2 weeks | in 2 weeks | ☐ Yes ☐ No | ☐ Yes ☐ No | ☐ Pass ☐ Fail |

**Pass Criteria:** Agent accepts and correctly parses all date formats

---

### Test Case D-003: Multi-Select Equipment

| Test Scenario | Selections | Expected Behavior | Result |
|---------------|-----------|-------------------|--------|
| Single item | Laptop (Mac) | Accepts, stores correctly | ☐ Pass ☐ Fail |
| Multiple items (3) | Laptop (Mac), Monitor (27"), Headset | Accepts all, comma-separated | ☐ Pass ☐ Fail |
| All items | All 8 equipment options | Accepts all, displays correctly | ☐ Pass ☐ Fail |
| No items | "No additional equipment needed" | Accepts, notes in email | ☐ Pass ☐ Fail |

**Verification:** Check email to ensure equipment list is correct and readable

**Pass Criteria:** All selection combinations work correctly

---

## 5. Email Notification Testing

### Test Case E-001: Email Delivery

**Test Steps:**
1. Complete full conversation
2. Verify email arrives in test inbox within 2 minutes
3. Check email content

**Email Verification Checklist:**

- [ ] Email received (check inbox and spam)
- [ ] Subject line formatted correctly with variables
- [ ] "To" field shows correct recipient
- [ ] Email body contains all expected sections
- [ ] All variables replaced (no {VariableName} placeholders)
- [ ] Information matches what was entered in conversation
- [ ] Formatting is readable (line breaks, spacing correct)
- [ ] Timestamp included

**Pass Criteria:** Email delivered with 100% accurate information

---

### Test Case E-002: Email Content Accuracy

| Email Field | Expected Content | Actual Content | Match | Result |
|-------------|------------------|----------------|-------|--------|
| Subject | "New Employee Onboarding - [Name] - Start Date [Date]" | | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Employee Name | [Test name] | | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Department | [Test department] | | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Job Title | [Test title] | | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Start Date | [Test date] | | ☐ Yes ☐ No | ☐ Pass ☐ Fail |
| Equipment | [Test equipment] | | ☐ Yes ☐ No | ☐ Pass ☐ Fail |

**Pass Criteria:** 100% accuracy in email content

---

## 6. Error Handling and Edge Cases

### Test Case E-001: Invalid Date Input

**Test Steps:**
1. When asked for start date, enter: "yesterday"
2. Observe agent response

**Expected Behavior:** Agent should either:
- Reject and ask for future date, OR
- Accept and allow (depending on configuration)

**Result:** ☐ Pass ☐ Fail

**Notes:**

---

### Test Case E-002: Conversation Abandonment

**Test Steps:**
1. Start conversation
2. Answer 2 questions
3. Type "start over"
4. Observe agent response

**Expected Behavior:**
- Agent should restart conversation from beginning
- Previous variables should be cleared

**Result:** ☐ Pass ☐ Fail

**Verification:** Check that new conversation doesn't carry over old variable values

---

### Test Case E-003: Escalation Request

**Test Steps:**
1. During conversation, type: "I need to talk to a person"
2. Observe agent response

**Expected Behavior:**
- Agent provides contact information (email/phone)
- Conversation ends gracefully OR offers to continue

**Result:** ☐ Pass ☐ Fail

---

### Test Case E-004: Very Long Input

**Test Steps:**
1. When asked for job title, enter 200+ character string
2. Observe agent response

**Expected Behavior:**
- Agent should accept (field likely has character limit in email)
- OR agent should truncate gracefully

**Result:** ☐ Pass ☐ Fail

---

### Test Case E-005: Special Characters in Input

**Test Input Examples:**
- Name: O'Brien
- Name: José García
- Job Title: VP, Sales & Marketing (EMEA)

**Expected Behavior:** Agent accepts and displays correctly (no encoding errors)

**Result:** ☐ Pass ☐ Fail

---

## 7. Fallback and Unknown Input Testing

### Test Case F-001: Unrecognized Question

**Test Steps:**
1. Type something completely unrelated: "What's the weather today?"
2. Observe fallback response

**Expected Behavior:**
- Fallback topic triggers
- Agent provides helpful message about what it CAN help with
- Offers escalation or retry options

**Result:** ☐ Pass ☐ Fail

---

### Test Case F-002: Profanity or Inappropriate Input

**Test Steps:**
1. Type profanity or inappropriate content
2. Observe agent response

**Expected Behavior:**
- Agent handles gracefully (doesn't repeat profanity)
- Redirects to appropriate behavior OR escalates

**Result:** ☐ Pass ☐ Fail

---

## 8. Multi-Turn Conversation Testing

### Test Case M-001: Topic Switching

**Scenario:** User switches topics mid-conversation

**Test Steps:**
1. Start onboarding conversation
2. Answer first 2 questions
3. Type: "What's the PTO policy?" (if you have this FAQ topic)
4. Observe response

**Expected Behavior:**
- Agent switches to PTO topic OR
- Agent offers to complete current conversation first

**Result:** ☐ Pass ☐ Fail

---

### Test Case M-002: Follow-Up Questions

**Test Steps:**
1. Complete main conversation flow
2. After confirmation, type: "Can I change my equipment selection?"
3. Observe response

**Expected Behavior:**
- Agent provides helpful response (e.g., "Contact HR at...")
- OR restarts relevant portion of conversation

**Result:** ☐ Pass ☐ Fail

---

## 9. Performance and Usability Testing

### Test Case P-001: Response Time

**Test Steps:**
1. Note timestamp when sending each message
2. Note timestamp when agent responds
3. Calculate response time

**Measurements:**

| Interaction | Send Time | Response Time | Delay (seconds) | Acceptable (<3s) |
|-------------|-----------|---------------|-----------------|------------------|
| Trigger | | | | ☐ Yes ☐ No |
| First question | | | | ☐ Yes ☐ No |
| Second question | | | | ☐ Yes ☐ No |
| Third question | | | | ☐ Yes ☐ No |
| Email action | | | | ☐ Yes ☐ No (<10s) |

**Pass Criteria:** 95% of responses under 3 seconds (except email action <10s)

---

### Test Case P-002: Conversation Length

**Measurement:**
- Start to finish time: _______ minutes
- Number of user inputs required: _______
- Total messages (agent + user): _______

**Pass Criteria:**
- Completion time: <7 minutes
- User inputs: <10 (excluding follow-ups)

**Result:** ☐ Pass ☐ Fail

---

## 10. User Acceptance Testing (UAT)

### Test Case U-001: Pilot User Testing

**Participants:** [List 3-5 pilot users]

**Instructions for Pilot Users:**
1. Use the agent as if you were a real new employee
2. Complete entire onboarding conversation
3. Provide feedback via survey

**Feedback Collection:**

| User | Completed Successfully | Satisfaction (1-5) | Issues Encountered | Suggestions |
|------|------------------------|--------------------|--------------------|-------------|
| User 1 | ☐ Yes ☐ No | | | |
| User 2 | ☐ Yes ☐ No | | | |
| User 3 | ☐ Yes ☐ No | | | |

**Pass Criteria:**
- 80%+ completion rate
- Average satisfaction 4.0+
- No critical issues blocking usage

---

## Bug Tracking Template

Use this section to document any bugs found during testing:

### Bug Report #1

**Bug ID:** BUG-001

**Severity:** ☐ Critical ☐ High ☐ Medium ☐ Low

**Test Case:** [Test case number where found]

**Description:** [What happened]

**Steps to Reproduce:**
1.
2.
3.

**Expected Result:** [What should happen]

**Actual Result:** [What actually happened]

**Screenshot/Evidence:** [Attach if available]

**Status:** ☐ Open ☐ In Progress ☐ Fixed ☐ Closed

**Assigned To:** [Person responsible for fix]

**Resolution Notes:** [How it was fixed]

---

### Bug Report #2

[Copy template from Bug #1]

---

## Test Execution Summary

**Testing Completed By:** [Name]

**Date Completed:** [Date]

**Overall Assessment:** ☐ Ready for Production ☐ Needs Minor Fixes ☐ Needs Major Rework

**Critical Issues Found:** [Number]

**High Priority Issues Found:** [Number]

**Medium/Low Issues Found:** [Number]

**Recommendation:**
- [ ] Approve for production deployment
- [ ] Fix critical bugs and re-test
- [ ] Fix all high/critical bugs and re-test
- [ ] Major rework required

**Sign-Off:**

Tester: _________________________ Date: _________

Manager: _________________________ Date: _________

---

## Regression Testing Checklist

Use this checklist when re-testing after bug fixes:

- [ ] All previously failed test cases re-executed
- [ ] All fixed bugs verified as resolved
- [ ] No new bugs introduced by fixes
- [ ] Smoke test of core functionality (happy path)
- [ ] Email delivery still functioning
- [ ] All variable replacements still working

**Re-test Date:** __________

**Re-test Results:** ☐ Pass ☐ Fail

**Notes:**

---

## Production Deployment Checklist

Before deploying to production:

- [ ] All test cases passed (100% pass rate for critical tests)
- [ ] UAT completed with positive feedback
- [ ] Bug list reviewed and all critical/high bugs resolved
- [ ] Email recipient changed from test address to production HR email
- [ ] Trigger phrases validated with real user queries
- [ ] Fallback topic tested and provides helpful information
- [ ] Analytics/monitoring configured
- [ ] Rollback plan documented
- [ ] Support team briefed on agent capabilities
- [ ] User documentation prepared
- [ ] Announcement/training scheduled

**Deployment Approved By:** _________________________

**Deployment Date:** __________

---

## Customization Instructions

1. **Replace [placeholders]** with your specific agent details
2. **Add/remove test cases** based on your agent's functionality
3. **Customize pass criteria** to match your organization's standards
4. **Add department-specific tests** if you have unique requirements
5. **Include integration tests** if agent connects to external systems
6. **Schedule re-testing** after any agent updates or changes

---

## Testing Tips

✅ **Do:**
- Test with realistic data (real names, plausible dates)
- Test each branch in conditional logic
- Test with different user personas
- Document everything (pass and fail)
- Re-test after every fix
- Get feedback from actual users

❌ **Don't:**
- Test only the happy path
- Skip edge cases and error scenarios
- Use production email addresses in testing
- Approve without UAT feedback
- Deploy without fixing critical bugs

---

## Resources

- **Copilot Studio Documentation:** [Link to Microsoft docs]
- **Bug Tracking System:** [Your system link]
- **Test Data Repository:** [Where test data is stored]
- **Contact for Questions:** [Your contact info]

---

**End of Test Plan Template**

*This template is designed for business users testing Microsoft Copilot agents. Modify as needed for your specific use case.*
