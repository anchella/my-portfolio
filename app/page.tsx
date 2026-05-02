import React from "react";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Georgia, serif",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 48px",
          borderBottom: "0.5px solid #e8e8e8",
          background: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            color: "#1a1a1a",
            letterSpacing: "0.02em",
          }}
        >
          Rajinikanth Anchella
        </span>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["About", "Skills", "Experience", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontSize: "12px",
                color: "#888",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            style={{
              fontSize: "11px",
              padding: "8px 20px",
              border: "0.5px solid #1a1a1a",
              color: "#1a1a1a",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              background: "#fff",
            }}
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* HERO PHOTO */}
      <div
        style={{
          width: "100%",
          height: "580px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile.jpg"
          alt="Rajinikanth Anchella"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "40px 48px",
            background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "48px",
              color: "#fff",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Rajinikanth Anchella
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginTop: "8px",
            }}
          >
            Test Automation Expert &nbsp;·&nbsp; Sogeti, Part of Capgemini
            &nbsp;·&nbsp; Lelystad, NL
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div
        id="about"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderBottom: "0.5px solid #e8e8e8",
        }}
      >
        <div style={{ padding: "48px", borderRight: "0.5px solid #e8e8e8" }}>
          <div
            style={{
              fontSize: "10px",
              color: "#888",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              marginBottom: "20px",
            }}
          >
            About
          </div>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "16px",
              color: "#1a1a1a",
              lineHeight: 1.85,
              marginBottom: "16px",
            }}
          >
            I help financial institutions build scalable QA systems that reduce
            release risk and accelerate delivery. With 13+ years of experience
            across banking and insurance, I’ve designed automation and
            performance testing solutions that improve reliability, streamline
            testing cycles, and support high-volume enterprise systems. I also
            lead QA transformation efforts—enabling Agile teams, mentoring
            engineers, and implementing best practices that scale across
            organizations.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "16px",
              color: "#1a1a1a",
              lineHeight: 1.85,
            }}
          >
            Known for driving Agile practices within cross-functional Scrum
            teams, I have led automation and performance testing initiatives,
            trained teams for greater autonomy, and established best practices
            that elevate quality across Banking & Insurance.
          </p>
        </div>
        <div
          style={{
            padding: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignContent: "start",
          }}
        >
          {[
            { num: "13+", label: "Years experience" },
            { num: "3+", label: "Enterprise clients" },
            { num: "10+", label: "Tools mastered" },
            { num: "3+", label: "Certifications" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "40px",
                  color: "#1a1a1a",
                  fontWeight: 400,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#888",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  marginTop: "4px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div
        id="skills"
        style={{ padding: "48px", borderBottom: "0.5px solid #e8e8e8" }}
      >
        <div
          style={{
            fontSize: "10px",
            color: "#888",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            marginBottom: "28px",
          }}
        >
          Core Skills
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {[
            { label: "Selenium WebDriver", primary: true },
            { label: "Apache JMeter", primary: true },
            { label: "Postman / Newman", primary: true },
            { label: "NeoLoad", primary: true },
            { label: "LoadRunner", primary: true },
            { label: "HP UFT / QTP", primary: true },
            { label: "BDD / Cucumber", primary: true },
            { label: "Karate Framework", primary: true },
            { label: "Robot Framework", primary: true },
            { label: "Azure DevOps", primary: true },
            { label: "AWS", primary: true },
            { label: "Jenkins", primary: true },
            { label: "Java", primary: true },
            { label: "JavaScript", primary: true },
            { label: "SQL", primary: true },
            { label: "Git", primary: true },
            { label: "Agile / Scrum", primary: true },
            { label: "API Testing", primary: true },
          ].map((s) => (
            <span
              key={s.label}
              style={{
                fontSize: "12px",
                padding: "6px 14px",
                border: s.primary ? "0.5px solid #1a1a1a" : "0.5px solid #ddd",
                color: s.primary ? "#1a1a1a" : "#666",
                letterSpacing: "0.04em",
                fontFamily: "Arial, sans-serif",
                fontWeight: s.primary ? 500 : 400,
              }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div style={{ padding: "48px", borderBottom: "0.5px solid #e8e8e8" }}>
        <div
          style={{
            fontSize: "10px",
            color: "#888",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            marginBottom: "28px",
          }}
        >
          Certifications
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {[
            "Microsoft Certified: Azure Fundamentals",
            "ISTQB Certified Tester",
            "Scrum.org Professional Scrum Master I",
            "Tricentis Tosca Fundamentals (AS1)",
          ].map((cert) => (
            <div
              key={cert}
              style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#C8A96E",
                  marginTop: "7px",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "13px",
                  color: "#444",
                  lineHeight: 1.6,
                }}
              >
                {cert}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div
        id="experience"
        style={{ padding: "48px", borderBottom: "0.5px solid #e8e8e8" }}
      >
        <div
          style={{
            fontSize: "10px",
            color: "#888",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            marginBottom: "28px",
          }}
        >
          Experience
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "36px",
          }}
        >
          {[
            {
              role: "Performance Test Engineer",
              client: "CBR",
              period: "Jan 2025 – May 2025",
              tags: ["JMeter", "LoadRunner", "Performance Testing"],
            },
            {
              role: "Lead Test Automation Consultant",
              client: "ABN AMRO",
              period: "Aug 2019 – Oct 2024",
              tags: ["Selenium", "NeoLoad", "Azure DevOps", "AWS"],
            },
            {
              role: "Senior Test Automation Expert",
              client: "ABN AMRO",
              period: "Sep 2018 – Jul 2019",
              tags: ["IBM MQ", "ISO 20022", "Leadership"],
            },
            {
              role: "Senior Test Automation Engineer",
              client: "ABN AMRO",
              period: "Feb 2016 – Aug 2018",
              tags: ["HP UFT", "VBScript", "Jenkins"],
            },
            {
              role: "Senior Agile Test Automation Consultant",
              client: "ABN AMRO",
              period: "Mar 2014 – Jul 2015",
              tags: ["Selenium Grid", "Java", "BDD"],
            },
            {
              role: "Test Automation Engineer",
              client: "Zurich UK",
              period: "Jul 2012 – Feb 2014",
              tags: ["HP UFT", "VBScript", "HP ALM"],
            },
          ].map((e) => (
            <div key={e.role + e.client}>
              <div
                style={{
                  fontSize: "11px",
                  color: "#C8A96E",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  marginBottom: "4px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {e.client}
              </div>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "16px",
                  color: "#1a1a1a",
                  marginBottom: "4px",
                }}
              >
                {e.role}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#aaa",
                  fontFamily: "Arial, sans-serif",
                  marginBottom: "10px",
                }}
              >
                {e.period}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {e.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      padding: "2px 8px",
                      border: "0.5px solid #e8e8e8",
                      color: "#888",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPANIES & CLIENTS */}
      <div style={{ padding: "48px", borderBottom: "0.5px solid #e8e8e8" }}>
        <div
          style={{
            fontSize: "10px",
            color: "#888",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            marginBottom: "28px",
          }}
        >
          Companies & Clients
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
            alignItems: "center",
          }}
        >
          {[
            { src: "/capgemini.png", alt: "Capgemini" },
            { src: "/sogeti.png", alt: "Sogeti" },
            { src: "/abnamro.jpg", alt: "ABN AMRO" },
            { src: "/zurich.png", alt: "Zurich" },
            { src: "/rabo.jpg", alt: "Rabobank" },
            { src: "/cbr.jpg", alt: "CBR" },
          ].map((logo) => (
            <div
              key={logo.alt}
              style={{
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "0.5px solid #e8e8e8",
                padding: "12px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "36px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div
        id="contact"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <div style={{ padding: "48px", borderRight: "0.5px solid #e8e8e8" }}>
          <div
            style={{
              fontSize: "10px",
              color: "#888",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              marginBottom: "20px",
            }}
          >
            Contact
          </div>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "28px",
              color: "#1a1a1a",
              lineHeight: 1.3,
              marginBottom: "16px",
            }}
          >
            Let's build quality together.
          </div>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "13px",
              color: "#888",
              lineHeight: 1.8,
            }}
          >
            Open to QA consulting, automation leadership, and performance
            testing engagements across Banking & Insurance in the Netherlands
            and beyond.
          </p>
        </div>
        <div style={{ padding: "48px" }}>
          {[
            {
              label: "LinkedIn",
              val: "Rajinikanth Anchella",
              href: "https://www.linkedin.com/in/rajinikanthanchella/",
            },
            {
              label: "Email",
              val: "rajinikanth.anchella@gmail.com",
              href: "mailto:rajinikanth.anchella@gmail.com",
            },
            {
              label: "GitHub",
              val: "github.com/anchella",
              href: "https://github.com/anchella",
            },
            { label: "Resume", val: "Download CV — PDF", href: "/cv.pdf" },
          ].map((c, i, arr) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
                borderBottom:
                  i < arr.length - 1 ? "0.5px solid #e8e8e8" : "none",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: "#888",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {c.label}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "#1a1a1a",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {c.val}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          padding: "20px 48px",
          borderTop: "0.5px solid #e8e8e8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            color: "#aaa",
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
            fontFamily: "Arial, sans-serif",
          }}
        >
          © 2026 Rajinikanth Anchella
        </span>
        <span
          style={{
            fontSize: "10px",
            color: "#aaa",
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
            fontFamily: "Arial, sans-serif",
          }}
        >
          rajinikanthanchella.com
        </span>
      </div>
    </main>
  );
}
