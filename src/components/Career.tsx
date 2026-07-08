import "./styles/Career.css";

const Career = () => {
  // Data tetap 100% aman sesuai CV kamu cok
  const experiences = [
    {
      role: "UI Designer",
      company: "POSGYM Digital Asia",
      duration: "Mar - Mei 2025",
      desc: "Merancang UI/UX untuk aplikasi manajemen gym, termasuk dashboard dan aplikasi mobile. Berfokus pada pembuatan layout responsif dan design system untuk meningkatkan konsistensi visual.",
    },
    {
      role: "Junior Front-End Developer & UI/UX Designer",
      company: "Asli Digital Software",
      duration: "Jan - Des 2025",
      desc: "Mengembangkan antarmuka modern untuk dashboard web menggunakan React, Next.js, dan Tailwind CSS. Berkolaborasi dalam proses pengembangan produk dari tahap wireframe hingga implementasi kode.",
    },
    {
      role: "UI Designer",
      company: "Dipa Inhouse",
      duration: "Mar - Des 2024",
      desc: "Merancang website dan produk digital yang modern serta responsif untuk kebutuhan klien. Bertanggung jawab dalam pembuatan wireframe, mockup, dan prototype untuk memastikan pengalaman pengguna yang optimal.",
    },
  ];

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Pengalaman <span></span>
          <br /> Saya
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {experiences.map((exp, index) => (
            <div className="career-info-box" key={index}>
              {/* 1. Mencegah container utama nge-crush text di dalamnya */}
              <div className="career-info-in" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                
                {/* 2. Maksa area role name biar punya space lebar ke kanan dan gak numpuk kebawah */}
                <div className="career-role" style={{ flex: "1", minWidth: "260px", marginRight: "20px" }}>
                  {/* 3. Nge-kondisikan font-size: kalau teksnya panjang, otomatis dikecilkan dikit biar estetik */}
                  <h4 style={{ fontSize: exp.role.length > 20 ? "20px" : "26px", lineHeight: "1.3" }}>
                    {exp.role}
                  </h4>
                  <h5>{exp.company}</h5>
                </div>

                {/* 4. Bagian tanggal/bulan tetap aman di posisi tengah tanpa nabrak dot */}
                <h3 style={{ marginRight: "45px", fontSize: "22px", whiteSpace: "nowrap", flexShrink: 0 }}>
                  {exp.duration}
                </h3>
              </div>
              <p>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;