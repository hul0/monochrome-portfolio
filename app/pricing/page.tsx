import React from 'react';
import pricingData from '../../data/pricing.json';

export const metadata = {
  title: 'Pricing | Services',
  description: 'Transparent pricing for Web Development, App Development, and Cybersecurity services.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground pb-20">
        <div className="text-center space-y-4 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Transparent Pricing
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clear, tiered pricing for every stage of your project. From free trials to production-ready solutions.
          </p>
        </div>

      <div className="container mx-auto px-4 mt-12 space-y-24">
        {pricingData.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <div className="mb-8 border-b border-border/40 pb-4 backdrop-blur-sm bg-background/30 rounded-t-xl p-4">
              <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
              <p className="text-muted-foreground">{section.description}</p>
            </div>

            {/* Overview Cards */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 px-2">Tier Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.overview.map((item, idx) => (
                  <div key={idx} className="p-4 border border-border/50 rounded-lg bg-card/40 backdrop-blur-md hover:bg-card/60 transition-colors">
                    <div className="font-bold text-lg text-primary mb-1">{item.tier}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Packages Tables */}
            <div className="space-y-12">
              {section.packages.map((pkg, pIdx) => (
                <div key={pIdx} className="overflow-hidden border border-border/50 rounded-xl bg-card/20 backdrop-blur-sm">
                  <div className="bg-muted/30 p-4 border-b border-border/50">
                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/10 text-muted-foreground uppercase text-xs">
                        <tr>
                          <th className="px-6 py-3 font-medium">Tier</th>
                          <th className="px-6 py-3 font-medium">Price</th>
                          <th className="px-6 py-3 font-medium">What You Get</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        {pkg.tiers.map((tier, tIdx) => (
                          <tr key={tIdx} className="hover:bg-muted/5 transition-colors">
                            <td className="px-6 py-4 font-medium whitespace-nowrap">{tier.name}</td>
                            <td className="px-6 py-4 text-primary whitespace-nowrap">{tier.price}</td>
                            <td className="px-6 py-4 text-muted-foreground">{tier.details}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Extras if any */}
            {section.extras && (
              <div className="mt-8 p-6 bg-muted/10 rounded-xl border border-dashed border-border/50 backdrop-blur-sm">
                <h4 className="font-semibold mb-4">Technical Extras</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {section.extras.map((extra, eIdx) => (
                    <li key={eIdx}>{extra}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}

        {/* Custom Work Section */}
        <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center space-y-6 backdrop-blur-md">
          <h2 className="text-3xl font-bold">{pricingData.customWork.title}</h2>
          <p className="text-lg text-muted-foreground">{pricingData.customWork.description}</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-left max-w-3xl mx-auto">
            {pricingData.customWork.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}