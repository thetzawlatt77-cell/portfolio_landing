from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Thet_Zaw_Latt_Senior_Flutter_CV.pdf"

NAVY = colors.HexColor("#173B4C")
BLUE = colors.HexColor("#17628E")
TEXT = colors.HexColor("#34383C")
MUTED = colors.HexColor("#737A80")
RULE = colors.HexColor("#A9BBC5")

PORTFOLIO = "https://portfolio-tzl.vercel.app"
LINKEDIN = "https://www.linkedin.com/in/thet-zaw-latt-57b848412/"
GITHUB = "https://github.com/thetzawlatt77-cell"


styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=22,
    leading=24,
    textColor=colors.HexColor("#102F3B"),
    spaceAfter=3,
)

title_style = ParagraphStyle(
    "Title",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=11.6,
    leading=14,
    textColor=BLUE,
    spaceAfter=1,
)

contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9.4,
    leading=12,
    textColor=TEXT,
    spaceAfter=5,
)

section_style = ParagraphStyle(
    "Section",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10.8,
    leading=12.5,
    textColor=NAVY,
    spaceBefore=4,
    spaceAfter=1,
)

body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.55,
    leading=10.5,
    textColor=TEXT,
    spaceAfter=2,
)

compact_style = ParagraphStyle(
    "Compact",
    parent=body_style,
    spaceAfter=0.7,
)

role_style = ParagraphStyle(
    "Role",
    parent=body_style,
    fontName="Helvetica-Bold",
    fontSize=9.4,
    leading=11,
    spaceBefore=2.2,
    spaceAfter=0.8,
)

project_style = ParagraphStyle(
    "Project",
    parent=role_style,
    textColor=NAVY,
    spaceBefore=3,
)

footer_style = ParagraphStyle(
    "Footer",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.3,
    leading=8,
    alignment=TA_CENTER,
    textColor=colors.HexColor("#8A9297"),
)


def section(title: str):
    return [
        Paragraph(title, section_style),
        HRFlowable(width="100%", thickness=0.55, color=RULE, spaceBefore=0, spaceAfter=3),
    ]


def experience(period: str, role: str, company: str, bullets: list[str], project: str | None = None):
    content = [
        Paragraph(
            f'<font color="#17628E">{period}</font> &nbsp;|&nbsp; {role} - {company}',
            role_style,
        )
    ]
    if project:
        content.append(Paragraph(f'<b><font color="#737A80">Project:</font></b> {project}', compact_style))
    content.extend(Paragraph(f"- {item}", compact_style) for item in bullets)
    return content


def selected_project(title: str, label: str, description: str, url: str):
    return [
        Paragraph(f"{title} &nbsp;|&nbsp; {label}", project_style),
        Paragraph(
            f'{description} &nbsp; <link href="{url}" color="#17628E"><u>Portfolio</u></link>',
            compact_style,
        ),
    ]


def footer(canvas, doc):
    canvas.saveState()
    footer = Paragraph("Thet Zaw Latt &nbsp;|&nbsp; Senior Flutter Developer &amp; Product Engineer", footer_style)
    width, height = footer.wrap(doc.width, 0.3 * inch)
    footer.drawOn(canvas, doc.leftMargin, 0.31 * inch)
    canvas.restoreState()


story = [
    Paragraph("Thet Zaw Latt", name_style),
    Paragraph("SENIOR FLUTTER DEVELOPER &nbsp;|&nbsp; PRODUCT ENGINEER", title_style),
    Paragraph(
        'Da Nang, Vietnam &nbsp;|&nbsp; 0942686025 &nbsp;|&nbsp; '
        '<link href="mailto:thetzawlatt46@gmail.com" color="#17628E">thetzawlatt46@gmail.com</link> &nbsp;|&nbsp; '
        f'<link href="{PORTFOLIO}" color="#17628E">Portfolio</link> &nbsp;|&nbsp; '
        f'<link href="{LINKEDIN}" color="#17628E">LinkedIn</link> &nbsp;|&nbsp; '
        f'<link href="{GITHUB}" color="#17628E">GitHub</link>',
        contact_style,
    ),
    *section("PROFESSIONAL SUMMARY"),
    Paragraph(
        "Senior Flutter Developer and product engineer with 5+ years of experience building and shipping production mobile applications "
        "for iOS and Android. Strong in Flutter/Dart, Firebase, REST APIs, Riverpod/Provider/GetX, architecture, testing, performance "
        "optimization, and end-to-end release. Experienced turning product ideas and Figma designs into polished user experiences, "
        "collaborating across backend, QA, and product teams, and delivering supporting web products with Next.js, TypeScript, Supabase, "
        "and AI-assisted workflows.",
        body_style,
    ),
    *section("CORE EXPERTISE"),
    Paragraph("<b><font color='#173B4C'>Mobile Engineering:</font></b> Flutter, Dart, iOS/Android delivery, responsive mobile UI, Firebase, REST APIs", compact_style),
    Paragraph("<b><font color='#173B4C'>Architecture &amp; State:</font></b> Riverpod, Provider, GetX, feature-first architecture, clean architecture, reusable components", compact_style),
    Paragraph("<b><font color='#173B4C'>Product &amp; Web:</font></b> Next.js, TypeScript, Supabase, responsive web, AI workflows, product UX", compact_style),
    Paragraph("<b><font color='#173B4C'>Quality &amp; Performance:</font></b> Unit testing, Flutter testing, debugging, performance optimization, error handling", compact_style),
    Paragraph("<b><font color='#173B4C'>Delivery &amp; Tools:</font></b> App Store, Google Play, TestFlight, Huawei AppGallery, Figma, Git/GitHub", compact_style),
    *section("PROFESSIONAL EXPERIENCE"),
    *experience(
        "06/2024 - Present",
        "Senior Flutter Developer",
        "Contract Projects / Freelance",
        [
            "Deliver contract Flutter applications from UI implementation and Firebase/API integration through debugging, testing, and release preparation.",
            "Completed the Cheers! Flutter rebuild with real-time collaborative flows, tasks, budgets, shared expenses, and Firebase-backed workflows.",
            "Provide supporting product delivery with Node.js, MongoDB, Next.js, and Tailwind CSS when projects require APIs, admin tooling, or web experiences.",
        ],
    ),
    *experience(
        "02/2024 - 06/2024",
        "Senior Flutter Developer",
        "Myanmar Impact Technologies",
        [
            "Spearheaded Flutter development with reliable cross-platform behavior across Android and iOS.",
            "Translated high-fidelity Figma designs into reusable production components and coordinated delivery with backend and QA teams.",
        ],
        "Rice Seller and Buyer Marketplace",
    ),
    *experience(
        "06/2023 - 09/2023",
        "Flutter Developer",
        "eTrade Myanmar",
        [
            "Built movie-streaming features, complex Figma-based UI, and API-driven state using GetX/Provider.",
            "Optimized loading performance by 20% and supported commercial App Store and Google Play publishing workflows.",
        ],
        "Movie Streaming Application",
    ),
    PageBreak(),
    *section("PROFESSIONAL EXPERIENCE - CONTINUED"),
    *experience(
        "03/2022 - 05/2023",
        "Flutter Developer",
        "Partner Associates Int'l Company Limited",
        [
            "Delivered production Flutter UI and feature workflows across authentication, enterprise ERP, and education products.",
            "Collaborated with stakeholders to ship maintainable, release-ready mobile experiences.",
        ],
        "Authenticator App, Office ERP App, Education App",
    ),
    *experience(
        "11/2019 - 03/2022",
        "Ionic and Flutter Developer",
        "Myanmar Information Technology",
        [
            "Developed and maintained mobile banking, digital wallet, and agent applications.",
            "Worked with secure API communication and data-handling requirements in a large professional development environment.",
        ],
        "Core Banking, Digital Wallet, Agent Applications",
    ),
    Spacer(1, 2),
    *section("SELECTED PROJECTS"),
    *selected_project(
        "Cheers! - Collaborative Event Planning &amp; Shared Finance App",
        "Featured Contract Project",
        "Rebuilt an existing MVP in Flutter with Firebase and Riverpod. Delivered real-time collaboration, tasks, budgets, shared expenses, member permissions, notification routing, and tested business logic.",
        f"{PORTFOLIO}/projects/cheers",
    ),
    *selected_project(
        "TripMate - AI-assisted Travel Planning",
        "Featured Product Build",
        "Built a responsive Next.js and Supabase product that creates editable AI-assisted itineraries, checklists, and budget estimates, with maps, weather, public share links, PDF export, and planned Flutter mobile support.",
        f"{PORTFOLIO}/projects/tripmate",
    ),
    *selected_project(
        "Dear You - Burmese Letter &amp; Song-request Experience",
        "Creative Product Platform",
        "Built a mobile-first Next.js and Supabase platform with a three-step letter submission flow, optional song details, Google and magic-link sign-in, owner status tracking, moderation, and public published letters.",
        f"{PORTFOLIO}/projects/dear-you",
    ),
    *selected_project(
        "QuizRush - Gamified Learning Product",
        "Full Product Delivery",
        "Delivered a quiz product spanning a Flutter mobile client, admin panel, and backend API with gamified learning flows.",
        f"{PORTFOLIO}/#projects",
    ),
    Spacer(1, 3),
    *section("EDUCATION"),
    Paragraph("<b><font color='#173B4C'>Monywa Technological University</font></b> &nbsp;|&nbsp; 12/2012 - 12/2018", role_style),
    Paragraph("Bachelor - Information Technology (BE.IT, B-Tech IT)", body_style),
]


doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=letter,
    rightMargin=42,
    leftMargin=42,
    topMargin=34,
    bottomMargin=43,
    title="Thet Zaw Latt - Senior Flutter Developer & Product Engineer CV",
    author="Thet Zaw Latt",
    subject="Senior Flutter Developer / Product Engineer",
    keywords="Flutter, Dart, Firebase, Riverpod, Next.js, Supabase, Product Engineer",
)

doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(f"Wrote {OUTPUT}")
