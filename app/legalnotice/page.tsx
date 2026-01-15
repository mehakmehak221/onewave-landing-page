import { Metadata } from "next";
import Header from "@/app/components/Header";
import Wrapper from "@/app/components/ui/Wrapper";

export const metadata: Metadata = {
  title: "Legal Notice | OneWave",
  description:
    "Legal Notice for Panama OneWave Fintech S.A. (In formation), Republic of Panama.",
};

export default function LegalNoticePage() {
  return (
    <Wrapper>
      <Header />

      <main className="min-h-screen bg-black text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8">
          <div className="backdrop-blur-sm bg-white/2 border border-blue-500/50 rounded-xl p-6 sm:p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              Legal Notice
            </h1>

            <div className="space-y-8 text-white/80 leading-relaxed">
              <p>
                This website is operated under the legal designation Panama
                OneWave Fintech S.A. (In formation), Republic of Panama.
              </p>

              <p>
                All content, materials, information, visuals, text, and references
                made available on this website are provided strictly for
                informational and educational purposes only. Nothing contained on
                this website shall be construed as, or relied upon as, an offer,
                solicitation, recommendation, endorsement, financial advice,
                investment advice, medical advice, legal advice, or commercial
                promotion of any kind.
              </p>

              <div>
                <p className="mb-4">
                  Any programs, platforms, experiences, tools, or benefits that
                  may be described or referenced are not guaranteed to be
                  available and are subject to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Applicable local, national, and international laws and
                    regulations
                  </li>
                  <li>Internal policies and eligibility requirements</li>
                  <li>
                    Jurisdictional restrictions and compliance limitations
                  </li>
                </ul>
              </div>

              <p>
                Access to or participation in any such programs may be
                restricted or unavailable in certain regions or to certain
                individuals. Users are solely responsible for ensuring that
                their use of this website and any related materials complies
                with the laws and regulations applicable to their jurisdiction.
              </p>

              <p>
                Panama OneWave Fintech S.A. (In formation) makes no
                representations or warranties, express or implied, regarding the
                accuracy, completeness, reliability, or suitability of any
                information presented on this website. Any reliance placed on
                such information is strictly at the user’s own risk.
              </p>

              <p>
                This website does not establish any partnership, client
                relationship, fiduciary duty, or contractual obligation between
                the user and Panama OneWave Fintech S.A. (In formation).
              </p>

              <p>
                The company reserves the right to modify, update, restrict, or
                remove any content or access to this website at any time without
                prior notice.
              </p>

              <p>
                By accessing or using this website, you acknowledge that you
                have read, understood, and agreed to this Legal Notice.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
