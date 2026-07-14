# PostHog post-wizard report

The wizard has completed a deep integration of this Next.js App Router project with PostHog. The setup adds client-side initialization through `instrumentation-client.ts`, configures a reverse-proxy-style `/ingest` rewrite in `next.config.ts`, installs `posthog-js` and `posthog-node`, and stores the project token and host in `.env.local` using `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`. Event capture was added across the landing page funnel, portfolio exploration flows, journal flows, social/contact CTAs, and testimonial visibility. A reusable analytics helper component was also added to capture detail-page view and next-step events without changing the existing page structure. A production build was run successfully after the integration.

| Event name | Description | File |
| --- | --- | --- |
| hero_cta_clicked | Captures when a visitor clicks one of the hero section calls to action. | `components/hero/Hero.tsx` |
| navigation_link_clicked | Captures when a visitor uses the floating navigation to jump to a section or open the mobile menu. | `components/nav/FloatingNav.tsx` |
| case_study_selected | Captures when a visitor opens a case study from the selected work section. | `components/sections/SelectedWork.tsx` |
| journal_entry_selected | Captures when a visitor opens a journal entry from the homepage journal section. | `components/sections/Journal.tsx` |
| instagram_link_clicked | Captures when a visitor clicks through to the brand Instagram profile or feed items. | `components/sections/InstaFeed.tsx` |
| contact_email_clicked | Captures when a visitor clicks the contact email call to action. | `components/sections/Contact.tsx` |
| testimonial_viewed | Captures when testimonial cards enter the viewport as social-proof content in the funnel. | `components/sections/Testimonials.tsx` |
| case_study_viewed | Captures when a visitor views an individual case study page. | `app/work/[slug]/page.tsx` |
| next_case_study_clicked | Captures when a visitor continues from one case study to the next. | `app/work/[slug]/page.tsx` |
| journal_entry_viewed | Captures when a visitor views an individual journal entry page. | `app/journal/[slug]/page.tsx` |
| next_journal_entry_clicked | Captures when a visitor continues from one journal entry to the next. | `app/journal/[slug]/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) dashboard](https://us.posthog.com/project/74430/dashboard/1844143)
- [Hero CTA clicks (wizard)](https://us.posthog.com/project/74430/insights/2LxfqWaT)
- [Portfolio exploration funnel (wizard)](https://us.posthog.com/project/74430/insights/Oi71HB6t)
- [Case study interest by title (wizard)](https://us.posthog.com/project/74430/insights/XgAINuBB)
- [Journal engagement by title (wizard)](https://us.posthog.com/project/74430/insights/Ta6LLSS5)
- [Contact intent sources (wizard)](https://us.posthog.com/project/74430/insights/kRf2zSAP)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names you added to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
