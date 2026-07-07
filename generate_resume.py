from fpdf import FPDF

class MyPDF(FPDF):
    def header(self):
        pass

    def footer(self):
        pass

def create_resume():
    pdf = MyPDF()
    pdf.add_page()
    
    # Fonts
    pdf.set_font("Helvetica", "B", 24)
    
    # Title / Name
    pdf.set_text_color(44, 62, 80)
    pdf.cell(0, 15, "SUBHAM PARIDA", new_x="LMARGIN", new_y="NEXT", align="C")
    
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(52, 73, 94)
    # Contact info
    pdf.cell(0, 6, "Bhubaneswar, Odisha | +91 6370498205 | subhamparida2002r@gmail.com", new_x="LMARGIN", new_y="NEXT", align="C")
    pdf.cell(0, 6, "LinkedIn: linkedin.com/in/subhamparida | GitHub: github.com/subhamparida-dev", new_x="LMARGIN", new_y="NEXT", align="C")
    
    pdf.ln(3)
    
    def add_section(title):
        pdf.set_font("Helvetica", "B", 13)
        pdf.set_text_color(41, 128, 185)
        pdf.cell(0, 7, title, new_x="LMARGIN", new_y="NEXT")
        # Add a line
        pdf.set_draw_color(189, 195, 199)
        pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 190, pdf.get_y())
        pdf.ln(2)

    # ---------------- Career Objective ----------------
    add_section("CAREER OBJECTIVE")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(44, 62, 80)
    text = (
        "Motivated and detail-oriented Computer Science student seeking opportunities as a Backend / "
        "Full Stack Developer or Software Developer to apply programming skills, build scalable applications, "
        "and gain real-world experience in software development."
    )
    pdf.multi_cell(0, 5, text)
    pdf.ln(4)
    
    # ---------------- Education ----------------
    add_section("EDUCATION")
    pdf.set_font("Helvetica", "B", 11)
    pdf.cell(140, 5, "B.Tech in Computer Science & Engineering")
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(50, 5, "Currently in 3rd Year", align="R", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(140, 5, "ITER, SOA University, Bhubaneswar")
    pdf.set_font("Helvetica", "B", 10)
    pdf.cell(50, 5, "CGPA: 8.0", align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)

    # ---------------- Technical Skills ----------------
    add_section("TECHNICAL SKILLS")
    pdf.set_font("Helvetica", "B", 10)
    pdf.cell(50, 5, "Full-Stack Development:")
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 5, "Python, Java, JavaScript, Dart, Django, PostgreSQL, Firebase, Git", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font("Helvetica", "B", 10)
    pdf.cell(50, 5, "AI & Automation:")
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 5, "AI Coding Agents, Model Context Protocol (MCP), LLMs, Browser Automation", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Helvetica", "B", 10)
    pdf.cell(50, 5, "Growth & Strategy:")
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 5, "Meta Ads, On-ground Marketing, Branding, Graphic Design, Acquisition", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font("Helvetica", "B", 10)
    pdf.cell(50, 5, "Relevant Coursework:")
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 5, "Software Engineering Principles, Data Structures and Algorithms", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)

    # ---------------- Experience & Projects ----------------
    add_section("EXPERIENCE & PROJECTS")
    
    pdf.set_font("Helvetica", "B", 11)
    pdf.cell(0, 5, "Palo Alto Cybersecurity Academy Intern", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    palo_alto_text = (
        "- Completed a comprehensive 8-week cybersecurity academy program.\n"
        "- Developed competency in network security, cloud security, security operations, and the integration of AI within threat prevention.\n"
        "- Technologies: Cybersecurity Fundamentals, Network, Cloud, SecOps, AI"
    )
    pdf.multi_cell(0, 5, palo_alto_text)
    pdf.ln(3)

    pdf.set_font("Helvetica", "B", 11)
    pdf.cell(0, 5, "Airtel Cybersecurity Virtual Intern", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    airtel_text = (
        "- Analyzed telecom security frameworks, threat assessment flows, and defensive infrastructure strategies.\n"
        "- Technologies: Threat Modeling, Risk Assessment, Security Auditing"
    )
    pdf.multi_cell(0, 5, airtel_text)
    pdf.ln(3)

    pdf.set_font("Helvetica", "B", 11)
    pdf.cell(0, 5, "Founder & CEO - LocalServe India", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    localserve_text = (
        "- Solo-built and deployed the entire hyperlocal home-service platform end-to-end on DigitalOcean.\n"
        "- Designed Django admin dashboard, 25+ APIs, and engineered Flutter customer search autocomplete inputs.\n"
        "- Technologies: Django, Python, Flutter, Dart, PostgreSQL"
    )
    pdf.multi_cell(0, 5, localserve_text)
    pdf.ln(3)

    pdf.set_font("Helvetica", "B", 11)
    pdf.cell(0, 5, "E-Commerce Platform", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    ecommerce_text = (
        "- A full-stack e-commerce solution built with Django and Python, featuring secure payment integration and a dynamic product catalog.\n"
        "- Technologies: Django, Python, HTML5, CSS3"
    )
    pdf.multi_cell(0, 5, ecommerce_text)
    pdf.ln(4)

    # ---------------- Certifications & Strengths ----------------
    add_section("CERTIFICATIONS & STRENGTHS")
    pdf.set_font("Helvetica", "", 10)
    combined_strengths = (
        "- Certifications: Palo Alto Cybersecurity Academy Credential, Airtel Cybersecurity Virtual Internship,\n"
        "  Python Core (Python Institute), Django Web Dev (Meta), Flutter Architecture (Udemy), DSA (NPTEL).\n"
        "- Technical Strengths: Quick learner, strong analytical, threat analysis, backend architecture focus.\n"
        "- Extracurriculars: Active participant in technical symposiums and various coding challenges."
    )
    pdf.multi_cell(0, 5, combined_strengths)
    pdf.ln(4)

    # ---------------- Languages ----------------
    add_section("LANGUAGES")
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 5, "English (Fluent)  |  Hindi (Conversational)  |  Odia (Native)", new_x="LMARGIN", new_y="NEXT")

    # Save to file
    pdf.output("resume.pdf")

if __name__ == "__main__":
    create_resume()
