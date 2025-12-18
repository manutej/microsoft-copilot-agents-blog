#!/usr/bin/env python3
"""
Generate Foundation Arc Diagrams (Blogs 1-3)
Using NanoBanana Pro Model for Production Quality

Generates 6-9 key diagrams across Blogs 1-3:
- Blog 1: AI Agent vs Traditional Chatbot, Copilot Studio Interface
- Blog 2: FAQ Agent Architecture, Conversation Node Flow
- Blog 3: Knowledge Sources Types, Generative AI Answer Process
"""

import asyncio
import sys
import os
from pathlib import Path
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables from NanoBanana .env
load_dotenv('/Users/manu/Documents/LUXOR/PROJECTS/nanobanana-repo/.env')

# Add NanoBanana to path
sys.path.insert(0, '/Users/manu/Documents/LUXOR/PROJECTS/nanobanana-repo')

from src.gemini_client import GeminiClient

# Configuration
OUTPUT_DIR = Path('/Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents/images')
REPORT_DIR = Path('/Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents/validation')
MODEL = "pro"  # Use Pro model for production quality

# Design specifications from FOUNDATION-ARC-DIAGRAMS.md
DESIGN_SPEC = {
    "color_scheme": "#0078D4 (Copilot Blue), #50E6FF (Accent), #FFFFFF (White), #F3F2F1 (Background)",
    "font": "Segoe UI, clean sans-serif",
    "style": "Professional business diagram, clean minimalist design",
    "accessibility": "WCAG 2.1 AA compliant, sufficient contrast ratios",
    "resolution": "4K resolution, production quality for technical blog"
}

# Diagram definitions
DIAGRAMS = {
    "blog_01": [
        {
            "name": "ai-agent-vs-chatbot",
            "title": "AI Agent vs Traditional Chatbot",
            "prompt": """Professional business diagram comparing AI Agent vs Traditional Chatbot in Copilot Blue (#0078D4) color scheme.

Left side (Traditional Chatbot):
- Icon: Simple chat bubble
- Characteristics: Keyword matching, Fixed responses, No context, Linear flow
- User interaction: Rigid, limited to programmed phrases
- Example: "Type 'PTO' for vacation policy"

Right side (AI Agent):
- Icon: Brain/intelligence symbol
- Characteristics: Natural language understanding, Adaptive responses, Context aware, Multimodal
- User interaction: Conversational, understands intent
- Example: "Tell me about time off" → Intelligent response

Visual elements:
- Split screen layout with clear dividing line
- Icons for each type in Copilot Blue
- Bullet points in clean Segoe UI font
- Arrows showing interaction flow
- Clean white background (#F3F2F1)
- 4K resolution, WCAG 2.1 AA compliant contrast

Professional, minimalist design for technical blog."""
        },
        {
            "name": "copilot-studio-interface",
            "title": "Copilot Studio Interface Overview",
            "prompt": """Professional business diagram showing Microsoft Copilot Studio interface layout in Copilot Blue (#0078D4) color scheme.

Main sections (arranged as dashboard layout):
1. Top Navigation Bar:
   - Home, Agents, Topics, Entities, Analytics tabs
   - Copilot Blue (#0078D4) accent

2. Left Sidebar:
   - Agent list
   - Settings icon
   - Knowledge sources icon
   - Publish button

3. Center Canvas:
   - Topic editor workspace
   - Visual flow diagram area
   - Node-based conversation design

4. Right Panel:
   - Test chat window
   - Agent preview
   - Properties panel

Visual elements:
- Clean layout with labeled sections
- Segoe UI font for all labels
- Copilot Blue (#0078D4) for headers and accents
- Light gray (#F3F2F1) background
- Icons for each section (simple, minimalist)
- Arrows indicating workflow direction
- 4K resolution, professional design
- WCAG 2.1 AA compliant

Modern, business-ready interface diagram."""
        }
    ],
    "blog_02": [
        {
            "name": "faq-agent-architecture",
            "title": "FAQ Agent Architecture",
            "prompt": """Professional business diagram showing FAQ Agent architecture in Copilot Blue (#0078D4) color scheme.

Architecture layers (top to bottom):

1. User Layer:
   - User icon with speech bubble
   - "Employee asks question"

2. Agent Layer (Copilot Blue #0078D4):
   - Natural Language Understanding
   - Intent Recognition
   - Topic Routing

3. Topic Layer:
   - FAQ Topic 1: PTO Policy
   - FAQ Topic 2: Benefits
   - FAQ Topic 3: Remote Work
   - (Arranged horizontally)

4. Response Layer:
   - Pre-authored responses
   - Message nodes
   - Adaptive cards

5. Output Layer:
   - Formatted response to user
   - With citations/links

Visual elements:
- Vertical flow from top to bottom
- Arrows showing data flow
- Each layer clearly labeled in Segoe UI font
- Copilot Blue (#0078D4) for agent components
- Accent blue (#50E6FF) for topics
- Clean white background (#F3F2F1)
- Icons for each layer (user, brain, documents, message)
- 4K resolution, WCAG 2.1 AA compliant

Professional architecture diagram for technical audience."""
        },
        {
            "name": "conversation-node-flow",
            "title": "Conversation Node Flow",
            "prompt": """Professional business diagram showing conversation node flow in Copilot Blue (#0078D4) color scheme.

Flow diagram (left to right):

1. Trigger Node (start):
   - Icon: Lightning bolt
   - Label: "User says: 'What's the PTO policy?'"
   - Copilot Blue (#0078D4)

2. Decision Node:
   - Icon: Diamond shape
   - Label: "Check employment type"
   - Branches: Full-time / Part-time
   - Accent blue (#50E6FF)

3a. Full-time Path:
   - Message Node: "Full-time employees receive 15 days PTO"
   - Icon: Document

3b. Part-time Path:
   - Message Node: "Part-time PTO is prorated based on hours"
   - Icon: Document

4. Confirmation Node:
   - Icon: Checkmark
   - Label: "Can I help with anything else?"
   - Copilot Blue (#0078D4)

Visual elements:
- Left-to-right flow with clear arrows
- Nodes as rounded rectangles
- Icons inside each node
- Segoe UI font for all labels
- Copilot Blue (#0078D4) for primary nodes
- Accent blue (#50E6FF) for decision nodes
- Clean white background (#F3F2F1)
- Dotted line for branches
- 4K resolution, WCAG 2.1 AA compliant

Clean, professional flowchart design."""
        }
    ],
    "blog_03": [
        {
            "name": "knowledge-sources-types",
            "title": "Knowledge Sources Types",
            "prompt": """Professional business diagram showing 6 types of knowledge sources in Copilot Blue (#0078D4) color scheme.

Layout: 2×3 grid of knowledge source types

Row 1:
1. SharePoint Sites:
   - Icon: SharePoint logo
   - Label: "SharePoint Sites & Document Libraries"
   - Subtext: "Enterprise documents (.docx, .pdf, .xlsx)"

2. OneDrive:
   - Icon: OneDrive cloud
   - Label: "OneDrive for Business"
   - Subtext: "Personal/team folders"

3. Uploaded Files:
   - Icon: Upload arrow
   - Label: "Uploaded Files"
   - Subtext: "Dataverse storage (max 10 files)"

Row 2:
4. Public Websites:
   - Icon: Globe/web
   - Label: "Public Websites"
   - Subtext: "External references via Bing"

5. Azure AI Search:
   - Icon: Search magnifying glass
   - Label: "Azure AI Search"
   - Subtext: "Enterprise scale (1,000+ docs)"

6. Real-Time Connectors:
   - Icon: Plug/connection
   - Label: "Real-Time Connectors"
   - Subtext: "ServiceNow, Zendesk, Salesforce"

Visual elements:
- 2×3 grid layout with equal spacing
- Each box: Rounded rectangle in Copilot Blue (#0078D4)
- Icons in white or accent blue (#50E6FF)
- Segoe UI font for all text
- Clean white background (#F3F2F1)
- Subtle shadows for depth
- 4K resolution, WCAG 2.1 AA compliant

Professional, comprehensive overview diagram."""
        },
        {
            "name": "generative-ai-process",
            "title": "Generative AI Answer Process",
            "prompt": """Professional business diagram showing 5-step generative AI answer process in Copilot Blue (#0078D4) color scheme.

Sequential flow (top to bottom or left to right):

Step 1: Indexing
- Icon: Database with refresh arrow
- Label: "Step 1: Indexing"
- Description: "Agent reads and indexes all content from knowledge sources"
- Note: "Happens once, then on schedule"

Step 2: Question Interpretation
- Icon: Ear/listening symbol
- Label: "Step 2: Question Interpretation"
- Description: "User asks: 'How much vacation do I get?'"
- AI identifies intent and key concepts

Step 3: Content Retrieval
- Icon: Search magnifying glass
- Label: "Step 3: Content Retrieval"
- Description: "AI searches index for relevant passages"
- Returns top 3-5 most relevant sections

Step 4: Answer Generation
- Icon: Brain/AI symbol
- Label: "Step 4: Answer Generation"
- Description: "AI synthesizes information into conversational answer"
- Includes citations to source documents

Step 5: Content Moderation
- Icon: Shield/checkmark
- Label: "Step 5: Content Moderation"
- Description: "Checks appropriateness, alignment with sources"
- Prevents hallucinations

Visual elements:
- Sequential flow with large arrows between steps
- Each step: Rounded rectangle in Copilot Blue (#0078D4)
- Icons in white or accent blue (#50E6FF)
- Segoe UI font for all text
- Step numbers prominently displayed
- Clean white background (#F3F2F1)
- 4K resolution, WCAG 2.1 AA compliant

Clear, educational process diagram."""
        }
    ]
}


async def generate_diagram(client: GeminiClient, blog_id: str, diagram: dict, output_dir: Path) -> dict:
    """Generate a single diagram using NanoBanana Pro model."""

    filename = f"{blog_id}-{diagram['name']}.png"
    output_path = output_dir / filename

    print(f"\n{'='*60}")
    print(f"Generating: {diagram['title']}")
    print(f"Blog: {blog_id}")
    print(f"Output: {output_path}")
    print(f"{'='*60}\n")

    try:
        # Generate image using Pro model
        result = await client.generate_image(
            prompt=diagram['prompt'],
            model=MODEL
        )

        if result and 'image_data' in result:
            # Save image
            with open(output_path, 'wb') as f:
                f.write(result['image_data'])

            # Get file size
            file_size = output_path.stat().st_size

            print(f"✅ SUCCESS: {filename}")
            print(f"   Size: {file_size:,} bytes ({file_size/1024:.1f} KB)")

            return {
                'blog': blog_id,
                'name': diagram['name'],
                'title': diagram['title'],
                'filename': filename,
                'path': str(output_path),
                'size_bytes': file_size,
                'status': 'success',
                'cost': 0.12  # Pro model cost per image
            }
        else:
            print(f"❌ FAILED: {filename} - No image data returned")
            return {
                'blog': blog_id,
                'name': diagram['name'],
                'title': diagram['title'],
                'filename': filename,
                'status': 'failed',
                'error': 'No image data returned'
            }

    except Exception as e:
        print(f"❌ ERROR: {filename} - {str(e)}")
        return {
            'blog': blog_id,
            'name': diagram['name'],
            'title': diagram['title'],
            'filename': filename,
            'status': 'error',
            'error': str(e)
        }


async def generate_all_diagrams():
    """Generate all Foundation Arc diagrams."""

    # Ensure output directory exists
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    REPORT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"\n{'='*60}")
    print("FOUNDATION ARC DIAGRAM GENERATION")
    print(f"{'='*60}")
    print(f"Output Directory: {OUTPUT_DIR}")
    print(f"Model: {MODEL} (${0.12} per image)")
    print(f"Total Diagrams: {sum(len(diagrams) for diagrams in DIAGRAMS.values())}")
    print(f"{'='*60}\n")

    results = []

    async with GeminiClient() as client:
        for blog_id, diagrams in DIAGRAMS.items():
            print(f"\n{'='*60}")
            print(f"BLOG: {blog_id.upper()}")
            print(f"Diagrams: {len(diagrams)}")
            print(f"{'='*60}")

            for diagram in diagrams:
                result = await generate_diagram(client, blog_id, diagram, OUTPUT_DIR)
                results.append(result)

                # Small delay between generations
                await asyncio.sleep(2)

    # Generate report
    generate_report(results)

    return results


def generate_report(results: list):
    """Generate comprehensive generation report."""

    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Calculate statistics
    total = len(results)
    successful = sum(1 for r in results if r['status'] == 'success')
    failed = sum(1 for r in results if r['status'] in ['failed', 'error'])
    total_size = sum(r.get('size_bytes', 0) for r in results if r['status'] == 'success')
    total_cost = sum(r.get('cost', 0) for r in results if r['status'] == 'success')

    # Group by blog
    by_blog = {}
    for result in results:
        blog = result['blog']
        if blog not in by_blog:
            by_blog[blog] = []
        by_blog[blog].append(result)

    # Generate report
    report = f"""# Foundation Arc Diagram Generation Report

**Generated**: {timestamp}
**Model**: {MODEL} (Pro)
**Cost per Image**: $0.12

---

## Summary

| Metric | Value |
|--------|-------|
| **Total Diagrams** | {total} |
| **Successful** | {successful} ✅ |
| **Failed** | {failed} ❌ |
| **Total Size** | {total_size:,} bytes ({total_size/1024/1024:.2f} MB) |
| **Total Cost** | ${total_cost:.2f} |
| **Success Rate** | {(successful/total*100):.1f}% |

---

## Diagrams by Blog

"""

    for blog_id in sorted(by_blog.keys()):
        blog_results = by_blog[blog_id]
        blog_successful = sum(1 for r in blog_results if r['status'] == 'success')
        blog_size = sum(r.get('size_bytes', 0) for r in blog_results if r['status'] == 'success')
        blog_cost = sum(r.get('cost', 0) for r in blog_results if r['status'] == 'success')

        report += f"""### {blog_id.upper()}

**Diagrams**: {len(blog_results)} | **Successful**: {blog_successful} | **Size**: {blog_size:,} bytes | **Cost**: ${blog_cost:.2f}

| Diagram | Title | Filename | Status | Size |
|---------|-------|----------|--------|------|
"""

        for result in blog_results:
            status_icon = "✅" if result['status'] == 'success' else "❌"
            size = f"{result.get('size_bytes', 0):,} bytes" if result['status'] == 'success' else "N/A"
            report += f"| {result['name']} | {result['title']} | {result['filename']} | {status_icon} {result['status']} | {size} |\n"

        report += "\n"

    # Detailed results
    report += """---

## Detailed Results

"""

    for result in results:
        report += f"""### {result['title']}

- **Blog**: {result['blog']}
- **Filename**: `{result['filename']}`
- **Status**: {result['status']}
"""

        if result['status'] == 'success':
            report += f"- **Size**: {result['size_bytes']:,} bytes ({result['size_bytes']/1024:.1f} KB)\n"
            report += f"- **Cost**: ${result['cost']:.2f}\n"
            report += f"- **Path**: `{result['path']}`\n"

        if 'error' in result:
            report += f"- **Error**: {result['error']}\n"

        report += "\n"

    # Embedding instructions
    report += """---

## Embedding Instructions

### Blog 01: Introduction to Copilot Agents

```markdown
<!-- AI Agent vs Traditional Chatbot -->
![AI Agent vs Traditional Chatbot](../images/01-ai-agent-vs-chatbot.png)

<!-- Copilot Studio Interface Overview -->
![Copilot Studio Interface Overview](../images/01-copilot-studio-interface.png)
```

### Blog 02: Building Your First Conversational Agent

```markdown
<!-- FAQ Agent Architecture -->
![FAQ Agent Architecture](../images/02-faq-agent-architecture.png)

<!-- Conversation Node Flow -->
![Conversation Node Flow](../images/02-conversation-node-flow.png)
```

### Blog 03: Building Knowledge-Powered Agents

```markdown
<!-- Knowledge Sources Types -->
![Knowledge Sources Types](../images/03-knowledge-sources-types.png)

<!-- Generative AI Answer Process -->
![Generative AI Answer Process](../images/03-generative-ai-process.png)
```

---

## Next Steps

1. **Validate Images**: Review each generated diagram for quality and accuracy
2. **Embed in Blogs**: Add markdown image references to appropriate blog sections
3. **Test Rendering**: Build Next.js site and verify image display
4. **Accessibility**: Verify alt text and contrast ratios
5. **Performance**: Optimize image sizes if needed (currently 4K resolution)

---

## Cost Analysis

| Item | Quantity | Unit Cost | Total |
|------|----------|-----------|-------|
| Pro Model Images | {successful} | $0.12 | ${total_cost:.2f} |
| **TOTAL** | | | **${total_cost:.2f}** |

---

*Report generated: {timestamp}*
"""

    # Save report
    report_path = REPORT_DIR / 'DIAGRAM-GENERATION-REPORT-FOUNDATION.md'
    with open(report_path, 'w') as f:
        f.write(report)

    print(f"\n{'='*60}")
    print("GENERATION COMPLETE")
    print(f"{'='*60}")
    print(f"Total Diagrams: {total}")
    print(f"Successful: {successful} ✅")
    print(f"Failed: {failed} ❌")
    print(f"Total Cost: ${total_cost:.2f}")
    print(f"\nReport saved: {report_path}")
    print(f"{'='*60}\n")


async def main():
    """Main execution."""
    try:
        results = await generate_all_diagrams()

        # Print summary
        successful = sum(1 for r in results if r['status'] == 'success')
        total = len(results)

        if successful == total:
            print(f"\n🎉 ALL DIAGRAMS GENERATED SUCCESSFULLY ({successful}/{total})")
            return 0
        elif successful > 0:
            print(f"\n⚠️  PARTIAL SUCCESS ({successful}/{total} diagrams)")
            return 1
        else:
            print(f"\n❌ GENERATION FAILED (0/{total} diagrams)")
            return 2

    except Exception as e:
        print(f"\n❌ FATAL ERROR: {str(e)}")
        import traceback
        traceback.print_exc()
        return 3


if __name__ == "__main__":
    exit_code = asyncio.run(main())
    sys.exit(exit_code)
