export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 28px",
          background: "#1a3a5c",
        }}
      >
        <span
          style={{
            fontSize: "15px",
            fontWeight: "500",
            color: "#fff",
            letterSpacing: "0.02em",
          }}
        >
          Rajinikanth Anchella
        </span>
        <div style={{ display: "flex", gap: "20px" }}>
          {["About", "Skills", "Experience", "Blog", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="about"
        style={{
          padding: "52px 32px 48px",
          background: "#EAF4FF",
          display: "flex",
          alignItems: "center",
          gap: "36px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background circles */}
        <svg
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          viewBox="0 0 1200 400"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="1050" cy="60" r="200" fill="#378ADD" opacity="0.07" />
          <circle cx="1150" cy="340" r="140" fill="#185FA5" opacity="0.06" />
          <circle cx="80" cy="350" r="160" fill="#1D9E75" opacity="0.05" />
          <circle cx="500" cy="20" r="90" fill="#378ADD" opacity="0.04" />
          <line
            x1="0"
            y1="399"
            x2="1200"
            y2="399"
            stroke="#378ADD"
            strokeWidth="1"
            opacity="0.25"
          />
        </svg>

        {/* Avatar */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "2px solid #378ADD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src="/profile.jpg"
            alt="Rajinikanth Anchella"
            style={{
              width: "108px",
              height: "108px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Hero text */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: "12px",
              color: "#185FA5",
              fontWeight: "500",
              marginBottom: "8px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Test Automation Expert
          </p>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "500",
              color: "#0C447C",
              marginBottom: "10px",
            }}
          >
            Rajinikanth Anchella
          </h1>
          <p
            style={{
              fontSize: "13px",
              color: "#2a4e70",
              lineHeight: "1.75",
              maxWidth: "520px",
            }}
          >
            Seasoned QA professional with 13+ years in automation and
            performance testing across Banking & Insurance. Expert in building
            frameworks, leading teams, and integrating cloud-based QA pipelines.
          </p>

          {/* Badges */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "14px",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                label: "Selenium · JMeter · Neoload",
                color: "#185FA5",
                bg: "rgba(55,138,221,0.13)",
                border: "rgba(55,138,221,0.35)",
              },
              {
                label: "AWS · Azure DevOps",
                color: "#0F6E56",
                bg: "rgba(29,158,117,0.10)",
                border: "rgba(29,158,117,0.30)",
              },
              {
                label: "Banking & Insurance",
                color: "#1a3a5c",
                bg: "rgba(26,58,92,0.10)",
                border: "rgba(26,58,92,0.25)",
              },
            ].map((b) => (
              <span
                key={b.label}
                style={{
                  fontSize: "11px",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontWeight: "500",
                  border: `0.5px solid ${b.border}`,
                  color: b.color,
                  background: b.bg,
                }}
              >
                {b.label}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "18px",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            {[
              ["13+", "Years exp."],
              ["5+", "Tools"],
              ["2", "Cloud platforms"],
            ].map(([num, lbl], i) => (
              <div
                key={lbl}
                style={{ display: "flex", gap: "18px", alignItems: "center" }}
              >
                {i > 0 && (
                  <div
                    style={{
                      width: "0.5px",
                      height: "32px",
                      background: "#b5d4f4",
                    }}
                  />
                )}
                <div>
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: "500",
                      color: "#0C447C",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#5b87b0",
                      marginTop: "2px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {lbl}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        style={{
          padding: "28px 32px",
          borderBottom: "0.5px solid #d0e8f8",
          background: "#fff",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: "500",
            color: "#5b87b0",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "16px",
          }}
        >
          Core Skills
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {[
            { label: "Selenium", top: true },
            { label: "JMeter", top: true },
            { label: "Postman", top: true },
            { label: "Neoload", top: true },
            { label: "Core Java", top: false },
            { label: "VBScript", top: false },
            { label: "AWS", top: false },
            { label: "Azure DevOps", top: false },
            { label: "API Testing", top: false },
            { label: "Performance Testing", top: false },
            { label: "Agile / Scrum", top: false },
            { label: "CI/CD", top: false },
            { label: "SDLC / STLC", top: false },
          ].map((s) => (
            <span
              key={s.label}
              style={{
                fontSize: "12px",
                padding: "5px 14px",
                borderRadius: "20px",
                border: s.top ? "0.5px solid #378ADD" : "0.5px solid #b5d4f4",
                color: s.top ? "#0C447C" : "#2a4e70",
                background: s.top ? "#daeeff" : "#EAF4FF",
                fontWeight: s.top ? "500" : "400",
              }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        style={{
          padding: "28px 32px",
          borderBottom: "0.5px solid #d0e8f8",
          background: "#fff",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: "500",
            color: "#5b87b0",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "16px",
          }}
        >
          Experience Highlights
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            {
              title: "Test Automation Lead",
              sub: "Led automation framework implementation · Banking & Insurance · 12+ years",
            },
            {
              title: "Performance Testing Expert",
              sub: "JMeter & Neoload · significant efficiency improvements in test cycles",
            },
            {
              title: "Cloud QA Integration",
              sub: "AWS & Azure DevOps · automated testing pipelines in cloud environments",
            },
          ].map((e) => (
            <div
              key={e.title}
              style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "#EAF4FF",
                  border: "0.5px solid #b5d4f4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#185FA5",
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#0C447C",
                  }}
                >
                  {e.title}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#5b87b0",
                    marginTop: "2px",
                  }}
                >
                  {e.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{ padding: "28px 32px", background: "#fff" }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: "500",
            color: "#5b87b0",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "16px",
          }}
        >
          Get in Touch
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a
            href="https://www.linkedin.com/in/rajinikanthanchella/"
            target="_blank"
            style={{
              fontSize: "12px",
              padding: "8px 18px",
              borderRadius: "8px",
              background: "#1a3a5c",
              color: "#fff",
              textDecoration: "none",
              border: "0.5px solid #1a3a5c",
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/anchella"
            target="_blank"
            style={{
              fontSize: "12px",
              padding: "8px 18px",
              borderRadius: "8px",
              background: "#EAF4FF",
              color: "#185FA5",
              textDecoration: "none",
              border: "0.5px solid #b5d4f4",
            }}
          >
            GitHub
          </a>
          <a
            href="mailto:rajinikanth.anchella@gmail.com"
            style={{
              fontSize: "12px",
              padding: "8px 18px",
              borderRadius: "8px",
              background: "#EAF4FF",
              color: "#185FA5",
              textDecoration: "none",
              border: "0.5px solid #b5d4f4",
            }}
          >
            Email me
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            style={{
              fontSize: "12px",
              padding: "8px 18px",
              borderRadius: "8px",
              background: "#EAF4FF",
              color: "#185FA5",
              textDecoration: "none",
              border: "0.5px solid #b5d4f4",
            }}
          >
            Download CV
          </a>
        </div>
      </section>
    </main>
  );
}
