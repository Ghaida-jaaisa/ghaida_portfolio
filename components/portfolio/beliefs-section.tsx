
type BeliefsSectionProps = {
  quotes: string[]
}

const positions = [
  "belief-one",
  "belief-two",
  "belief-three",
  "belief-four",
  "belief-five",
  "belief-six",
  "belief-seven",
  "belief-eight",
]

export function BeliefsSection({ quotes }: BeliefsSectionProps) {
  return (
    <section
      id="beliefs"
      className="beliefs-section relative isolate overflow-hidden border-y border-[#574830]/20 bg-[#F0E9DC] px-6 py-24 text-[#574830] md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#6A4951]">
          A few things I believe in
        </span>

        <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Words I carry
          <span className="block italic text-[#6A4951]">
            with me.
          </span>
        </h2>

        <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-[#574830]/75">
          Little reminders of the things that matter to me.
        </p>
      </div>

      <div className="beliefs-stage relative mx-auto mt-10 h-[470px] max-w-6xl md:mt-4 md:h-[540px]">
        {quotes.map((quote, index) => (
          <div
            key={`${quote}-${index}`}
            className={`belief-float ${positions[index % positions.length]}`}
            style={{
              animationDelay: `${-(index * 1.7)}s`,
              animationDuration: `${11 + (index % 4) * 2}s`,
            }}
          >
            <p
              className={`belief-card ${
                index % 3 === 0
                  ? "belief-card-filled"
                  : index % 3 === 1
                    ? "belief-card-outline"
                    : "belief-card-paper"
              }`}
            >
              “{quote}”
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .beliefs-stage {
          isolation: isolate;
        }

        .belief-float {
          position: absolute;
          width: max-content;
          max-width: min(280px, 78%);
          animation-name: belief-drift;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .belief-card {
          padding: 16px 20px;
          border-radius: 12px;
          font-family: Georgia, serif;
          font-size: clamp(15px, 2vw, 21px);
          line-height: 1.45;
          box-shadow: 0 8px 30px rgb(87 72 48 / 6%);
          transition: transform 250ms ease, box-shadow 250ms ease;
        }

        .belief-float:hover {
          z-index: 20;
        }

        .belief-float:hover .belief-card {
          transform: scale(1.06) rotate(0deg);
          box-shadow: 0 12px 35px rgb(87 72 48 / 12%);
        }

        .belief-card-filled {
          background: #6A4951;
          color: #F0E9DC;
          transform: rotate(-4deg);
        }

        .belief-card-outline {
          border: 1px solid rgb(87 72 48 / 35%);
          background: rgb(240 233 220 / 85%);
          color: #574830;
          transform: rotate(3deg);
        }

        .belief-card-paper {
          background: #E1D5C4;
          color: #574830;
          transform: rotate(-2deg);
        }

        .belief-one { left: 3%; top: 8%; }
        .belief-two { right: 5%; top: 5%; }
        .belief-three { left: 35%; top: 24%; }
        .belief-four { left: 8%; top: 43%; }
        .belief-five { right: 8%; top: 42%; }
        .belief-six { left: 30%; bottom: 13%; }
        .belief-seven { right: 30%; bottom: 4%; }
        .belief-eight { left: 2%; bottom: 3%; }

        @keyframes belief-drift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(18px, -24px); }
          50% { transform: translate(-12px, -40px); }
          75% { transform: translate(22px, -12px); }
        }

        @media (max-width: 640px) {
          .beliefs-stage {
            height: 500px;
          }

          .belief-float {
            max-width: 76%;
          }

          .belief-one { left: 0; top: 4%; }
          .belief-two { right: 0; top: 18%; }
          .belief-three { left: 10%; top: 34%; }
          .belief-four { right: 0; top: 49%; }
          .belief-five { left: 0; top: 64%; }
          .belief-six { right: 0; bottom: 7%; }
          .belief-seven { left: 12%; bottom: 0; }
          .belief-eight { left: 4%; top: 82%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .belief-float {
            animation: none;
          }

          .belief-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
