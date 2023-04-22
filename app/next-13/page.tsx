import { TitleSection } from "@/modules/ui/title-section";
import { w } from "windstitch";

const ReferenceLink = w.a(
  `text-blue-11 after:content-['_↗'] hover:text-blue-10 transition-color duration-200 ease-in-out`
);

export default function Next13Page() {
  return (
    <>
      <TitleSection title={<code>/app</code>}>
        <p>
          This template fully uses the new{" "}
          <ReferenceLink href="https://beta.nextjs.org/docs/routing/fundamentals">
            <code>/app</code>
          </ReferenceLink>
          -directory. This completely replaces the previous <code>/pages</code>
          -directory, even for API-routes.
        </p>
        <p>
          It uses a predefined wording for file names, such as{" "}
          <code>page.tsx</code> for a page or
          <code>layout.tsx</code> for a new layout component.
        </p>
      </TitleSection>

      <section className="xl:col-span-2 2xl:col-span-1">
        <TitleSection
          title={
            <span>
              Server
              <br />
              Components
            </span>
          }
        >
          <p>
            React Server Components are a new way to build applications that
            leverage the power of server-side rendering, without losing the
            flexibility of client-side code.
          </p>
          <p>
            They enable non-blocking, streaming rendering of components at the
            start of a request, while the rest of the page loads in the
            background. This means that users can see the first parts of a page
            immediately, and then the rest of the page loads in as it becomes
            available. A great example of how to use them are{" "}
            <ReferenceLink href="https://beta.nextjs.org/docs/api-reference/file-conventions/layout">
              <code>layout.tsx</code>
            </ReferenceLink>
            files.
          </p>
        </TitleSection>
      </section>

      <section className="xl:col-span-2 2xl:col-span-1">
        <TitleSection
          title={
            <>
              API via <br />
              <code>routes.tsx</code>
            </>
          }
        >
          <p>
            This template uses a new way to define{" "}
            <ReferenceLink href="https://beta.nextjs.org/docs/routing/route-handlers">
              API-routes
            </ReferenceLink>
            . Instead of defining them in <code>pages/api</code>, you can define
            them in <code>routes.tsx</code>. Next.js 13 makes it simpler to
            define the HTTP-method by exporting the respective function. For
            example, a <code>GET</code>-handler in a <code>routes.tsx</code>{" "}
            file is just an exported function named <code>GET</code>.
          </p>

          <p>
            These new API-handlers can also be <strong>static</strong> or{" "}
            <strong>dynamic</strong>. Only dynamic API-routes have access to a{" "}
            <code>request</code> object. The usage is similar to{" "}
            <code>getStaticProps</code> for static routes and
            <code>getServerSideProps</code> for dynamic routes. You can see an
            example in the
            <code>app/api/(static|dynamic)/routes.tsx</code> file of this
            template.
          </p>
        </TitleSection>
      </section>

      <section>
        <TitleSection title="Metadata">
          <p>
            Next.js 13 introduces a new way to define{" "}
            <ReferenceLink href="https://beta.nextjs.org/docs/api-reference/metadata">
              metadata
            </ReferenceLink>{" "}
            for pages. You can define metadata for a page by exporting either a{" "}
            <code>metadata</code> object or a <code>generateMetadata</code>{" "}
            function from your <code>page.tsx</code>.
          </p>
          <p>
            This new API replaces the usage of <em>NextSeo</em> for most{" "}
            <code>head</code>-elements. You can still use <em>NextSeo</em> for
            JSON+LD and other SEO-related tags.
          </p>
        </TitleSection>
      </section>

      <section>
        <TitleSection title={<code>next/font</code>}>
          <p>
            This templates also demonstrates how to use the new{" "}
            <ReferenceLink href="https://beta.nextjs.org/docs/optimizing/fonts">
              <code>next/font</code>
            </ReferenceLink>{" "}
            module for loading fonts. It is a simple way to load fonts locally
            or from Google Fonts.
          </p>
          <p>
            It provides a simple and efficient way to load fonts, without
            requiring any additional configuration.
          </p>
        </TitleSection>
      </section>

      <section>
        <TitleSection title="Turbopack">
          <p>
            Next.js 13 introduces a new way to{" "}
            <ReferenceLink href="https://beta.nextjs.org/docs/configuring/turbopack">
              bundle your application
            </ReferenceLink>{" "}
            by using a new bundler called <em>Turbopack</em>, written by the
            Next.js team.
          </p>
          <p>
            As of writing, Turbopack is marked as an alpha-feature. This
            template already uses it for bundling all code, together with
            <ReferenceLink href="https://beta.nextjs.org/docs/styling/tailwind-css#usage-with-turbopack">
              TailwindCSS
            </ReferenceLink>
            .
          </p>
        </TitleSection>
      </section>
    </>
  );
}
