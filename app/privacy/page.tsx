import { PageFrame } from '@/components/site-shell'

export default function Privacy() {
  return (
    <PageFrame
      eyebrow="Legal"
      title="Privacy notice"
      intro="This configurable template explains how information submitted through this website should be handled. It should be reviewed and completed before production launch."
    >
      <section className="mx-auto max-w-3xl space-y-10 px-5 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-[#172438] sm:text-2xl">Information we collect</h2>
          <p className="mt-3 text-base leading-7 text-[#5d6470]">When you submit an enquiry, we may collect the information you choose to provide, such as your name, email address, organization, and project description.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-[#172438] sm:text-2xl">How information is used</h2>
          <p className="mt-3 text-base leading-7 text-[#5d6470]">Information is used to respond to enquiries and understand potential project requirements. No information should be collected beyond what is necessary for those purposes.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-[#172438] sm:text-2xl">Contact</h2>
          <p className="mt-3 text-base leading-7 text-[#5d6470]">Configure the responsible company contact details and retention periods before publishing this notice.</p>
        </div>
      </section>
    </PageFrame>
  )
}
