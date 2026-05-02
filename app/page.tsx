import React from "react";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#08090f",
        minHeight: "100vh",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
          borderBottom: "0.5px solid #16213e",
          background: "#08090f",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: "15px",
            fontWeight: "500",
            color: "#fff",
            letterSpacing: "0.04em",
          }}
        >
          R. <span style={{ color: "#C8A96E" }}>Anchella</span>
        </span>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {["About", "Skills", "Experience", "Clients", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            )
          )}
          <a
            href="/cv.pdf"
            target="_blank"
            style={{
              fontSize: "11px",
              padding: "7px 18px",
              borderRadius: "4px",
              background: "#C8A96E",
              color: "#08090f",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="about"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "480px",
        }}
      >
        {/* Left */}
        <div
          style={{
            padding: "52px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "0.5px solid #16213e",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              color: "#C8A96E",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "0.5px",
                background: "#C8A96E",
              }}
            />
            Current Employer :- Sogeti
          </div>

          <h1
            style={{
              fontSize: "38px",
              fontWeight: "500",
              color: "#fff",
              lineHeight: 1.18,
              marginBottom: "16px",
            }}
          >
            Senior Test Automation Expert Delivering Reliable, Scalable Quality
            Engineering Solutions
          </h1>

          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.8,
              marginBottom: "28px",
              maxWidth: "360px",
            }}
          >
            I am a Test Automation Expert with over 13 years of experience
            building scalable QA solutions for leading financial institutions in
            the Netherlands. From Selenium-driven automation to JMeter
            performance testing and Azure DevOps pipelines, I turn complex
            testing challenges into reliable, repeatable processes.
          </p>

          <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
            <a
              href="#experience"
              style={{
                fontSize: "12px",
                padding: "10px 22px",
                borderRadius: "4px",
                background: "#C8A96E",
                color: "#08090f",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              View Experience
            </a>
            <a
              href="mailto:rajinikanth.anchella@gmail.com"
              style={{
                fontSize: "12px",
                padding: "10px 22px",
                borderRadius: "4px",
                background: "transparent",
                color: "rgba(255,255,255,0.6)",
                border: "0.5px solid rgba(255,255,255,0.2)",
                textDecoration: "none",
              }}
            >
              Contact Me
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "11px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#1D9E75",
              }}
            />
            Ready to elevate your QA practice
          </div>
        </div>

        {/* Right — Full photo */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#0d0f1a",
            minHeight: "480px",
          }}
        >
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
            viewBox="0 0 400 480"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {[60, 120, 180, 240, 300, 360, 420].map((y: number) => (
              <line
                key={`h${y}`}
                x1="0"
                y1={y}
                x2="400"
                y2={y}
                stroke="#C8A96E"
                strokeWidth="0.3"
                opacity="0.15"
              />
            ))}
            {[60, 120, 180, 240, 300, 360].map((x: number) => (
              <line
                key={`v${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2="480"
                stroke="#C8A96E"
                strokeWidth="0.3"
                opacity="0.15"
              />
            ))}
            <circle
              cx="200"
              cy="240"
              r="120"
              fill="none"
              stroke="#C8A96E"
              strokeWidth="0.5"
              opacity="0.12"
            />
            <circle
              cx="200"
              cy="240"
              r="160"
              fill="none"
              stroke="#C8A96E"
              strokeWidth="0.5"
              opacity="0.08"
            />
          </svg>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="Rajinikanth Anchella"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "16px",
              background: "rgba(8,9,15,0.88)",
              border: "0.5px solid #16213e",
              borderRadius: "6px",
              padding: "10px 14px",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: "500", color: "#fff" }}>
              Rajinikanth Anchella
            </div>
            <div
              style={{ fontSize: "10px", color: "#C8A96E", marginTop: "2px" }}
            >
              Test Automation Expert · Lelystad, NL
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "0.5px solid #16213e",
          borderBottom: "0.5px solid #16213e",
        }}
      >
        {[
          { num: "13", sup: "+", label: "Years experience" },
          { num: "5", sup: "+", label: "Enterprise clients" },
          { num: "10", sup: "+", label: "Tools mastered" },
          { num: "3", sup: "+", label: "Certifications" },
        ].map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "18px 24px",
              textAlign: "center",
              borderRight: i < 3 ? "0.5px solid #16213e" : "none",
            }}
          >
            <div style={{ fontSize: "24px", fontWeight: "500", color: "#fff" }}>
              {s.num}
              <span style={{ fontSize: "14px", color: "#C8A96E" }}>
                {s.sup}
              </span>
            </div>
            <div
              style={{
                fontSize: "9px",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "3px",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* SKILLS + CERTIFICATIONS */}
      <div
        id="skills"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderBottom: "0.5px solid #16213e",
        }}
      >
        {/* Skills */}
        <div
          style={{ padding: "36px 40px", borderRight: "0.5px solid #16213e" }}
        >
          <div
            style={{
              fontSize: "9px",
              color: "#C8A96E",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "16px",
                height: "0.5px",
                background: "#C8A96E",
              }}
            />
            Expertise
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Core skills
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {[
              { label: "Selenium WebDriver", gold: true },
              { label: "Apache JMeter", gold: true },
              { label: "Postman / Newman", gold: true },
              { label: "NeoLoad", gold: true },
              { label: "LoadRunner", gold: true },
              { label: "HP UFT / QTP", gold: true },
              { label: "BDD / Cucumber", gold: false },
              { label: "Karate Framework", gold: false },
              { label: "Robot Framework", gold: false },
              { label: "Azure DevOps", gold: false },
              { label: "AWS", gold: false },
              { label: "Jenkins", gold: false },
              { label: "Java", gold: false },
              { label: "JavaScript", gold: false },
              { label: "SQL", gold: false },
              { label: "Git", gold: false },
              { label: "Agile / Scrum", gold: false },
              { label: "API Testing", gold: false },
            ].map((s) => (
              <span
                key={s.label}
                style={{
                  fontSize: "11px",
                  padding: "5px 12px",
                  borderRadius: "3px",
                  border: s.gold
                    ? "0.5px solid rgba(200,169,110,0.4)"
                    : "0.5px solid #16213e",
                  color: s.gold ? "#C8A96E" : "rgba(255,255,255,0.5)",
                  background: s.gold ? "rgba(200,169,110,0.08)" : "#0d0f1a",
                }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ padding: "36px 40px" }}>
          <div
            style={{
              fontSize: "9px",
              color: "#C8A96E",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "16px",
                height: "0.5px",
                background: "#C8A96E",
              }}
            />
            Credentials
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Certifications
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {[
              "Microsoft Certified: Azure Fundamentals",
              "ISTQB Certified Tester",
              "Scrum.org Professional Scrum Master I",
              "Tricentis Tosca Fundamentals (AS1)",
            ].map((cert) => (
              <div
                key={cert}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#C8A96E",
                    marginTop: "6px",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.5,
                  }}
                >
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div
        id="experience"
        style={{ padding: "36px 40px", borderBottom: "0.5px solid #16213e" }}
      >
        <div
          style={{
            fontSize: "9px",
            color: "#C8A96E",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "16px",
              height: "0.5px",
              background: "#C8A96E",
            }}
          />
          Career
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#fff",
            marginBottom: "24px",
          }}
        >
          Experience
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          {[
            {
              role: "Performance Test Engineer",
              client: "CBR",
              tags: ["JMeter", "LoadRunner", "Performance Testing"],
            },
            {
              role: "Lead Test Automation Consultant",
              client: "ABN AMRO",
              tags: ["Selenium", "Postman", "NeoLoad", "AWS", "Azure DevOps"],
            },
            {
              role: "Senior Test Automation Expert",
              client: "ABN AMRO",
              tags: ["Git", "IBM MQ", "ISO 20022", "Leadership"],
            },
            {
              role: "Senior Test Automation Engineer",
              client: "ABN AMRO",
              tags: ["HP UFT", "VBScript", "Jenkins", "Tricentis Tosca"],
            },
            {
              role: "Senior Agile Test Automation Consultant",
              client: "ABN AMRO",
              tags: ["Selenium Grid", "Java", "BDD", "Cucumber"],
            },
            {
              role: "Test Automation Engineer",
              client: "Zurich UK",
              tags: ["HP UFT", "VBScript", "HP ALM", "SQL"],
            },
          ].map((e, i, arr) => (
            <div
              key={e.role + e.client}
              style={{
                display: "flex",
                gap: "20px",
                paddingBottom: i < arr.length - 1 ? "24px" : "0",
                marginBottom: i < arr.length - 1 ? "24px" : "0",
                borderBottom:
                  i < arr.length - 1 ? "0.5px solid #16213e" : "none",
              }}
            >
              {/* Timeline */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                  width: "12px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "1.5px solid #C8A96E",
                    background: "#08090f",
                    flexShrink: 0,
                  }}
                />
                {i < arr.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      flex: 1,
                      background: "#16213e",
                      marginTop: "4px",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "4px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#fff",
                      }}
                    >
                      {e.role}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#C8A96E",
                        marginTop: "2px",
                      }}
                    >
                      {e.client}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.3)",
                      flexShrink: 0,
                      marginLeft: "16px",
                    }}
                  >
                    {e.period}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.7,
                    margin: "8px 0",
                  }}
                >
                  {e.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {e.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "9px",
                        padding: "2px 8px",
                        borderRadius: "3px",
                        background: "rgba(200,169,110,0.08)",
                        color: "#C8A96E",
                        border: "0.5px solid rgba(200,169,110,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CLIENTS */}
      {/* COMPANIES */}
      <div
        style={{ padding: "36px 40px", borderBottom: "0.5px solid #16213e" }}
      >
        <div
          style={{
            fontSize: "9px",
            color: "#C8A96E",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "16px",
              height: "0.5px",
              background: "#C8A96E",
            }}
          />
          Employer
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Companies I've worked for
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px",
            maxWidth: "400px",
          }}
        >
          {[
            { src: "/capgemini.png", alt: "Capgemini" },
            { src: "/sogeti.png", alt: "Sogeti" },
          ].map((logo) => (
            <div
              key={logo.alt}
              style={{
                background: "#ffffff",
                border: "0.5px solid #C8A96E",
                borderRadius: "8px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "40px",
                  objectFit: "contain",
                  filter: "none",
                  opacity: 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CLIENTS */}
      <div
        id="clients"
        style={{ padding: "36px 40px", borderBottom: "0.5px solid #16213e" }}
      >
        <div
          style={{
            fontSize: "9px",
            color: "#C8A96E",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "16px",
              height: "0.5px",
              background: "#C8A96E",
            }}
          />
          Clients
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Clients I've worked with
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
          }}
        >
          {[
            { src: "/zurich.png", alt: "Zurich" },
            { src: "/rabo.jpg", alt: "Rabobank" },
            { src: "/cbr.jpg", alt: "CBR" },
            { src: "/abnamro.jpg", alt: "ABN AMRO" },
          ].map((logo) => (
            <div
              key={logo.alt}
              style={{
                background: "#ffffff",
                border: "0.5px solid #C8A96E",
                borderRadius: "8px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "40px",
                  objectFit: "contain",
                  filter: "none",
                  opacity: 1,
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
        <div
          style={{ padding: "36px 40px", borderRight: "0.5px solid #16213e" }}
        >
          <div
            style={{
              fontSize: "9px",
              color: "#C8A96E",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "16px",
                height: "0.5px",
                background: "#C8A96E",
              }}
            />
            Contact
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: "500",
              color: "#fff",
              lineHeight: 1.3,
              marginBottom: "10px",
            }}
          >
            Let's build
            <br />
            quality together.
          </div>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.7,
            }}
          >
            Open to QA consulting, automation leadership, and performance
            testing engagements across Banking & Insurance in the Netherlands
            and beyond.
          </p>
        </div>

        <div
          style={{
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
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
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 14px",
                border: "0.5px solid #16213e",
                borderRadius: "4px",
                background: "#0d0f1a",
                textDecoration: "none",
              }}
            >
              <div>
                <div
                  style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#C8A96E",
                    marginTop: "1px",
                  }}
                >
                  {c.val}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          padding: "16px 40px",
          borderTop: "0.5px solid #16213e",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)" }}>
          © 2026 Rajinikanth Anchella · Test Automation Expert · Sogeti part of
          Capgemini
        </span>
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)" }}>
          rajinikanthanchella.com
        </span>
      </div>
    </main>
  );
}
