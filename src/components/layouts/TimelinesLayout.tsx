import Experience from "../Experience";
import { Timeline } from "../Timeline";
import DisplayCertificate from "../DisplayCertificate";

import {
  IGRC,
  Educlass1,
  Educlass2,
  Rekreasi,
  PKKMB1,
  PKKMB2
} from "@/assets/index";

export function TimelinesLayout() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="grid grid-cols-1 gap-10">
          <div>
            <Experience
              position="Panel Discussion IGRC"
              company="Master of Ceremony"
              duration="2024"
              description={[
                "On Thursday, 28 November 2024 Indonesian Governance Risk Compliance (IGRC) held a seminar with the theme Implementation of Risk Management, which aims to increase understanding of the importance of risk management in business and non-business organizations in Indonesia. The event, which took place at BPJamsostek Plaza, Jakarta, invited various parties from the public and private sectors.",
              ]}
              status="Freelance"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <DisplayCertificate image={IGRC} alt="IGRC" />
            </div>

            {/* Berita */}
            <div className="mt-5">
              <span>Berita Acara:</span>
              <p className="underline">
                <a
                  href="https://jakarta.suaramerdeka.com/ekonomi/13414049729/igrc-gelar-seminar-penerapan-manajemen-risiko-di-jakarta"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  IGRC Gelar Seminar Penerapan Manajemen Risiko di Jakarta
                </a>
              </p>
            </div>
          </div>

          <div>
            <Experience
              position="Seminar Nasional 1 x Educlass IV"
              company="Moderator"
              duration="2024"
              description={[
                "The 1x Educlass IV National Seminar carries the theme “I.N.S.P.I.R.E - Innovating New Strategies for Personal Improvement and Resilient Empowerment” and is organized by Media, Press, and Information together with the Interest, Talent, and Student Creation Division of BEM FISIP UPN “Veteran” Jakarta 2024. This event will take place on Saturday, November 2, 2024, at the Auditorium of MERCE Building Lt. 8, UPN Veteran Jakarta, Limo Campus, Depok, with a series of activities in the form of material presentation sessions, talk shows, and interactive question and answer sessions with participants. This seminar also presented inspirational speakers, namely Yossi Tri Rahmanda, Cast of Clash of Champions, and Alifa Nisa Fadila, Content Creator in the field of Self-Development.",
              ]}
              status="Freelance"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <DisplayCertificate image={Educlass1} alt="educlass-1" />
              <DisplayCertificate image={Educlass2} alt="educlass-2" />
            </div>

            {/* Berita */}
            <div className="mt-5">
              <span>Berita Acara:</span>
              <p className="underline">
                <a
                  href="https://www.instagram.com/p/DCDpRY0JY-l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  Seminar Nasional: Self Development untuk Generasi Muda
                </a>
              </p>
            </div>
          </div>

          <div>
            <Experience
              position="REKREASI 2024"
              company="Master of Ceremony"
              duration="2024"
              description={[
                "REKREASI 2024 is an art performance and music concert event featuring various performances from representatives of all faculties at UPNVJ, with STVJ as the opening performance and UBV as the closing performance. This activity includes a variety of performances, such as bands, solo music, modern dance, and traditional dance. Held on September 6, 2024 at the UPNVJ Pondok Labu basketball court, this event aims to celebrate student creativity as well as provide a platform for them to express their artistic and musical talents.",
              ]}
              status="Freelance"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <DisplayCertificate image={Rekreasi} alt="rekreasi" />
            </div>

            {/* Berita */}
            <div className="mt-5">
              <span>Berita Acara:</span>
              <p className="underline">
                <a
                  href="https://www.instagram.com/p/C_2d40Gy3Wk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  Rekreasi Music Concert 2024
                </a>
              </p>
            </div>
          </div>

          <div>
            <Experience
              position="Pengenalan Kehidupan Kampus UPNVJ 2024"
              company="Master of Ceremony"
              duration="2024"
              description={[
                "The first day of PKKMB UPNVJ 2024 took place on August 12, 2024 at Tennis Indoor Senayan, Jakarta, with the theme “Keep Achieving for Advanced Indonesia”. The event was designed to welcome 4,384 Young Patriots, UPNVJ's freshmen class of 2024, through a series of activities, such as academic orientation, understanding the higher education system in Indonesia, financial literacy, character development talk show, outstanding student talk show, and the awarding of a MURI record to UPNVJ and PT Kiwoom Sekuritas Indonesia for the record of opening a stock investment account by the most freshmen.",
                "The event was also enlivened by important figures in their fields, such as",
                [
                  "Special Staff of the Ministry of Finance,",
                  "Director of Learning and Student Affairs of the Ministry of Education and Culture Ristek,",
                  "Riky Boi Permata (Co-Founder & COO of Trimegah Karya Pratama Tbk),",
                  "Olivia Louise (CNBC Indonesia Financial Expert),",
                  "Irvan Susandy (Director of Trading and Exchange Member Regulation),",
                  "Mr. Changkun Shin (President Director of PT Kiwoom Sekuritas Indonesia), and",
                  "Prof. Dr. Mahfud MD."
                ]
              ]}
              status="Freelance"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <DisplayCertificate image={PKKMB1} alt="rekreasi" />
              <DisplayCertificate image={PKKMB2} alt="rekreasi" />
            </div>

            {/* Berita */}
            <div className="mt-5">
              <span>Berita Acara:</span>
              <p className="underline">
                <a
                  href="https://www.instagram.com/p/C-7GIFLyGOG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  PKKMB Patribera UPNVJ 2024
                </a>
              </p>
            </div>
          </div>

        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
